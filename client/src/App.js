import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Profile from "./components/ProfileLogin.js";
import ProfileSignup from "./components/ProfileSignup.js";
import Home from "./components/home.js";
import Home2 from "./components/home2.js";
import Chatbot from "./components/Chatbot.js";
import Exercise from "./components/Exercise.js";
import MoodTracker from "./components/MoodTracker.js";
import Profile2 from "./components/profile2.js";

const handleLogin = async (username, password, navigate) => {
  try {
    const formData = { username, password };
    const response = await axios.post("http://localhost:5001/login", formData);
    console.log(response.data);
    if (response.status === 200) {
      navigate(`/profile2/${username}`);
    }
  } catch (error) {
    console.error("Error logging in:", error);
  }
};

const handleSignup = async (
  fullname,
  email,
  username,
  password,
  confirmPassword,
  navigate
) => {
  try {
    const formData = { fullname, email, username, password, confirmPassword };
    const response = await axios.post("http://localhost:5001/signup", formData);
    console.log(response.data);
    navigate(`/profile2/${username}`);
  } catch (error) {
    console.error("Error submitting form data:", error);
  }
};

const App = () => {
  return (
    <Router>
      <div className="App-header">
        <Routes>
          <Route path="/profile" element={<Profile handleLogin={handleLogin} />} />
          <Route path="/profile/signup" element={<ProfileSignup handleSignup={handleSignup} />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile2/:username/home2" element={<Home2 />} />
          <Route path="/profile2/:username/MoodTracker" element={<MoodTracker />} />
          <Route path="/profile2/:username/exercise" element={<Exercise />} />
          <Route path="/profile2/:username/chatbot" element={<Chatbot />} />
          <Route path="/profile2/:username" element={<Profile2 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
