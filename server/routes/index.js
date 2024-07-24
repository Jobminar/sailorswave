import express from "express";
import sampleRouter from "../sample/sample-router/sample.router.js";
const app = express();

app.use("/sample", sampleRouter)


export default app;