export type StatusTone = "normal" | "attention" | "high" | "stable" | "info";

export interface Persona {
  name: string;
  age: number;
  role: string;
  techSavviness: string;
  healthProfile?: string;
  context: string;
  needs: string[];
}

export interface LabValue {
  label: string;
  value: string;
  status: StatusTone;
  insight: string;
}

export interface ComparisonValue {
  label: string;
  current: string;
  previous: string;
  change: string;
  direction: "up" | "down" | "flat";
  meaning: string;
}

export interface Report {
  id: string;
  title: string;
  date: string;
  institution: string;
  status: StatusTone;
  category: "Lab report" | "Clinic note";
  uploadSource: string;
  summaryHeadline: string;
  plainLanguageSummary: string;
  whatThisMeans: string;
  nextSteps: string[];
  tags: string[];
  values: LabValue[];
  comparisons: ComparisonValue[];
}

export interface ReadingPoint {
  date: string;
  value: number;
  status: StatusTone;
}

export interface BloodPressurePoint {
  date: string;
  systolic: number;
  diastolic: number;
  status: StatusTone;
}

export interface Note {
  id: string;
  title: string;
  body: string;
  author: string;
  role: string;
  createdAt: string;
  type: "caregiver-note" | "doctor-reminder";
  checklist: string[];
}

export interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: "report" | "glucose" | "blood-pressure" | "note";
  status: StatusTone;
  route: string;
}

export interface SharePackage {
  recipient: "caregiver" | "doctor";
  title: string;
  purpose: string;
  summary: string;
  includes: string[];
  highlights: string[];
}

export const productName = "MediMosaic";

export const valueProposition =
  "One calm place to upload, understand, track, and share health records across visits.";

export const patientPersona: Persona = {
  name: "Mr. Tan",
  age: 62,
  role: "Retired patient",
  techSavviness: "Low to moderate",
  healthProfile: "Diabetes and high blood pressure",
  context:
    "Mr. Tan visits different hospitals and clinics. His records are spread across hospital systems, PDFs, and paper reports. He can take photos with his phone, but complex health apps quickly overwhelm him.",
  needs: [
    "Plain-language explanations of medical results",
    "Simple upload steps with large buttons",
    "A clear view of whether his readings are usual or concerning",
  ],
};

export const caregiverPersona: Persona = {
  name: "Ms. Tan",
  age: 32,
  role: "Marketing manager and main caregiver",
  techSavviness: "High",
  context:
    "Ms. Tan gathers reports from many providers, repeats history to different doctors, and worries about missing important changes. She needs a tidy view of her father's records and trends.",
  needs: [
    "A complete timeline across institutions",
    "Fast comparison of new results against past trends",
    "A reliable package to share with doctors before visits",
  ],
};

export const reports: Report[] = [
  {
    id: "lab-mar-2026",
    title: "March Diabetes and Blood Pressure Review",
    date: "2026-03-18T09:20:00+08:00",
    institution: "Harbour Community Hospital",
    status: "attention",
    category: "Lab report",
    uploadSource: "Photo upload",
    summaryHeadline: "One result needs attention, but it is not an emergency.",
    plainLanguageSummary:
      "Your blood sugar is higher than your usual range this month. Your blood pressure is also a little above target, so it would help to review your routine before the next clinic visit.",
    whatThisMeans:
      "This pattern suggests Mr. Tan's diabetes is less controlled this week than it was in the last review. The blood pressure readings also show more strain than usual, but the values shown here do not suggest an emergency.",
    nextSteps: [
      "Keep checking morning blood sugar at home for the next 7 days.",
      "Bring this summary and home readings to the next doctor visit.",
      "Ask whether evening meal timing or medication should be adjusted.",
    ],
    tags: ["Recently uploaded", "Needs follow-up", "Shareable summary ready"],
    values: [
      {
        label: "HbA1c",
        value: "8.1%",
        status: "attention",
        insight: "Higher than the previous review of 7.4%, which suggests blood sugar has been above target over the last few months.",
      },
      {
        label: "Fasting glucose",
        value: "9.4 mmol/L",
        status: "high",
        insight: "This is higher than the preferred fasting range and matches the recent upward trend in home readings.",
      },
      {
        label: "Clinic blood pressure",
        value: "148/88 mmHg",
        status: "attention",
        insight: "This is above the usual goal range, so it is worth reviewing sleep, salt intake, and medication timing.",
      },
      {
        label: "eGFR kidney function",
        value: "72 mL/min",
        status: "normal",
        insight: "Kidney function looks stable compared with the last report.",
      },
    ],
    comparisons: [
      {
        label: "HbA1c",
        current: "8.1%",
        previous: "7.4%",
        change: "+0.7%",
        direction: "up",
        meaning: "Average blood sugar control has worsened since the December review.",
      },
      {
        label: "Fasting glucose",
        current: "9.4 mmol/L",
        previous: "8.1 mmol/L",
        change: "+1.3 mmol/L",
        direction: "up",
        meaning: "Morning sugar is trending higher than Mr. Tan's recent baseline.",
      },
      {
        label: "Clinic blood pressure",
        current: "148/88",
        previous: "136/82",
        change: "+12 / +6",
        direction: "up",
        meaning: "Blood pressure is modestly higher than the last clinic note.",
      },
    ],
  },
  {
    id: "clinic-dec-2025",
    title: "December Chronic Care Follow-up",
    date: "2025-12-02T15:40:00+08:00",
    institution: "Riverview Family Clinic",
    status: "stable",
    category: "Clinic note",
    uploadSource: "PDF upload",
    summaryHeadline: "Readings were closer to target in the previous visit.",
    plainLanguageSummary:
      "This earlier review showed steadier blood sugar control and a blood pressure reading that was closer to the clinic goal.",
    whatThisMeans:
      "This report is useful as a baseline because it shows a calmer period before the recent rise in blood sugar and blood pressure.",
    nextSteps: [
      "Compare meal routine and activity level with the recent month.",
      "Keep this report with the latest upload for doctor review.",
    ],
    tags: ["Baseline comparison", "Previous visit"],
    values: [
      {
        label: "HbA1c",
        value: "7.4%",
        status: "normal",
        insight: "Closer to the clinic goal and noticeably better than the current report.",
      },
      {
        label: "Fasting glucose",
        value: "8.1 mmol/L",
        status: "attention",
        insight: "Still above ideal, but lower than the current report.",
      },
      {
        label: "Clinic blood pressure",
        value: "136/82 mmHg",
        status: "normal",
        insight: "Near target and calmer than the most recent reading.",
      },
    ],
    comparisons: [
      {
        label: "HbA1c",
        current: "7.4%",
        previous: "7.6%",
        change: "-0.2%",
        direction: "down",
        meaning: "Blood sugar control was improving at the last review.",
      },
    ],
  },
];

export const glucoseReadings: ReadingPoint[] = [
  { date: "2026-01-12T08:00:00+08:00", value: 7.2, status: "normal" },
  { date: "2026-01-26T08:05:00+08:00", value: 7.8, status: "attention" },
  { date: "2026-02-09T07:58:00+08:00", value: 8.1, status: "attention" },
  { date: "2026-02-23T08:10:00+08:00", value: 7.6, status: "attention" },
  { date: "2026-03-02T07:48:00+08:00", value: 8.7, status: "high" },
  { date: "2026-03-09T08:03:00+08:00", value: 8.9, status: "high" },
  { date: "2026-03-14T08:06:00+08:00", value: 8.4, status: "attention" },
  { date: "2026-03-18T08:01:00+08:00", value: 9.4, status: "high" },
];

export const bloodPressureReadings: BloodPressurePoint[] = [
  { date: "2026-01-10T09:00:00+08:00", systolic: 132, diastolic: 80, status: "normal" },
  { date: "2026-01-24T09:00:00+08:00", systolic: 135, diastolic: 82, status: "normal" },
  { date: "2026-02-07T09:00:00+08:00", systolic: 138, diastolic: 83, status: "attention" },
  { date: "2026-02-21T09:00:00+08:00", systolic: 140, diastolic: 84, status: "attention" },
  { date: "2026-03-01T09:00:00+08:00", systolic: 144, diastolic: 86, status: "attention" },
  { date: "2026-03-08T09:00:00+08:00", systolic: 146, diastolic: 86, status: "attention" },
  { date: "2026-03-14T09:00:00+08:00", systolic: 143, diastolic: 85, status: "attention" },
  { date: "2026-03-18T09:00:00+08:00", systolic: 148, diastolic: 88, status: "attention" },
];

export const notes: Note[] = [
  {
    id: "note-1",
    title: "Review evening meal timing",
    body:
      "Dad's readings were higher after two late dinners this week. I should ask if dinner timing may be affecting the morning sugar trend.",
    author: "Ms. Tan",
    role: "Caregiver",
    createdAt: "2026-03-18T19:10:00+08:00",
    type: "caregiver-note",
    checklist: ["Bring 7-day glucose log", "List dinner timings"],
  },
  {
    id: "note-2",
    title: "Doctor reminder before follow-up",
    body:
      "Bring the latest lab report, the December clinic note, and a list of all current medications to the next consult.",
    author: "Dr. S. Lim",
    role: "Doctor reminder",
    createdAt: "2026-03-18T19:35:00+08:00",
    type: "doctor-reminder",
    checklist: ["Pack medication list", "Check blood pressure for 3 mornings"],
  },
  {
    id: "note-3",
    title: "Home readings were easier to explain with the chart",
    body:
      "The colour chart helped Dad understand that the higher sugar trend needs attention without making him panic.",
    author: "Ms. Tan",
    role: "Caregiver",
    createdAt: "2026-03-19T08:15:00+08:00",
    type: "caregiver-note",
    checklist: ["Share summary with auntie caregiver group"],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "t-1",
    date: "2026-03-18T09:20:00+08:00",
    title: "New lab report uploaded",
    description: "Photo of March diabetes and blood pressure review was added to MediMosaic.",
    type: "report",
    status: "attention",
    route: "/report/lab-mar-2026",
  },
  {
    id: "t-2",
    date: "2026-03-18T19:10:00+08:00",
    title: "Caregiver note added",
    description: "Ms. Tan captured observations about late dinners and morning sugar levels.",
    type: "note",
    status: "info",
    route: "/notes",
  },
  {
    id: "t-3",
    date: "2026-03-18T08:01:00+08:00",
    title: "Home glucose reading logged",
    description: "Fasting blood sugar recorded at 9.4 mmol/L.",
    type: "glucose",
    status: "high",
    route: "/timeline",
  },
  {
    id: "t-4",
    date: "2026-03-18T09:00:00+08:00",
    title: "Home blood pressure reading logged",
    description: "Morning blood pressure recorded at 148/88 mmHg.",
    type: "blood-pressure",
    status: "attention",
    route: "/timeline",
  },
  {
    id: "t-5",
    date: "2025-12-02T15:40:00+08:00",
    title: "Previous clinic follow-up available",
    description: "December clinic note provides the historical comparison baseline.",
    type: "report",
    status: "stable",
    route: "/report/clinic-dec-2025",
  },
];

export const sharePackages: Record<"caregiver" | "doctor", SharePackage> = {
  caregiver: {
    recipient: "caregiver",
    title: "Family update package",
    purpose: "Help Ms. Tan review the latest report quickly and support the next steps at home.",
    summary:
      "Includes the latest lab report, a plain-language explanation, and the trend cards so Ms. Tan can review what changed before the next visit.",
    includes: [
      "March Diabetes and Blood Pressure Review",
      "Plain-language summary with status colours",
      "Glucose and blood pressure trend snapshots",
    ],
    highlights: [
      "Blood sugar is higher than Mr. Tan's usual range this month.",
      "Kidney function remains stable in the current report.",
      "The package keeps the tone supportive and action-focused.",
    ],
  },
  doctor: {
    recipient: "doctor",
    title: "Pre-visit clinical share package",
    purpose: "Give the doctor a concise, organised summary before consultation.",
    summary:
      "Includes recent reports, home trends, and caregiver notes so the doctor can review the story before seeing Mr. Tan.",
    includes: [
      "Latest lab report and prior clinic note",
      "6-week glucose and blood pressure trend summary",
      "Caregiver notes and doctor reminder checklist",
    ],
    highlights: [
      "HbA1c increased from 7.4% to 8.1% since December.",
      "Morning glucose readings rose during the last 3 weeks.",
      "Caregiver flagged late dinners and wants medication timing reviewed.",
    ],
  },
};

export const uploadMessages = {
  successPhoto: {
    title: "Photo uploaded successfully",
    body: "Your report is ready. MediMosaic has organised the key numbers and prepared a plain-language summary.",
  },
  successPdf: {
    title: "PDF uploaded successfully",
    body: "Your PDF was added to the timeline and linked to Mr. Tan's recent trends.",
  },
  blurry: {
    title: "This photo is too blurry to read safely",
    body: "Try placing the paper on a flat surface, move closer, and retake the photo in brighter light.",
  },
};

export const metaphorPillars = [
  {
    title: "The Scribe",
    role: "Quietly organises records",
    description:
      "MediMosaic accepts photos and PDFs with as little friction as possible so records from different places end up in one calm ledger.",
  },
  {
    title: "The Translator",
    role: "Explains data in plain language",
    description:
      "Lab numbers are rewritten in everyday English so patients and caregivers understand what changed and what to do next.",
  },
  {
    title: "The Vigilant Watcher",
    role: "Monitors trends gently",
    description:
      "Trends are visible through clear charts and supportive status cues that highlight concern without creating alert fatigue.",
  },
  {
    title: "The Humble Interface",
    role: "Keeps the UI simple and accessible",
    description:
      "Large tap targets, warm contrast, plain wording, and recovery hints make the product usable for people with low digital literacy.",
  },
];
