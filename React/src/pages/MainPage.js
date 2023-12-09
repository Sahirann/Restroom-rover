import React from "react";
import { useState, useCallback, useEffect } from "react";
import Menu from "../components/Menu";
import PortalPopup from "../components/PortalPopup";
import "./MainPage.scoped.css";
import Card from "../components/Card";
import Review from "../components/Review";
import WReview from "../components/wReview";
import MenuD from "../components/MenuD";
import "leaflet/dist/leaflet.css";
import "./MainPage.css"
import axios from "axios"
import { Icon, imageOverlay } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents ,Polyline } from 'react-leaflet'

import MenuIcon from '@mui/icons-material/Menu';
import Navbar from "../components/Navbar";
import SearchBar from "../components/Searchbar";

import { supabase } from "../supabaseClient";
import L from 'leaflet';
import DetailPin from "./DetailPin";


const UserLocationMarker = ({ position, icon }) => {
  return (
    <Marker position={position} icon={icon}>
      <Popup>
        อยู่นี่งาย
      </Popup>
    </Marker>
  );
};

const MainPage = () => {
  const [seacrh,setSeacrh] = useState('')
  const [direction,setDirection] = useState("")
  const [userLocation, setUserLocation] = useState(null);

  const getUserLocation = async () => {
    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, { timeout: 10000 });
      });

      setUserLocation([position.coords.latitude, position.coords.longitude]);
    } catch (error) {
      console.error("Error getting user location:", error.message);
    }
  };
  
  useEffect(() => {
    getUserLocation();
  }, []);

  const MyComponent = () => {
    const map = useMapEvents({
      click: () => {
        // Handle map click events
      },
    });

    // Center the map on user's location when available
    if (userLocation) {
      map.setView(userLocation, map.getZoom());
    }

    return null; // Render nothing
  };

  const markerIconUser = new L.Icon({
    iconUrl: "/Userlocation.png",
    iconSize: [45, 50],
  });

  // const [infoCard,setinfoCard] = useState([])
  // console.log(infoCard)
  // useEffect(()=>{
  //   fetchinfoCard()
  // },[])
  // async function fetchinfoCard(){
  //   const {data} = await supabase
  //     .from('infoCard')
  //     .select('*')
  //     setinfoCard(data)
  // }
  // const info = infoCard.map((data, index) => {
  //   return <Card key={index} data={data} ></Card>
  // })

  const [isReview, setisReview] = useState(false);
  const [reviewData,setreviewData] = useState({});
  const toggleReview = (win) => {
    setisReview(!isReview);
    setreviewData(win)
    console.log(isReview)
  };

  const markergreen = [
    {
      geocode: [13.820399, 100.515894],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824872, 100.515559],
      popUp: "pop up 1"
    },

  ]
  const markerred = [
    {
      geocode: [13.822469, 100.511893],
      popUp: "pop up 1"
    },
    {
      geocode: [13.825662, 100.514739],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824451, 100.513564],
      popUp: "pop up 1"
    }

  ]

  const markers = [
    {
      geocode: [13.821409, 100.513405],
      popUp: "pop up 1"
    },
    {
      geocode: [13.824774, 100.515854],
      popUp: "pop up 2"
    },
    {
      geocode: [13.824072, 100.516106],
      popUp: <Card toggle={toggleReview} />
    }

  ]
  const markericon = new Icon({
    iconUrl: "/Pinorange.png",
    iconSize: [70, 38]
  })

  const markericonred = new Icon({
    iconUrl: "/Pinred.png",
    iconSize: [55, 56]
  })

  const markericongreen = new Icon({
    iconUrl: "/Pingreen.png",
    iconSize: [45, 50]
  })

  // const markericonuser = new Icon({
  //   iconUrl: "/Userlocation.png",
  //   iconSize: [45, 50]
  // })


  const [pin, setpin] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/").then((response) => {
      setpin(response.data);
      console.log("update");
    }).catch((err) => { console.log(err) });
  }, []);
  const pincard = pin.filter((win)=>{
    return win.name.includes(seacrh)
  }).map((data, index) => {
    const markericon = new Icon({
      iconUrl: data.type.pic,
      iconSize: [data.type.width,data.type.height]
    })
    return <Marker key={index} position={[data.lat,data.lng]} icon={markericon}>
            <Popup>
              <Card data={data.infoCard[0]} direc={direction} setdirec={setDirection} toggle={()=>toggleReview(data.infoCard[0])} ></Card>
            </Popup>
            </Marker>
  })
  
  const limeOptions = { color: 'black' }
  const test = pin.filter((krit)=>{
    return krit.name === direction
  }).map((data,index)=>{
    return userLocation
    ? [userLocation, [data.lat, data.lng]]
    : [];
  })
  const polyline = userLocation
  ? [userLocation, [13.825873, 100.516835]]
  : [];



  return (
    <div>
      <div className="containermap">
        <MapContainer center={[13.821813, 100.514062]} zoom={20}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {pincard}
          {userLocation && <UserLocationMarker position={userLocation} icon={markerIconUser} />}
          {/* <MyComponent /> */}
          {userLocation && <Polyline pathOptions={limeOptions} positions={test} />}
        </MapContainer>
      </div>

      <div className="navbar">
        <Navbar setSearch={setSeacrh} search={seacrh} />
      </div>
      <img className="PomP" src="PomP.png" alt="" />
      
      <Review data={reviewData} isOpen={isReview} toggle={()=>toggleReview(reviewData)} />
    </div>
  );
};

export default MainPage;
