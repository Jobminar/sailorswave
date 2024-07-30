import User from "../user-model/user.model.js";

const userController = {
    createUser: async(req,res) => {
        try {
            const {candidateName, mobileNumber} = req.body;
            if(!candidateName || !mobileNumber){
                res.status(401).json({message:"check user credential"})
            } else{
                const user= new User({candidateName, mobileNumber});
                await user.save();
            }
        } catch (error) {
            res.status(400).json({message: error.message});
        }
    },

    verifyUser: async(req,res)=>{
        try {
            const user = await User.find();
            if(!user){
                res.statu(500).json({error:"invalid user credentials"});
            }else{
                const {otp} = req.body;
                const verifyOtp = await User.findByIdAndUpdate(req.params.id, otp);
            }
        } catch (error) {
            
        }
    },

    generateOtp: async (req, res) => {
        const { phone } = req.body;
    
        if (!phone) {
          return res.status(400).json({ message: "Phone number is required" });
        }
    
        const otp = Math.floor(1000 + Math.random() * 9000); 
        const otpExpiry = new Date(Date.now() + 5 * 60 * 1000); // Set OTP expiry time to 5 minutes from now
    
        try {
          const user = await User.findOneAndUpdate(
            { phone },
            { otp, otpExpiry },
            { upsert: true, new: true }
          );
    
          return res.status(200).json({ message: "OTP sent successfully",otp:otp });
        } catch (error) {
          console.error("Error generating OTP:", error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
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
    
          return res.status(200).json({ message: "OTP verified successfully", phone:user.phone,id:user._id });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ message: "Internal Server Error" });
        }
    }
}

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
