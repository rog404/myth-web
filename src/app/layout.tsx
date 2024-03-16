import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";


const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

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
        className={cn("h-screen sm:p-10 absolute w-screen", lato.className)}
      >
        {children}
      </body>
    </html>
  );
}
