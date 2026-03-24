import { ArrowRight, LayoutPanelTop, Shield, Stethoscope, TimerReset, Users } from "lucide-react";
import { Link } from "react-router-dom";

import {
  caregiverPersona,
  metaphorPillars,
  patientPersona,
  productName,
  valueProposition,
} from "../data/mockData";
import { JourneyRoute } from "../components/JourneyRoute";
import { PersonaCard } from "../components/PersonaCard";
import { PresentationSection } from "../components/PresentationSection";

const patientRoute = [
  {
    label: "Anxiety after receiving a report",
    detail: "Mr. Tan gets a lab report and feels unsure about the numbers and medical terms.",
  },
  {
    label: "Open app and upload document",
    detail: "He uses a large Upload Document button to take a photo of the report.",
  },
  {
    label: "Read a plain-language summary",
    detail: "MediVoice explains blood sugar and blood pressure results using simple words.",
  },
  {
    label: "Understand the chart colours",
    detail: "Colour cues show which readings are within range and which need attention.",
  },
  {
    label: "Share with caregiver",
    detail: "He sends the organised summary to his daughter for support.",
  },
];

const caregiverRoute = [
  {
    label: "Receive notification",
    detail: "Ms. Tan learns that her father's latest report has been uploaded.",
  },
  {
    label: "Open the health timeline",
    detail: "She sees the new report alongside previous records and home readings.",
  },
  {
    label: "Review the report and add notes",
    detail: "She reads the simplified explanation and captures reminders for the next consult.",
  },
  {
    label: "Compare trends over time",
    detail: "She checks whether glucose and blood pressure are improving or drifting upward.",
  },
  {
    label: "Share with doctor",
    detail: "She sends a concise package before the visit so the doctor has the full story.",
  },
];

const healthcareValueCards = [
  {
    title: "Safe",
    description:
      "Centralising fragmented records reduces missing information, duplicate tests, and medication confusion.",
    icon: Shield,
  },
  {
    title: "Timely",
    description:
      "Patients and caregivers can review the latest records quickly instead of waiting to reconstruct the full story.",
    icon: TimerReset,
  },
  {
    title: "Effective",
    description:
      "Plain-language explanations help patients participate more confidently in shared decision-making.",
    icon: Stethoscope,
  },
  {
    title: "Efficient",
    description:
      "One timeline reduces repeated explanation and helps clinicians review evidence-based context faster.",
    icon: LayoutPanelTop,
  },
  {
    title: "Equitable",
    description:
      "Large tap targets, high contrast, and simple wording support users with varying digital literacy and backgrounds.",
    icon: Users,
  },
];

export const PresentationPage = () => (
  <div className="min-h-dvh bg-shell px-4 py-6 md:px-8">
    <div className="mx-auto max-w-6xl space-y-6">
      <header className="surface-card overflow-hidden p-6 md:p-10">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="section-kicker">Presentation support</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {productName}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              {valueProposition}
            </p>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
              A patient-centred mobile health prototype for fragmented records across
              institutions, paper reports, PDFs, and home monitoring data.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link className="primary-button" to="/dashboard">
                Open product demo
              </Link>
              <Link className="soft-button" to="/timeline">
                Open caregiver route
              </Link>
            </div>
          </div>
          <div className="rounded-[32px] border border-primary-100 bg-white/90 p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
              5-minute pitch structure
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Problem statement and design idea",
                "Two personas: patient and caregiver",
                "Two user journey routes",
                "Caregiving metaphor translated into UX principles",
                "Healthcare relevance, usability placeholder, and future upgrades",
              ].map((line) => (
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-slate-700" key={line}>
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <PresentationSection
        description="Patient medical record data is often fragmented across multiple EHR systems, handwritten notes, PDFs, and patient-generated readings. This raises cognitive burden, reduces continuity of care, and leaves patients unsure how to interpret their own results."
        eyebrow="Problem statement"
        id="problem"
        title="Why this matters"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
            <p className="text-lg font-semibold text-ink">Fragmentation</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Records sit across hospitals, clinics, and paper copies, so neither patients
              nor caregivers have a single source of truth.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
            <p className="text-lg font-semibold text-ink">Low health literacy support</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Raw lab numbers and clinical language cause confusion and anxiety when
              patients receive results alone.
            </p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5">
            <p className="text-lg font-semibold text-ink">Caregiver overload</p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Family members repeatedly explain history to different doctors and worry
              about missing important changes.
            </p>
          </div>
        </div>
      </PresentationSection>

      <PresentationSection
        description="MediVoice is a patient-centred mobile-first web prototype that aggregates health documents across institutions, accepts photos and PDFs, displays home monitoring data, and explains results in supportive everyday language."
        eyebrow="Design idea"
        id="idea"
        title="What the prototype does"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metaphorPillars.map((pillar) => (
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5" key={pillar.title}>
              <p className="text-lg font-semibold text-ink">{pillar.title}</p>
              <p className="mt-1 text-sm font-medium text-primary-800">{pillar.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </PresentationSection>

      <PresentationSection
        description="The PDFs define two core personas: a patient with lower digital confidence and a tech-savvy caregiver who coordinates care across institutions."
        eyebrow="Personas"
        id="personas"
        title="Who we designed for"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <PersonaCard persona={patientPersona} />
          <PersonaCard persona={caregiverPersona} />
        </div>
      </PresentationSection>

      <PresentationSection
        description="The prototype supports two required end-to-end routes for the final classroom demo."
        eyebrow="Journey map"
        id="journeys"
        title="Two route user journey"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          <JourneyRoute persona="Route A • Patient" steps={patientRoute} title="Mr. Tan journey" />
          <JourneyRoute
            persona="Route B • Caregiver"
            steps={caregiverRoute}
            title="Ms. Tan journey"
          />
        </div>
      </PresentationSection>

      <PresentationSection
        description="The source PDFs introduce a caregiving metaphor. In the final concept, we use it only as an interaction principle, not as literal visual branding."
        eyebrow="Design metaphor"
        id="metaphor"
        title="Metaphor translated into product UX"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {metaphorPillars.map((pillar) => (
            <div className="rounded-[28px] border border-slate-200 bg-white p-5" key={pillar.title}>
              <p className="text-base font-semibold text-ink">{pillar.title}</p>
              <p className="mt-1 text-sm font-medium text-primary-800">{pillar.role}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </PresentationSection>

      <PresentationSection
        description="The project addresses chronic disease management across disjoint healthcare systems and supports continuity before and after medical encounters."
        eyebrow="Healthcare context"
        id="context"
        title="Context and why this matters in healthcare"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {healthcareValueCards.map((card) => (
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5" key={card.title}>
              <card.icon className="h-5 w-5 text-primary-700" />
              <p className="mt-4 text-lg font-semibold text-ink">{card.title}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            </div>
          ))}
        </div>
      </PresentationSection>

      <PresentationSection
        description="The PDFs also recommend contextual inquiry, semi-structured interviews, self-reporting, low-fidelity usability testing, and participatory design workshops. This section leaves space to add actual classroom test results."
        eyebrow="SUSS / usability"
        id="suss"
        title="Usability placeholder"
      >
        <div className="grid gap-4 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[28px] border border-dashed border-primary-200 bg-primary-50/50 p-6">
            <p className="text-sm font-semibold text-ink">SUSS result placeholder</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Insert post-test score here after classroom usability testing.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Ease of upload
                </p>
                <p className="mt-3 text-2xl font-display font-semibold text-slate-300">--</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Summary clarity
                </p>
                <p className="mt-3 text-2xl font-display font-semibold text-slate-300">--</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                  Share confidence
                </p>
                <p className="mt-3 text-2xl font-display font-semibold text-slate-300">--</p>
              </div>
            </div>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold text-ink">Suggested test prompts</p>
            <div className="mt-4 space-y-3">
              {[
                "Upload a paper lab report and find the summary.",
                "Identify whether the latest blood sugar result is above usual range.",
                "Add a caregiver note and prepare a doctor share package.",
              ].map((prompt) => (
                <div className="rounded-3xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700" key={prompt}>
                  {prompt}
                </div>
              ))}
            </div>
          </div>
        </div>
      </PresentationSection>

      <PresentationSection
        description="The prototype is intentionally frontend-only. Future upgrades can expand it into a richer academic concept without changing the calm interaction principles."
        eyebrow="Future upgrade"
        id="future"
        title="What comes next"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Institution sync with secure health-record import",
            "OCR extraction with confidence checks for scanned paper reports",
            "Multilingual summaries for patients and caregivers",
            "Medication, appointment, and care-plan support over time",
          ].map((item) => (
            <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700" key={item}>
              {item}
            </div>
          ))}
        </div>
      </PresentationSection>

      <footer className="surface-card p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-ink">Demo-ready routes</p>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Use the patient flow first, then switch to the caregiver flow and close with
              this presentation page.
            </p>
          </div>
          <Link className="inline-flex items-center gap-2 text-sm font-semibold text-primary-800" to="/dashboard">
            Open the demo
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </footer>
    </div>
  </div>
);
