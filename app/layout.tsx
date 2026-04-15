import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const sansFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const displayFont = Oswald({
  variable: "--font-oswald",
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
        className={`${sansFont.variable} ${displayFont.variable} flex flex-col min-h-svh`}
      >
        <header className="w-full flex justify-center fixed top-0 z-50">
          <Navbar />
        </header>

        <main className="flex-1">
          {children}
        </main>

        <footer className="flex pt-2 pb-10 justify-center text-sm bg-primary-800 text-neutral-100">
          © {new Date().getFullYear()} - Émile Turcotte
        </footer>
      </body>
    </html>
  );
}