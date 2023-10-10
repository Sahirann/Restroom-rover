import { useState, useCallback ,useEffect} from "react";
import axios from "axios"
import ReactStars from "react-rating-stars-component";
import PortalPopup from "../components/PortalPopup";
import styles from "./Review.scoped.css";
import Comment from "./Comment";
import WReview from "./wReview";
const Review = (props) => {
  

  const  {data,isOpen,toggle}  = props
  const Slidestyle = isOpen?"open":"close"
  const [Wreview,setWreview] = useState(false);
  const openWreview = () => setWreview(!Wreview)
  const [comment,setComment] = useState([]);
  useEffect(()=>{
    axios.get("http://localhost:3001/comment1").then((response)=>{
      setComment(response.data);
    })
  },[])
  const showComment = comment.map((dataComment,index)=>{
    if (data?.name === dataComment?.name ){
      return <Comment key={index} data={dataComment}  ></Comment>
    }
  })
  return (
      
      <div className={`block ${Slidestyle}`}>
        <div className="top-header">
          <div container-head>
            <img src="/logo.png" alt="" className="logo" />
            <img src="back.png" className="backbutton" onClick={toggle}/>
          </div>
        </div>
        <img src={data?.picture ?? "https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"} alt="" className="pic" />
        <h1 className="name">{data?.name ?? "Name"}</h1>
        <p className="address">{data?.address ?? "address"}</p>
        <hr className="line" />
        <div className="container-score">
          <div className="star">
            <ReactStars count={5} edit={false} value={data?.point ?? 3.5} isHalf={true} size={30} activeColor="#D3C3AF" className="star" />
          </div>
          <p className="score">{data?.point?.toFixed(1) ?? "point"}</p>
        </div>
        <button className="button-review" onClick={openWreview}>write review</button>
        <div className="WReview">
          <WReview nameplace={data?.name} status ={Wreview} close={setWreview} />
        </div>
        <hr className="line" />
        
        {showComment}
        
      </div>
      
  );
};

export default Review;
