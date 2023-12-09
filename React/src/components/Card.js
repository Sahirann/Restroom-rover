import { useCallback, useState, useEffect } from "react";
import styles from "./Card.scoped.css";
import ReactStars from "react-rating-stars-component";
import Review from "./Review";
import axios from "axios";
import WReview from "./wReview";

function Card(props) {
  const { data, toggle, setdirec, direc } = props

  // const [isReviewOpen, setisReviewOpen] = useState(false);

  // const toggleReview = () => {
  //   setisReviewOpen(!isReviewOpen);

  // };
  console.log(data)
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
  const Show_star = () => {
    return (<div className="container-point">
      <p className="point">{avg.toFixed(1) ?? "point"}</p>
      <ReactStars count={5} edit={false} value={avg} isHalf={true} size={16} activeColor="#ffd700" />
      <p className="comment">{'('+star.length+')'}</p>
    </div>)
  }
  return (
    <div className="card">
      <h6 className="restroom-name">{data?.name ?? "Name"}</h6>
      <p className="address">{data?.address ?? "address"}</p>
      {/* <div className="container-point">
        <p className="point">{data?.point?.toFixed(1) ?? "point"}</p>
        <ReactStars count={5} edit={false} value={data?.point ?? 3.5} isHalf={true} size={16} activeColor="#ffd700" />
        <p className="comment">{`(${data?.count_comment ?? "X"})`}</p>
      </div> */}
      <Show_star />
      <div className="container-pic">
        <img src={data?.picture ?? "https://clicxy.com/wp-content/uploads/2016/04/dummy-post-horisontal.jpg"} alt="restroom" className="pic" />
      </div>
      <div className="container-button">
        <button onClick={() => {
          if (direc === "") {
            setdirec(data?.name)
          }
          else {
            setdirec("")
          }
        }} className="direction-button">direction</button>
        <button className="review-button" onClick={toggle}>review</button>
      </div>
    </div>
  );
};

export default Card;
