import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const dancingScript = Dancing_Script({ subsets: ["latin"], variable: "--font-dancing-script" });

export const metadata: Metadata = {
  title: "Por lempira siempre | Wilson Pineda",
  description: "Sistema de gestión y registro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${dancingScript.variable}`}>
      <body className="font-sans antialiased text-gray-900 bg-gray-50 min-h-screen">
        {children}
      </body>
    </html>
  );
}
