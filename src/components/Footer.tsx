import { Gift, Truck, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cocoon-dark text-cocoon-sand-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          {/* Brand */}
          <div className="space-y-3">
            <div>
              <span className="text-2xl font-black text-cocoon-cream tracking-tight">
                Cocoon
              </span>
              <span className="text-cocoon-terracotta">.</span>
            </div>
            <p className="text-sm leading-relaxed">
              Le matelas de grossesse conçu pour les futures mamans béninoises.
              Confort, bien-être et sérénité pour chaque trimestre.
            </p>
          </div>

          {/* Infos commande */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cocoon-cream">
              Votre commande
            </h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Truck size={14} className="text-cocoon-terracotta shrink-0" />
                Livraison gratuite au Bénin
              </li>
              <li className="flex items-center gap-2">
                <Gift size={14} className="text-cocoon-terracotta shrink-0" />
                Pompe manuelle offerte
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-cocoon-terracotta shrink-0" />
                Paiement à la livraison
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-cocoon-cream">
              Nous contacter
            </h4>
            <p className="text-sm leading-relaxed">
              Une question sur votre commande ou sur le produit ? Notre équipe
              est disponible pour vous aider.
            </p>
            <p className="text-sm font-semibold text-cocoon-cream">
              Disponible 7j/7 par WhatsApp
            </p>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cocoon-brown-light">
          <p>
            &copy; {new Date().getFullYear()} Cocoon — Tous droits réservés
          </p>
          <p>Conçu avec amour pour les futures mamans du Bénin</p>
        </div>
      </div>
    </footer>
  );
}
