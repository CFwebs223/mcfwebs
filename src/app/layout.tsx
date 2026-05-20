import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "mcf.webs | Premium Websites & Digital Products",
  description:
    "mcf.webs builds premium websites, digital menus, booking systems and digital products for businesses that need a sharper online presence.",
  openGraph: {
    title: "mcf.webs | Premium Websites & Digital Products",
    description:
      "Premium websites, digital menus, booking systems and digital products for businesses ready to look sharper online.",
    siteName: "mcf.webs",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable}`}
    >
      <body className="font-sans text-charcoal bg-ivory antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
