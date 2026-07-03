import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Fatoumata K.",
    location: "Cotonou",
    rating: 5,
    date: "il y a 2 semaines",
    text: "Depuis ma 6e semaine de grossesse, je n'arrivais plus à trouver une position confortable le soir. Mon mari a commandé Cocoon et franchement, la première nuit j'ai dormi d'une traite. C'est incroyable comme ça peut changer autant de choses.",
    highlight: "la première nuit j'ai dormi d'une traite",
  },
  {
    name: "Adjovi M.",
    location: "Porto-Novo",
    rating: 5,
    date: "il y a 1 mois",
    text: "J'étais sceptique au début, mais la livraison était rapide et gratuite comme promis. La pompe manuelle était bien dans le colis. Le matelas est vraiment de qualité, bien épais. Je le recommande à toutes les futures mamans du Bénin.",
    highlight: "Je le recommande à toutes les futures mamans",
  },
  {
    name: "Roseline A.",
    location: "Parakou",
    rating: 5,
    date: "il y a 3 semaines",
    text: "Au 7e mois, je n'arrivais plus à me reposer confortablement. J'ai commandé Cocoon un jeudi, reçu le vendredi, et dès le week-end j'ai retrouvé un vrai sommeil. Un vrai confort au quotidien.",
    highlight: "j'ai retrouvé un vrai sommeil",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex text-amber-400 gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} fill="currentColor" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            Avis clients
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-4 leading-tight">
            Elles ont testé Cocoon, voici ce qu&apos;elles en pensent
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} fill="currentColor" />
              ))}
            </div>
            <span className="font-semibold text-cocoon-brown">
              4,9 sur 5
            </span>
            <span className="text-cocoon-text text-sm">
              · 200+ commandes au Bénin
            </span>
          </div>
        </div>

        {/* Cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map(({ name, location, rating, date, text, highlight }, idx) => (
            <div
              key={name}
              className={`rounded-2xl p-6 flex flex-col gap-4 ${
                idx === 1
                  ? "bg-cocoon-brown text-cocoon-cream md:scale-105 shadow-xl"
                  : "bg-cocoon-cream"
              }`}
            >
              {/* Quote icon */}
              <Quote
                size={24}
                className={idx === 1 ? "text-cocoon-terracotta-light" : "text-cocoon-sand-dark"}
                fill="currentColor"
              />

              {/* Texte */}
              <p className={`text-sm leading-relaxed flex-1 ${idx === 1 ? "text-cocoon-sand" : "text-cocoon-text"}`}>
                {text.split(highlight).map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && (
                      <strong className={idx === 1 ? "text-cocoon-cream" : "text-cocoon-brown"}>
                        {highlight}
                      </strong>
                    )}
                  </span>
                ))}
              </p>

              {/* Auteur */}
              <div className="flex items-center justify-between pt-2 border-t border-cocoon-sand/30">
                <div>
                  <p className={`font-bold text-sm ${idx === 1 ? "text-cocoon-cream" : "text-cocoon-brown"}`}>
                    {name}
                  </p>
                  <p className={`text-xs ${idx === 1 ? "text-cocoon-sand-dark" : "text-cocoon-text"}`}>
                    {location} · {date}
                  </p>
                </div>
                <Stars count={rating} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
