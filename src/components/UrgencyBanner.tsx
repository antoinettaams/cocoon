import { Flame, Package } from "lucide-react";

export default function UrgencyBanner() {
  // On isole le contenu textuel d'urgence pour le répéter
  const Content = () => (
    <div style={styles.contentItem}>
      <span style={styles.badge}>
        <Flame size={15} className="shrink-0 text-yellow-200" />
        <strong>82 précommandes</strong>&nbsp;passées cette semaine au Bénin
      </span>
      <span className="opacity-50" style={styles.separator}>·</span>
      <span style={styles.badge}>
        <Package size={15} className="shrink-0 text-yellow-200" />
        Stock disponible — expédition sous&nbsp;<strong>24&nbsp;h</strong>
      </span>
      <span className="opacity-50" style={styles.separator}>·</span>
    </div>
  );

  return (
    /* On garde tes classes de couleurs d'origine ici */
    <div className="bg-gradient-to-r from-cocoon-terracotta to-[#A86B52] text-white py-3 overflow-hidden w-full select-none">
      {/* Animation CSS autonome et ralentie à 50s */}
      <style>{`
        @keyframes marqueeUrgency {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .urgency-container {
          display: flex;
          width: max-content;
          animation: marqueeUrgency 50s linear infinite;
        }
        .urgency-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="urgency-container">
        {/* Répétition pour l'effet infini */}
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

// Juste la structure pour gérer le défilement horizontal infini
const styles = {
  contentItem: {
    display: "flex",
    alignItems: "center",
    gap: "32px",
    paddingRight: "32px",
    flexShrink: 0,
  },
  badge: {
    display: "flex",
    alignItems: "center",
    gap: "6px",
    fontSize: "14px",
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
  },
  separator: {
    fontWeight: "bold",
    fontSize: "14px",
  },
};