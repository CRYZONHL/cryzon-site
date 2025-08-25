// app/layout.js
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// If you later add a custom domain, set NEXT_PUBLIC_SITE_URL in Vercel.
// For now you can hardcode your vercel URL or your future domain.
const base =
  process.env.NEXT_PUBLIC_SITE_URL || "https://cryzon-site.vercel.app";

export const metadata = {
  metadataBase: new URL(base),

  title: {
    default: "Cryzon — Souls trapped in crystal",
    template: "%s · Cryzon",
  },

  description:
    "Ghostly crystal visages on the XRP Ledger. Send them on quests. Return with rewards… or never return at all.",

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },

  openGraph: {
    title: "Cryzon — Souls trapped in crystal",
    description:
      "Ghostly crystal visages on the XRP Ledger. Send them on quests. Return with rewards… or never return at all.",
    url: base,
    siteName: "Cryzon",
    images: [
      {
        url: "/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Cryzon — Souls trapped in crystal",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Cryzon — Souls trapped in crystal",
    description:
      "Ghostly crystal visages on the XRP Ledger. Send them on quests. Return with rewards… or never return at all.",
    creator: "@CryzonHL", // put your handle or remove this line
    images: ["/og-cover.png"],
  },

  manifest: "/site.webmanifest",
  other: {
    "theme-color": "#0b0b0b",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}