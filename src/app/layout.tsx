import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google'

const inter = Inter({
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "GAPSTAYS",
  description: "Comfort living in the heart of the Pune",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-neutral-900`}>
        {children}
      </body>
      <GoogleAnalytics gaId="G-SVHPLV5TPN" />
    </html>
  );
}
