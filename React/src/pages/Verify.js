import { useCallback } from "react";
import styles from "./Verify.scoped.css";

const Verify = () => {
  const onRegisterContainerClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  const onCanelDisClick = useCallback(() => {
    // Please sync "MacBook Air - 1" to the project
  }, []);

  return (
    <div className="bg">
      <div className="bg-small">
        <h1 className="Verify" >Verify</h1>
        <input type="number" placeholder="ID card or Passport" className="input-ID"/>
        <p className="text-upload">upload ID card or Passport</p>
        <input type="file" className="buttom-upload" id="img" accept="image" />
        <div className="pic">Hello</div>
        <input type="submit" className="buttom-submit"/>
        
      </div>  
    </div>
  );
};

export default Verify;
