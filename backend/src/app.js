const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();
const adminRoutes = require("./routes/admin.routes");

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

module.exports = app;