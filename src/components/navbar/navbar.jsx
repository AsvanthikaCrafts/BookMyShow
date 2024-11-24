import React from "react";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import bookmyshowLogo from "../../assests/bookmyshow-logo.png";
import "./navbr.scss";

const Navbar = () => {
  return (
    <div id="navbar">
      <header>
        <div className="left">
          <a href="#">
            <img src={bookmyshowLogo} alt="" />
          </a>
          <div className="search">
            <CiSearch className="icon" />
            <input
              type="text"
              placeholder="Search for movies,events,plays,sports and activities"
            />
          </div>
        </div>
        <div className="right">
          <div className="location">
            <span>Coimbatore</span>
            <RiArrowDropDownLine className="arrow"  />
          </div>
          <button>Sign in</button>
          <HiOutlineMenu className="menu" />
        </div>
      </header>
      
      <nav>
        <div className="first">
          <span>Movies</span>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>

        <div className="last">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
