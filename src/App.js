import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Password from "./Pages/Password";
import CreateAccount from "./Pages/CreateAccount";
import Tos from "./Pages/Tos";
import Privacy from "./Pages/Privacy";
import ContactCheckout from "./Pages/ContactCheckout";
import ShippingCheckout from "./Pages/ShippingCheckout";
import SuperSkinSerum from "./Pages/SuperSkinSerum";
// import TrueSkinPrimer from "./Pages/TrueSkinPrimer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password" element={<Password />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/tos" element={<Tos />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/contact-checkout" element={<ContactCheckout />} />
        <Route path="/shipping-checkout" element={<ShippingCheckout />} />
        <Route path="/products" element={<SuperSkinSerum />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
