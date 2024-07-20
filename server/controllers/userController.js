import User from "../models/userModel.js";

const userController = {
  createUserDetails: async (req, res) => {
    try {
      const { firstName, lastName, email, phoneNumber, state, country } =
        req.body;

      if (
        !firstName ||
        !lastName ||
        !email ||
        !phoneNumber ||
        !state ||
        !country
      ) {
        return res.status(400).json({ message: "Required fields are missing" });
      }

      const userDetails = new User({
        firstName,
        lastName,
        email,
        phoneNumber,
        state,
        country,
      });
      await userDetails.save();
      res.status(201).json({ message: "Successfully data added" });
    } catch (error) {
      res.status(500).json({ error: "internal server error" });
    }
  },

  getUserDetails: async (req, res) => {
    try {
      const user =await User.find();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({error:"failed to get the data", error:error})
    }
  },
};
export default userController;
