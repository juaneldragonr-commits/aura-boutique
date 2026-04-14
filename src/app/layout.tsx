import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/src/context/CartContext";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer"; // Importación del nuevo Footer

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aura Boutique | Moda Premium",
  description: "Tu tienda de moda de confianza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          <Navbar />
          {/* El div con flex-grow asegura que el footer siempre se empuje al fondo */}
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}