import React, { useEffect, useState } from "react";
import SideBar from "../components/SideBar";
import Screen from "../components/Screen";
import useApi from "../hooks/useApi";
import { getUsers } from "../api/user";

export default function Chat() {
  const [users, setUsers] = useState();
  const { data: fetchedUsers, request: fetchUsers, loading } = useApi(getUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    setUsers(fetchedUsers);
  }, [fetchedUsers]);

  return (
    <div className="chatScreen">
      <SideBar users={users} />
    </div>
  );
}
