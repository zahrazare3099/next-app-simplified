import React from "react";

export default function TodoItem({ todo, completed }) {
  return (
    <li className={`py-1 ${completed ? "line-through" : undefined}`}>{todo}</li>
  );
}
