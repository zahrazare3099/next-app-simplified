import Link from "next/link";

export default function page() {
  return (
    <div>
      <h2 className="font-bold"> main team</h2>
      <ul className="">
        <li className="list-item underline">
          <Link href="/team/about">about team</Link>
        </li>
      </ul>
    </div>
  );
}
