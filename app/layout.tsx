import "./globals.css";
import { Great_Vibes } from "next/font/google";
import type { Metadata } from "next";

const great = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-great'
});

export const metadata: Metadata = {
  title: "Invitaciones • Inicio",
  description:
    "Obten invitaciones 100% amigables con el medio ambiente e interactivas para todos tus eventos especiales.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={great.variable} lang="es">
      <body className="bg-secondary">{children}</body>
    </html>
  );
}
