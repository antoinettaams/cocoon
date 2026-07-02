import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { OrderModalProvider } from "@/context/OrderModalContext";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cocoon — Matelas de Grossesse | Livraison Gratuite au Bénin",
  description:
    "Dormez enfin confortablement sur le ventre pendant votre grossesse. Cocoon, le matelas gonflable avec ouverture ventrale conçu pour soulager le dos et les hanches. Pompe manuelle offerte. Livraison gratuite partout au Bénin.",
  keywords: [
    "matelas grossesse",
    "matelas femme enceinte",
    "grossesse confort",
    "Bénin",
    "livraison Cotonou",
    "douleur dos grossesse",
  ],
  openGraph: {
    title: "Cocoon — Matelas de Grossesse | Livraison Gratuite au Bénin",
    description:
      "Le seul matelas qui vous permet de vous allonger sur le ventre pendant toute votre grossesse. Pompe manuelle offerte. Livraison gratuite.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${figtree.variable} h-full antialiased`}>
      <head>
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '880463584582064');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=880463584582064&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body className="min-h-full flex flex-col">
        <OrderModalProvider>{children}</OrderModalProvider>
      </body>
    </html>
  );
}
