import { X, CheckCircle2 } from "lucide-react";
import OrderButton from "./OrderButton";

const before = [
  "Nuits agitées, incapable de trouver une position confortable",
  "Difficile de trouver une position confortable",
  "Se réveiller épuisée après de longues heures au lit",
  "Coussin de grossesse classique qui glisse et tombe",
  "Des nuits inconfortables, nuit après nuit",
];

const after = [
  "Dormir sur le ventre comme avant, sans pression sur votre ventre",
  "Dos et hanches enfin bien installés dès la première nuit",
  "Se lever reposée et de bonne humeur chaque matin",
  "Matelas stable, léger et facile à transporter partout",
  "Sérénité retrouvée pour profiter pleinement de votre grossesse",
];

export default function WhyCocoon() {
  return (
    <section className="bg-cocoon-cream py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            Avant / Après Cocoon
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-4 leading-tight">
            Ce que change un seul matelas
          </h2>
          <p className="text-lg text-cocoon-text leading-relaxed">
            La grossesse est un cadeau — votre sommeil ne devrait pas en être
            la victime. Cocoon change concrètement votre quotidien.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Avant */}
          <div className="bg-white rounded-2xl p-6 border border-red-100">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                <X size={16} className="text-red-500" />
              </div>
              <h3 className="font-bold text-cocoon-brown text-lg">
                Sans Cocoon
              </h3>
            </div>
            <ul className="space-y-3">
              {before.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-cocoon-text">
                  <X size={16} className="text-red-400 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Après */}
          <div className="bg-cocoon-brown rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <CheckCircle2 size={16} className="text-cocoon-terracotta-light" />
              </div>
              <h3 className="font-bold text-cocoon-cream text-lg">
                Avec Cocoon
              </h3>
            </div>
            <ul className="space-y-3">
              {after.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-cocoon-sand">
                  <CheckCircle2
                    size={16}
                    className="text-cocoon-terracotta-light shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <OrderButton
            label="Changer mes nuits dès aujourd'hui"
            size="lg"
          />
        </div>
      </div>
    </section>
  );
}
