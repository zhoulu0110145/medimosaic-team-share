import { ArrowRight, CircleCheckBig, HeartPulse, Share2 } from "lucide-react";
import { Link } from "react-router-dom";

import { useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { ExplanationCard } from "../components/ExplanationCard";
import { StatusBadge } from "../components/StatusBadge";

export const SummaryPage = () => {
  const { to } = useAppMode();
  const { reports } = useDemo();
  const latestReport = reports[0];

  return (
    <div className="space-y-4">
      <section className="surface-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Plain-language overview
            </p>
            <h2 className="mt-2 text-xl font-semibold text-ink">{latestReport.summaryHeadline}</h2>
          </div>
          <StatusBadge tone={latestReport.status} />
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">{latestReport.plainLanguageSummary}</p>
        <div className="mt-4 rounded-3xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            What this means
          </p>
          <p className="mt-2 text-sm leading-7 text-slate-700">{latestReport.whatThisMeans}</p>
        </div>
      </section>

      <ExplanationCard
        body={latestReport.values[0]?.insight ?? ""}
        eyebrow="Blood sugar"
        footer="This needs attention, but the information shown here does not suggest an emergency."
        title={`${latestReport.values[0]?.label}: ${latestReport.values[0]?.value}`}
        tone={latestReport.values[0]?.status ?? "attention"}
      />

      <ExplanationCard
        body={latestReport.values[2]?.insight ?? ""}
        eyebrow="Blood pressure"
        footer="A steady home log will make the next conversation with the doctor easier."
        title={`${latestReport.values[2]?.label}: ${latestReport.values[2]?.value}`}
        tone={latestReport.values[2]?.status ?? "attention"}
      />

      <section className="surface-card p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <CircleCheckBig className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">What to do next</p>
            <p className="mt-1 text-sm text-slate-500">
              Keep the next steps short and practical.
            </p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {latestReport.nextSteps.map((step) => (
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700" key={step}>
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Status cards
        </p>
        <div className="mt-4 grid gap-3">
          {latestReport.values.map((item) => (
            <div
              className="flex items-start justify-between gap-4 rounded-3xl border border-slate-200 bg-white p-4"
              key={item.label}
            >
              <div>
                <p className="text-sm font-semibold text-ink">{item.label}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{item.value}</p>
              </div>
              <StatusBadge tone={item.status} />
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-3">
        <Link className="primary-button w-full" to={to("/share?target=caregiver")}>
          <Share2 className="mr-2 h-4 w-4" />
          Share with caregiver
        </Link>
        <Link className="soft-button w-full justify-center" to={to(`/report/${latestReport.id}`)}>
          <HeartPulse className="mr-2 h-4 w-4" />
          Open report detail
        </Link>
        <Link
          className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-primary-800"
          to={to("/timeline")}
        >
          Review trends over time
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </div>
  );
};
