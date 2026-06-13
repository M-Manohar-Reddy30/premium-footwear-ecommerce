const express = require("express");

const {
  addToWishlist,
} = require(
  "../controllers/wishlist.controller"
);

const router = express.Router();

router.post(
  "/add",
  addToWishlist
);

module.exports = router;