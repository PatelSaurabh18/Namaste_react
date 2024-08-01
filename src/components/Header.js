import React from "react";
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
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul className="ul-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
