import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Favorites from "./pages/Favorites";
import Notifications from "./pages/Notifications";
import Profile from "./pages/Profile";
import Feedback from "../src/pages/Feedback/Feedback";
import Setting from "./pages/Setting";
import EditProfile from "./pages/editProfile";
import UserLogin from "./pages/User/UserLogin";
import Signup from "./pages/User/SignUp";

const RouterComponent = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/upcoming-events" element={<Favorites />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/Login" element={<UserLogin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default RouterComponent;
