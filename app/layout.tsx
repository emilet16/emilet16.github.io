import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const sansFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Émile Turcotte",
  description: "Student and Builder, always in search of innovation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sansFont.variable} antialiased grid grid-rows-[1fr_20px] min-h-screen pb-20 gap-8`}
      >
        <header className="fixed w-full flex justify-center shadow-md z-10">
          <Navbar />
        </header>

        <main className="flex justify-center p-8">
          {children}
        </main>

        <footer className="flex justify-center text-sm">
          © {new Date().getFullYear()} Émile Turcotte
        </footer>
      </body>
    </html>
  );
}