import { Gift, Truck, Star } from "lucide-react";
import OrderButton from "./OrderButton";

export default function FinalCTA() {
  return (
    <section className="bg-cocoon-brown py-16 md:py-24 relative overflow-hidden">
      {/* Déco arrière-plan */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-cocoon-terracotta/10 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center gap-8">
        {/* Étoiles */}
        <div className="flex items-center gap-2">
          <div className="flex text-amber-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" />
            ))}
          </div>
          <span className="text-cocoon-sand text-sm font-medium">
            4,9 / 5 · Approuvé par 200+ mamans béninoises
          </span>
        </div>

        {/* Titre */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-cocoon-cream leading-[1.1] tracking-tight">
          Votre grossesse mérite{" "}
          <span className="text-cocoon-terracotta-light">
            des nuits de rêve
          </span>
        </h2>

        <p className="text-lg text-cocoon-sand leading-relaxed max-w-xl">
          Ne passez plus une nuit de plus à vous retourner dans tous les sens.
          Commandez Cocoon maintenant et profitez d&apos;un vrai confort dès la première
          nuit.
        </p>

        {/* Badges */}
        <div className="flex flex-wrap justify-center gap-3">
          <span className="flex items-center gap-1.5 text-xs font-bold text-cocoon-cream bg-white/10 border border-white/20 px-4 py-2 rounded-full">
            <Gift size={13} />
            Pompe manuelle offerte
          </span>
          <span className="flex items-center gap-1.5 text-xs font-bold text-cocoon-cream bg-white/10 border border-white/20 px-4 py-2 rounded-full">
            <Truck size={13} />
            Livraison gratuite au Bénin
          </span>
        </div>

        {/* Prix + CTA */}
        <div className="flex flex-col items-center gap-3">
          <OrderButton
            label="Précommander mon Cocoon — 40 000 FCFA"
            size="lg"
            variant="light"
          />
          <p className="text-xs text-cocoon-sand-dark">
            Précommande · 50% à la confirmation · 50% à la livraison · Aucun frais caché
          </p>
        </div>
      </div>
    </section>
  );
}
