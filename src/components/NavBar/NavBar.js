import React, { useState } from "react";
import "./NavBar.scss";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

function NavBar() {
  const navigate = useNavigate();
  const [openCart, setOpenCart] = useState(false);

  const categories = useSelector((state) => state.categoryReducer.categories);
  const cart = useSelector((state) => state.cartReducer.cart);
  var totalItems = 0;
  cart.forEach((item) => (totalItems += item.quantity));

  return (
    <div className="NavBar">
      <div className="container nav-container">
        <div className="nav-list">
          <ul>
            {categories?.map((item) => {
              return (
                <li
                  className="list-item"
                  onClick={() => navigate(`/category/${item.attributes.key}`)}
                >
                  {item.attributes.title}
                </li>
              );
            })}
          </ul>
        </div>
        <div onClick={() => navigate("/")} className="nav-title">
          <h1>POSTERZZ.</h1>
        </div>
        <div className="cart-icon" onClick={() => setOpenCart(!openCart)}>
          <AiOutlineShoppingCart />
          {totalItems > 0 && <div className="count">{totalItems}</div>}
        </div>
      </div>
      {openCart && <Cart onClose={() => setOpenCart(false)} />}
    </div>
  );
}

export default NavBar;
