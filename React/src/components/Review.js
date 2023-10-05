import { useState, useCallback } from "react";
import ReactStars from "react-rating-stars-component";
// import logo from "../../public/logo.png"
// import logo from "/logo.png"
import PortalPopup from "../components/PortalPopup";
import styles from "./Review.scoped.css";
import Comment from "./Comment";
import WReview from "./wReview";
const Review = (props) => {
  

  const  {data,isOpen,toggle}  = props
  const Slidestyle = isOpen?"open":"close"
  const [Wreview,setWreview] = useState(false);
  const openWreview = () => setWreview(!Wreview)

  return (
      
      <div className={`block ${Slidestyle}`}>
        <div className="top-header">
          <div container-head>
            <img src="/logo.png" alt="" className="logo" />
            <img src="back.png" className="backbutton" onClick={toggle}/>
          </div>
        </div>
        <img src="/Bally.png" alt="" className="pic" />
        <h1 className="name">The life</h1>
        <p className="address">294/111</p>
        <hr className="line" />
        <div className="container-score">
          <div className="star">
            <ReactStars count={5} edit={false} value={data?.point ?? 3.5} isHalf={true} size={30} activeColor="#D3C3AF" className="star" />
          </div>
          <p className="score">3.5/5.0</p>
        </div>
        <button className="button-review" onClick={openWreview}>write review</button>
        <div className="WReview">
          <WReview status ={Wreview} close={setWreview} />
        </div>
        <hr className="line" />
        
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        <Comment className="comment"></Comment>
        
      </div>
      
  );
};

export default Review;
