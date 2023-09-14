import { useCallback } from "react";
import styles from "./Login.module.css";

const Login = () => {
  const onLoginClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  const onRegisterClick = useCallback(() => {
    // Please sync "Register" to the project
  }, []);

  return (
    <div className={styles.login}>
      <img className={styles.backgroundIcon} alt="" src="/background@2x.png" />
      <div className={styles.backgroudSmall} />
      <div className={styles.username}>
        <p className={styles.username1}>Username</p>
      </div>
      <div className={styles.loginChild} />
      <div className={styles.username2} />
      <div className={styles.password} />
      <div className={styles.login1} onClick={onLoginClick} />
      <div className={styles.register} onClick={onRegisterClick} />
      <img className={styles.user1Icon} alt="" src="/user-1@2x.png" />
      <div className={styles.text}>
        <div className={styles.username3}>
          <p className={styles.username1}>Username</p>
        </div>
        <div className={styles.password1}>
          <p className={styles.username1}>Password</p>
        </div>
        <div className={styles.login2}>login</div>
        <div className={styles.register1}>Register</div>
      </div>
    </div>
  );
};

export default Login;
