import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./routes/routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 7000;

//Middleware
app.use(express.json());
// app.use("/", router);

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser:true,
    // useUnifieldTopology:true,
}).then(
    console.log("Mongoose connected successfully")
).catch((error) =>{
    console.error("Mongoose connection error:", error);
})

app.use("/", router)

app.listen(port, ()=>{console.log(`Server running on http://localhost:${port}`)});