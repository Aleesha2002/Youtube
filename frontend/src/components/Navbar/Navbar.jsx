import React from "react";
import "./Navbar.css";
import {
  menu,
  logo,
  search,
  upload,
  more,
  notification,
  jack,
} from "../../assets/index.js";
import { Link } from "react-router-dom";

const Navbar = ({ setsidebar }) => {
  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setsidebar((prev) => (prev === false ? true : false))}
          src={menu}
          alt=""
        />
        <Link to="/">
          <img className="logo" src={logo} alt="" />
        </Link>
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder="Search" />
          <img src={search} alt="search" />
        </div>
      </div>

      <div className="nav-right flex-div ">
        <img src={upload} alt="" />
        <img src={more} alt="" />
        <img src={notification} alt="" />
        <img src={jack} className="user-icon" alt="" />
      </div>
    </nav>
  );
};

export default Navbar;
