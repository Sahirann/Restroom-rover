import { useCallback } from "react";
import styles from "./Verify.scoped.css";
import { AuthContext } from "../App";
import axios from "axios";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React, { useState, useContext, useEffect } from "react";

const Verify = () => {
  const { token, setToken } = useContext(AuthContext);
  const onRegisterContainerClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  const onCanelDisClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);
  const [id, setId] = useState("");
 
  const [ID_CARD, setID_CARD] = useState("");
  const [picture,setPicture] = useState([]);
  const [idcardList, setIDcardlist] = useState([]);
  useEffect(() => {
    setId(token?.user?.id)
  }
    , [id]);
  const addIDCARD = () => {
    // console.log(picture)
    if (token === null) {
      alert("เข้าสู่ระเบิดก่อนเด้อพี่น้อง")
    } else {
      axios.post('http://localhost:3001/verify', {
        id: id,
        ID_CARD: ID_CARD,
        picture:picture
      }).then(() => {
        setIDcardlist([
          ...idcardList,
          {
            id: id,
            ID_CARD: ID_CARD,
            picture : picture
          }
        ])
      })
    }
  }
  const [uploading, setUploading] = useState(false);
  const [filepath,setFilepath] =useState("")
  const [loading ,setLoading] = useState(true);
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
      let { error: uploadError } = await supabase.storage.from('ID_CARD').upload(filePath, file, { upsert: true });
      if (uploadError) {
        throw uploadError;
      }
      
      const { data } = supabase.storage.from('ID_CARD').getPublicUrl(filePath)
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
      <div className="bg-small">
        <h1 className="Verify" >Verify</h1>
        <input onChange={(event) => {
          setID_CARD(event.target.value)
        }} maxlength="13" type="number" placeholder="ID card or Passport" className="input-ID"/>
        <p className="text-upload">upload ID card or Passport</p>
       
        <div>
          <label style={{ width: "10vw", fontSize: "0.7vw",  position: "relative" }} htmlFor="IDCARD">
            <AddPhotoAlternateIcon /> {uploading ? "Uploading..." : "Choose your image"}
          </label>
          <input
            type="file"
            id="IDCARD"
            accept="image/*"
            onChange={uploadPicture}
            disabled={uploading}
          />
        </div>
        <img style={{width:"30vw",height:"30vh" ,position:"relative"}} src={filepath+ "?nocache=" + Date.now().toString()} alt="" />
        <input onClick={()=>{
         
         
         addIDCARD();
       }} type="submit" className="buttom-submit"/>
        
      </div>  
    </div>
  );
};

export default Verify;
