import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: [true, "Email Required"],
        trim: true
    },
    password: {
        type: String,
        required: [true, "Password Required"],
        trim: true
    },
    about: {
        type: String,
    }
}, { versionKey: false });

const userModel = mongoose.models.Users || mongoose.model('Users', userSchema);

export default userModel;