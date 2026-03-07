import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tirtacalmwellness.com"),
  title: {
    default: "Tirta Calm Wellness | Massage Therapy in Standish, Maine",
    template: "%s | Tirta Calm Wellness",
  },
  description:
    "Private massage therapy studio in Standish, Maine offering Swedish, deep tissue, hot stone, and reflexology sessions.",
  keywords: [
    "massage therapy Standish Maine",
    "Tirta Calm Wellness",
    "deep tissue massage",
    "Swedish massage",
    "hot stone massage",
    "reflexology",
    "book massage appointment",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tirta Calm Wellness | Massage Therapy in Standish, Maine",
    description:
      "Book calming, professional massage sessions in a private studio setting.",
    url: "https://tirtacalmwellness.com",
    siteName: "Tirta Calm Wellness",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tirta Calm Wellness",
    description:
      "Private massage therapy studio in Standish, Maine. Book your session online.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
