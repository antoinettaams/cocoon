import { Gift, Truck } from "lucide-react";

export default function AnnouncementBar() {
  return (
    <div className="bg-cocoon-brown text-cocoon-cream py-2.5 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm font-medium text-center">
        <span className="flex items-center gap-1.5">
          <Gift size={14} className="text-cocoon-terracotta-light shrink-0" />
          Pompe manuelle offerte · Livraison gratuite au Bénin
        </span>
        <span className="hidden sm:block text-cocoon-sand-dark">·</span>
        <span className="flex items-center gap-1.5">
          <Truck size={14} className="text-cocoon-terracotta-light shrink-0" />
          Précommande — 50% à la confirmation · 50% à la livraison
        </span>
      </div>
    </div>
  );
}
