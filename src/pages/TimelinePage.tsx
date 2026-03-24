import { BellRing, CalendarRange, Filter, NotebookPen } from "lucide-react";
import { useMemo, useState } from "react";

import { useDemo } from "../app/DemoContext";
import { bloodPressureReadings, glucoseReadings } from "../data/mockData";
import { formatShortDate } from "../utils/format";
import { TimelineItem } from "../components/TimelineItem";
import { TrendChartCard } from "../components/TrendChartCard";

const filterOptions = [
  { key: "all", label: "All" },
  { key: "report", label: "Reports" },
  { key: "glucose", label: "Glucose" },
  { key: "blood-pressure", label: "Blood pressure" },
  { key: "note", label: "Notes" },
] as const;

export const TimelinePage = () => {
  const { recentlyUploadedReportId, timeline } = useDemo();
  const [activeFilter, setActiveFilter] = useState<(typeof filterOptions)[number]["key"]>("all");
  const [period, setPeriod] = useState<"weekly" | "monthly">("monthly");

  const glucoseData = useMemo(() => {
    const points = period === "weekly" ? glucoseReadings.slice(-4) : glucoseReadings;
    return points.map((item) => ({
      label: formatShortDate(item.date),
      glucose: item.value,
    }));
  }, [period]);

  const pressureData = useMemo(() => {
    const points = period === "weekly" ? bloodPressureReadings.slice(-4) : bloodPressureReadings;
    return points.map((item) => ({
      label: formatShortDate(item.date),
      systolic: item.systolic,
      diastolic: item.diastolic,
    }));
  }, [period]);

  const filteredTimeline = useMemo(() => {
    if (activeFilter === "all") {
      return timeline;
    }

    return timeline.filter((item) => item.type === activeFilter);
  }, [activeFilter, timeline]);

  return (
    <div className="space-y-4">
      {recentlyUploadedReportId ? (
        <section className="surface-card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
              <BellRing className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">New upload received</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Ms. Tan can now open the latest lab report, compare it with past trends, and
                add notes before sharing with the doctor.
              </p>
            </div>
          </div>
        </section>
      ) : null}

      <section className="surface-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Health trends
            </p>
            <h2 className="mt-2 text-lg font-semibold text-ink">
              Uploaded records linked to home monitoring
            </h2>
          </div>
          <div className="rounded-2xl bg-slate-50 p-2.5 text-slate-600">
            <CalendarRange className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4 flex gap-2 rounded-full bg-slate-100 p-1">
          {(["weekly", "monthly"] as const).map((value) => (
            <button
              className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${
                period === value ? "bg-white text-primary-800 shadow-sm" : "text-slate-500"
              }`}
              key={value}
              onClick={() => setPeriod(value)}
              type="button"
            >
              {value === "weekly" ? "Weekly" : "Monthly"}
            </button>
          ))}
        </div>
      </section>

      <TrendChartCard
        data={glucoseData}
        description="Mr. Tan's fasting blood sugar readings are climbing over time, which gives context to the latest report upload."
        footer="Colour and trend are meant to guide discussion, not create alarm."
        mode="area"
        series={[{ key: "glucose", label: "Glucose", color: "#438d7f" }]}
        title="Blood glucose trend"
        xKey="label"
      />

      <TrendChartCard
        data={pressureData}
        description="Blood pressure readings show a gentler upward drift and help the caregiver compare recent changes against the clinic note."
        footer="The timeline keeps readings, notes, and reports in one connected view."
        mode="line"
        series={[
          { key: "systolic", label: "Systolic", color: "#4d79b6" },
          { key: "diastolic", label: "Diastolic", color: "#c5842b" },
        ]}
        title="Blood pressure trend"
        xKey="label"
      />

      <section className="surface-card p-5">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              Chronological timeline
            </p>
            <h2 className="mt-2 text-lg font-semibold text-ink">Reports, readings, and notes</h2>
          </div>
          <div className="rounded-2xl bg-slate-50 p-2.5 text-slate-600">
            <Filter className="h-5 w-5" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              className={`rounded-full px-4 py-2 text-sm font-semibold ${
                activeFilter === option.key
                  ? "bg-primary-700 text-white"
                  : "border border-slate-200 bg-white text-slate-600"
              }`}
              key={option.key}
              onClick={() => setActiveFilter(option.key)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>

        <div className="mt-5 space-y-3">
          {filteredTimeline.map((event) => (
            <TimelineItem event={event} key={event.id} />
          ))}
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
        <div className="flex items-start gap-3">
          <div className="rounded-2xl bg-white p-2.5 text-primary-700 shadow-sm">
            <NotebookPen className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Caregiver connection</p>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              The newest report, home trends, and notes stay together so Ms. Tan does not
              have to reconstruct the full story at the next appointment.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
