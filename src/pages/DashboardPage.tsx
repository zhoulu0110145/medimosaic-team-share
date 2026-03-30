import {
  Activity,
  ArrowRight,
  FileText,
  HeartPulse,
  UploadCloud,
  Workflow,
} from "lucide-react";
import { Link } from "react-router-dom";

import { useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { bloodPressureReadings, glucoseReadings } from "../data/mockData";
import { formatLongDate } from "../utils/format";
import { ExplanationCard } from "../components/ExplanationCard";
import { HealthStatCard } from "../components/HealthStatCard";
import { StatusBadge } from "../components/StatusBadge";

export const DashboardPage = () => {
  const { to } = useAppMode();
  const { reports, recentlyUploadedReportId } = useDemo();
  const latestReport = reports[0];
  const latestGlucose = glucoseReadings[glucoseReadings.length - 1];
  const latestPressure = bloodPressureReadings[bloodPressureReadings.length - 1];

  return (
    <div className="space-y-4">
      <section className="surface-card overflow-hidden p-5">
        <div className="rounded-[28px] bg-gradient-to-br from-primary-700 via-primary-600 to-primary-500 p-5 text-white">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Today’s overview
          </p>
          <h2 className="mt-3 text-2xl font-display font-semibold">Hello Mr. Tan</h2>
          <p className="mt-2 text-sm leading-7 text-white/85">
            Your latest report has been organised into a simple summary. One result needs
            attention, but the information shown here does not suggest an emergency.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <StatusBadge tone="attention" label="Summary ready" />
            <StatusBadge
              tone={recentlyUploadedReportId ? "info" : "stable"}
              label={recentlyUploadedReportId ? "New upload linked" : "History available"}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-3 gap-3">
        <Link className="rounded-[28px] border border-slate-200 bg-white p-4 text-center shadow-sm" to={to("/upload")}>
          <UploadCloud className="mx-auto h-5 w-5 text-primary-700" />
          <p className="mt-3 text-sm font-semibold text-ink">Upload</p>
        </Link>
        <Link className="rounded-[28px] border border-slate-200 bg-white p-4 text-center shadow-sm" to={to("/summary")}>
          <FileText className="mx-auto h-5 w-5 text-primary-700" />
          <p className="mt-3 text-sm font-semibold text-ink">Summary</p>
        </Link>
        <Link className="rounded-[28px] border border-slate-200 bg-white p-4 text-center shadow-sm" to={to("/timeline")}>
          <Workflow className="mx-auto h-5 w-5 text-primary-700" />
          <p className="mt-3 text-sm font-semibold text-ink">Timeline</p>
        </Link>
      </section>

      <section className="surface-card p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Latest uploaded report
            </p>
            <h3 className="mt-2 text-lg font-semibold text-ink">{latestReport.title}</h3>
            <p className="mt-1 text-sm text-slate-500">
              {latestReport.institution} • {formatLongDate(latestReport.date)}
            </p>
          </div>
          <StatusBadge tone={latestReport.status} />
        </div>
        <p className="mt-4 text-sm leading-6 text-slate-700">{latestReport.summaryHeadline}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {latestReport.tags.map((tag) => (
            <span
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-800"
          to={to("/summary")}
        >
          View summary
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <HealthStatCard
        detail="Morning sugar has been trending higher over the last 3 weeks, so a follow-up discussion would be helpful."
        href="/summary"
        icon={Activity}
        status={latestGlucose?.status ?? "attention"}
        subtitle="Latest fasting blood sugar"
        title="Blood glucose"
        value={latestGlucose ? `${latestGlucose.value.toFixed(1)} mmol/L` : "No data"}
      />

      <HealthStatCard
        detail="Blood pressure is a little above target today. MediMosaic keeps the trend visible without sounding an alarm."
        href="/timeline"
        icon={HeartPulse}
        status={latestPressure?.status ?? "attention"}
        subtitle="Latest morning blood pressure"
        title="Blood pressure"
        value={latestPressure ? `${latestPressure.systolic}/${latestPressure.diastolic}` : "No data"}
      />

      <ExplanationCard
        body="Your health information is now stored in one place so you do not need to keep searching across papers, clinics, and different hospital systems."
        eyebrow="Why this helps"
        footer="The app keeps your caregiver in sync when you choose to share."
        title="A calmer record for every visit"
        tone="stable"
      />
    </div>
  );
};
