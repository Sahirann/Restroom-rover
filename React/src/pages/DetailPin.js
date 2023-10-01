import { useCallback } from "react";
import ReactStars from "react-rating-stars-component";
import styles from "./DetailPin.scoped.css";
import { Link } from "react-router-dom";
const DetailPin = (props) => {
  const onGroupClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);
  const {data} =props
  const onFinishContainerClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  return (
    <div className="bg">
      <div className="left">
        <img className="back" src="./icon menu.png" alt="" />
        <h1 className="name" >Name'place</h1>
        <textarea className="in-name" type="text" />
        <h1 className="address" >Address</h1>
        <textarea className="in-address" type="text"  />
      </div>
      <div className="right">
        <h1 className="review">Review</h1>
        <textarea className="in-review" type="text" />
        <h1 className="rating">Rating</h1>
        <div className="star">
          <ReactStars count={5} edit={true} isHalf={true} size={30} activeColor="#D3C3AF" className="star" />
        </div>
        <h1 className="uppic">Upload picture</h1>
        <input className="in-pic" type="file" /><br />
        <button className="finish">Finish</button>
      </div>
    </div>
  );
};

export default DetailPin;
