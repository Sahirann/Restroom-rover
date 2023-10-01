import { useCallback } from "react";
import { useNavigate,Link } from "react-router-dom";
import "./MenuD.scoped.css";

const Win = () =>{
    if (false){
        return (<div>winza</div>)
    }
    else {
        return (<div>kritza</div>)
    }
}
function MenuD(props) {
    
    return(
        <div className="background">
            <div className="container-top" >
                <img src="logomenu.png" alt="" className="logo"/>
                <img src="back.png" alt="" className="back" />
            </div>
            <hr className="line" />
            <div className="menu">
                <Link  to="/pin_restroom" className="submenu">
                    <img src="Prestroom.png" alt="" className="s-pin" />
                    <p className="t-pin">Pin restroom</p>
                </Link>
                <Link to="/contact_support" className="submenu">
                    <img src="Csupport.png" alt="" className="s-con"/>
                    <p className="t-con">Contact support</p>
                </Link>
            </div>
            <hr className="line2" />
            <Link to="/verify" className="V-acc">
                <img src="Vaccount.png" alt="" className="s-ver"/>
                <p className="t-ver">Verify account</p>
            </Link>
            <div className="name">
                <img src="formpic.png" alt="" className="s-name" />
                <p className="t-name">winza</p>
                <img src="Vaccount.png" alt=""  className="s-verr"/>
            </div>
            <Link to="/login" className="login">
                <img src="login.svg" alt="" />
                <p className="t-login">Login</p>
            </Link>
            {/* <div className="Menu">
                <button className="bar">
                    <div className="bgicon">
                        <img src="Prestroom.png" alt="" className="Prestroom" />
                    </div>
                    <p className="t-pin">Pin restroom</p>
                </button>
                <button className="bar">
                    <div className="bgicon">
                        <img src="Csupport.svg" alt=""  className="Prestroom" />
                    </div>
                    <p className="t-Csup">Contact support</p>
                </button>
                <button className="bar">
                    <img src="Vaccount.svg" alt="" />
                    <p>Verify account</p>
                </button>
                <div className="name">
                    <div className="circle">
                        <img src="formpic.png" alt="" />
                    </div>
                    <p className="t-name">Name</p>
                    <img src="Vaccount.svg" alt="" />
                </div>
                <div className="Menu">
                    <button className="login"> Login</button>
                </div>
            </div>  */}
        </div>
    )
}
export default MenuD;