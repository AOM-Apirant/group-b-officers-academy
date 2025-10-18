import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Group B Officers Academy",
  description: "Group B Officers Academy is a platform for officers to learn and grow.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Group B Officers Academy",
    description: "Group B Officers Academy is a platform for officers to learn and grow.",
    url: "https://groupbofficersacademy.com",
    siteName: "Group B Officers Academy",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Group B Officers Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Group B Officers Academy",
    description: "Group B Officers Academy is a platform for officers to learn and grow.",
    images: ["/favicon.png"],
  },
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
        suppressHydrationWarning
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
