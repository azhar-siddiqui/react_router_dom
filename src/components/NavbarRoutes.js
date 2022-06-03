import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import About from "../pages/About";
import CountactUs from "../pages/ContactUs";
import Page404 from "../pages/Page404";
import User from "../pages/User";

const NavbarRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<CountactUs />} />
        <Route path="/user/:name" element={<User />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  );
};

export default NavbarRoutes;
