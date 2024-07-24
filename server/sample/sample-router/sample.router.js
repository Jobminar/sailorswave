import express from 'express';
import sampleController from '../sample-controller/sample.controller.js';

const userRouter = express.Router();

userRouter.post("/", sampleController.createSampleDetails);
userRouter.get("/", sampleController.getSampleDetails);
userRouter.put("/updateUser", sampleController.updateUserDetails);
userRouter.put("/deleteUser", sampleController.deleteUserDetails);  

export default userRouter;
 