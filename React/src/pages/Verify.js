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
        <input type="number" className="input-ID"/>
        <p>upload ID card or Passport</p>
        <input type="file" id="img" accept="image" />
        <input type="submit" />
        
      </div>  
    </div>
  );
};

export default Verify;
