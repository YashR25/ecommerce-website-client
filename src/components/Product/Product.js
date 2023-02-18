import React from "react";
import "./Product.scss";
import productImg from "../../assets/naruto.jpeg";
import { useNavigate } from "react-router-dom";

function Product() {
  const navigate = useNavigate();
  return (
    <div className="Product" onClick={() => navigate("/products/asasasasas")}>
      <div className="product-container">
        <div className="product-img">
          <div className="image-container">
            <img src={productImg} alt="" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">Poster</p>
          <p className="price">50 Rs.</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
