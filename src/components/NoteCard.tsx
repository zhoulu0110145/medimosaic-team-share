import { CheckCircle2, NotebookText } from "lucide-react";

import type { Note } from "../data/mockData";
import { formatTimestamp } from "../utils/format";
import { StatusBadge } from "./StatusBadge";

interface NoteCardProps {
  note: Note;
}

export const NoteCard = ({ note }: NoteCardProps) => (
  <div className="surface-card p-4">
    <div className="flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
          <NotebookText className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-base font-semibold text-ink">{note.title}</h3>
          <p className="mt-1 text-sm text-slate-500">
            {note.author} • {note.role}
          </p>
        </div>
      </div>
      <StatusBadge tone={note.type === "doctor-reminder" ? "info" : "stable"} />
    </div>
    <p className="mt-4 text-sm leading-6 text-slate-700">{note.body}</p>
    {note.checklist.length > 0 ? (
      <div className="mt-4 rounded-2xl bg-slate-50 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
          Follow-up checklist
        </p>
        <div className="mt-3 space-y-2">
          {note.checklist.map((item) => (
            <div className="flex items-center gap-2 text-sm text-slate-700" key={item}>
              <CheckCircle2 className="h-4 w-4 text-primary-700" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    ) : null}
    <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
      {formatTimestamp(note.createdAt)}
    </p>
  </div>
);
