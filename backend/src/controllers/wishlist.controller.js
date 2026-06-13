const mongoose = require("mongoose");
const User = require("../models/User");

const addToWishlist = async (req, res) => {
  try {
    console.log("Body:", req.body);

    const { clerkId, productId } = req.body;

    const user = await User.findOne({
      clerkId,
    });

    console.log("User Found:", user);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const alreadyExists =
      user.wishlist.some(
        (id) =>
          id.toString() === productId
      );

    if (!alreadyExists) {
      console.log(
        "Wishlist Before:",
        user.wishlist
      );

      user.wishlist.push(
        new mongoose.Types.ObjectId(
          productId
        )
      );

      console.log(
        "Wishlist After Push:",
        user.wishlist
      );

      await user.save();

      console.log(
        "Wishlist Saved:",
        user.wishlist
      );
    }

    res.json({
      success: true,
      wishlist: user.wishlist,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addToWishlist,
};