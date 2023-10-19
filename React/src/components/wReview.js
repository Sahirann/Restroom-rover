import styles from "./wReview.scoped.css";
import React, { useState, useContext, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { AuthContext } from "../App";
import axios from "axios";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import { createClient } from '@supabase/supabase-js'
const WReview = (props) => {
  const { token, setToken } = useContext(AuthContext);
  const { status, close, nameplace } = props

  const ratingChanged = (newRating) => {
    setStar(newRating)
    console.log(newRating)
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  const [id, setId] = useState("");
  const [star, setStar] = useState(0);
  const [comment, setComment] = useState("");
  
  const [name, setName] = useState("");
  useEffect(() => {
    setId(token?.user?.id)
  }
    , [id]);
  // console.log(id)
  useEffect(() => {
    setName(nameplace)
  }
    , [nameplace]);
  // console.log(id)
  // console.log(nameplace)
  // console.log(star)
  // console.log(comment)
  // console.log(token?.user?.id)

  const [commentList, setCommentList] = useState([]);
  const [picture,setPicture] = useState([]);
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
  // const updateComment = () => {
  //   // console.log(picture)
  //   if (token === false) {
  //     alert("เข้าสู่ระเบิดก่อนเด้อพี่น้อง")
  //   } else {
  //     axios.post('http://localhost:3001/comment_update', {
  //       id: id,
  //       star: star,
  //       comment: comment,
  //       name: name,
  //       picture:picture
  //     }).then(() => {
  //       setCommentList([
  //         ...commentList,
  //         {
  //           id: id,
  //           star: star,
  //           comment: comment,
  //           name: name,
  //           picture : picture
  //         }
  //       ])
  //     })
  //   }
  // }

  async function onUpload1(filename){
    const { data } = supabase.storage.from('pictureComment').getPublicUrl(filename)
    console.log(data)
    // updataComment({ picture : data?.publicUrl })
    setPicture(data.publicUrl);
    
    console.log(picture)
  } 
  const [loading ,setLoading] = useState(true);
  const onUpload = async (url) => {

    const { data } = await supabase.storage.from('pictureComment').getPublicUrl(url)
    console.log(data)
    
    await setPicture(data.publicUrl);
    await console.log(picture)
  }
  async function  getPicture (){
    await onUpload(filepath)
  }
  async function updataComment({ picture }) {
    try {
      setLoading(true);
      const user = token?.user
      const updates = {
        id: user.id,
        picture,
      }
      console.log(user)
      let { error } = await supabase.from('comment').upsert(updates, {
        returning: "minimal"
      })
      if (error) {
        throw error;
      }
    } catch (error) {
      // alert(error.message);
      console.log(error)
    } finally {
      setLoading(false);
    }
  }

  // const [pictureUrl, setPictureUrl] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [filepath,setFilepath] =useState("")
  async function uploadPicture(event) {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${token?.user?.id}.${fileExt}`;
      const filePath = `${fileName}`
      let { error: uploadError } = await supabase.storage.from('pictureComment').upload(filePath, file, { upsert: true });
      if (uploadError) {
        throw uploadError;
      }
      
      const { data } = supabase.storage.from('pictureComment').getPublicUrl(filePath)
      console.log(data)
      setPicture(data.publicUrl);
      // onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }
  return (
    <div className="background" style={status ? { width: "40vw" } : { width: "0" }} >
      <div className="container-info">
        <img src={token?.user?.user_metadata?.avatar_url+"?nocache=" + Date.now().toString() ?? "/krit.svg"} alt="" className="pic-pro" />
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
        {/* <input className="input-photo" type="file" /> */}
        <div>
          <label style={{ width: "10vw", fontSize: "0.7vw",  position: "relative" }} htmlFor="comment">
            <AddPhotoAlternateIcon /> {uploading ? "Uploading..." : "Choose your image"}
          </label>
          <input
            type="file"
            id="comment"
            accept="image/*"
            onChange={uploadPicture}
            disabled={uploading}
          />
        </div>
      </div>
      <div className="container-button">
        <button className="b-cancel" onClick={() => close(!status)} >Cancel</button>
        {/* <button onClick={getPicture, addComment} className="b-submit">Submit</button> */}
        <button onClick={()=>{
          // await getPicture();
          // await onUpload1(filepath);
          
          // await sleep(5000)
          console.log(picture)
          addComment();
        }} className="b-submit">Submit</button>
      </div>
    </div>
  );
};

export default WReview;
