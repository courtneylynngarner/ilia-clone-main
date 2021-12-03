import React, { useState } from "react";
import { useNavigate } from "react-router";
import CheckoutHeader from "../Components/CheckoutHeader";
import "./ContactCheckout.css";
const ContactCheckout = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [address, setAddress] = useState("");
  const [apartment, setApartment] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  function continueShippingClick(e) {
    e.preventDefault();
    navigate("/shipping-checkout");
  }

  return (
    <div>
      <CheckoutHeader />

      {/* <div className="or-line">
          <span className="or-text">OR</span>
        </div> */}
      <div className="contact-checkout-container">
        <div className="checkout-path">
          <p className="path-text">CART</p>
          <p className="path-text">
            <strong>INFORMATION</strong>
          </p>
          <p className="path-text">SHIPPING</p>
          <p className="path-text">PAYMENT</p>
        </div>
        <div className="contact-line">
          {/* <div className="next">CHECKOUT</div> */}
        </div>
        <p className="contact-header">Contact information</p>
        <div className="checkout-login">
          Already have an account?
          <aside className="checkout-login-link"> Log in</aside>
        </div>
        <form
          onSubmit={continueShippingClick}
          className="checkout-contact-form"
          action=""
        >
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="contact-input"
            value={email}
            placeholder="EMAIL"
          />
          <div className="email-me-box">
            <input type="checkbox" className="checkbox" id="email-me" />
            <label className="email-me" htmlFor="email-me">
              Email me with news and offers
            </label>
          </div>
          <p className="contact-header">Shipping address</p>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            className="contact-input"
            placeholder="FIRST NAME"
            value={firstName}
          />
          <input
            onChange={(e) => setLastName(e.target.value)}
            className="contact-input"
            placeholder="LAST NAME"
            value={lastName}
          />
          <input
            onChange={(e) => setCompany(e.target.value)}
            className="contact-input"
            placeholder="COMPANY"
            value={company}
          />
          <input
            onChange={(e) => setAddress(e.target.value)}
            className="contact-input"
            placeholder="ADDRESS"
            value={address}
          />

          <input
            onChange={(e) => setApartment(e.target.value)}
            className="contact-input"
            placeholder="APARTMENT, SUITE, ETC. (OPTIONAL)"
            value={apartment}
          />
          <input
            onChange={(e) => setCity(e.target.value)}
            className="contact-input"
            placeholder="CITY"
            value={city}
          />
          <input
            onChange={(e) => setState(e.target.value)}
            className="contact-input"
            placeholder="STATE"
            value={state}
          />
          <input
            onChange={(e) => setZipcode(e.target.value)}
            className="contact-input"
            placeholder="ZIP CODE"
            value={zipcode}
          />
          <input
            onChange={(e) => setPhone(e.target.value)}
            className="contact-input"
            placeholder="PHONE (OPTIONAL"
            value={phone}
          />
          <button className="continue-to-shipping">CONTINUE TO SHIPPING</button>
          <button className="return-to-cart">Return to cart</button>
        </form>
        <div className="checkout-copyright">
          <span>&#169;</span>
          2021 ILIA Beauty All rights reserved
        </div>
      </div>
    </div>
  );
};

export default ContactCheckout;
