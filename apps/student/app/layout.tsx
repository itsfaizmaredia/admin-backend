import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Study Assistance — Student",
  description: "Student portal for the Capstone Study Assistance platform",
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
