import "./globals.css";
import localFont from "next/font/local";
import Navbar from "./navbar";
import { ReactNode } from "react";
import Footer from "./footer";
import { Analytics } from "@vercel/analytics/react";

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
    <html lang="en" className="overflow-y-scroll">
      <body
        className={`${colton.variable} ${coltonXWide.variable} bg-polywrap-iris-950`}
      >
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Analytics />
      </body>
    </html>
  );
}
