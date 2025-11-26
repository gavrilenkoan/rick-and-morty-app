import type { Metadata } from "next";
import "./globals.scss";
import NavBar from "@/components/common/NavBar/NavBar";
import RMInitializer from "@/components/common/RMInitializer/RMInitializer";

export const metadata: Metadata = {
  title: "Rick&Morty",
  description: "Rick&Morty",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <RMInitializer />
        <main>{children}</main>
      </body>
    </html>
  );
}