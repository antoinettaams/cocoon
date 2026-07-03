import {
  Activity,
  Heart,
  Moon,
  Wind,
  Smile,
  StretchHorizontal,
} from "lucide-react";
import OrderButton from "./OrderButton";

const benefits = [
  {
    icon: Activity,
    title: "Confort pour le dos et les hanches",
    desc: "L'ouverture ventrale répartit uniformément le poids de votre ventre pour un meilleur confort au niveau du dos et des hanches.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Un espace pensé pour votre ventre",
    desc: "L'ouverture accueille votre ventre en douceur, pour vous détendre allongée sans aucune pression.",
    highlight: false,
  },
  {
    icon: Moon,
    title: "Repos confortable",
    desc: "Retrouvez le plaisir de vous reposer allongée sur le ventre, pour des nuits plus sereines.",
    highlight: false,
  },
  {
    icon: Wind,
    title: "Détente et légèreté",
    desc: "Un moment de repos confortable pour souffler et vous relâcher à tout moment de la journée.",
    highlight: false,
  },
  {
    icon: Smile,
    title: "Adapté à toutes les morphologies",
    desc: "Quel que soit votre stade de grossesse ou votre corpulence, Cocoon s'adapte. L'ouverture accueille tous les volumes de ventre du 1er au 9e mois.",
    highlight: false,
  },
  {
    icon: StretchHorizontal,
    title: "Massages faits maison",
    desc: "Allongée sur Cocoon, votre dos est parfaitement accessible. Invitez votre conjoint à vous masser le dos et les lombaires — un vrai bonheur pendant la grossesse.",
    highlight: false,
  },
];

export default function Benefits() {
  return (
    <section className="bg-cocoon-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            Pourquoi Cocoon
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-4 leading-tight">
            Six raisons d&apos;adopter Cocoon
          </h2>
          <p className="text-cocoon-text text-lg leading-relaxed">
            Pensé pour votre confort au quotidien pendant la grossesse.
          </p>
        </div>

        {/* Grille */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc, highlight }) => (
            <div
              key={title}
              className={`rounded-2xl p-6 flex flex-col gap-4 transition-shadow hover:shadow-md ${
                highlight
                  ? "bg-cocoon-brown text-cocoon-cream"
                  : "bg-white text-cocoon-text"
              }`}
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                  highlight
                    ? "bg-white/15"
                    : "bg-cocoon-sand"
                }`}
              >
                <Icon
                  size={22}
                  className={highlight ? "text-cocoon-terracotta-light" : "text-cocoon-terracotta"}
                />
              </div>
              <div>
                <h3
                  className={`font-bold text-lg mb-2 leading-snug ${
                    highlight ? "text-cocoon-cream" : "text-cocoon-brown"
                  }`}
                >
                  {title}
                </h3>
                <p className={`text-sm leading-relaxed ${highlight ? "text-cocoon-sand" : "text-cocoon-text"}`}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA centré */}
        <div className="text-center mt-12">
          <OrderButton label="Je veux mon Cocoon" size="lg" />
          <p className="text-sm text-cocoon-text mt-3">
            Livraison gratuite · Pompe manuelle offerte · Précommande : 50% à la confirmation, 50% à la livraison
          </p>
        </div>
      </div>
    </section>
  );
}
