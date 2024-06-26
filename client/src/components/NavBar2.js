import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar2.css";

function Navbar2() {
  const username = localStorage.getItem("username") || "";
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to={`/profile2/${username}/home2`} className="nav-link">
          Home
        </Link>
        <Link to={`/profile2/${username}/exercise`} className="nav-link">
          Exercise
        </Link>

        <Link to={`/profile2/${username}/moodtracker`} className="nav-link">
          Mood Tracker
        </Link>

        <Link to={`/profile2/${username}/chatbot`} className="nav-link">
          Chatbot
        </Link>

        <Link to={`/profile2/${username}`} className="nav-link">
          Profile
        </Link>
      </div>
    </nav>
  );
}

export default Navbar2;
