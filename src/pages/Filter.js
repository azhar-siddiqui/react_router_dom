import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setsearchParams] = useSearchParams();
  console.log(searchParams.get("age"));
  return (
    <div>
      <h1>Filter Pages</h1>
      {/* when i want to setparams */}
      <button onClick={() => setsearchParams({ age: 40 })}>setParams</button>
    </div>
  );
};

export default Filter;
