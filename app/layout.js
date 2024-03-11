import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="p-5 bg-slate-300">
        <ul className="p-2 border-2 border-emerald-700 flex gap-3">
          <li>
            <Link href="/">home</Link>
          </li>
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/team">team</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
