import { useCallback } from "react";
import styles from "./Register.scoped.css";
import { Link } from "react-router-dom";

const Register = () => {
  const onRegisterContainerClick = useCallback(() => {
    // Please sync "login" to the project
  }, []);

  const onRegisterAndVerifyClick = useCallback(() => {
    // Please sync "Verify" to the project
  }, []);

  const onCanelDisClick = useCallback(() => {
    // Please sync "login" to the project
  }, []);

  return (
    
    <div className="bg">
      {/* <Link to="/" className="buttom-back"></Link> */}
      <div className="bg-small">
        <h1 className="text-rg">Register</h1> 
        <input type="email" placeholder="Email" className="input" />
        <input type="text" placeholder="Username" className="input" />
        <input type="text" placeholder="Create password" className="input" />
        <input type="text" placeholder="Confirm password" className="input"/>
        <div className="container-botton">
          <button className="button-login" required>Submit</button>
          <p className="text-or">or</p>
          <button className="button-verifiy" required>Submit and Verifiy
          </button>
        </div>
       </div>
       
    </div>
    
  );
};

export default Register;
