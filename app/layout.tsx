import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Arnav Bharti",
  description: "Arnav Bharti's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-mono antialiased max-w-3xl mx-auto p-4`}>
        <nav className="flex flex-row">
          <Link href="/" className="py-1">
            home
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
