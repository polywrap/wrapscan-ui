import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./navbar";
import { ReactNode } from "react";

const colton = localFont({
  src: [
    {
      path: "../assets/fonts/HDColton-Regular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/HDColton-Bold.woff",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/HDColton-RegularItalic.woff",
      style: "italic",
      weight: "400",
    },
    {
      path: "../assets/fonts/HDColton-BoldItalic.woff",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-colton",
});

const coltonXWide = localFont({
  src: [
    {
      path: "../assets/fonts/HDColton-XWideRegular.woff",
      style: "normal",
      weight: "400",
    },
    {
      path: "../assets/fonts/HDColton-XWideBold.woff",
      style: "normal",
      weight: "700",
    },
    {
      path: "../assets/fonts/HDColton-XWideBoldItalic.woff",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-colton-xwide",
});

export const metadata = {
  title: "Wrapscan",
  description: "Polywrap Wraps",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${colton.variable} ${coltonXWide.variable}`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
