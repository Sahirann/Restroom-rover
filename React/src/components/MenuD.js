import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MenuD.scoped.css";
import { AuthContext } from "../App";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from "axios";
import { createClient } from '@supabase/supabase-js'

const Win = () => {
    if (false) {
        return (<div>winza</div>)
    }
    else {
        return (<div>kritza</div>)
    }
}

function ShowName({ token }) {
    if (token) {
        return <p className="t-name">{token?.user?.user_metadata?.Username}</p>
    }
    else {
        return <p className="t-name">Guest</p>
    }
}

function MenuD(props) {
    const { token, setToken } = useContext(AuthContext);
    const { isOpen, toggle } = props;

    const Slidestyle = isOpen ? "open" : "close"

    async function handleLogout() {
       
        const { error } = await supabase.auth.signOut()
       
    }


    const [loading ,setLoading] = useState(true);
    const [username,setUsername]= useState(null);
    const [avatar_url,setAvatar] = useState(null);
    const  url = avatar_url
    const onUpload = (url) =>{
        setAvatar(url)
        updataProfile({username,avatar_url:url})
    }
    useEffect(()=>{
        getProfile();
    },[token])

    async function getProfile (){
        try{
            setLoading(true);
            let {data,error,status} = await supabase
                                            .from('profiles')
                                            .select(`username , avatar_url`)
                                            .eq('id',token?.user?.id)
                                            .single()
            if (error && status !==406){
                throw error
            }
            if (data){
                setUsername(data.username);
                setAvatar(data.avatar_url);
            }
        }catch(error){
            alert(error.message);
        }finally{
            setLoading(false);
        }
    }
    async function updataProfile({username,avatar_url}){
        try{
            setLoading(true);
            const user = supabase.auth.user();

            const updates = {
                id : user.id,
                username,
                avatar_url,
                updated_at: new Data(),
                
            }
            let { error } = await supabase.from('profiles').upsert(updates, {
                returning : "minimal"
            })
            if (error){
                throw error;
            }
        } catch(error){
            alert(error.message);
        } finally{
            setLoading(false);
        }
    }

   
    // const [profile, setProfile] = useState([]);
    // useEffect(() => {
    //     axios.get("http://localhost:3001/getprofile").then((response) => {
    //         setProfile(response.data);
    //         console.log("update");
    //     }).catch((err) => { console.log(err) });
    // }, []);


    const [avatarUrl, setAvatarUrl] = useState(null);
    const [uploading, setUploading] = useState(false);
    useEffect(() => {
        if (url) downloadImage(url);
    }, [url]);
    async function downloadImage(path) {  ///for download img
        try {
            const { data, error } = await supabase.storage.from('avatars').download(path);
            if (error) {
                throw error;
            }
            const url = URL.createObjectURL(data);
            setAvatarUrl(url);
        } catch (error) {
            console.log('Error downloading image: ', error.message)
        }
    }
    async function uploadAvatar(event) {
        try {
            setUploading(true);
            if (!event.target.files || event.target.files.length === 0) {
                throw new Error('You must select an image to upload.');
            }
            const file = event.target.files[0];
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`
            let { error: uploadError } = await supabase.storage.from('avatars').upload(filePath, file);
            if (uploadError) {
                throw uploadError;
            }
            onUpload(filePath);
        } catch (error) {
            alert(error.message);
        } finally {
            setUploading(false);
        }
    }





    
    return (

        <div className={`background ${Slidestyle}`}>
            <div className="container-top" >
                <img src="logomenu.png" alt="" className="logo" />
                <img src="back.png" alt="" className="back" onClick={toggle} />

            </div>
            <hr className="line" />
            <div className="menu">
                <Link to="/Detail-pin" className="submenu">
                    <img src="Prestroom.png" alt="" className="s-pin" />
                    <p className="t-pin">Pin restroom</p>
                </Link>
                <Link to="/Ticket" className="submenu">
                    <img src="Csupport.png" alt="" className="s-con" />
                    <p className="t-con">Contact support</p>
                </Link>
                <Link to="/admin" className="submenu">
                    <img src="admin.png" alt="" className="s-admin" />
                    <p className="t-con">Admin</p>
                </Link>
            </div>
            <hr className="line2" />
            {/* <Link to="/verify" className="V-acc">
                    <img src="Vaccount.png" alt="" className="s-ver" />
                    <p className="t-ver">Verify account</p>
                </Link> */}
            <div className="name">
                {/* <input className="input-profile" type="file" id="file" />
                <label for="file">
                    Choose your Profile
                </label> */}
                <div className="profile">
                    {avatarUrl ? (
                        <img src={avatarUrl} alt="Avatar" className="s-name"></img>
                    ) : (<img src="formpic.png" alt="" className="s-name" />
                        
                    )}
                  
                    {/* <img src="formpic.png" alt="" className="s-name" /> */}
                    {/* <label style={{ width: "5vw", fontSize: "0.7vw", left: "0.2vw", position: "relative" }} htmlfor="avatar"  >
                        <AddPhotoAlternateIcon /> {uploading ? 'Uploading...' : 'Choose your Profile '}
                    </label>
                    <input
                        className="input-profile"
                        type="file"
                        id="file"
                        accept="image/*"
                        onChange={uploadAvatar}
                        disabled={uploading}
                        visibility="hidden"
                        position="absolute"

                        type="file"
                        id="avatar"
                        accept="image/*"
                        onChange={(e) => uploadAvatar(e)}
                        disabled={uploading}
                    /> */}

                    <label style={{ width: "5vw", fontSize: "0.7vw", left: "0.2vw", position: "relative" }} htmlFor="single">
                        <AddPhotoAlternateIcon /> {uploading ? "Uploading...":"Choose your image"}
                    </label>
                    <input
                        type="file"
                        id="single"
                        accept="image/*"
                    
                        onChange={uploadAvatar}
                        disabled={uploading}
                    // onChange={(e) => uploadAvatar(e)}
                    // disabled={uploading}
                    />
                </div>
                {/* <div className="profile">
                    <img src="formpic.png" alt="" className="s-name" />
                    <label for = "file">
                    <input className="input-profile" type="file" id="file" />
                    <AddPhotoAlternateIcon/> Choose your Profile 
                    </label>
                </div> */}
                <div className="contain-name">
                    <p className="t-name">{token?.user?.user_metadata?.Username ?? "Guest"}</p>
                    {/* {ShowName(token)} */}
                    {/* <ShowName token={token} /> */}
                    <Link to="/verify" className="V-acc">
                        <img src="Vaccount.png" alt="" className="s-ver" />
                        <p className="t-ver">Verify account</p>
                    </Link>
                </div>
                <img src="Vaccount.png" alt="" className="s-verr" />
            </div>
            <Link to="/login" className="login" style={token ? { visibility: "hidden" } : { width: "37%" }}>
                <img className="pic-login" src="login.svg" alt="" />
                <p className="t-login">Login</p>
            </Link>
            <button className="logout" onClick={handleLogout} style={token ? { width: "37%" } : { visibility: "hidden" }} >Log out</button>

        </div>

    )
}
export default MenuD;