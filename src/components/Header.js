import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
              <li>Home</li>
            </Link>

            <Link to={"/about"}>
              <li>About</li>
            </Link>
            
            <Link to={'/contact'}>
            <li> Contact</li>

            </Link>


            <li>Cart</li>
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
