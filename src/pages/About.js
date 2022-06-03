import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>We Good Planner and Fly Like eagle</p>

      <Link to="/user/anil">Anil</Link>
      <Link to="/user/peter">Peter</Link>
    </div>
  );
};

export default About;
