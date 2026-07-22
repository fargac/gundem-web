import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gezoist Gündem | Yapay Zeka ile Günlük Özet",
  description: "Gezoist yapay zekası tarafından özenle hazırlanan, günün en önemli ulusal ve spor gelişmelerinin rafine edilmiş sesli özeti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={`${inter.className} bg-[#08080a] text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}