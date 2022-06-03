import React from "react";
import { useParams } from "react-router-dom";

const User = () => {
  const param = useParams();
  const { name } = param;
  console.warn(name);
  return (
    <div>
      <h1>User {name}</h1>
    </div>
  );
};

export default User;
