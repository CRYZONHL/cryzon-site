import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cryzon — Souls trapped in crystal",
  description: "Send them on quests. Return with rewards… or never return at all.",
  icons: { icon: "/favicon.png" }, // your logo file
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
