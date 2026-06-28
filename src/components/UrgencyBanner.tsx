import { Flame, Package } from "lucide-react";

export default function UrgencyBanner() {
  return (
    <div className="bg-gradient-to-r from-cocoon-terracotta to-[#A86B52] text-white py-3 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm font-medium text-center">
        <span className="flex items-center gap-1.5">
          <Flame size={15} className="shrink-0 text-yellow-200" />
          <strong>82 précommandes</strong>&nbsp;passées cette semaine au Bénin
        </span>
        <span className="hidden sm:block opacity-50">·</span>
        <span className="flex items-center gap-1.5">
          <Package size={15} className="shrink-0 text-yellow-200" />
          Stock disponible — expédition sous&nbsp;<strong>24&nbsp;h</strong>
        </span>
      </div>
    </div>
  );
}
