import { ChevronLeft, Presentation, Sparkles } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

import { useAppMode } from "../app/useAppMode";

const routeMeta = [
  {
    match: /^\/dashboard$/,
    title: "Patient dashboard",
    subtitle: "A calm overview for Mr. Tan today.",
    view: "Patient view",
  },
  {
    match: /^\/upload$/,
    title: "Upload document",
    subtitle: "Add a photo or PDF with gentle guidance.",
    view: "Patient view",
  },
  {
    match: /^\/summary$/,
    title: "Plain-language summary",
    subtitle: "What changed, what it means, and what to do next.",
    view: "Patient view",
  },
  {
    match: /^\/timeline$/,
    title: "Health timeline",
    subtitle: "See reports, home readings, and notes in one story.",
    view: "Caregiver view",
  },
  {
    match: /^\/report\/.+$/,
    title: "Report detail",
    subtitle: "Review extracted values with historical comparison.",
    view: "Caregiver view",
  },
  {
    match: /^\/notes$/,
    title: "Notes and reminders",
    subtitle: "Capture follow-up points without extra clutter.",
    view: "Caregiver view",
  },
  {
    match: /^\/share$/,
    title: "Share package",
    subtitle: "Send the right summary to the right person.",
    view: "Shared care",
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const { isSimple, normalizedPath, to } = useAppMode();

  const current =
    routeMeta.find((item) => item.match.test(normalizedPath)) ?? routeMeta[0];

  return (
    <header className="border-b border-slate-200 bg-white/88 px-4 pb-4 pt-4 backdrop-blur">
      <div className="flex items-center justify-between gap-4">
        <button
          aria-label="Go back"
          className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm"
          onClick={() => navigate(-1)}
          type="button"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <Link
          className="flex items-center gap-2 text-sm font-semibold text-ink"
          to={isSimple ? to("/dashboard") : "/"}
        >
          <div className="rounded-2xl bg-primary-700 p-2 text-white">
            <Sparkles className="h-4 w-4" />
          </div>
          MediMosaic
        </Link>
        {isSimple ? (
          <div className="w-9" />
        ) : (
          <Link
            className="rounded-2xl border border-slate-200 bg-white p-2 text-slate-600 shadow-sm"
            to="/presentation"
          >
            <Presentation className="h-5 w-5" />
          </Link>
        )}
      </div>
      <div className="mt-4">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {isSimple ? "Core features" : current.view}
        </p>
        <h1 className="mt-2 text-xl font-display font-semibold text-ink">{current.title}</h1>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          {isSimple && normalizedPath === "/dashboard"
            ? "A simpler everyday view for records, results, notes, and sharing."
            : current.subtitle}
        </p>
      </div>
    </header>
  );
};
