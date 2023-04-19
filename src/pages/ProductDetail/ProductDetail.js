import React, { useEffect, useState } from "react";
import "./ProductDetail.scss";
import productImg from "../../assets/naruto.jpeg";
import { useParams } from "react-router-dom";
import { axiosClient } from "../../utils/axiosClient";
import Loader from "../../components/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cartReducer.cart);
  const quantiy =
    cart.find((item) => item.key === params.productId)?.quantity || 0;

  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=*`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }

  useEffect(() => {
    setProduct(null);
    fetchData();
  }, [params]);

  if (!product) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout">
          <div className="product-image">
            <img src={product.attributes.image.data.attributes.url} alt="" />
          </div>
          <div className="product-info">
            <h1 className="heading">{product.attributes.title}</h1>
            <h3 className="price">{product.attributes.price} Rs.</h3>
            <p className="description">{product.attributes.description}</p>
            <div className="cart-options">
              <div className="quantity-selector">
                <div
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </div>
                <div className="quantity">{quantiy}</div>
                <div
                  className="btn increment"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </div>
              </div>
              <div
                className="primary-button add-to-cart"
                onClick={() => dispatch(addToCart(product))}
              >
                Add to Cart
              </div>
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
