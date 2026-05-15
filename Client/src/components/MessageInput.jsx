import React, { useState } from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import { useSocketStore } from "../store/useSocketStore";

export default function MessageInput({
  name,
  placeholder = "Type a message",
  icon,
  type,
  onClick,
  receiverId,
}) {
  const sendMessage = useSocketStore((state) => state.sendMessage);

  const [msg, setMsg] = useState(null);

  const sendMsg = () => {
    if (msg?.length > 0) sendMessage(receiverId, msg);
  };

  return (
    <div className="inputGroup">
      <div className={`inputField`}>
        {icon && <DynamicIcon name={icon} size={22} className="inputIcon" />}
        <input
          placeholder={placeholder}
          name={name}
          type={type ?? "text"}
          className={`input`}
          onChange={(e) => setMsg(e.target.value)}
        />
        <button className="priBtn" style={{ gap: ".4rem" }} onClick={sendMsg}>
          Send <DynamicIcon name={"send"} />
        </button>
      </div>
    </div>
  );
}
