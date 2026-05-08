import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import CookieBanner from "./components/CookieBanner";
import DeferredChatWidget from "./components/DeferredChatWidget";
import JsonLd from "./components/JsonLd";
import WebVitals from "./components/WebVitals";
import { adsenseLoaderSrc } from "./utils/adsenseConstants";
import {
  DEFAULT_DESCRIPTION,
  DEFAULT_KEYWORDS,
  DEFAULT_TITLE,
  SITE_NAME,
} from "@/lib/seo-constants";
import { getMetadataBase, hasPublicSiteUrl } from "@/lib/site";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  variable: "--font-main",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#eff6ff",
};

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: DEFAULT_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: DEFAULT_KEYWORDS,
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    ...(hasPublicSiteUrl()
      ? {
          url: "/",
          images: [
            {
              url: "/logo-no-bg.png",
              width: 512,
              height: 512,
              alt: SITE_NAME,
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
      ? { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION }
      : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontSans.variable} font-sans antialiased`}>
        <WebVitals />
        <JsonLd />
        <Script
          src={adsenseLoaderSrc()}
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
        {children}
        <ToastContainer />
        <CookieBanner />
        <DeferredChatWidget />
      </body>
    </html>
  );
}
