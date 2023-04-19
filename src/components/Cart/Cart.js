import React from "react";
import "./Cart.scss";
import { AiOutlineClose } from "react-icons/ai";
import CartItem from "../CartItem/CartItem";
import { useSelector } from "react-redux";
import { BsCartX } from "react-icons/bs";
import { axiosClient } from "../../utils/axiosClient";

import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);

function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartReducer.cart);

  const isEmpty = cart?.length == 0;

  var totalPrice = 0;
  cart.forEach((item) => (totalPrice += item.quantity * item.price));

  const handleCheckout = async () => {
    const response = await axiosClient.post("/orders", {
      products: cart,
    });

    const stripe = await stripePromise;

    await stripe.redirectToCheckout({
      sessionId: response.data.stripeId,
    });
    console.log(response);
  };

  return (
    <div className="Cart">
      <div className="overlay"></div>
      <div className="cart-content">
        <div className="header">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <AiOutlineClose /> Close
          </div>
        </div>
        <div className="cart-items">
          {cart.map((item) => {
            return <CartItem cart={item} />;
          })}
        </div>
        {isEmpty && (
          <div className="empty-cart-info">
            <div className="empty-cart-icon">
              <BsCartX />
            </div>
            <h3>Cart is Empty</h3>
          </div>
        )}
        {!isEmpty && (
          <div className="checkout-info">
            <div className="total-amount">
              <h3 className="total-message">Total:</h3>
              <h3 className="total-value">{totalPrice} Rs.</h3>
            </div>
            <div className="checkout primary-button" onClick={handleCheckout}>
              Checkout now
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
