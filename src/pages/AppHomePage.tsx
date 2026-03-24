import {
  ActivitySquare,
  ArrowRight,
  Clock3,
  FileText,
  HeartPulse,
  NotebookPen,
  Send,
  ShieldCheck,
  UploadCloud,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { bloodPressureReadings, glucoseReadings } from "../data/mockData";
import { formatLongDate } from "../utils/format";
import { StatusBadge } from "../components/StatusBadge";

export const AppHomePage = () => {
  const { to } = useAppMode();
  const { notes, reports, shareTarget } = useDemo();
  const latestReport = reports[0];
  const latestGlucose = glucoseReadings[glucoseReadings.length - 1];
  const latestPressure = bloodPressureReadings[bloodPressureReadings.length - 1];

  const quickActions = [
    {
      label: "Upload record",
      description: "Add a photo or PDF",
      icon: UploadCloud,
      to: to("/upload"),
    },
    {
      label: "Latest summary",
      description: "Read the plain-language view",
      icon: FileText,
      to: to("/summary"),
    },
    {
      label: "Timeline",
      description: "See changes over time",
      icon: Workflow,
      to: to("/timeline"),
    },
    {
      label: "Notes",
      description: "Keep reminders together",
      icon: NotebookPen,
      to: to("/notes"),
    },
  ];

  return (
    <div className="space-y-4">
      <section className="surface-card overflow-hidden p-5">
        <div className="rounded-[28px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-5 text-white">
          <p className="text-sm font-medium text-white/80">Welcome back, Ms. Tan</p>
          <h2 className="mt-2 text-2xl font-display font-semibold">
            One calm place for Mr. Tan&apos;s records
          </h2>
          <p className="mt-3 text-sm leading-7 text-white/85">
            The latest report is ready in plain language, with trends and follow-up notes
            kept together for the next visit.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge tone="attention" label="1 report needs follow-up" />
            <StatusBadge tone="info" label={`${notes.length} notes saved`} />
          </div>
          <div className="mt-5 grid gap-3">
            <Link className="soft-button w-full justify-center border-white" to={to("/summary")}>
              Open latest summary
            </Link>
            <Link
              className="inline-flex w-full items-center justify-center rounded-2xl border border-white/25 bg-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              to={to("/upload")}
            >
              Upload a new document
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 gap-3">
        {quickActions.map((action) => (
          <Link
            className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-card"
            key={action.label}
            to={action.to}
          >
            <action.icon className="h-5 w-5 text-primary-700" />
            <p className="mt-4 text-sm font-semibold text-ink">{action.label}</p>
            <p className="mt-1 text-sm leading-6 text-slate-500">{action.description}</p>
          </Link>
        ))}
      </section>

      <section className="surface-card p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Latest report
            </p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{latestReport.title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {latestReport.institution} • {formatLongDate(latestReport.date)}
            </p>
          </div>
          <StatusBadge tone={latestReport.status} />
        </div>
        <p className="mt-4 text-sm leading-7 text-slate-700">{latestReport.plainLanguageSummary}</p>
        <Link
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary-800"
          to={to(`/report/${latestReport.id}`)}
        >
          View report details
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="grid grid-cols-2 gap-3">
        <div className="surface-card p-4">
          <div className="flex items-center gap-2">
            <ActivitySquare className="h-5 w-5 text-primary-700" />
            <p className="text-sm font-semibold text-ink">Blood glucose</p>
          </div>
          <p className="mt-4 text-2xl font-display font-semibold text-ink">
            {latestGlucose.value.toFixed(1)} mmol/L
          </p>
          <p className="mt-1 text-sm text-slate-500">Latest fasting reading</p>
          <div className="mt-4">
            <StatusBadge tone={latestGlucose.status} />
          </div>
        </div>
        <div className="surface-card p-4">
          <div className="flex items-center gap-2">
            <HeartPulse className="h-5 w-5 text-primary-700" />
            <p className="text-sm font-semibold text-ink">Blood pressure</p>
          </div>
          <p className="mt-4 text-2xl font-display font-semibold text-ink">
            {latestPressure.systolic}/{latestPressure.diastolic}
          </p>
          <p className="mt-1 text-sm text-slate-500">Latest home reading</p>
          <div className="mt-4">
            <StatusBadge tone={latestPressure.status} />
          </div>
        </div>
      </section>

      <section className="surface-card p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <Clock3 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Next steps</p>
            <p className="mt-1 text-sm text-slate-500">Keep today&apos;s actions short and clear.</p>
          </div>
        </div>
        <div className="mt-4 space-y-3">
          {latestReport.nextSteps.map((step) => (
            <div
              className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              key={step}
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="surface-card p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold text-ink">Shared care, under your control</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              You choose what to share with family or doctors. MediVoice keeps the summary,
              trend snapshot, and notes together so each share is clear and focused.
            </p>
            <Link className="mt-4 primary-button w-full" to={to(`/share?target=${shareTarget}`)}>
              <Send className="mr-2 h-4 w-4" />
              Open sharing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
