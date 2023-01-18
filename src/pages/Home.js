import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import AppsIcons from "@mui/icons-material/Apps";
import { Avatar } from "@mui/material";
import Search from './Search.js';
import img from './g.png';


function Home() {
 
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="home__headerRight">
            <Link to="/gmail">Gmail</Link>
            <Link to="/images">Images</Link>
          <AppsIcons />
          <Avatar />
        </div>
      </div>
      <div className="home__body">
        <img
          src={img}
          alt="googlelogo"
        />
         <div className="home__inputContainer">
        <Search  />
        </div>
      </div>
     
    </div>
  );
}

export default Home;
