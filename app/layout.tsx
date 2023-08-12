import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

// components
import Navbar from "./components/layouts/navigation/Navbar";

export const metadata: Metadata = {
  title: "Renterly | Vacation Homes and Condo Rentals near you",
  description:
    "Find the perfect place to stay at an amazing price in 191 countries. Belong anywhere with Renterly.",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className} suppressHydrationWarning={true}>
        {/* Navbar */}
        <Navbar />
        {/* Navbar end */}
        {children}
      </body>
    </html>
  );
}
