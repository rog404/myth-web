import type { Metadata } from "next";
import { Vollkorn_SC } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import { cn } from "@/lib/utils";

const vollkorn = Vollkorn_SC({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-vollkorn",
});

export const metadata: Metadata = {
  title: "Myth of Yggdrasil (Alfa)",
  description: "Alfa Test for Myth of Yggdrasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-gradient-to-r from-blue-400 to-emerald-400 h-screen sm:p-10",
          vollkorn.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
