import express from "express";
import applicationController from "../application-controller/application.controller.js";

const applicationRouter = express.Router();

applicationRouter.post("/", applicationController.createApplicationDetails);

export default applicationRouter;