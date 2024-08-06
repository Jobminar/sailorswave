import User from "../user-model/user.model.js";

const userController = {
  createUser: async (req, res) => {
    console.log(req.body);
    const { candidateName, mobileNumber } = req.body;
    if (!candidateName || !mobileNumber) {
      return res.status(401).json({ message: "check user credentials" });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);
    console.log("inner & outer", otp);
    const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // Set OTP expiry time to 5 minutes from now

    try {
      const existingUser = await User.findOne({ mobileNumber });
      if (existingUser) {
        const user = await User.findOneAndUpdate(
          { mobileNumber },
          { otp, otpExpiry },
          { upsert: true, new: true }
        );

        return res.status(200).json({message: "OTP sent successfully", otp: otp});
        // return res.status(409).json({ message: "User already exists" });
      }
      
      console.log("outer", otp);
      console.log(otpExpiry);

      const newUser = new User({
        candidateName,
        mobileNumber
      });
      await newUser.save();

      res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
      console.error("Error generating OTP:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  },

  verifyUser: async (req, res) => {
    try {
      const user = await User.find();
      if (!user) {
        res.statu(500).json({ error: "invalid user credentials" });
      } else {
        const { otp } = req.body;
        const verifyOtp = await User.findByIdAndUpdate(req.params.id, otp);
      }
    } catch (error) {}
  },

  verifyOtp: async (req, res) => {
    const { otp } = req.body;

    if (!otp) {
      return res.status(400).json({ message: "OTP is required" });
    }

    try {
      const user = await User.findOne({ otp });

      if (!user) {
        return res.status(404).json({ message: "Invalid or expired OTP" });
      }

      if (user.otpExpiry < new Date()) {
        return res.status(400).json({ message: "Invalid or expired OTP" });
      }
      user.otp = null;
      user.otpExpiry = null;
      await user.save();

      return res.status(200).json({
        message: "OTP verified successfully",
        mobileNumber: user.mobileNumber,
        id: user._id
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
};

export default userController;

// createUser: async (req, res) => {
//     try {
//         const user = new User(req.body);
//         await user.save();
//         res.status(201).json(user);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// },
