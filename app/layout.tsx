import "./globals.css";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

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
        {children}
      </body>
    </html>
  );
}
