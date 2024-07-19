import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Quantico } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const quantico = Quantico({subsets:["latin"], weight: "400"})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quantico.className}>{children}</body>
    </html>
  );
}
