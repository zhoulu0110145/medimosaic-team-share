import { HeartPulse, Smartphone } from "lucide-react";

import type { Persona } from "../data/mockData";

interface PersonaCardProps {
  persona: Persona;
}

export const PersonaCard = ({ persona }: PersonaCardProps) => (
  <div className="rounded-[28px] border border-white/70 bg-white p-5 shadow-card">
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Persona
        </p>
        <h3 className="mt-2 text-2xl font-display font-semibold text-ink">{persona.name}</h3>
        <p className="mt-1 text-sm text-slate-500">
          {persona.age} • {persona.role}
        </p>
      </div>
      <div className="rounded-3xl bg-primary-50 px-3 py-2 text-sm font-semibold text-primary-800">
        {persona.techSavviness}
      </div>
    </div>
    <div className="mt-5 space-y-4 text-sm leading-6 text-slate-700">
      {persona.healthProfile ? (
        <div className="flex gap-3">
          <HeartPulse className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
          <span>{persona.healthProfile}</span>
        </div>
      ) : null}
      <div className="flex gap-3">
        <Smartphone className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
        <span>{persona.context}</span>
      </div>
    </div>
    <div className="mt-5 rounded-3xl bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Core needs
      </p>
      <div className="mt-3 space-y-2">
        {persona.needs.map((need) => (
          <p className="text-sm leading-6 text-slate-700" key={need}>
            {need}
          </p>
        ))}
      </div>
    </div>
  </div>
);
