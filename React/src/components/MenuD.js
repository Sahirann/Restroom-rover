import { useCallback, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MenuD.scoped.css";
import { AuthContext } from "../App";
import { supabase } from "../supabaseClient";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const Win = () => {
    if (false) {
        return (<div>winza</div>)
    }
    else {
        return (<div>kritza</div>)
    }

}
function MenuD(props) {
    const { token, setToken } = useContext(AuthContext);
    const { isOpen, toggle } = props;

    const Slidestyle = isOpen ? "open" : "close"


    async function handleLogout() {
        // localStorage.removeItem('token')
        const { error } = await supabase.auth.signOut()
        window.location.reload()
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
                    <img src="formpic.png" alt="" className="s-name" />
                    <input className="input-profile" type="file" id="file" />
                    <label for = "file">
                    <AddPhotoAlternateIcon/> Choose your Profile 
                    </label>
                </div>
                <div className="contain-name">
                    <p className="t-name">{token?.user?.user_metadata?.Username ?? "Guess"}</p>
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