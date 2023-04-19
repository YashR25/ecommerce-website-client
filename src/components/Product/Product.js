import React from "react";
import "./Product.scss";
import productImg from "../../assets/naruto.jpeg";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const navigate = useNavigate();
  return (
    <div
      className="Product"
      onClick={() => navigate(`/products/${product.attributes.key}`)}
    >
      <div className="product-container">
        <div className="product-img">
          <div className="image-container">
            <img src={product?.attributes.image.data.attributes.url} alt="" />
          </div>
        </div>
        <div className="product-info">
          <p className="title">{product?.attributes.title}</p>
          <p className="price">{product?.attributes.price} Rs.</p>
        </div>
      </div>
    </div>
  );
}

export default Product;
