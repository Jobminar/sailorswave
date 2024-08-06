import express from "express";
import userController from "../user-controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/signup", userController.createUser); //Create User & Generate OTP
userRouter.post("/verify-otp",userController.verifyOtp); //Verify OTP
// userRouter.post("/generate-otp",userController.generateOtp);


export default userRouter;