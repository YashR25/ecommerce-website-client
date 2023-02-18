import React from "react";
import "./ProductDetail.scss";
import productImg from "../../assets/naruto.jpeg";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-image">
            <img src={productImg} alt="" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the title</h1>
            <h3 className="price">50 Rs.</h3>
            <p className="description">
              this is description. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Facere, accusamus.
            </p>
            <div className="cart-options">
              <div className="quantity-selector">
                <div className="btn decrement">-</div>
                <div className="quantity">3</div>
                <div className="btn increment">+</div>
              </div>
              <div className="primary-button add-to-cart">Add to Cart</div>
            </div>
            <div className="return-policy">
              <ul>
                <li>
                  This product is made to order and is typically printed in 3-6
                  working days. Your entire order will ship out together.
                </li>
                <li>
                  Since this product is printed on demand especially for you, it
                  is not eligible for cancellations and returns. Read our Return
                  Policy.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
