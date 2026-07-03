"use client";

import Image from "next/image";
import { CheckCircle, Gift, Truck, Star } from "lucide-react";
import { useState, useEffect } from "react";
import OrderButton from "./OrderButton";
import { useOrderModal, type ColorOption } from "@/context/OrderModalContext";

const keyPoints = [
  "S'allonger sur le ventre tout au long de la grossesse",
  "Confort pour le dos et les hanches",
  "Confort optimal pour toutes les morphologies",
  "Utilisable dès le 1er trimestre jusqu'à l'accouchement",
];

const colorOptions: { id: ColorOption; label: string; hex: string }[] = [
  { id: "beige", label: "Beige", hex: "#D4B896" },
  { id: "bleu", label: "Bleu", hex: "#7AABCF" },
  { id: "rose", label: "Rose", hex: "#D4829A" },
];

// Ajoutez ici les images de chaque couleur dans l'ordre d'affichage
const colorImages: Record<ColorOption, string[]> = {
  beige: [
    "/matelas-beige.png",
    "/matelas-cocoon.png",
  ],
  bleu: [
    "/matelas-bleu.png",
    "/bleu-1.png",
  ],
  rose: [
    "/matelas-rose.png",
    "/roseone.png",
  ],
};

export default function Hero() {
  const { selectedColor, setSelectedColor } = useOrderModal();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    setActiveIndex(0);
  }, [selectedColor]);

  const images = colorImages[selectedColor];
  const colorLabel = colorOptions.find((c) => c.id === selectedColor)?.label;

  return (
    <section className="bg-cocoon-cream overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Texte */}
          <div className="order-2 lg:order-1 flex flex-col gap-6">
            {/* Étoiles */}
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-medium text-cocoon-text">
                4,9 / 5 · Plus de 200 mamans satisfaites
              </span>
            </div>

            {/* Badge précommande */}
            <div className="inline-flex items-center gap-2 self-start bg-cocoon-terracotta/10 border border-cocoon-terracotta/30 text-cocoon-terracotta text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-cocoon-terracotta animate-pulse" />
              Précommande ouverte · Livraison en 2 semaines
            </div>

            {/* Titre */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-cocoon-brown leading-[1.1] tracking-tight">
              Dormez enfin{" "}
              <span className="text-cocoon-terracotta">sur le ventre</span>
              <br />
              pendant votre grossesse
            </h1>

            <p className="text-lg text-cocoon-text leading-relaxed">
              Le matelas gonflable avec ouverture ventrale qui vous permet de
              vous reposer dans la position que vous aimez, sans pression sur
              votre ventre. Un confort que vous méritez, à chaque étape de votre
              grossesse.
            </p>

            {/* Points clés */}
            <ul className="space-y-2.5">
              {keyPoints.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-cocoon-text">
                  <CheckCircle
                    size={18}
                    className="text-cocoon-terracotta shrink-0 mt-0.5"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Sélecteur de couleur */}
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-cocoon-brown">
                Couleur :
              </span>
              <div className="flex gap-2.5">
                {colorOptions.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedColor(c.id)}
                    className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                      selectedColor === c.id
                        ? "border-cocoon-brown scale-110 shadow-md ring-2 ring-cocoon-brown/20"
                        : "border-cocoon-sand hover:scale-105 hover:border-cocoon-sand-dark"
                    }`}
                    style={{ backgroundColor: c.hex }}
                    aria-label={`Couleur ${c.label}`}
                    title={c.label}
                  />
                ))}
              </div>
              <span className="text-sm text-cocoon-brown font-medium capitalize">
                {colorLabel}
              </span>
            </div>

            {/* Prix + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div>
                <div className="text-3xl font-black text-cocoon-brown">
                  40 000 FCFA
                </div>
                <div className="text-xs text-cocoon-text mt-0.5">
                  50% à la confirmation · 50% à la livraison
                </div>
              </div>
              <OrderButton
                label="Précommander maintenant"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>

            {/* Badges livraison / pompe */}
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="flex items-center gap-1.5 text-xs font-semibold text-cocoon-green bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
                <Truck size={13} />
                Livraison gratuite au Bénin
              </span>
              <span className="flex items-center gap-1.5 text-xs font-semibold text-cocoon-terracotta bg-orange-50 border border-orange-200 px-3 py-1.5 rounded-full">
                <Gift size={13} />
                Pompe manuelle offerte
              </span>
            </div>
          </div>

          {/* Galerie image produit */}
          <div className="order-1 lg:order-2 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-cocoon-sand/40 rounded-full blur-3xl" />
              <div className="relative rounded-2xl flex flex-col gap-2">

                {/* Image principale */}
                <div className="overflow-hidden rounded-xl bg-cocoon-cream/40">
                  <Image
                    key={`${selectedColor}-${activeIndex}`}
                    src={images[activeIndex]}
                    alt={`Matelas Cocoon ${colorLabel} — vue ${activeIndex + 1}`}
                    width={800}
                    height={1000}
                    className="w-full h-auto object-cover animate-fade-in"
                    priority
                  />
                </div>

                {/* Vignettes */}
                {images.length > 1 && (
                  <div className="flex gap-4 scrollbar-thin scrollbar-thumb-cocoon-sand scrollbar-track-transparent">
                    {images.map((src, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIndex(i)}
                        className={`shrink-0 w-24 h-24 mt-4 transition-all duration-200 ${
                          i === activeIndex
                            ? "border-cocoon-terracotta "
                            : "border-cocoon-sand/60 hover:border-cocoon-sand hover:scale-105 opacity-70 hover:opacity-100"
                        }`}
                        aria-label={`Voir image ${i + 1}`}
                      >
                        <Image
                          src={src}
                          alt={`Vignette ${i + 1}`}
                          width={80}
                          height={80}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </button>
                    ))}
                  </div>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
