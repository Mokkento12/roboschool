import "../styles/globals.css";
import { Jost } from "next/font/google";
import type { Metadata } from "next";

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
    <html lang="ru">
      <body className={jost.className}>{children}</body>
    </html>
  );
}
