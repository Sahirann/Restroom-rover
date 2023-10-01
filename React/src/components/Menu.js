import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {

  const {isOpen,toggle} = props;
  
  const Slidestyle = isOpen?"open":"close"

  const navigate = useNavigate();

  const onBackIconClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onLoginContainerClick = useCallback(() => {
    // Please sync "login" to the project
  }, []);

  const onPinContainerClick = useCallback(() => {
    // Please sync "mappin" to the project
  }, []);

  const onVeriContainerClick = useCallback(() => {
    // Please sync "Verify" to the project
  }, []);

  return (
    <div className={`menu ${Slidestyle}`}>
      <div className="menuChild" />
      <div className="logo">
        <div className="restroomrover">
          <span className="restroomroverTxt">
            <span>Restroom</span>
            <span className="rover">Rover</span>
          </span>
        </div>
        <div className="logo1">
          <div className="logoChild" />
          <div className="rParent">
            <div className="r">R</div>
            <div className="r1">R</div>
          </div>
        </div>
      </div>
      <img
        className="backIcon"
        alt=""
        src="/back.svg"
        onClick={toggle}
      />
      <div className="profile">
        <div className="profileChild" />
        <img className="personIcon" alt="" src="/person@2x.png" />
        <div className="user">User</div>
      </div>
      <div className="login" onClick={onLoginContainerClick}>
        <div className="loginChild" />
        <div className="login1">Login</div>
        <img className="vectorIcon" alt="" src="/vector3.svg" />
      </div>
      <img className="menuItem" alt="" src="/line-2.svg" />
      <div className="pin" onClick={onPinContainerClick}>
        <div className="ellipseParent">
          <div className="groupChild" />
          <img
            className="toiletBowlIcon"
            alt=""
            src="/toilet-bowl@2x.png"
          />
        </div>
        <div className="pinRestroom">Pin Restroom</div>
      </div>
      <div className="veri" onClick={onVeriContainerClick}>
        <div className="groupParent">
          <div className="ellipseParent">
            <div className="groupChild" />
            <div className="toiletBowl" />
          </div>
          <div className="verifyAccount">Verify Account</div>
        </div>
        <img className="vectorIcon1" alt="" src="/vector4.svg" />
      </div>
      <div className="contract">
        <div className="contractInner">
          <div className="contractInner">
            <img className="ellipseParent" alt="" src="/group-3.svg" />
            <div className="contractSupport">Contact support</div>
          </div>
        </div>
        <img className="vectorIcon2" alt="" src="/vector5.svg" />
      </div>
      <div className="menuInner" />
    </div>
  );
};

export default Menu;
