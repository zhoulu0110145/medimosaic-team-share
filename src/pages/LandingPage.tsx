import {
  ArrowRight,
  BookText,
  FileStack,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

import {
  caregiverPersona,
  metaphorPillars,
  patientPersona,
  productName,
  valueProposition,
} from "../data/mockData";

export const LandingPage = () => (
  <div className="min-h-dvh bg-shell px-4 py-6 md:px-8 lg:px-10">
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="surface-card overflow-hidden p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white px-4 py-2 text-sm font-semibold text-primary-800">
              <Sparkles className="h-4 w-4" />
              Patient-centred EHR/EMR prototype
            </div>
            <h1 className="mt-6 max-w-2xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {productName}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {valueProposition}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              Built from the project PDFs as source of truth: aggregate records from
              different institutions, explain results in plain language, support home
              monitoring, and reduce cognitive burden for patients and caregivers.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="primary-button" to="/dashboard">
                Start patient demo
              </Link>
              <Link className="soft-button" to="/timeline">
                Start caregiver demo
              </Link>
              <Link className="soft-button" to="/presentation">
                Open presentation support
              </Link>
            </div>
          </div>

          <div className="rounded-[32px] border border-primary-100 bg-white/90 p-5 shadow-soft">
            <div className="rounded-[28px] bg-slate-50 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Classroom demo flows
              </p>
              <div className="mt-4 space-y-4">
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">{patientPersona.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Upload lab report → view summary → understand chart → share with caregiver
                  </p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-white p-4">
                  <p className="text-sm font-semibold text-ink">{caregiverPersona.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Open timeline → review report → add notes → compare trends → share with doctor
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="surface-card p-5">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700 w-fit">
            <FileStack className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-ink">Records are fragmented</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Mr. Tan’s reports are spread across hospitals, clinics, paper printouts, and
            home readings, making continuity of care difficult.
          </p>
        </div>
        <div className="surface-card p-5">
          <div className="w-fit rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <BookText className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-ink">Medical language is hard to parse</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            The prototype translates numbers and jargon into calm explanations that tell
            patients what changed and what to do next.
          </p>
        </div>
        <div className="surface-card p-5">
          <div className="w-fit rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <Users className="h-5 w-5" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-ink">Caregivers repeat the same story</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Ms. Tan needs a single timeline she can annotate and share, instead of
            rebuilding medical history at every visit.
          </p>
        </div>
      </section>

      <section className="surface-card p-6 md:p-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="section-kicker">Design direction</p>
            <h2 className="section-title mt-3">Calm, trustworthy, low-friction care support</h2>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800" to="/presentation">
            Presentation board
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metaphorPillars.map((pillar, index) => (
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5" key={pillar.title}>
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-700 text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-ink">{pillar.title}</h3>
              <p className="mt-1 text-sm font-medium text-primary-800">{pillar.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        <div className="surface-card p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
              <HeartPulse className="h-5 w-5" />
            </div>
            <div>
              <p className="section-kicker">Patient route</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">Mr. Tan’s quick path</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "Open Dashboard",
              "Tap Upload Document",
              "Upload photo of lab report",
              "Read View Summary in plain language",
              "Share with caregiver",
            ].map((step) => (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700" key={step}>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="surface-card p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="section-kicker">Caregiver route</p>
              <h2 className="mt-2 text-xl font-semibold text-ink">Ms. Tan’s quick path</h2>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            {[
              "Open Health Timeline",
              "Review newly uploaded report",
              "Compare trends over time",
              "Add notes and reminders",
              "Share with doctor before consult",
            ].map((step) => (
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700" key={step}>
                {step}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  </div>
);
