import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Assistance — Admin",
  description: "Professor and admin portal for the Capstone Study Assistance platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
