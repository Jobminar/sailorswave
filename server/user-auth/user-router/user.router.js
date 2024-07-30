import express from "express";
import userController from "../user-controller/user.controller.js";

const userRouter = express.Router();

userRouter.post("/createUser", userController.createUser);
userRouter.post("/generate-otp",userController.generateOtp)
userRouter.post("/verify-otp",userController.verifyOtp)


export default userRouter;