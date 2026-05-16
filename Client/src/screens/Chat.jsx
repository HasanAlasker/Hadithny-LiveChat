import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { getUsers } from "../api/user";
import ChatArea from "../components/ChatArea";
import { useSocketStore } from "../store/useSocketStore";

export default function Chat() {
  const [users, setUsers] = useState();
  const [activeChat, setChat] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { data: fetchedUsers, request: fetchUsers, loading } = useApi(getUsers);
  const { connect } = useSocketStore();

  connect();

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="chatScreen">
      {(windowWidth > 624 || !activeChat) && (
        <SideBar users={users} setChat={setChat} />
      )}
      <ChatArea
        activeChat={activeChat}
        setChat={setChat}
        windowWidth={windowWidth}
      />
    </div>
  );
}
