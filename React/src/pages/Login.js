import { useCallback ,useState} from "react";
import { Link } from "react-router-dom";
import "./Login.scoped.css";
import {supabase} from "../supabaseClient"

const Login = () => {
  const [formData, setFormData] = useState({email: '', password: ''})
  console.log(formData)
  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) throw "Don't have email or Wrong password"
      console.log(data)

    } catch (error) {
      alert(error)
    }

  }

  return (
    
    <div className="bg">
      <div className="bg-small" >
        <div className="bg-img">
          <img className="img" alt="" src="/user-1@2x.png" />
        </div>
        <form onSubmit={handleSubmit} className="form" >
          <input name="email" type="email" placeholder="Email" className="input-user"  onChange={handleChange} />
          <input name="password" type="password" placeholder=" Password" className="input-password"  onChange={handleChange} />
        </form>
        <form onSubmit={handleSubmit} className="container-button">
          <button type="submit" className="button-login">Login</button>
          <Link to="/Register" className="button-register">Register</Link>
        </form>

      </div>
    </div>
  );
};

export default Login;
