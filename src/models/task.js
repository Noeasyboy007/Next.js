import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    addedData: {
        type: Date,
        default: Date.now(),
        required: true,
    },
    status: {
        type: String,
        enum: ["pending", "completed", "progress"],
        default: "pending",
        required: true,
    },
    userId: {
        type: mongoose.ObjectId,
        required: [true, "User Id Required"],
        required: true,
    },
   
}, { versionKey: false });

const taskModel = mongoose.models.Task || mongoose.model('Task', taskSchema);

export default taskModel;