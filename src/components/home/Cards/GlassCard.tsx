import React from "react";
import "./GlassCard.css";

type GlassCardProps = {
  z?: number | string;
};

const GlassCard: React.FC<GlassCardProps> = ({ z = 0 }) => {
  const zValue = typeof z === "number" ? `${z}px` : z;

  return (
    <div
      className="glass-card"
      style={{ "--z-depth": zValue } as React.CSSProperties}
    >
      <div className="glass-card-content">
        <p className="card-status">On track</p>
        <h3 className="card-title">Get Started with Nexora</h3>
        <p className="card-footer">Available Now</p>
      </div>
    </div>
  );
};

export default GlassCard;
