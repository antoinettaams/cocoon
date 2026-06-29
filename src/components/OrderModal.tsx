"use client";

import { useState, useRef, useEffect } from "react";
import { X, Minus, Plus, Gift, Truck, CheckCircle, Info, Loader2 } from "lucide-react"; // Ajout de Loader2 pour le chargement
import { useOrderModal, type ColorOption } from "@/context/OrderModalContext";

const PRICE = 40000;
// ⚠️ REMPLACE PAR TON ID FORMSPREE ICI
const FORMSPREE_FORM_ID = "xlgylnya"; 

const colorOptions: { id: ColorOption; label: string; hex: string }[] = [
  { id: "beige", label: "Beige", hex: "#D4B896" },
  { id: "bleu", label: "Bleu", hex: "#7AABCF" },
  { id: "rose", label: "Rose", hex: "#D4829A" },
];

export default function OrderModal() {
  const { isOpen, closeModal, selectedColor, setSelectedColor } = useOrderModal();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Nouvel état pour le chargement
  const [errors, setErrors] = useState<Record<string, string>>({});
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen && firstInputRef.current) {
      setTimeout(() => firstInputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const total = PRICE * quantity;
  const acompte = total / 2;

  const formatPrice = (amount: number) =>
    new Intl.NumberFormat("fr-FR").format(amount) + " FCFA";

  const selectedColorLabel = colorOptions.find((c) => c.id === selectedColor)?.label ?? "Beige";

  const validate = () => {
    const next: Record<string, string> = {};
    if (!firstName.trim()) next.firstName = "Veuillez entrer votre prénom.";
    if (!lastName.trim()) next.lastName = "Veuillez entrer votre nom.";
    if (!location.trim()) next.location = "Veuillez indiquer votre lieu de résidence.";
    if (!phone.trim()) next.phone = "Veuillez entrer votre numéro de téléphone.";
    else if (!/^[0-9+\s\-()]{6,15}$/.test(phone.trim()))
      next.phone = "Numéro invalide (ex : +229 97 00 00 00).";
    return next;
  };

  // Gestion de la soumission avec Formspree
  const handleSubmit = async () => {
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Prenom: firstName,
          Nom: lastName,
          Lieu_Residence: location,
          Telephone: phone,
          Couleur: selectedColorLabel,
          Quantite: quantity,
          Total_Commande: formatPrice(total),
          Acompte_50_pourcent: formatPrice(acompte),
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrors({ submit: "Une erreur est survenue lors de l'envoi. Veuillez réessayer." });
      }
    } catch (error) {
      setErrors({ submit: "Erreur réseau. Vérifiez votre connexion internet." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setLocation("");
    setPhone("");
    setQuantity(1);
    setErrors({});
    setSubmitted(false);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in"
      style={{ backgroundColor: "rgba(44, 42, 41, 0.7)", backdropFilter: "blur(4px)" }}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeModal();
      }}
    >
      <div
        className="relative w-full sm:max-w-lg bg-white rounded-t-3xl sm:rounded-2xl shadow-2xl overflow-hidden animate-slide-up max-h-[95dvh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-cocoon-sand shrink-0">
          <div>
            <h2
              id="modal-title"
              className="text-xl font-bold text-cocoon-brown"
            >
              {submitted ? "Précommande reçue !" : "Passer ma précommande"}
            </h2>
            {!submitted && (
              <p className="text-sm text-cocoon-text mt-0.5">
                Remplissez le formulaire — nous vous rappelons sous 48h.
              </p>
            )}
          </div>
          <button
            onClick={closeModal}
            className="p-2 rounded-full hover:bg-cocoon-cream transition-colors text-cocoon-brown-light hover:text-cocoon-brown"
            aria-label="Fermer"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1">
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center px-6 py-10 gap-5">
              <div className="w-16 h-16 rounded-full bg-cocoon-sand flex items-center justify-center">
                <CheckCircle size={32} className="text-cocoon-green" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-cocoon-brown mb-2">
                  Merci, {firstName}&nbsp;!
                </h3>
                <p className="text-cocoon-text leading-relaxed">
                  Votre précommande de{" "}
                  <strong>{quantity} matelas Cocoon ({selectedColorLabel})</strong> a bien été
                  enregistrée. Notre équipe vous appellera sous 48h pour confirmer.
                </p>
              </div>
              <div className="w-full bg-amber-50 border border-amber-200 rounded-xl p-4 text-left">
                <p className="text-sm font-bold text-amber-800 mb-2 flex items-center gap-1.5">
                  <Info size={15} />
                  Comment ça se passe ?
                </p>
                <ol className="space-y-1.5 text-sm text-amber-900">
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    Notre équipe vous appelle sous 48h pour confirmer.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    Vous versez l&apos;acompte de <strong>{formatPrice(acompte)}</strong> (50%).
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-800 text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    Livraison à domicile dans ~2 semaines. Vous payez le solde de <strong>{formatPrice(acompte)}</strong> à la réception.
                  </li>
                </ol>
              </div>
              <div className="w-full bg-cocoon-cream rounded-xl p-4 text-left space-y-2">
                <div className="flex items-center gap-2 text-sm text-cocoon-brown font-medium">
                  <Gift size={16} className="text-cocoon-terracotta shrink-0" />
                  Pompe manuelle offerte avec votre précommande
                </div>
                <div className="flex items-center gap-2 text-sm text-cocoon-brown font-medium">
                  <Truck size={16} className="text-cocoon-terracotta shrink-0" />
                  Livraison gratuite partout au Bénin
                </div>
              </div>
              <button
                onClick={handleReset}
                className="mt-2 px-7 py-3 rounded-full bg-cocoon-brown text-cocoon-cream font-semibold text-sm hover:bg-cocoon-dark transition-colors"
              >
                Fermer
              </button>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} noValidate className="px-6 py-5 space-y-5">
              {/* Message d'erreur global si l'envoi Formspree échoue */}
              {errors.submit && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                  {errors.submit}
                </div>
              )}

              {/* Nom / Prénom */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-semibold text-cocoon-brown mb-1.5"
                  >
                    Prénom <span className="text-cocoon-terracotta">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="firstName"
                    type="text"
                    value={firstName}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setFirstName(e.target.value);
                      if (errors.firstName)
                        setErrors((prev) => ({ ...prev, firstName: "" }));
                    }}
                    placeholder="Amina"
                    className={`w-full px-4 py-3 rounded-xl border text-cocoon-brown text-sm placeholder:text-cocoon-sand-dark bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cocoon-terracotta/40 ${errors.firstName ? "border-red-400" : "border-cocoon-sand hover:border-cocoon-sand-dark"} disabled:opacity-60`}
                  />
                  {errors.firstName && (
                    <p className="text-xs text-red-500 mt-1">{errors.firstName}</p>
                  )}
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-semibold text-cocoon-brown mb-1.5"
                  >
                    Nom <span className="text-cocoon-terracotta">*</span>
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    value={lastName}
                    disabled={isSubmitting}
                    onChange={(e) => {
                      setLastName(e.target.value);
                      if (errors.lastName)
                        setErrors((prev) => ({ ...prev, lastName: "" }));
                    }}
                    placeholder="Koffi"
                    className={`w-full px-4 py-3 rounded-xl border text-cocoon-brown text-sm placeholder:text-cocoon-sand-dark bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cocoon-terracotta/40 ${errors.lastName ? "border-red-400" : "border-cocoon-sand hover:border-cocoon-sand-dark"} disabled:opacity-60`}
                  />
                  {errors.lastName && (
                    <p className="text-xs text-red-500 mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              {/* Lieu de résidence */}
              <div>
                <label
                  htmlFor="location"
                  className="block text-sm font-semibold text-cocoon-brown mb-1.5"
                >
                  Lieu de résidence{" "}
                  <span className="text-cocoon-terracotta">*</span>
                </label>
                <input
                  id="location"
                  type="text"
                  value={location}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setLocation(e.target.value);
                    if (errors.location)
                      setErrors((prev) => ({ ...prev, location: "" }));
                  }}
                  placeholder="Ex : Cotonou, Porto-Novo, Parakou…"
                  className={`w-full px-4 py-3 rounded-xl border text-cocoon-brown text-sm placeholder:text-cocoon-sand-dark bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cocoon-terracotta/40 ${errors.location ? "border-red-400" : "border-cocoon-sand hover:border-cocoon-sand-dark"} disabled:opacity-60`}
                />
                {errors.location && (
                  <p className="text-xs text-red-500 mt-1">{errors.location}</p>
                )}
              </div>

              {/* Téléphone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold text-cocoon-brown mb-1.5"
                >
                  Numéro de téléphone{" "}
                  <span className="text-cocoon-terracotta">*</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  disabled={isSubmitting}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (errors.phone)
                      setErrors((prev) => ({ ...prev, phone: "" }));
                  }}
                  placeholder="Ex : +229 97 00 00 00"
                  className={`w-full px-4 py-3 rounded-xl border text-cocoon-brown text-sm placeholder:text-cocoon-sand-dark bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-cocoon-terracotta/40 ${errors.phone ? "border-red-400" : "border-cocoon-sand hover:border-cocoon-sand-dark"} disabled:opacity-60`}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>

              {/* Couleur */}
              <div>
                <label className="block text-sm font-semibold text-cocoon-brown mb-2">
                  Couleur choisie
                </label>
                <div className="flex gap-3">
                  {colorOptions.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      disabled={isSubmitting}
                      onClick={() => setSelectedColor(c.id)}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border-2 text-sm font-medium transition-all ${
                        selectedColor === c.id
                          ? "border-cocoon-brown text-cocoon-brown bg-cocoon-cream shadow-sm"
                          : "border-cocoon-sand text-cocoon-text hover:border-cocoon-sand-dark"
                      } disabled:opacity-60`}
                    >
                      <span
                        className="w-4 h-4 rounded-full border border-black/10 shrink-0"
                        style={{ backgroundColor: c.hex }}
                      />
                      {c.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantité */}
              <div>
                <label className="block text-sm font-semibold text-cocoon-brown mb-1.5">
                  Quantité
                </label>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-cocoon-sand rounded-xl overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-11 h-11 flex items-center justify-center text-cocoon-brown hover:bg-cocoon-cream transition-colors disabled:opacity-40"
                      disabled={quantity <= 1 || isSubmitting}
                      aria-label="Réduire la quantité"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-12 text-center font-bold text-cocoon-brown text-lg">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-11 h-11 flex items-center justify-center text-cocoon-brown hover:bg-cocoon-cream transition-colors"
                      disabled={isSubmitting}
                      aria-label="Augmenter la quantité"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                  <div className="text-sm text-cocoon-text">
                    40 000 FCFA × {quantity}
                  </div>
                </div>
              </div>

              {/* Récapitulatif prix */}
              <div className="bg-cocoon-cream rounded-xl p-4 space-y-2.5">
                <div className="flex justify-between text-sm text-cocoon-text">
                  <span>Matelas Cocoon × {quantity}</span>
                  <span className="font-semibold text-cocoon-brown">
                    {formatPrice(total)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-cocoon-green font-medium">
                    <Gift size={14} />
                    Pompe manuelle
                  </span>
                  <span className="font-semibold text-cocoon-green">Offerte</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="flex items-center gap-1.5 text-cocoon-green font-medium">
                    <Truck size={14} />
                    Livraison au Bénin
                  </span>
                  <span className="font-semibold text-cocoon-green">Gratuite</span>
                </div>
                <div className="pt-2 mt-2 border-t border-cocoon-sand space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-cocoon-brown">Total</span>
                    <span className="text-xl font-bold text-cocoon-brown">
                      {formatPrice(total)}
                    </span>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold text-amber-800">
                      <span>Acompte à la confirmation (50%)</span>
                      <span>{formatPrice(acompte)}</span>
                    </div>
                    <div className="flex justify-between text-xs text-amber-700">
                      <span>Solde à la livraison (50%)</span>
                      <span>{formatPrice(acompte)}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Note précommande */}
              <div className="flex gap-2.5 bg-blue-50 border border-blue-100 rounded-xl p-3.5">
                <Info size={16} className="text-blue-500 shrink-0 mt-0.5" />
                <p className="text-xs text-blue-700 leading-relaxed">
                  <strong>Comment ça marche ?</strong> Après votre précommande, notre équipe vous appelle sous 48h. Vous payez alors <strong>{formatPrice(acompte)}</strong> d&apos;acompte. Le solde de <strong>{formatPrice(acompte)}</strong> est réglé à la livraison, dans environ 2 semaines.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-full bg-cocoon-brown text-cocoon-cream font-bold text-base hover:bg-cocoon-dark active:scale-95 transition-all shadow-md hover:shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  `Précommander — ${formatPrice(total)}`
                )}
              </button>

              <p className="text-center text-xs text-cocoon-brown-light pb-2">
                Précommande · 50% à la confirmation · 50% à la livraison · Pompe offerte
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}