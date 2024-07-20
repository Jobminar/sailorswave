import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    // firstName: {type: String, required: true},
    // lastName: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    phoneNumber: {type: String, required: true, unique: true},
    // state: {type: String, required: true},
    // country: {type: String, required: true},
    // role: {type: String, enum: ['admin', 'user'], default: 'user'}
})

const User = mongoose.model("User", userSchema);

export default User;