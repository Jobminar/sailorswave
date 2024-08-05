import express from "express";
import sampleRouter from "../sample/sample-router/sample.router.js";
import applicationRouter from "../application/application-router/application.router.js";
import userRouter from "../user-auth/user-router/user.router.js";
const app = express();

app.use("/sample", sampleRouter)
app.use("/application", applicationRouter)
app.use("/user", userRouter)


export default app;