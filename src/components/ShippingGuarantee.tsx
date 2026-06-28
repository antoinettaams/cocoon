import { Truck, Gift, Clock, Phone, MapPin, CreditCard } from "lucide-react";

const items = [
  {
    icon: Truck,
    title: "Livraison gratuite au Bénin",
    desc: "Cotonou, Porto-Novo, Parakou, Bohicon, Natitingou… Nous livrons dans toutes les villes du Bénin, sans frais de port.",
  },
  {
    icon: Gift,
    title: "Pompe manuelle offerte",
    desc: "Chaque commande est livrée avec une pompe manuelle. Aucun accessoire supplémentaire à acheter — tout est inclus.",
  },
  {
    icon: Clock,
    title: "Livraison en environ 2 semaines",
    desc: "Il s'agit d'une précommande. Après votre appel de confirmation, votre Cocoon vous est livré à domicile sous 2 semaines.",
  },
  {
    icon: CreditCard,
    title: "Paiement en deux fois",
    desc: "50% d'acompte lors de l'appel de confirmation, le solde en espèces à la livraison. Aucun paiement en ligne, zéro risque.",
  },
  {
    icon: Phone,
    title: "Suivi personnalisé",
    desc: "Notre équipe vous contacte après votre commande pour confirmer et vous tenir informée du statut de votre livraison.",
  },
  {
    icon: MapPin,
    title: "Partout au Bénin",
    desc: "En zone urbaine comme en zone rurale, nous faisons le nécessaire pour que votre Cocoon vous parvienne où que vous soyez.",
  },
];

export default function ShippingGuarantee() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            Livraison & Garanties
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown mb-4 leading-tight">
            Commandez en toute confiance
          </h2>
          <p className="text-lg text-cocoon-text leading-relaxed">
            De la commande à la livraison, nous gérons tout. Vous n&apos;avez
            qu&apos;à remplir le formulaire — on s&apos;occupe du reste.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 rounded-xl border border-cocoon-sand hover:border-cocoon-sand-dark hover:shadow-sm transition-all"
            >
              <div className="w-10 h-10 rounded-lg bg-cocoon-sand flex items-center justify-center shrink-0">
                <Icon size={18} className="text-cocoon-terracotta" />
              </div>
              <div>
                <h3 className="font-bold text-cocoon-brown text-sm mb-1">
                  {title}
                </h3>
                <p className="text-xs text-cocoon-text leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
