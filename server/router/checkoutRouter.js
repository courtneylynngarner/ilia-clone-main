const express = require("express");
const router = express.Router();
const checkoutCtrl = require("../Controller/checkout");

router.post("/create-checkout-session", checkoutCtrl.checkout);

module.exports = router;
