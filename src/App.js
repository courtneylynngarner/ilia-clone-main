import "./App.css";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Password from "./Pages/Password";
import CreateAccount from "./Pages/CreateAccount";
import Tos from "./Pages/Tos";
import Privacy from "./Pages/Privacy";
import ContactCheckout from "./Pages/ContactCheckout";
import ShippingCheckout from "./Pages/ShippingCheckout";
import SuperSkinSerum from "./Pages/SuperSkinSerum";
import TrueSkinPrimer from "./Pages/TrueSkinPrimer";

function App() {
  return (
    <div>
      {/* <Home /> */}
      {/* <Login /> */}
      {/* <Password /> */}
      {/* <CreateAccount /> */}
      {/* <Tos /> */}
      {/* <Privacy /> */}
      {/* <ContactCheckout /> */}
      {/* <ShippingCheckout /> */}
      {/* <SuperSkinSerum /> */}
      <TrueSkinPrimer />
    </div>
  );
}

export default App;
