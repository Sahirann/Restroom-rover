import React from "react";
import { useState, useCallback ,useEffect} from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import Card from "../components/Card";
import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./MainPage.css"
import axios from "axios"

function MyComponent() {
  const map = useMap()
  console.log('map center:', map.getCenter())
  return null
}



const MainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const position = [51.505, -0.09]
  const [detail, setdetail] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setdetail(response.data);
      console.log("update");
    }).catch((err) => { console.log(err) });
  }, []);
  const detailcard = detail.map((data, index) => {
    return <Card key={index} data={data} ></Card>
  })

  return (
    <div>
      
      <div>
        {detailcard}
        <MapContainer center={[13.822670, 100.520928]} zoom={15}> 
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
        
      </div>
      
      {isMenuOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeMenu}
        >
          <Menu onClose={closeMenu} />
        </PortalPopup>
      )}
    </div>
  );
};

export default MainPage;
