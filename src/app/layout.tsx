import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./navbar";
import { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "Wrapscan",
  description: "Polywrap Wraps",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
