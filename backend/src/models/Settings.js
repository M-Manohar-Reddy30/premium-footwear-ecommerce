const mongoose = require("mongoose");

const settingsSchema = new mongoose.Schema(
  {
    companyName: {
      type: String,
      default: "Premium Footwear",
    },

    companyEmail: {
      type: String,
      default: "",
    },

    companyPhone: {
      type: String,
      default: "",
    },

    whatsappNumber: {
      type: String,
      default: "",
    },

    logo: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    socialLinks: {
      facebook: String,
      instagram: String,
      twitter: String,
      youtube: String,
      linkedin: String,
    },

    seo: {
      metaTitle: String,
      metaDescription: String,
      keywords: [String],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Settings",
  settingsSchema
);