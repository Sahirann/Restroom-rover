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
import "./Navbar.scoped.css"
import { Link } from 'react-router-dom';
import { useState } from 'react';
import SearchBar from "./Searchbar";
import Review from "./Review"
import MenuD from "./MenuD";

function Navbar() {

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
                    sx={{ p: '2px 5px', display: 'flex', alignItems: 'center', width: 400 }}
                >

                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search..."
                        inputProps={{ 'aria-label': 'search google maps' }}
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>

                </Paper>
            </div>
            {/* <MenuD isOpen={isSidebarOpen} toggle={toggleSidebar} /> */}
            <Review/>
                

        </header>
        
    );

}

export default Navbar;