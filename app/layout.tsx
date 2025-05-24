// app/layout.tsx
import "./globals.css";
import AppBar from "./components/AppBar";
import { Inter } from "next/font/google";

const inter = Inter({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "MagicMoments - AI Art Generator for Creatives",
  description:
    "Transform your ideas into stunning illustrations and logos with our AI-powered art generator",
  keywords: [
    "AI art",
    "illustration",
    "logo design",
    "creative tools",
    "AI generator",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen bg-white dark:bg-gray-900">
        <AppBar />
        <main className="flex min-h-screen flex-col">{children}</main>
      </body>
    </html>
  );
}
