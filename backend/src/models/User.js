const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    clerkId: {
      type: String,
      required: true,
      unique: true,
    },

    fullName: {
      type: String,
      default: "",
    },

    email: {
      type: String,
      required: true,
    },

    mobileNumber: {
      type: String,
      default: "",
    },

    alternativeMobile: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    city: {
      type: String,
      default: "",
    },

    state: {
      type: String,
      default: "",
    },

    pincode: {
      type: String,
      default: "",
    },

    country: {
      type: String,
      default: "",
    },

    profileCompleted: {
      type: Boolean,
      default: false,
    },
    profileCompletionPercentage: {
        type: Number,
        default: 0,
    },

    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],

    cart: [
  {
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },

          quantity: {
            type: Number,
            default: 1,
          },
        },
      ],
  },
  {
    timestamps: true,
  }
);



module.exports = mongoose.model("User", userSchema);