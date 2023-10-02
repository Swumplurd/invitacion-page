import "./globals.css";
import type { Metadata } from "next";

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
    <html lang="es">
      <body className="bg-secondary">{children}</body>
    </html>
  );
}
