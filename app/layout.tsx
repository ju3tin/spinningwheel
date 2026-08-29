import type { Metadata } from "next";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://spinwheel.to"),
  title: "Next.js Spin the Wheel - Free Online Random Wheel of Names",
  description: "An open-source, customizable HTML5 Canvas spin the wheel and random picker starter template built with Next.js 15 and Tailwind CSS. Powered by SpinWheel.to.",
  openGraph: {
    title: "Next.js Spin the Wheel Template | SpinWheel.to",
    description: "Free customizable Next.js random name picker & spin the wheel component.",
    url: "https://spinwheel.to",
    siteName: "SpinWheel.to",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Next.js Spin Wheel Template",
    "url": "https://spinwheel.to",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "description": "Free open-source Next.js random wheel spinner & decision maker.",
    "author": {
      "@type": "Organization",
      "name": "SpinWheel.to",
      "url": "https://spinwheel.to",
      "sameAs": [
        "https://spinwheel.to",
        "https://github.com/spinwheel-to/nextjs-spin-wheel"
      ]
    }
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-slate-950 text-slate-100">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
