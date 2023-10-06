import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import React from 'react';
import Login from "./pages/Login";
import Register from "./pages/Register";
import Verify from "./pages/Verify";
import DetailPin from "./pages/DetailPin";
import MainPage from "./pages/MainPage";
import { useEffect, useState } from "react";
import Ticket from "./pages/Ticketpage";
import Admin from "./pages/Admin";
import { Autosave, useAutosave } from 'react-autosave';

const AuthContext = React.createContext();
function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;
  
  const [token,setToken] = useState(false)
    // if(token){
    //   localStorage.setItem('token',JSON.stringify(token))
    // }

    // useEffect(() => {
    //   if(localStorage.getItem('token')){
    //     let data = JSON.parse(localStorage.getItem('token'))
    //     setToken(data)
    //   }
    // },[token])
  

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <AuthContext.Provider value={{token,setToken}}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Verify" element={<Verify />} />
        <Route path="/Detail-pin" element={<DetailPin />} />
        <Route path="/Ticket" element={<Ticket />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </AuthContext.Provider>

    
  );
}
export { AuthContext };
export default App;
