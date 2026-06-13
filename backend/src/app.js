const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const adminRoutes = require("./routes/admin.routes");
const userRoutes = require("./routes/user.routes");
const categoryRoutes = require("./routes/category.routes"); 
const productRoutes = require("./routes/product.routes");
const wishlistRoutes =require("./routes/wishlist.routes" );
const cartRoutes =
  require(
    "./routes/cart.routes"
  );

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
  })
);

app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Premium Footwear API Running",
  });
});

app.use("/api/admin", adminRoutes);
app.use("/api/users", userRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/wishlist", wishlistRoutes);
app.use("/api/cart", cartRoutes);

module.exports = app;