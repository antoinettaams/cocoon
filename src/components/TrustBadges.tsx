import { Gift, Truck, Shield, Zap } from "lucide-react";

const badges = [
  {
    icon: Gift,
    title: "Pompe manuelle offerte",
    desc: "Incluse avec chaque commande. Aucun frais supplémentaire.",
    color: "text-cocoon-terracotta",
    bg: "bg-orange-50",
  },
  {
    icon: Truck,
    title: "Livraison gratuite",
    desc: "Partout au Bénin — Cotonou, Porto-Novo, Parakou et plus.",
    color: "text-cocoon-green",
    bg: "bg-green-50",
  },
  {
    icon: Shield,
    title: "Satisfaction garantie",
    desc: "Pas satisfaite ? Nous trouvons une solution ensemble.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Zap,
    title: "Précommande",
    desc: "Confirmation sous 24 h. Livraison à domicile sous ~2 semaines.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-white border-b border-cocoon-sand py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {badges.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-3 p-4"
            >
              <div className={`w-12 h-12 rounded-full ${bg} flex items-center justify-center shrink-0`}>
                <Icon size={22} className={color} />
              </div>
              <div>
                <p className="font-bold text-cocoon-brown text-sm sm:text-base leading-tight">
                  {title}
                </p>
                <p className="text-xs sm:text-sm text-cocoon-text mt-1 leading-snug">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
