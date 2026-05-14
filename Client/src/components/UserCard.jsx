import React from "react";

export default function UserCard({ user, id }) {
  const firstLetters = user.name.slice(0, 2).toUpperCase();

  return (
    <div className="userCard">
      <div className="avatar">{firstLetters}</div>
      <p className="userName">{user.name}</p>
    </div>
  );
}
