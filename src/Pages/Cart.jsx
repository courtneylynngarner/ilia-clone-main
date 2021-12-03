import React from "react";
import "./Cart.css";
const Cart = () => {
  function goBack() {
    console.log("we going back");
    window.history.back();
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
        <div className="cart-product-container">product</div>

        <div className="cart-foot">
          <div className="break-line"></div>
          <div className="subtotal-wrapper">
            <p>SUBTOTAL</p>
            <p>$48</p>
          </div>
        </div>
        <button className="continue-to-shipping">CHECKOUT</button>
      </div>
    </div>
  );
};

export default Cart;
