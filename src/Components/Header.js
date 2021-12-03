import React, { useContext } from "react";
import { lineItemContext } from "../store/cartStore";
import { Link, useNavigate } from "react-router-dom";
import checkout from "../Assets/checkout.svg";
import ilia from "../Assets/ilia.png";
import "./Header.css";

const Header = () => {
  const { lineItemState, updateLineItem } = useContext(lineItemContext);
  const navigate = useNavigate();

  function checkoutClickHandler() {
    console.log("hey checkout click handler");
    navigate("/cart");
  }
  return (
    <div>
      <div className="top-header">
        <div className="promotion">
          <p className="promotion-text">
            PICK A FREE MINI ON ORDERS $125+ AT CHECKOUT. <u>SHOP NOW</u>
          </p>
        </div>
        <div className="top-part-header">
          {/* <div className="left-ilia"></div> */}
          <div className="ilia-container">
            <img className="ilia-header" src={ilia} />
          </div>
          <div className="log-in">
            <Link to="/login" className="log-in-text">
              LOG IN
            </Link>
          </div>
          <div onClick={checkoutClickHandler} className="purse-container">
            <img src={checkout} className="purse-icon" alt="" />
            <div className="checkout-items">{lineItemState.count}</div>
          </div>
        </div>
        <div className="top-links-container">
          <div className="top-links">
            <p>FACE</p>
            <p>MULTI</p>
            <p>LIP</p>
            <p>EYE</p>
            <p>TOOLS</p>
            <p>MY SHADE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
