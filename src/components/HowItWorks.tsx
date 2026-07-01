import { Wind, AirVent, Layers } from "lucide-react";
import Image from "next/image";

const steps = [
  {
    icon: Wind,
    num: "01",
    title: "Gonflez en quelques secondes",
    desc: "Dépliez Cocoon, utilisez la pompe manuelle offerte et gonflez selon votre confort. Prêt en moins d'une minute.",
  },
  {
    icon: Layers,
    num: "02",
    title: "Positionnez-le sur votre lit",
    desc: "Placez Cocoon sur n'importe quelle surface plane. L'ouverture ventrale est conçue pour accueillir votre ventre sans pression.",
  },
  {
    icon: AirVent,
    num: "03",
    title: "Profitez d'un repos complet",
    desc: "Allongez-vous, fermez les yeux. Cocoon s'occupe du reste — ventre, seins, visage, tout est soutenu avec douceur.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Étapes */}
          <div>
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
              Comment ça marche
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-8 leading-tight">
              Trois étapes pour un repos parfait
            </h2>

            <div className="space-y-8">
              {steps.map(({ icon: Icon, num, title, desc }, idx) => (
                <div key={num} className="flex gap-5">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-cocoon-sand flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-cocoon-terracotta" />
                    </div>
                    {idx < steps.length - 1 && (
                      <div className="w-px flex-1 mt-2 bg-cocoon-sand" />
                    )}
                  </div>
                  <div className="pb-8 lg:pb-0">
                    <span className="text-xs font-bold text-cocoon-terracotta uppercase tracking-wider">
                      Étape {num}
                    </span>
                    <h3 className="font-bold text-lg text-cocoon-brown mt-1 mb-2">
                      {title}
                    </h3>
                    <p className="text-sm text-cocoon-text leading-relaxed">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visuel produit */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="absolute -inset-6 bg-cocoon-terracotta/10 rounded-full blur-3xl" />
              <div className="relative bg-cocoon-cream rounded-3xl p-8 shadow-lg">
                <Image
                  src="/matelas-cocoon.png"
                  alt="Matelas Cocoon — Vue du produit"
                  width={600}
                  height={750}
                  className="w-full h-auto"
                />
                {/* Badges flottants */}
                <div className="absolute -top-3 -right-3 bg-cocoon-brown text-cocoon-cream text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
                  40 000 FCFA
                </div>
                <div className="absolute -bottom-3 -left-3 bg-white text-cocoon-green text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-green-200">
                  Livraison gratuite
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
