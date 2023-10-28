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
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ffffff"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ffffff"/>
        <meta property="og:title" content="Invitacion • Ana Fernanda"/>
        <meta property="og:description" content="Invitacion especial para el Baby Shower de Ana Fernanda, por favor entra al link y confirma tu asistencia"/>
        <meta property="og:image" content="https://i.pinimg.com/474x/e0/c9/f4/e0c9f4a97de797ddcc1af07d61236ce7.jpg"/>
        <meta property="og:url" content="https://invitacion-ana-fernanda.vercel.app/"/>
      </Head>
      <body className="bg-brown-dark">{children}</body>
    </html>
  );
}
