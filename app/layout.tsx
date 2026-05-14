import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PixelEvents } from "@/components/tracking/pixel-events";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat" });

export const metadata: Metadata = {
  title: "Vinícius Valente | Marketing de Performance",
  description: "Transformamos empresas comuns em máquinas de vendas através de tecnologia, marketing e automação.",
  openGraph: {
    title: "Vinícius Valente | Marketing de Performance",
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
      <head>
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1341790971340686');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} ${montserrat.variable} font-sans bg-background text-foreground min-h-screen flex flex-col`}>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }} src="https://www.facebook.com/tr?id=1341790971340686&ev=PageView&noscript=1" alt="" />
        </noscript>
        <PixelEvents />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
