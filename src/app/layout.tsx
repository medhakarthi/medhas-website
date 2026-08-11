import { siteConfig } from "@/data/site";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Pixelify_Sans } from "next/font/google";
import "./globals.css";

const pixelify = Pixelify_Sans({
  variable: "--font-pixelify",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Medha",
    "Portfolio",
    "Computer Science",
    "University of Waterloo",
    "Software Engineer",
    "Web Developer",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.logo,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pixelify.variable} ${ibmPlexMono.variable} h-full`}>
      <body className="min-h-full bg-bg font-mono text-text antialiased">
        <a
          href="#portfolio"
          className="sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:items-center focus:border-2 focus:border-line focus:bg-chrome focus:px-3 focus:py-2 focus:font-pixel focus:text-xs focus:text-text focus:[clip:auto]"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
