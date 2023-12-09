import { useCallback, useState } from "react";
import styles from "./Register.scoped.css";
import { Link } from "react-router-dom";
import { supabase } from "../supabaseClient"
const Register = () => {
  const [formData, setFormData] = useState({ Username: '', email: '', password: '',confirmpassword:'' })
  console.log(formData)
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]:event.target.value
      }
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    console.log(e)
    if (formData.password === formData.confirmpassword) {
      try {
        const { data, error } = await supabase.auth.signUp(
          {
            email: formData.email,
            password: formData.password,
            options: {
              data: {
                Username: formData.Username,
                role : 'member',
                verify : 'no'
              }
            }
          }
        )
        alert("Check your email for verifycation")
      } catch (error) {
        alert(error)
      }
    }else{
      alert("รหัสผ่านไม่ตรงจรื้ออออ")
    }
  }
  return (

    <div className="bg">
      {/* <Link to="/" className="buttom-back"></Link> */}
      <div className="bg-small">
        <h1 className="text-rg">Register</h1>
        <form className="form" onSubmit={handleSubmit}>
          <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input"  />
          <input name="Username" type="text" placeholder="Username" onChange={handleChange} className="input"  />
          <input name="password" type="password" placeholder="Create password" onChange={handleChange} className="input"/>
          <input name="confirmpassword" type="password" placeholder="Confirm password" onChange={handleChange} className="input"  />
          
        </form>
        {/* <input type="text" placeholder="Confirm password" className="input"/> */}
        <form onSubmit={handleSubmit} className="container-botton">
          <button className="button-login" type="submit">Submit</button>
          {/* <p className="text-or">or</p> */}
          {/* <Link to='/verify' className="button-verifiy" required>Submit and Verifiy
          </Link> */}
        </form>
      </div>

    </div>

  );
};

export default Register;
