import MessageModel from "./models/message.js";

const onlineUsers = new Map();

export default function initSocket(io) {
  io.on("connection", (socket) => {
    socket.on("register", (userId) => {
      onlineUsers.set(userId, socket.id);
      console.log(`User ${userId} connected with socketId ${socket.id}`);
    });

    socket.on("send message", async ({ sender, receiver, msg }) => {
      const recipientSocketId = onlineUsers.get(receiver);

      if (recipientSocketId) {
        socket.to(recipientSocketId).emit("receive message", { sender, msg });
      }

      try {
        const newMessage = new MessageModel({
          sender,
          receiver,
          content: msg,
        });
        await newMessage.save();

        console.log("sent: ", msg);
      } catch (error) {
        console.log("Failed to save message:", error);
      }
    });

    socket.on("disconnect", () => {
      console.log("User disconnected:", socket.id);
      for (const [userId, socketId] of onlineUsers.entries()) {
        if (socketId === socket.id) {
          onlineUsers.delete(userId);
          break;
        }
      }
    });
  });
}
