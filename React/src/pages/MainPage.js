import React from "react";
import { useState, useCallback } from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import Card from "../components/Card";
import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./MainPage.css"

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

  return (
    <div>
      <div>
        <MapContainer center={[48.8566, 2.3522]} zoom={13}> 
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
