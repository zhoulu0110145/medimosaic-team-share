import { CircleAlert, Info, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";

import type { StatusTone } from "../data/mockData";

const icons: Record<StatusTone, LucideIcon> = {
  normal: ShieldCheck,
  stable: ShieldCheck,
  attention: CircleAlert,
  high: CircleAlert,
  info: Info,
};

const toneClasses: Record<StatusTone, string> = {
  normal: "border-emerald-100 bg-emerald-50/70",
  stable: "border-primary-100 bg-primary-50/70",
  attention: "border-amber-100 bg-amber-50/80",
  high: "border-rose-100 bg-rose-50/80",
  info: "border-sky-100 bg-sky-50/80",
};

interface ExplanationCardProps {
  eyebrow: string;
  title: string;
  body: string;
  tone: StatusTone;
  footer?: string;
}

export const ExplanationCard = ({
  eyebrow,
  title,
  body,
  tone,
  footer,
}: ExplanationCardProps) => {
  const Icon = icons[tone] ?? Sparkles;

  return (
    <div className={`rounded-3xl border p-4 ${toneClasses[tone]}`}>
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-white p-2 text-primary-700 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-500">
            {eyebrow}
          </p>
          <h3 className="mt-1 text-base font-semibold text-ink">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-700">{body}</p>
          {footer ? <p className="mt-3 text-sm font-medium text-primary-800">{footer}</p> : null}
        </div>
      </div>
    </div>
  );
};
