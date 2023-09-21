import { useCallback } from "react";
import styles from "./Card.scoped.css";
import ReactStars from "react-rating-stars-component";

function Card(props) {
  const { name,address,point,count_comment } = props
  
  return (
    <div className="card">
      <h6 className="restroom-name">{name??"The life"}</h6>
      <p className="address">{address??"addressddsdsdsdsashdasjkdhajksdhasd"}</p>
      <div className="container-point">
        <p className="point">{point.toFixed(1)??"point"}</p>
        <ReactStars count={5} edit={false} value={point??3.5} isHalf={true} size={16} activeColor="#ffd700"/>
        <p className="comment">{count_comment??"(X)"}</p>
      </div>
      <div className="container-pic">
        <img src="https://www.sloan.com/themes/sloan/img/sensor-tech/article-restroom-design-hero.jpg?v=5" alt="restroom" className="pic" />
      </div>
      <div className="container-button">
        <button className="direction-button">direction</button>
        <button className="review-button">review</button>
      </div>
    </div>
  );
};

export default Card;
