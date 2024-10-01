import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantList } from "../Constants";
import Cart from "./Cart";
// React Component

// export const Title = () => (

// );

// React Component
const Header = () => {
  const [isloggedin, setIsloggedin] = useState(false);
  return (
    <>
      <div className="flex justify-between bg-pink-100 shadow-md">
        <a href="/">
          <img
            className="w-20"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq_LmiEG7PEV3p9MGjSYDxsn1BzvEy5fEdg&s"
            alt="logo"
          />
        </a>

        <div className="flex">
          <ul className="flex gap-5 pt-7 text-green-900 text-xl font-bold">
            <Link to={"/"}>
              <li key={RestaurantList[0].info.id}>Home</li>
            </Link>

            <Link to={"/about"}>
              <li key={RestaurantList[1].info.id}>About</li>
            </Link>

            <Link to={"/contact"}>
              <li key={RestaurantList[2].info.id}> Contact</li>
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
