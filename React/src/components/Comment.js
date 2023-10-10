import styles from "./Comment.scoped.css";
import ReactStars from "react-rating-stars-component";
import axios from "axios"
import { useState, useCallback, useEffect } from "react";
function Comment(props) {
    const {data,profiles,comment} = props
    console.log(data?.star)
    return (
        <div className="background">
            <div className="container-info">
                <img src="/krit.svg" alt="" className="pic-pro" />
                <div className="container-name">
                    <p className="name">{data?.profiles?.username}</p>
                    <ReactStars count={5} edit={false} value={data?.star ?? 0} isHalf={true} size={17} activeColor="#D3C3AF" className="star" />
                </div>
            </div>
            <p className="comment">{data?.comment}</p>
            <div className="bottom">
                <img src="./Bally.png" alt="" className="pic"/>
                <div className="like">

                </div>

            </div>
        </div>









    );
};
export default Comment