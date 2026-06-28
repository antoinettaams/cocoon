"use client";

import { useOrderModal } from "@/context/OrderModalContext";
import { ShoppingBag } from "lucide-react";

interface OrderButtonProps {
  label?: string;
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "light";
  className?: string;
}

export default function OrderButton({
  label = "Commander maintenant",
  size = "md",
  variant = "primary",
  className = "",
}: OrderButtonProps) {
  const { openModal } = useOrderModal();

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-cocoon-brown text-cocoon-cream hover:bg-cocoon-dark active:scale-95 shadow-md hover:shadow-lg",
    secondary:
      "border-2 border-cocoon-brown text-cocoon-brown hover:bg-cocoon-brown hover:text-cocoon-cream active:scale-95",
    light:
      "bg-cocoon-cream text-cocoon-brown hover:bg-white active:scale-95 shadow-xl hover:shadow-2xl",
  };

  return (
    <button
      onClick={openModal}
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      <ShoppingBag size={size === "lg" ? 20 : 18} />
      {label}
    </button>
  );
}
