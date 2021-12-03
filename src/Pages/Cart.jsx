import React from "react";
import { Navigate, useNavigate } from "react-router";
import "./Cart.css";
import sssCart from "../Assets/sssCart.png";
const Cart = () => {
  const navigate = useNavigate();
  function goBack() {
    console.log("we going back");
    window.history.back();
  }

  function checkingOut() {
    navigate("/contact-checkout");
  }
  return (
    <div>
      <div className="cart-container">
        <div className="cart-header">
          <button onClick={goBack} className="return-to-page">
            X
          </button>
          <div className="cart-shopping-bag">
            SHOPPING BAG
            <div className="items">
              (1)
              <p>ITEMS</p>
            </div>
          </div>
        </div>
        <div className="cart-product-container">
          <img className="image-cart" src={sssCart} alt="" />

          <div className="product-description-price-container">
            <p className="cart-title">Super Serum Skin Tint SPF 40</p>
            <p className="cart-product-price">$48</p>
          </div>
        </div>

        <div className="cart-foot">
          <div className="break-line"></div>
          <div className="subtotal-wrapper">
            <p>SUBTOTAL</p>
            <p>$48</p>
          </div>
        </div>
        <button className="continue-to-shipping" onClick={checkingOut}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Cart;
