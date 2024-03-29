import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-container">
        <h1>Exclusive Print and Artwork</h1>
        <p>Exclusive Art Pieces, For the Exclusive You</p>
        <div className="primary-button" onClick={() => navigate("/category")}>
          EXPLORE ALL
        </div>
      </div>
    </div>
  );
}

export default Hero;
