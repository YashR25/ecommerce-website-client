import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import "./Payments.scss";
import { BiErrorCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function Payments() {
  const params = useParams();
  const status = params.status;
  const dispatch = useDispatch();

  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "shop more",
      icon: <BsFillCartCheckFill />,
    },
    failed: {
      message: "Payment Failed",
      cta: "Try Again",
      icon: <BiErrorCircle />,
    },
  };

  if (status === "success") {
    dispatch(resetCart());
  }
  return (
    <div className="Payments">
      <div className="icon">{infoData[status].icon}</div>
      <h2 className="message">{infoData[status].message}</h2>
      <div className="primary-button">{infoData[status].cta}</div>
    </div>
  );
}

export default Payments;
