import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

function Home() {
  let history = useHistory();
  function handleClick() {
    history.push("/products");
  }
  return (
    <div>
      <h2>Welcome to Goods for a Bright Future</h2>
      <button onClick={handleClick}>View All Products</button>
      <Link to="/locations">
        <button>View All Locations</button>
      </Link>
    </div>
  );
}

export default Home;
