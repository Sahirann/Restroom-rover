import { useCallback } from "react";
import { Link } from "react-router-dom";
import "./Login.scoped.css";


const Ticket = () => {
  const onLoginClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  const onRegisterClick = useCallback(() => {
    // Please sync "Register" to the project
  }, []);
  
  

  return (

    <div className="bg">
      <div className="bg-small" >
        <div className="bg-img">
          <img className="img" alt="" src="/user-1@2x.png" />
        </div>

        <input type="text" placeholder="Username" className="input-user" required="required" />
        <input type="password" placeholder="Password" className="input-password" required="required" />
        <div className="container-button">
          <button className="button-login">aaaaaaaaaaaaaaa</button>
          <Link to="/Register" className="button-register">Register</Link>
        </div>

      </div>
    </div>
  );
};

export default Ticket;
