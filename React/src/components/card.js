import { useCallback } from "react";
import styles from "./Card.scoped.css";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";
import WReview from "./wReview";

function Card(props) {
  const { data,toggle } = props

  // const [isReviewOpen, setisReviewOpen] = useState(false);

  // const toggleReview = () => {
  //   setisReviewOpen(!isReviewOpen);

  // };

  return (
    <div className="card">
      <h6 className="restroom-name">{data?.name ?? "Name"}</h6>
      <p className="address">{data?.address ?? "address"}</p>
      <div className="container-point">
        <p className="point">{data?.point?.toFixed(1) ?? "point"}</p>
        <ReactStars count={5} edit={false} value={data?.point ?? 3.5} isHalf={true} size={16} activeColor="#ffd700" />
        <p className="comment">{`(${data?.count_comment ?? "X"})`}</p>
      </div>
      <div className="container-pic">
        <img src={data?.picture ?? "https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"} alt="restroom" className="pic" />
      </div>
      <div className="container-button">
        <button className="direction-button">direction</button>
        <button className="review-button" onClick={toggle}>review</button>
      </div>
    </div>
  );
};

export default Card;
