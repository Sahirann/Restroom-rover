import { useState, useCallback } from "react";
import ReactStars from "react-rating-stars-component";
// import logo from "../../public/logo.png"
// import logo from "/logo.png"
import PortalPopup from "../components/PortalPopup";
import styles from "./Review.scoped.css";
import Comment from "./Comment";
const Review = (props) => {
  const [isFrameOpen, setFrameOpen] = useState(false);
  const  {data}  = props
  const openFrame = useCallback(() => {
    setFrameOpen(true);
  }, []);

  const closeFrame = useCallback(() => {
    setFrameOpen(false);
  }, []);

  const onBackIconClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  return (
    
      <div className="block">
        <div className="top-header">
          <div container-head>
            <img src="/logo.png" alt="" className="logo" />
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
          <p className="score">5</p>
        </div>
        <button className="button-review">write review</button>
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
