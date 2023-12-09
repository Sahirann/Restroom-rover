import { useCallback } from "react";
import ReactStars from "react-rating-stars-component";
import React, { useState, useContext, useEffect } from "react";
import styles from "./DetailPin.scoped.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../App";
import axios from "axios";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
const DetailPin = (props) => {

  const { data } = props
  const { token, setToken } = useContext(AuthContext);
  const [id, setId] = useState("");
  useEffect(() => {
    setId(token?.user?.id)
  }
    , [id]);
  const [role, setRole] = useState({});
  useEffect(() => {
    axios.post("http://localhost:3001/role", { token_id: token?.user?.id }).then((response) => {
      setRole(response.data);
      console.log("update");
    }).catch((err) => { console.log(err) });
    // console.log('1')
  }, [token?.user?.id]);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [information, setInformation] = useState("");
  const [picture, setPicture] = useState([]);
  const [newpinList, setNewpinlist] = useState([]);
  console.log(name)
  console.log(address)
  console.log(information)
  console.log(role.verify)
  // const addNewpin = () => {
  //   // console.log(picture)
  //   if (role?.verify === 'no') {
  //     alert("เข้าสู่ระเบิดก่อนเด้อพี่น้อง")
  //   } else {
  //     axios.post('http://localhost:3001/newpin', {
  //       id: id,
  //       name: name,
  //       address: address,
  //       information: information,
  //       picture: picture
  //     }).then(() => {
  //       setNewpinlist([
  //         ...newpinList,
  //         {
  //           id: id,
  //           name: name,
  //           address: address,
  //           information: information,
  //           picture: picture
  //         }
  //       ])
  //     })
  //   }
  // }
   const addNewpin = () => {
    // console.log(picture)
    if (role?.verify === 'yes') {
      
      axios.post('http://localhost:3001/newpin', {
        id: id,
        name: name,
        address: address,
        information: information,
        picture: picture
      }).then(() => {
        setNewpinlist([
          ...newpinList,
          {
            id: id,
            name: name,
            address: address,
            information: information,
            picture: picture
          }
        ])
      })
    } else {
      alert("กรุณาเข้าสู่ระบบหรือยืนยันตัวตน")
    }
  }

  const [uploading, setUploading] = useState(false);
  const [filepath, setFilepath] = useState("")
  const [loading, setLoading] = useState(true);
  async function uploadPicture(event) {
    try {
      setUploading(true);
      if (!event.target.files || event.target.files.length === 0) {
        throw new Error('You must select an image to upload.');
      }
      const file = event.target.files[0];
      const fileExt = file.name.split('.').pop();
      const fileName = `${token?.user?.id + Math.random()}.${fileExt}`;
      const filePath = `${fileName}`
      let { error: uploadError } = await supabase.storage.from('newpin').upload(filePath, file, { upsert: true });
      if (uploadError) {
        throw uploadError;
      }

      const { data } = supabase.storage.from('newpin').getPublicUrl(filePath)
      console.log(data)
      setPicture(data.publicUrl);
      setFilepath(data.publicUrl)

      // onUpload(filePath);
    } catch (error) {
      alert(error.message);
    } finally {
      setUploading(false);
    }
  }
  return (
    <div className="bg">
      <div className="left">
        <Link to="/">
          <img className="back" src="./icon menu.png" alt="" />
        </Link>
        <h1 className="name" >Name'place</h1>
        <textarea onChange={(event) => {
          setName(event.target.value)
        }} className="in-name" type="text" />
        <h1 className="address" >Address</h1>
        <textarea onChange={(event) => {
          setAddress(event.target.value)
        }} className="in-address" type="text" />
      </div>
      <div className="right">
        <h1 className="review">Information</h1>
        <textarea onChange={(event) => {
          setInformation(event.target.value)
        }} className="in-review" type="text" />

        <h1 className="uppic">Upload picture</h1>
        <div>
          <label style={{ width: "10vw", fontSize: "0.7vw", position: "relative" }} htmlFor="comment">
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
        <img style={{width:"25vw",height:"25vh",position:"relative",left:"3.75vw",top:"2vh"}} src={filepath + "?nocache=" + Date.now().toString()} alt="" />
        <button onClick={() => {

          console.log(picture)
          addNewpin();
        }} className="finish">Finish</button>
      </div>
    </div>
  );
};

export default DetailPin;
