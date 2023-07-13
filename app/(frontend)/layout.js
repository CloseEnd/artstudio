import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact/Contact";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "close end art gallery",
  description:
    "Discover the Unseen Beauty at Close End Art Gallery Welcome to Close End Art Gallery, where art comes alive with every brushstroke and sculptural form. Immerse yourself in a world of captivating masterpieces. From vibrant paintings that evoke emotions to intricate drawings that spark curiosity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Analytics />
        <Header />
        {children}
        <Contact />
        <Footer />
      </body>
    </html>
  );
}
