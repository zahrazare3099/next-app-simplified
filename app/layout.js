import MainHeader from "@/components/main-header";
import "./globals.css";

export const metadata = {
  title: "Next App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-800 text-slate-200">
        <header>
          <MainHeader />
        </header>
        {children}
      </body>
    </html>
  );
}
