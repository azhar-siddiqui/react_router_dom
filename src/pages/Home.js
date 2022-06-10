import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const navigation = () => {
    navigate("/about");
    navigate("/filter");
  };
  // conditional
  // const navigation = () => {
  //   let x = true;
  //   if (x) {
  //     navigate("/about");
  //   } else {
  //     navigate("/filter");
  //   }
  // };
  return (
    <div>
      <h1>Home</h1>
      <NavLink to="/about">Go to About</NavLink>
      <button onClick={navigation}>Go to About</button>
      <button onClick={navigation}>Go to Filter</button>
    </div>
  );
};

export default Home;
