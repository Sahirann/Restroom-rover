import styles from "./wReview.scoped.css";
import React, { useState, useContext,useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../App";
import  axios  from "axios";
const WReview = (props) => {
  const { token, setToken } = useContext(AuthContext);
  const { status, close ,nameplace} = props

  const ratingChanged = (newRating) => {
    setStar(newRating)
    console.log(newRating)
  }
  
  const [id, setId] = useState("");
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  const [name, setName] = useState("");
  useEffect(() => {
    setId(token?.user?.id)
    }
  , [id]);
  console.log(id)
  useEffect(() => {
    setName(nameplace)
    }
  ,[nameplace] );
  console.log(id)
  console.log(nameplace)
  // console.log(star)
  // console.log(comment)
  // console.log(token?.user?.id)
 
  const [commentList, setCommentList] = useState([]);
  const addComment = () => {
    if (token === false) {
      alert("เข้าสู่ระเบิดก่อนเด้อพี่น้อง")
    }else{
      axios.post('http://localhost:3001/comment', {
      id: id,
      star: star,
      comment: comment,
      name: name
    }).then(() => {
      setCommentList([
        ...commentList,
        {
          id: id,
          star: star,
          comment: comment,
          name: name
        }
      ])
    })
    }
    
  }
  return (
    <div className="background" style={status ? { width: "40vw" } : { width: "0" }} >
      <div className="container-info">
        <img src="/krit.svg" alt="" className="pic-pro" />
        <div className="container-name">
          <h1 className="name">{token?.user?.user_metadata?.Username ?? "Guess"}</h1>
          <p className="class">Posting publicly</p>
        </div>

      </div>
      <div className="star">
        <ReactStars onChange={ratingChanged} count={5} edit={true} isHalf={true} size={30} activeColor="#D3C3AF" />

      </div>
      <div className="input">
        <input onChange={(event) => {
          setComment(event.target.value)
        }} className="input-details" type="text" placeholder="Share datails of your own experience at this place" /><br />
        <input className="input-photo" type="file" />
      </div>
      <div className="container-button">
        <button className="b-cancel" onClick={() => close(!status)} >Cancel</button>
        <button onClick={addComment} className="b-submit">Submit</button>
      </div>
    </div>
  );
};

export default WReview;
