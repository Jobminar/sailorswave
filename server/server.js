import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import index from "./routes/index.js";


dotenv.config();
const app = express();
const port = process.env.PORT || 7000;

app.use(cors({limit:"40mb"}));
//Middleware
app.use(express.json());

app.use("/", index);

mongoose.connect(process.env.MONGODB_URI, {
    // useNewUrlParser:true,
    // useUnifieldTopology:true,
}).then(
    console.log("Mongoose connected successfully")
).catch((error) =>{
    console.error("Mongoose connection error:", error);
})


app.listen(port, ()=>{console.log(`Server running on ${port}`)});