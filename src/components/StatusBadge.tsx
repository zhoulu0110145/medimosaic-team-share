import { capitalize } from "../utils/format";
import type { StatusTone } from "../data/mockData";

const toneClasses: Record<StatusTone, string> = {
  normal: "border-emerald-200 bg-emerald-50 text-emerald-700",
  stable: "border-primary-200 bg-primary-50 text-primary-700",
  attention: "border-amber-200 bg-amber-50 text-amber-700",
  high: "border-rose-200 bg-rose-50 text-rose-700",
  info: "border-sky-200 bg-sky-50 text-sky-700",
};

interface StatusBadgeProps {
  tone: StatusTone;
  label?: string;
}

export const StatusBadge = ({ tone, label }: StatusBadgeProps) => (
  <span
    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneClasses[tone]}`}
  >
    {label ?? capitalize(tone)}
  </span>
);
