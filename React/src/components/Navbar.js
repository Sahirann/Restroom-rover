import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from "./Searchbar";
import Menu from "./Menu";

function Navbar() {
    // const navRef = useRef();

    // const showNavbar = () => {
    //     navRef.current.classList.toggle("responsive_nav");
    // }

    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    return (
        <header>
            <h3>
                <button className="nav-btn" onClick={toggleSidebar} >
                    <FaBars />
                </button>
            </h3>
            <div>
                <Paper
                    elevation={0}
                    component="form"
                    sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
                >
                    {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
                {/* <div className="search-bar-container">
                    <div>
                    <input
                        className="search-input"
                        type="text"
                        placeholder="Where are you..."
                        
                    />
                    <SearchIcon className="searchicon"/>
                    </div>
                    
                </div> */}

            </div>
            {/* <nav ref={navRef}>
                <a href="/#">Home</a>
                <a href="/#">My </a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button> */}
            <div className='menu'>
                <Menu isOpen={isSidebarOpen} />
            </div>
        </header>
        
    );

}

export default Navbar;