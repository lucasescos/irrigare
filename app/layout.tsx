import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "IRRIGARE - Sistemas de Irrigação Automatizada",
    template: "%s | IRRIGARE"
  },
  description: "Suas plantas sempre perfeitas. Você sempre livre. Sistemas de irrigação automatizada e integrada para residências em Porto Alegre.",
  keywords: ["irrigação", "automatizada", "plantas", "jardim", "porto alegre", "residencial", "sistema de rega"],
  authors: [{ name: "IRRIGARE" }],
  creator: "IRRIGARE",
  metadataBase: new URL("https://irrigare.com.br"),
  openGraph: {
    title: "IRRIGARE - Sistemas de Irrigação Automatizada",
    description: "Suas plantas sempre perfeitas. Você sempre livre. Sistemas de irrigação automatizada e integrada para residências em Porto Alegre.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
