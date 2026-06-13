const express = require("express");

const {
  addToCart,
} = require(
  "../controllers/cart.controller"
);
const{
  getCart,
} = require(
  "../controllers/cart.controller"
);

const router =
  express.Router();

router.post(
  "/add",
  addToCart
);

router.get(
  "/:clerkId",
  getCart
);

module.exports = router;