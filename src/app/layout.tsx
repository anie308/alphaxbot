import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "AlphaXBot",
  description: "Trade like an ALPHA with AI-powered onchain analysis!",
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
