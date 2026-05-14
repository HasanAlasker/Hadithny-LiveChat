import React from "react";

export default function Screen({ children, className }) {
  return (
    <div className={className ? `${className} screen` : "screen"}>
      {children}
    </div>
  );
}
