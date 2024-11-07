import "@radix-ui/themes/styles.css";
import './theme-config.css';
import "./globals.css";
import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Theme, ThemePanel } from '@radix-ui/themes'
import NavBar from "./Navbar/NavBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "App Router Demo",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Theme accentColor="bronze" radius="small">
            <NavBar />
          <main className="p-4">
            {children}
          </main>
        </Theme>
      </body>
    </html>
  );
}
