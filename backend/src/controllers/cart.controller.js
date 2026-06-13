const User = require("../models/User");

const addToCart = async (req, res) => {
  try {
    const {
      clerkId,
      productId,
    } = req.body;

    const user =
      await User.findOne({
        clerkId,
      });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const existingItem =
      user.cart.find(
        (item) =>
          item.product.toString() ===
          productId
      );

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      user.cart.push({
        product: productId,
        quantity: 1,
      });
    }

    await user.save();

    res.json({
      success: true,
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

const getCart = async (req, res) => {
  try {
    const { clerkId } =
      req.params;

    const user =
      await User.findOne({
        clerkId,
      }).populate(
        "cart.product"
      );

    if (!user) {
      return res.status(404).json({
        success: false,
      });
    }

    res.json({
      success: true,
      cart: user.cart,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};

module.exports = {
  addToCart,
  getCart,
};