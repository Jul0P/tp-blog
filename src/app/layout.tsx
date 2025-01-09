import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MaxWidthWrapper from "@/components/layout/MaxWidthWrapper";
import { SearchProvider } from "@/context/SearchContext";
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
    title: "HotCoffee",
    description: "TP Blog",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="fr" className="scroll-smooth">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <MaxWidthWrapper className="px-4">
                    <SearchProvider>
                        <Header />
                        {children}
                    </SearchProvider>
                </MaxWidthWrapper>
                <Footer />
            </body>
        </html>
    );
}
