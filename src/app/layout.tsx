import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from '@/components/Footer'; 

const inter = Inter({ subsets: ["latin"] });

// Dodajemy podstawowe metadane dla SEO
export const metadata: Metadata = {
  title: "TastyContent - Profesjonalny Content dla Restauracji w 24h",
  description: "Zamów profesjonalne zdjęcia, filmy i grafiki dla Twojej restauracji bez sesji zdjęciowych. Wyślij jedno zdjęcie, odbierz gotowy content w 24 godziny.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Ustawiamy język strony na polski
    <html lang="pl">
      <body className={`${inter.className} flex flex-col min-h-screen`}> 
        <div className="flex-grow">{children}</div> 
        <Footer /> 
      </body>
    </html>
  );
}
