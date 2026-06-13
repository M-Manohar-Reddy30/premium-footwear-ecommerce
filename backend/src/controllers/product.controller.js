const Product = require("../models/Product");
const cloudinary = require("../config/cloudinary");
const createProduct = async (req, res) => {
  try {
    let imageUrls = [];

    if (
      req.body.images &&
      req.body.images.length > 0
    ) {
      imageUrls = req.body.images;
    }

    const product =
      await Product.create({
        ...req.body,
        images: imageUrls,
      });

    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products =
      await Product.find()
        .populate("category");

    res.json({
      success: true,
      products,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getProductBySlug =
  async (req, res) => {
    try {
      const product =
        await Product.findOne({
          slug: req.params.slug,
        }).populate("category");

      if (!product) {
        return res.status(404).json({
          success: false,
          message: "Product not found",
        });
      }

      res.json({
        success: true,
        product,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

module.exports = {
  createProduct,
  getProducts,
  getProductBySlug,
};