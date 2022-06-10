import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="nav-link">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/filter">Filter</NavLink>
    </nav>
  );
};

export default Navbar;
