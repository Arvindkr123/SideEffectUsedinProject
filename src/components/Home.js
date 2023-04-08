import React from "react";
import Product from "./Product";

const Home = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div>
      <h1>Home Page</h1>
      {arr.map((i)=>
          <Product value={i}/>
      )}
    </div>
  );
};

export default Home;
