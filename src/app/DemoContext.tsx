import {
  createContext,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";

import {
  notes as initialNotes,
  reports as initialReports,
  sharePackages,
  timelineEvents,
  type Note,
  type StatusTone,
} from "../data/mockData";

type UploadKind = "photo" | "pdf" | "blurry";
type UploadStatus = "idle" | "uploading" | "success" | "error";
type ShareTarget = "caregiver" | "doctor";

interface UploadFeedback {
  title: string;
  body: string;
}

interface NewNoteInput {
  title: string;
  body: string;
  checklist: string[];
}

interface DemoContextValue {
  reports: typeof initialReports;
  notes: Note[];
  uploadStatus: UploadStatus;
  uploadFeedback: UploadFeedback | null;
  recentlyUploadedReportId: string | null;
  shareTarget: ShareTarget;
  timeline: typeof timelineEvents;
  simulateUpload: (kind: UploadKind) => Promise<void>;
  resetUpload: () => void;
  addNote: (note: NewNoteInput) => void;
  setShareTarget: (target: ShareTarget) => void;
}

const DemoContext = createContext<DemoContextValue | null>(null);

export const DemoProvider = ({ children }: PropsWithChildren) => {
  const [reports] = useState(initialReports);
  const [notes, setNotes] = useState(initialNotes);
  const [uploadStatus, setUploadStatus] = useState<UploadStatus>("idle");
  const [uploadFeedback, setUploadFeedback] = useState<UploadFeedback | null>(null);
  const [recentlyUploadedReportId, setRecentlyUploadedReportId] = useState<string | null>(
    null,
  );
  const [shareTarget, setShareTarget] = useState<ShareTarget>("caregiver");

  const simulateUpload = async (kind: UploadKind) => {
    setUploadStatus("uploading");
    setUploadFeedback(null);

    await new Promise<void>((resolve) => {
      window.setTimeout(() => resolve(), 1200);
    });

    if (kind === "blurry") {
      setUploadStatus("error");
      setUploadFeedback({
        title: "This photo is too blurry to read safely",
        body: "Try placing the paper on a flat surface, move closer, and retake the photo in brighter light.",
      });
      return;
    }

    setUploadStatus("success");
    setUploadFeedback(
      kind === "photo"
        ? {
            title: "Photo uploaded successfully",
            body: "Your report is ready. MediVoice has organised the key numbers and prepared a plain-language summary.",
          }
        : {
            title: "PDF uploaded successfully",
            body: "Your PDF was added to the timeline and linked to Mr. Tan's recent trends.",
          },
    );
    setRecentlyUploadedReportId("lab-mar-2026");
  };

  const resetUpload = () => {
    setUploadStatus("idle");
    setUploadFeedback(null);
  };

  const addNote = (note: NewNoteInput) => {
    const nextNote: Note = {
      id: `note-${Date.now()}`,
      title: note.title,
      body: note.body,
      checklist: note.checklist,
      author: "Ms. Tan",
      role: "Caregiver",
      type: "caregiver-note",
      createdAt: new Date().toISOString(),
    };

    setNotes((current) => [nextNote, ...current]);
  };

  const timeline = useMemo(() => {
    const noteEvents = notes.map((note) => ({
      id: `event-${note.id}`,
      date: note.createdAt,
      title: note.title,
      description: note.body,
      type: "note" as const,
      status: (note.type === "doctor-reminder" ? "info" : "stable") as StatusTone,
      route: "/notes",
    }));

    return [...timelineEvents, ...noteEvents].sort(
      (left, right) => +new Date(right.date) - +new Date(left.date),
    );
  }, [notes]);

  const value = useMemo(
    () => ({
      reports,
      notes,
      uploadStatus,
      uploadFeedback,
      recentlyUploadedReportId,
      shareTarget,
      timeline,
      simulateUpload,
      resetUpload,
      addNote,
      setShareTarget,
    }),
    [
      notes,
      reports,
      shareTarget,
      timeline,
      uploadFeedback,
      uploadStatus,
      recentlyUploadedReportId,
    ],
  );

  return <DemoContext.Provider value={value}>{children}</DemoContext.Provider>;
};

export const useDemo = () => {
  const context = useContext(DemoContext);

  if (!context) {
    throw new Error("useDemo must be used within DemoProvider");
  }

  return context;
};

export { sharePackages };
