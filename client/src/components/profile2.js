import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import "../css/profile2.css";
import NavBar2 from "./NavBar2";

function Profile2() {
  const [userData, setUserData] = useState(null);
  const { username } = useParams();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/profile2/${username}`
        );
        setUserData(response.data.username);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [username]);

  const handleChangePassword = async (newPassword) => {
    try {
      const response = await axios.put(
        `http://localhost:5001/profile2/${username}/change-password`,
        { newPassword }
      );
      console.log("Password changed successfully:", response.data);

      navigate("/");
    } catch (error) {
      console.error("Error changing password:", error);
    }
  };

  const handleButtonClick = () => {
    navigate("/");
  };

  return (
    <div>
      <NavBar2 />
      <div className="container">
        {userData && (
          <div className="profile">
            <h2>User Profile</h2>
            <p>
              <strong>Full Name:</strong> {userData.fullname}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <strong>Username:</strong> {userData.username}
            </p>
            <button className="button" onClick={handleButtonClick}>
              Logout
            </button>

            <div className="Changepassword">
              <label htmlFor="newPassword">New Password:</label>
              <input
                className="inputbox"
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <button
              className="button"
              onClick={() => handleChangePassword(newPassword)}
            >
              change password
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Profile2;