import { Plus, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

import { useDemo } from "../app/DemoContext";
import { NoteCard } from "../components/NoteCard";

const quickTemplates = [
  {
    title: "Medication question",
    body: "Ask if the evening medication timing should change because the morning sugar trend is higher.",
    checklist: "Bring medication list,Bring 7-day glucose log",
  },
  {
    title: "Clinic preparation",
    body: "Prepare the latest report and note down any dizziness or fatigue before the next appointment.",
    checklist: "Pack reports,Write symptoms",
  },
];

export const NotesPage = () => {
  const { addNote, notes } = useDemo();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [checklistText, setChecklistText] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !body.trim()) {
      return;
    }

    addNote({
      title: title.trim(),
      body: body.trim(),
      checklist: checklistText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    });

    setTitle("");
    setBody("");
    setChecklistText("");
  };

  return (
    <div className="space-y-4">
      <section className="surface-card p-5">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">Notes reduce repeated explanation</p>
            <p className="mt-1 text-sm text-slate-500">
              Add one short observation, reminder, or follow-up task.
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {quickTemplates.map((template) => (
            <button
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600"
              key={template.title}
              onClick={() => {
                setTitle(template.title);
                setBody(template.body);
                setChecklistText(template.checklist);
              }}
              type="button"
            >
              {template.title}
            </button>
          ))}
        </div>
      </section>

      <section className="surface-card p-5">
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="note-title">
              Note title
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              id="note-title"
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Example: Ask about late dinners"
              value={title}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="note-body">
              Note details
            </label>
            <textarea
              className="min-h-[130px] w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              id="note-body"
              onChange={(event) => setBody(event.target.value)}
              placeholder="What changed, what you noticed, or what to ask the doctor."
              value={body}
            />
          </div>
          <div>
            <label className="mb-2 block text-sm font-semibold text-ink" htmlFor="note-checklist">
              Checklist items
            </label>
            <input
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-ink outline-none transition focus:border-primary-400 focus:ring-2 focus:ring-primary-100"
              id="note-checklist"
              onChange={(event) => setChecklistText(event.target.value)}
              placeholder="Separate items with commas"
              value={checklistText}
            />
          </div>
          <button className="primary-button w-full" type="submit">
            <Plus className="mr-2 h-4 w-4" />
            Add note
          </button>
        </form>
      </section>

      <section className="space-y-4">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </section>
    </div>
  );
};
