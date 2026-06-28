import { CreditCard, Eye, HeartHandshake, MessageCircle } from "lucide-react";
import OrderButton from "./OrderButton";

const guarantees = [
  {
    icon: CreditCard,
    title: "Paiement en deux fois, sans risque",
    desc: "50% d'acompte lors de notre appel de confirmation, le reste en espèces à la livraison. Aucun paiement en ligne.",
  },
  {
    icon: Eye,
    title: "Vous inspectez avant de payer le solde",
    desc: "À la livraison, le livreur attend que vous vérifiez votre Cocoon. Tout est bon ? Vous réglez les 50% restants.",
  },
  {
    icon: HeartHandshake,
    title: "On s'arrange si vous n'êtes pas contente",
    desc: "Notre priorité : que vous soyez heureuse de votre achat. Si quelque chose ne va pas, contactez-nous — on trouve une solution.",
  },
  {
    icon: MessageCircle,
    title: "Support disponible 7 jours sur 7",
    desc: "Une question avant ou après la commande ? Notre équipe répond rapidement sur WhatsApp, à toute heure.",
  },
];

export default function RiskFreeGuarantee() {
  return (
    <section className="bg-cocoon-cream py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            Zéro risque
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-4 leading-tight">
            Commandez sans la moindre inquiétude
          </h2>
          <p className="text-lg text-cocoon-text leading-relaxed">
            Nous avons conçu notre processus de commande pour que vous n&apos;ayez
            aucune raison d&apos;hésiter. Voici pourquoi vous pouvez nous faire confiance.
          </p>
        </div>

        {/* Garanties */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {guarantees.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 bg-white rounded-2xl p-6 shadow-sm border border-cocoon-sand/60"
            >
              <div className="w-11 h-11 rounded-xl bg-cocoon-sand flex items-center justify-center shrink-0 mt-0.5">
                <Icon size={20} className="text-cocoon-terracotta" />
              </div>
              <div>
                <h3 className="font-bold text-cocoon-brown text-base mb-1.5 leading-snug">
                  {title}
                </h3>
                <p className="text-sm text-cocoon-text leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA final */}
        <div className="text-center bg-white rounded-3xl p-8 shadow-sm border border-cocoon-sand/60">
          <p className="text-lg font-bold text-cocoon-brown mb-2">
            Prête à profiter du meilleur confort de grossesse ?
          </p>
          <p className="text-cocoon-text text-sm mb-6">
            40 000 FCFA · Pompe offerte · Livraison gratuite · 50% à la confirmation
          </p>
          <OrderButton label="Précommander sans risque" size="lg" />
        </div>
      </div>
    </section>
  );
}
