const express = require("express");
const {
  syncUser,
  completeProfile,
  getUser,
} = require("../controllers/user.controller");

const router = express.Router();

router.post("/sync", syncUser);
router.put(
  "/profile/:clerkId",
  completeProfile
);
router.get("/:clerkId", getUser);

module.exports = router;