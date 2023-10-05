import { useCallback, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./MenuD.scoped.css";
import { AuthContext } from "../App";
import { supabase } from "../supabaseClient";
const Win = () => {
    if (false) {
        return (<div>winza</div>)
    }
    else {
        return (<div>kritza</div>)
    }

}
function MenuD(props) {
    const {token,setToken} = useContext(AuthContext);
    const {isOpen,toggle} = props;
  
    const Slidestyle = isOpen?"open":"close"


    async function handleLogout(){
        // localStorage.removeItem('token')
        const { error } = await supabase.auth.signOut()
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
                    <Link to="/contact_support" className="submenu">
                        <img src="Csupport.png" alt="" className="s-con" />
                        <p className="t-con">Contact support</p>
                    </Link>
                </div>
                <hr className="line2" />
                {/* <Link to="/verify" className="V-acc">
                    <img src="Vaccount.png" alt="" className="s-ver" />
                    <p className="t-ver">Verify account</p>
                </Link> */}
                <div className="name">
                    <img src="formpic.png" alt="" className="s-name" />
                    <div className="contain-name">
                        <p className="t-name">{token?.user?.user_metadata?.Username??"Guess" }</p>
                        <Link to="/verify" className="V-acc">
                            <img src="Vaccount.png" alt="" className="s-ver" />
                            <p className="t-ver">Verify account</p>
                        </Link>
                    </div>
                    <img src="Vaccount.png" alt="" className="s-verr" />
                </div>
                <Link to="/login" className="login">
                    <img className="pic-login" src="login.svg" alt="" />
                    <p className="t-login">Login</p>
                </Link>
                <button onClick={handleLogout}>Log out</button>
            </div>

    )
}
export default MenuD;