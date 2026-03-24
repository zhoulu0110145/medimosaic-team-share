import { ArrowRight, type LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { useAppMode } from "../app/useAppMode";
import type { StatusTone } from "../data/mockData";
import { StatusBadge } from "./StatusBadge";

interface HealthStatCardProps {
  title: string;
  value: string;
  subtitle: string;
  detail: string;
  status: StatusTone;
  icon: LucideIcon;
  href?: string;
}

export const HealthStatCard = ({
  title,
  value,
  subtitle,
  detail,
  status,
  icon: Icon,
  href,
}: HealthStatCardProps) => {
  const { to } = useAppMode();

  return (
    <div className="surface-card p-4">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{title}</p>
            <p className="mt-1 text-2xl font-display font-semibold text-ink">{value}</p>
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
        <StatusBadge tone={status} />
      </div>
      <p className="mt-4 text-sm leading-6 text-slate-600">{detail}</p>
      {href ? (
        <Link
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-800"
          to={to(href)}
        >
          Review details
          <ArrowRight className="h-4 w-4" />
        </Link>
      ) : null}
    </div>
  );
};
