import { io } from "socket.io-client";
import { create } from "zustand";
import { SOCKET_URL } from "../constants/baseURL";
import { useAuthStore } from "./useAuthStore";

const socket = io(SOCKET_URL);

export const useSocketStore = create((set, get) => ({
  socketId: null,
  userId: useAuthStore.getState().user?._id,

  connect: () => {
    socket.on("connect", () => {
      set({ socketId: socket.id });
      socket.emit("register", get().userId);
    });
  },

  sendMessage: (receiverId, msg) => {
    socket.emit("send message", {
      sender: get().userId,
      receiver: receiverId,
      msg,
    });
  },

  receiveMessage: (onMessage) => {
    socket.off("receive message"); // ✅ remove any existing listener first
    socket.on("receive message", (data) => onMessage(data));

    return () => {
      socket.off("receive message");
    };
  },
}));
