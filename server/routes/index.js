import express from "express";
import sampleRouter from "../sample/sample-router/sample.router.js";
import formRouter from "../application/application-router/application.router.js";
const app = express();

app.use("/sample", sampleRouter)
app.use("/form", formRouter)


export default app;