"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

export type ColorOption = "beige" | "bleu" | "rose";

interface OrderModalContextValue {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  selectedColor: ColorOption;
  setSelectedColor: (color: ColorOption) => void;
}

const OrderModalContext = createContext<OrderModalContextValue | null>(null);

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<ColorOption>("beige");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <OrderModalContext.Provider
      value={{ isOpen, openModal, closeModal, selectedColor, setSelectedColor }}
    >
      {children}
    </OrderModalContext.Provider>
  );
}

export function useOrderModal() {
  const ctx = useContext(OrderModalContext);
  if (!ctx) throw new Error("useOrderModal must be used inside OrderModalProvider");
  return ctx;
}
