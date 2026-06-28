"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "À partir de quel mois puis-je utiliser Cocoon ?",
    a: "Vous pouvez commencer à utiliser Cocoon dès le premier trimestre. L'ouverture ventrale est conçue pour s'adapter à toutes les tailles de ventre, du début de grossesse jusqu'aux dernières semaines avant l'accouchement.",
  },
  {
    q: "La livraison est-elle vraiment gratuite partout au Bénin ?",
    a: "Oui, absolument. Quel que soit votre quartier à Cotonou, Porto-Novo, Parakou, Abomey, ou n'importe quelle autre ville au Bénin — la livraison est offerte. Nous livrons à domicile, sans frais supplémentaires.",
  },
  {
    q: "Qu'est-ce qui est inclus dans la commande ?",
    a: "Vous recevez le matelas Cocoon ET une pompe manuelle offerte. La pompe est incluse dans le colis, il n'y a rien d'autre à acheter pour pouvoir utiliser votre matelas dès la réception.",
  },
  {
    q: "Comment puis-je payer ma commande ?",
    a: "Le paiement se fait à la livraison. Vous réglez en espèces directement au livreur lorsqu'il vous remet votre colis. Pas de paiement en ligne requis.",
  },
  {
    q: "Combien de temps après la commande serai-je livrée ?",
    a: "Après validation de votre commande, notre équipe vous contacte dans les 24 heures pour confirmer et convenir d'une date de livraison. En général, vous recevez votre Cocoon dans les 2 à 5 jours selon votre ville.",
  },
  {
    q: "Est-ce que Cocoon est facile à ranger et à transporter ?",
    a: "Oui. Cocoon est gonflable, donc une fois dégonflé, il se replie et rentre facilement dans un sac de voyage. Vous pouvez l'emporter chez la famille, à la maternité ou en déplacement sans aucun problème.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-cocoon-sand last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-cocoon-brown group-hover:text-cocoon-terracotta transition-colors text-sm sm:text-base leading-snug">
          {q}
        </span>
        <ChevronDown
          size={20}
          className={`text-cocoon-terracotta shrink-0 mt-0.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-cocoon-text leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-cocoon-cream py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-cocoon-terracotta mb-3">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-cocoon-brown leading-tight">
            Vos questions, nos réponses
          </h2>
        </div>

        <div className="bg-white rounded-2xl px-6 shadow-sm">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
