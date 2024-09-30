import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantList } from "../Constants";
import Cart from "./Cart";
// React Component
export const Title = () => (
  <a href="/">
    <img
      className="logo"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s"
      alt="logo"
    />
  </a>
);

// React Component
const Header = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul className="ul-items">
            <Link to={"/"}>
              <li key={RestaurantList[0].info.id}   >Home</li>
            </Link>

            <Link to={"/about"}>
              <li key={RestaurantList[1].info.id} >About</li>
            </Link>
            
            <Link to={'/contact'}>
            <li key={RestaurantList[2].info.id} > Contact</li>

            </Link> 

          <Link to={"/instamart"}>
          <li> Instamart </li>
          </Link>

          <Link to={"/cart"}>
          <li> Cart </li>
          </Link>


          </ul>
        </div>

        <div>
          {isloggedin ? (
            <button onClick={() => setIsloggedin(false)}> LogOut</button>
          ) : (
            <button onClick={() => setIsloggedin(true)}> LogIn</button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
