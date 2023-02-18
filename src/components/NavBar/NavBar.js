import React from "react";
import "./NavBar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div className="NavBar">
      <div className="container nav-container">
        <div className="nav-list">
          <ul>
            <li className="list-item">COMIC</li>
            <li className="list-item">TV SHOWS</li>
            <li className="list-item">SPORTS</li>
          </ul>
        </div>
        <div onClick={() => navigate("/")} className="nav-title">
          <h1>POSTERZZ.</h1>
        </div>
        <div className="cart-icon">
          <AiOutlineShoppingCart />
          <div className="count">99+</div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
