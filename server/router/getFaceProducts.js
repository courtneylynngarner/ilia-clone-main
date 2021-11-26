const express = require("express");
const router = express.Router();
const getFaceProductsCtrl = require("../Controller/getFaceProductsController");

router.get("/api/face-products", getFaceProductsCtrl.getFaceProducts);

module.exports = router;
