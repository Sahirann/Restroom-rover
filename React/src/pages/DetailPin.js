import { useCallback } from "react";
import ReactStars from "react-rating-stars-component";
import React, { useState, useContext, useEffect } from "react";
import styles from "./DetailPin.scoped.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";
import { supabase } from "../supabaseClient";
const DetailPin = (props) => {
  
  const {data} = props
  const { token, setToken } = useContext(AuthContext);
  
  const addComment = () => {
    // console.log(picture)
    if (token === false) {
      alert("เข้าสู่ระเบิดก่อนเด้อพี่น้อง")
    } else {
      axios.post('http://localhost:3001/comment', {
        id: id,
        star: star,
        comment: comment,
        name: name,
        picture:picture
      }).then(() => {
        setCommentList([
          ...commentList,
          {
            id: id,
            star: star,
            comment: comment,
            name: name,
            picture : picture
          }
        ])
      })
    }
  }
  return (
    <div className="bg">
      <div className="left">
        <Link to="/">
        <img className="back" src="./icon menu.png" alt="" />
        </Link>
        <h1 className="name" >Name'place</h1>
        <textarea className="in-name" type="text" />
        <h1 className="address" >Address</h1>
        <textarea className="in-address" type="text"  />
      </div>
      <div className="right">
        <h1 className="review">Information</h1>
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
