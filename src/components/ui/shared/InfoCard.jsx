import React from "react";

export default function InfoCard({ icon, title, subtitle }) {
  return (
    <div className="flex items-center gap-5 p-5 bg-white/60 backdrop-blur-md border border-border/60 rounded-2xl shadow-sm hover:border-secondary hover:shadow-md transition-all group">
      <div className="p-3 bg-white rounded-xl group-hover:bg-secondary/20 transition-colors shadow-sm">
        {icon}
      </div>
      <div>
        <p className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground font-bold">{title}</p>
        <p className="text-base font-extrabold text-foreground">{subtitle}</p>
      </div>
    </div>
  );
}