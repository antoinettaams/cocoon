import { Gift, Truck } from "lucide-react";

export default function AnnouncementBar() {
  // On isole le contenu textuel pour pouvoir le répéter
  const Content = () => (
    <div style={styles.contentItem}>
      <span style={styles.badge}>
        <Gift size={14} style={styles.icon} />
        Pompe manuelle offerte · Livraison gratuite au Bénin
      </span>
      <span style={styles.separator}>·</span>
      <span style={styles.badge}>
        <Truck size={14} style={styles.icon} />
        Précommande — 50% à la confirmation · 50% à la livraison
      </span>
      <span style={styles.separator}>·</span>
    </div>
  );

  return (
    <div style={styles.bar}>
      {/* Injection des styles CSS pour l'animation et l'effet de pause */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          width: max-content;
          animation: marquee 50s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-container">
        {/* On répète le contenu pour remplir l'espace de défilement de façon fluide */}
        <Content />
        <Content />
        <Content />
        <Content />
      </div>
    </div>
  );
}

// Styles en JavaScript (Inline CSS) reprenant tes couleurs Cocoon
const styles = {
  bar: {
    backgroundColor: "#2C2A29", // cocoon-brown (adapté selon ton code original)
    color: "#FDFBF7",           // cocoon-cream
    padding: "10px 0",
    overflow: "hidden",
    width: "100%",
    userSelect: "none" as const,
  },
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
    fontSize: "13px",
    fontWeight: 500,
    whiteSpace: "nowrap" as const,
  },
  icon: {
    color: "#D4829A", // cocoon-terracotta-light
    flexShrink: 0,
  },
  separator: {
    color: "#A89F91", // cocoon-sand-dark
    fontWeight: "bold",
  },
};