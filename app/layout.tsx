import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";

import "./globals.css";

const great = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
  variable: '--font-great'
});

export const metadata: Metadata = {
  title: "Invitacion • Ana Fernanda",
  description:
    "Invitacion especial para el Baby Shower de Ana Fernanda, por favor entra al link y confirma tu asistencia",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={great.variable} lang="es">
      <body className="bg-brown-dark">{children}</body>
    </html>
  );
}
