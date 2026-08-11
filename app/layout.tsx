import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jpcreativo.com.ar"),
  title: {
    default: "Jotape Creativo — Diseño gráfico, identidad y producción",
    template: "%s — Jotape Creativo",
  },
  description:
    "Estudio de diseño gráfico en Concordia, Entre Ríos. Identidad de marca, logos, packaging, diseño editorial, cartelería, señalética y comunicación.",
  keywords: [
    "diseño gráfico",
    "estudio de diseño",
    "branding",
    "identidad de marca",
    "diseño de logos",
    "packaging",
    "diseño editorial",
    "cartelería",
    "señalética",
    "Concordia",
    "Entre Ríos",
    "Jotape Creativo",
  ],
  authors: [{ name: "Juan Pedro Carbonara", url: "https://jpcreativo.com.ar" }],
  creator: "Jotape Creativo",
  publisher: "Jotape Creativo",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://jpcreativo.com.ar",
    siteName: "Jotape Creativo",
    title: "Jotape Creativo — Diseño gráfico, identidad y producción",
    description:
      "Identidad, packaging, editorial, cartelería y comunicación para marcas con personalidad.",
  },
  twitter: {
    card: "summary",
    title: "Jotape Creativo — Diseño gráfico, identidad y producción",
    description:
      "Estudio de diseño gráfico en Concordia, Entre Ríos.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          rel="icon"
          href="/favicon-light.svg"
          media="(prefers-color-scheme: light)"
          type="image/svg+xml"
        />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          media="(prefers-color-scheme: dark)"
          type="image/svg+xml"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Jotape Creativo",
              url: "https://jpcreativo.com.ar",
              email: "juanpedrocarbonara@gmail.com",
              telephone: "+54 9 341 2 123601",
              image: "https://jpcreativo.com.ar/brand/logo-horizontal-color.svg",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Concordia",
                addressRegion: "Entre Ríos",
                addressCountry: "AR",
              },
              sameAs: ["https://www.instagram.com/jotape.creativo/"],
              areaServed: "Argentina",
              knowsAbout: [
                "Diseño gráfico",
                "Identidad de marca",
                "Packaging",
                "Diseño editorial",
                "Cartelería",
                "Señalética",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
