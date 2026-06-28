import OrderButton from "./OrderButton";
import { Truck } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-cocoon-sand shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#" aria-label="Cocoon — Retour accueil" className="shrink-0">
          <span className="text-2xl font-black tracking-tight text-cocoon-brown">
            Cocoon
          </span>
          <span className="text-cocoon-terracotta">.</span>
        </a>

        {/* Badge livraison (desktop) */}
        <div className="hidden md:flex items-center gap-1.5 text-xs font-medium text-cocoon-green bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
          <Truck size={13} />
          Livraison gratuite au Bénin
        </div>

        {/* CTA */}
        <OrderButton label="Commander" size="sm" />
      </div>
    </header>
  );
}
