import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oluwagbogo Timothy Dada — Software Developer & Product Builder",
  description: "Personal portfolio of Oluwagbogo Timothy Dada, showcasing web development, digital products, business platforms and AI automation.",
  keywords: ["Oluwagbogo Dada", "Software Developer", "Web Developer", "AI Automation", "Ire Mediatech Hub"],
  openGraph: {
    title: "Oluwagbogo Timothy Dada",
    description: "Building digital products and practical software for real-world problems.",
    type: "website"
  }
};
export const viewport: Viewport = { themeColor: "#0b1020", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}