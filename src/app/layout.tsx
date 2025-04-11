import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Dodajemy podstawowe metadane dla SEO
export const metadata: Metadata = {
  title: "TastyContent - Zarządzanie menu dla restauracji",
  description: "Uprość zarządzanie menu swojej restauracji online. Dołącz do listy oczekujących na TastyContent!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ustawiamy język strony na polski
    <html lang="pl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
