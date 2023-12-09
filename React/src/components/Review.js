import { useState, useCallback, useEffect } from "react";
import axios from "axios"
import ReactStars from "react-rating-stars-component";
import PortalPopup from "../components/PortalPopup";
import styles from "./Review.scoped.css";
import Comment from "./Comment";
import WReview from "./wReview";
const Review = (props) => {


  const { data, isOpen, toggle } = props
  const Slidestyle = isOpen ? "open" : "close"
  const [Wreview, setWreview] = useState(false);
  const openWreview = () => setWreview(!Wreview)
  const [star, setStar] = useState([]);
  var avg_star = 0
  const [avg, setAvg] = useState(0);
  useEffect(() => {
    axios.post("http://localhost:3001/star", { name: data?.name }).then((response) => {
      setStar(response.data);
      // console.log(response.data);
      if (!star) return;
      else {
        for (let i = 0; i < star.length; i++) {
          avg_star += response.data[i].star
          // console.log("sum", avg_star)
        }
        if(star.length===0) setAvg(0)
        else setAvg(avg_star / star.length);
        // console.log(avg)
      }
    }).catch((err) => { console.log(err) });
    // console.log('1')
  }, [data?.name, star]);
  // useEffect(()=>{
  //   setStar(0)
  // },[data?.name])
  // avg_star = avg_star/star.length
  // console.log(avg_star)
  const [comment, setComment] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/comment1").then((response) => {
      setComment(response.data);
    })
  }, [])
  const showComment = comment.map((dataComment, index) => {
    if (data?.name === dataComment?.name) {
      return <Comment key={index} data={dataComment}  ></Comment>
    }
  })
  const Show_star = () => {
    return (<div className="container-score">
      <div className="star">
        <ReactStars count={5} edit={false} value={avg} isHalf={true} size={30} activeColor="#D3C3AF" className="star" />
      </div>
      <p className="score">{avg.toFixed(1)}</p>
    </div>)
}
  return (

    <div className={`block ${Slidestyle}`}>
      <div className="top-header">
        <div container-head>
          <img src="/logo.png" alt="" className="logo" />
          <img src="back.png" className="backbutton" onClick={toggle} />
        </div>
      </div>
      <img src={data?.picture ?? "https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"} alt="" className="pic" />
      <h1 className="name">{data?.name ?? "Name"}</h1>
      <p className="address">{data?.address ?? "address"}</p>
      <hr className="line" />
      {/* <div className="container-score">
        <div className="star">
          <ReactStars count={5} edit={false} value={avg} isHalf={true} size={30} activeColor="#D3C3AF" className="star" />
        </div>
        <p className="score">{data?.point?.toFixed(1) ?? "point"}</p>
      </div> */}
      <Show_star/>
      <button className="button-review" onClick={openWreview}>write review</button>
      <div className="WReview">
        <WReview nameplace={data?.name} status={Wreview} close={setWreview} />
      </div>
      <hr className="line" />

      {showComment}

    </div>

  );
};

export default Review;
