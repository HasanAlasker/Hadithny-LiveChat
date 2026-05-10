import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({}, { timestamps: true });

const ChatModel = mongoose.model("Chat", chatSchema);
export default ChatModel;
