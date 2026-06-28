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
    title: "Dos et hanches soulagés",
    desc: "L'ouverture ventrale répartit uniformément le poids de votre ventre et libère la pression sur votre colonne vertébrale, vos hanches et vos lombaires.",
    highlight: true,
  },
  {
    icon: Heart,
    title: "Bien-être du bébé favorisé",
    desc: "La position ventrale améliore la circulation sanguine, ce qui favorise un meilleur apport en nutriments et oxygène pour votre bébé tout au long de la nuit.",
    highlight: false,
  },
  {
    icon: Moon,
    title: "Sommeil profond retrouvé",
    desc: "Fini les insomnies liées à la grossesse. Avec Cocoon, retrouvez la position de sommeil que vous aimiez avant — sur le ventre — pour des nuits enfin réparatrices.",
    highlight: false,
  },
  {
    icon: Wind,
    title: "Réduction des gonflements",
    desc: "Allongée sur le ventre en appui sur Cocoon, votre circulation est optimisée. Les jambes et les chevilles gonflées par la grossesse récupèrent naturellement.",
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
            Six bienfaits concrets pour votre grossesse
          </h2>
          <p className="text-cocoon-text text-lg leading-relaxed">
            Conçu pour répondre aux inconforts les plus fréquents pendant la
            grossesse — de façon simple, naturelle et efficace.
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
            Livraison gratuite · Pompe manuelle offerte · Paiement à la livraison
          </p>
        </div>
      </div>
    </section>
  );
}
