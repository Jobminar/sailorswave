import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from "dotenv";
import index from "./routes/index.js";
import ejs from "ejs";


dotenv.config();
const app = express();
const port = process.env.PORT || 7000;

//Middleware
app.use(cors({limit:"40mb"}));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }) );
// app.use('view engine', 'ejs')
app.use(express.json());

app.use("/", index);

mongoose.connect(
    // process.env.MONGODB_URI
    "mongodb://localhost:27017/mongodb-images", {
    // useNewUrlParser:true,
    // useUnifieldTopology:true,
}).then(
    console.log("Mongoose connected successfully")
).catch((error) =>{
    console.error("Mongoose connection error:", error);
})


app.listen(port, ()=>{console.log(`Server running on ${port}`)});