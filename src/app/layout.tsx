import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import "./globals.css";

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
      <body className={`${inter.className} relative min-h-screen overflow-x-hidden bg-black`}>
        <div className="fixed inset-0 bg-orange-900/50 mt-60 h-[20rem] w-[100rem] max-w-[100vw] blur-[25rem] rounded-full -z-10" />
        {children}
      </body>
    </html>
  );
}
