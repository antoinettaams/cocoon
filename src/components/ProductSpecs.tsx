import { Ruler, Weight, Layers, Wind, RefreshCw, Sun } from "lucide-react";
import OrderButton from "./OrderButton";

const specs = [
  {
    icon: Ruler,
    label: "Dimensions gonflé",
    value: "170 × 65 × 22 cm",
    note: "Convient pour lit simple, double ou matelas au sol",
  },
  {
    icon: Weight,
    label: "Poids",
    value: "Environ 1,3 kg",
    note: "Ultra-léger — à emporter partout avec soi",
  },
  {
    icon: Layers,
    label: "Ouvertures",
    value: "Ventre · Poitrine · Visage",
    note: "Conçues pour tous les stades de la grossesse",
  },
  {
    icon: Wind,
    label: "Gonflage",
    value: "Pompe manuelle incluse",
    note: "Prêt à l'emploi en moins d'une minute",
  },
  {
    icon: RefreshCw,
    label: "Entretien",
    value: "Essuyage humide",
    note: "Surface lisse, facile à nettoyer après utilisation",
  },
  {
    icon: Sun,
    label: "Usage",
    value: "Intérieur & extérieur",
    note: "Peut aussi être utilisé comme flotteur en piscine",
  },
];

export default function ProductSpecs() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Intro */}
          <div className="lg:sticky lg:top-24">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
              Caractéristiques
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-5 leading-tight">
              Un produit pensé dans les moindres détails
            </h2>
            <p className="text-cocoon-text text-lg leading-relaxed mb-8">
              Cocoon a été conçu pour s&apos;adapter à votre corps tel qu&apos;il
              évolue pendant la grossesse — léger, compact, et incroyablement
              confortable.
            </p>
            <div className="bg-cocoon-cream rounded-2xl p-5 space-y-3 mb-8">
              <p className="text-sm font-bold text-cocoon-brown">
                Inclus dans votre commande
              </p>
              <ul className="space-y-2 text-sm text-cocoon-text">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cocoon-terracotta shrink-0" />
                  1 matelas Cocoon gonflable
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cocoon-terracotta shrink-0" />
                  1 pompe manuelle (offerte)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cocoon-terracotta shrink-0" />
                  Livraison à domicile gratuite
                </li>
              </ul>
            </div>
            <OrderButton label="Commander — 40 000 FCFA" size="md" />
          </div>

          {/* Grille de specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {specs.map(({ icon: Icon, label, value, note }) => (
              <div
                key={label}
                className="p-5 rounded-2xl border border-cocoon-sand hover:border-cocoon-sand-dark hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-cocoon-sand flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-cocoon-terracotta" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-cocoon-brown-light">
                    {label}
                  </span>
                </div>
                <p className="font-bold text-cocoon-brown text-base mb-1">{value}</p>
                <p className="text-xs text-cocoon-text leading-relaxed">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
