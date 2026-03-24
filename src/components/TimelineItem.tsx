import {
  Activity,
  FileText,
  NotebookPen,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";
import { Link } from "react-router-dom";

import type { TimelineEvent } from "../data/mockData";
import { formatTimestamp } from "../utils/format";
import { StatusBadge } from "./StatusBadge";

const icons: Record<TimelineEvent["type"], LucideIcon> = {
  report: FileText,
  glucose: Activity,
  "blood-pressure": Stethoscope,
  note: NotebookPen,
};

interface TimelineItemProps {
  event: TimelineEvent;
}

export const TimelineItem = ({ event }: TimelineItemProps) => {
  const Icon = icons[event.type];

  return (
    <Link
      className="flex gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-card"
      to={event.route}
    >
      <div className="mt-1 rounded-2xl bg-primary-50 p-2 text-primary-700">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <p className="text-sm font-semibold text-ink">{event.title}</p>
          <StatusBadge tone={event.status} />
        </div>
        <p className="mt-2 text-sm leading-6 text-slate-600">{event.description}</p>
        <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
          {formatTimestamp(event.date)}
        </p>
      </div>
    </Link>
  );
};
