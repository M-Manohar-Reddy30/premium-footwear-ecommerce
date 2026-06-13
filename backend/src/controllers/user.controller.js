const User = require("../models/User");

const syncUser = async (req, res) => {
  try {
    const {
      clerkId,
      email,
      fullName,
    } = req.body;

    let user = await User.findOne({ clerkId });

    if (!user) {
      user = await User.create({
        clerkId,
        email,
        fullName,
      });
    }

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const completeProfile = async (req, res) => {
  try {
    const { clerkId } = req.params;

    const fields = [
      req.body.fullName,
      req.body.mobileNumber,
      req.body.alternativeMobile,
      req.body.address,
      req.body.city,
      req.body.state,
      req.body.pincode,
      req.body.country,
    ];

    const completedFields = fields.filter(
      (field) => field && field.trim() !== ""
    ).length;

    const percentage = Math.round(
      (completedFields / fields.length) * 100
    );

    const profileCompleted =
      percentage === 100;

    const user =
      await User.findOneAndUpdate(
        { clerkId },
        {
          ...req.body,
          profileCompletionPercentage:
            percentage,
          profileCompleted,
        },
        { new: true }
      );

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findOne({
      clerkId: req.params.clerkId,
    });

    res.json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  syncUser,
  completeProfile,
  getUser,
};