import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
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
    <div className={styles.menu}>
      <div className={styles.menuChild} />
      <div className={styles.logo}>
        <div className={styles.restroomrover}>
          <span className={styles.restroomroverTxt}>
            <span>Restroom</span>
            <span className={styles.rover}>Rover</span>
          </span>
        </div>
        <div className={styles.logo1}>
          <div className={styles.logoChild} />
          <div className={styles.rParent}>
            <div className={styles.r}>R</div>
            <div className={styles.r1}>R</div>
          </div>
        </div>
      </div>
      <img
        className={styles.backIcon}
        alt=""
        src="/back.svg"
        onClick={onBackIconClick}
      />
      <div className={styles.profile}>
        <div className={styles.profileChild} />
        <img className={styles.personIcon} alt="" src="/person@2x.png" />
        <div className={styles.user}>User</div>
      </div>
      <div className={styles.login} onClick={onLoginContainerClick}>
        <div className={styles.loginChild} />
        <div className={styles.login1}>Login</div>
        <img className={styles.vectorIcon} alt="" src="/vector3.svg" />
      </div>
      <img className={styles.menuItem} alt="" src="/line-2.svg" />
      <div className={styles.pin} onClick={onPinContainerClick}>
        <div className={styles.ellipseParent}>
          <div className={styles.groupChild} />
          <img
            className={styles.toiletBowlIcon}
            alt=""
            src="/toilet-bowl@2x.png"
          />
        </div>
        <div className={styles.pinRestroom}>Pin Restroom</div>
      </div>
      <div className={styles.veri} onClick={onVeriContainerClick}>
        <div className={styles.groupParent}>
          <div className={styles.ellipseParent}>
            <div className={styles.groupChild} />
            <div className={styles.toiletBowl} />
          </div>
          <div className={styles.verifyAccount}>Verify Account</div>
        </div>
        <img className={styles.vectorIcon1} alt="" src="/vector4.svg" />
      </div>
      <div className={styles.contract}>
        <div className={styles.contractInner}>
          <div className={styles.contractInner}>
            <img className={styles.ellipseParent} alt="" src="/group-3.svg" />
            <div className={styles.contractSupport}>Contract support</div>
          </div>
        </div>
        <img className={styles.vectorIcon2} alt="" src="/vector5.svg" />
      </div>
      <div className={styles.menuInner} />
    </div>
  );
};

export default Menu;
