import {
  ArrowLeft,
  ArrowUpRight,
  FileScan,
  NotebookPen,
  Send,
  TrendingUp,
} from "lucide-react";
import { Link, useParams } from "react-router-dom";

import { useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { ExplanationCard } from "../components/ExplanationCard";
import { StatusBadge } from "../components/StatusBadge";
import { formatLongDate } from "../utils/format";

export const ReportDetailPage = () => {
  const { to } = useAppMode();
  const { id } = useParams();
  const { reports } = useDemo();
  const report = reports.find((item) => item.id === id) ?? reports[0];

  return (
    <div className="space-y-4">
      <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800" to={to("/timeline")}>
        <ArrowLeft className="h-4 w-4" />
        Back to timeline
      </Link>

      <section className="surface-card p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Original report preview
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink">{report.title}</h2>
            <p className="mt-1 text-sm text-slate-500">
              {report.institution} • {formatLongDate(report.date)}
            </p>
          </div>
          <StatusBadge tone={report.status} />
        </div>

        <div className="mt-5 rounded-[28px] border border-slate-200 bg-slate-50 p-5">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-white p-2.5 text-primary-700 shadow-sm">
              <FileScan className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">{report.category}</p>
              <p className="mt-1 text-sm text-slate-500">{report.uploadSource}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {report.values.slice(0, 4).map((item) => (
              <div className="rounded-3xl border border-slate-200 bg-white p-4" key={item.label}>
                <div className="flex items-center justify-between gap-2">
                  <p className="text-sm font-semibold text-ink">{item.label}</p>
                  <StatusBadge tone={item.status} />
                </div>
                <p className="mt-3 text-2xl font-display font-semibold text-ink">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ExplanationCard
        body={report.plainLanguageSummary}
        eyebrow="Translator view"
        footer={report.whatThisMeans}
        title="Plain-language explanation"
        tone={report.status}
      />

      <section className="surface-card p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Historical comparison
            </p>
            <h2 className="mt-1 text-lg font-semibold text-ink">How this compares with previous results</h2>
          </div>
        </div>
        <div className="mt-5 space-y-3">
          {report.comparisons.map((comparison) => (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4" key={comparison.label}>
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-ink">{comparison.label}</p>
                  <p className="mt-1 text-sm text-slate-500">
                    Current {comparison.current} • Previous {comparison.previous}
                  </p>
                </div>
                <div className="inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-sm font-semibold text-primary-800">
                  <ArrowUpRight className="h-4 w-4" />
                  {comparison.change}
                </div>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{comparison.meaning}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <Link className="soft-button w-full justify-center" to={to("/notes")}>
          <NotebookPen className="mr-2 h-4 w-4" />
          Add notes
        </Link>
        <Link className="primary-button w-full" to={to("/share?target=doctor")}>
          <Send className="mr-2 h-4 w-4" />
          Share with doctor
        </Link>
      </section>
    </div>
  );
};
