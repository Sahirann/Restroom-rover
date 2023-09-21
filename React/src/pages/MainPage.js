import React from "react";
import { useState, useCallback } from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import { MapContainer, TileLayer, Marker,Popup,useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import "./MainPage.css"
import { Icon } from "leaflet";

// function MyComponent() {
//   const map = useMap()
//   console.log('map center:', map.getCenter())
//   return null
// }


const MainPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  const markers = [
    {
      geocode : [13.821409,100.513405],
      popUp: "pop up 1"
    },
    {
      geocode : [13.824774,100.515854],
      popUp: "pop up 1"
    },
    {
      geocode : [13.824072,100.516106],
      popUp: "pop up 1"
    }

  ]
  const markericon = new Icon({
    iconUrl:"/Pinorange.png",
    iconSize: [70,38]
  })

  // const position = [51.505, -0.09]

  return (
    <div>
      <div>
        <div>
        </div>
        <MapContainer center={[13.821813, 100.514062]} zoom={13}> 
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          /> 
          {markers.map(marker => (
            <Marker position={marker.geocode} icon={markericon}>
            
            </Marker>
            ))
          }
        </MapContainer>
        <p>
            asd
          </p>
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
