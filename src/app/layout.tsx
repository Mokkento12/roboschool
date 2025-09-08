import "../styles/globals.css";

import { Jost } from "next/font/google";
import type { Metadata } from "next";
import { Providers } from "./providers";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Roboschool",
  description: "Учебный макет",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={jost.variable}>
      <body className={jost.className}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
