import { Users, Star, Clock, BadgeCheck } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "200+",
    label: "Mamans satisfaites au Bénin",
  },
  {
    icon: Star,
    value: "4,9 / 5",
    label: "Note moyenne sur les avis clients",
  },
  {
    icon: Clock,
    value: "< 48 h",
    label: "Délai moyen de confirmation commande",
  },
  {
    icon: BadgeCheck,
    value: "0 FCFA",
    label: "De frais cachés ou surprise",
  },
];

export default function SocialProofCounter() {
  return (
    <section className="bg-cocoon-brown py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                <Icon size={20} className="text-cocoon-terracotta-light" />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-black text-cocoon-cream leading-none">
                  {value}
                </p>
                <p className="text-xs md:text-sm text-cocoon-sand mt-1.5 leading-snug">
                  {label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
