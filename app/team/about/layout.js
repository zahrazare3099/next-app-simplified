import React from "react";

export default function layout({ children }) {
  return (
    <div className="p-8">
      team about layout
      <div>{children}</div>
    </div>
  );
}
