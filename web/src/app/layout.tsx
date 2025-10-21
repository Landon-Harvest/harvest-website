import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});
const sora = Sora({ variable: "--font-sora", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harvest Analytics — Business Intelligence & AI Consulting",
  description:
    "Harvest Analytics helps teams turn data into outcomes—BI modernization, analytics engineering, data science, and ML.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${plexMono.variable} ${sora.variable} antialiased`}>
        <Header />
        <main className="container py-10 md:py-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
