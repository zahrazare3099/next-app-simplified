import Link from "next/link";
import React from "react";

export default function MainHeader() {
  return (
    <nav className="bg-slate-900 text-slate-200 flex justify-between p-4 font-bold">
      <h3>
        <Link href="./">My App</Link>
      </h3>
      <ul className="flex gap-x-2">
        <li className="hover:text-amber-200 ">
          <Link href="./posts">Posts</Link>
        </li>
        <li className="hover:text-amber-200 ">
          <Link href="./users">Users</Link>
        </li>
        <li className="hover:text-amber-200 ">
          <Link href="./todos">Todos</Link>
        </li>
      </ul>
    </nav>
  );
}
