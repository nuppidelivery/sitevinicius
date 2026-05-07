import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Vorté | Agência de Tecnologia e Marketing Premium",
  description: "Transformamos empresas comuns em máquinas de vendas através de tecnologia, marketing e automação.",
  openGraph: {
    title: "Vorté | Agência de Tecnologia e Marketing Premium",
    description: "Transformamos empresas comuns em máquinas de vendas através de tecnologia, marketing e automação.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans bg-background text-foreground min-h-screen flex flex-col`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
