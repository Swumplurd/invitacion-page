import type { Metadata } from "next";
import { Great_Vibes } from "next/font/google";

import "./globals.css";
import Head from "next/head";

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
      <Head>
        <meta property="og:title" content="Invitacion • Ana Fernanda"/>
        <meta property="og:description" content="Invitacion especial para el Baby Shower de Ana Fernanda, por favor entra al link y confirma tu asistencia"/>
        <meta property="og:image" content="data:image/jpeg;base64,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"/>
        <meta property="og:url" content="https://invitacion-ana-fernanda.vercel.app/"/>
      </Head>
      <body className="bg-brown-dark">{children}</body>
    </html>
  );
}
