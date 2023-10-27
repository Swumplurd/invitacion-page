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
        <meta property="og:image" content="https://img.freepik.com/free-vector/flat-design-bear-family-illustration_23-2149539186.jpg?w=360"/>
        <meta property="og:url" content="https://invitacion-ana-fernanda.vercel.app/"/>
      </Head>
      <body className="bg-brown-dark">{children}</body>
    </html>
  );
}
