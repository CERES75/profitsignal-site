import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ProfitSignal | Client Acquisition System",
  description: "Agenzia di digital marketing orientata ai risultati. Trasformiamo visibilità in clienti con sistemi digitali strategici.",
  keywords: "digital marketing, client acquisition system, SEO, lead generation, web design, branding, Italia",
  authors: [{ name: "ProfitSignal" }],
  openGraph: {
    title: "ProfitSignal | Client Acquisition System",
    description: "Trasformiamo visibilità in clienti reali",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className={geistSans.variable}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/react-grab/dist/index.global.js"
        />
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
