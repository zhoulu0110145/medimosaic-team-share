import { CheckCircle2, Send } from "lucide-react";

import type { SharePackage } from "../data/mockData";

interface ShareSummaryPanelProps {
  packageData: SharePackage;
}

export const ShareSummaryPanel = ({ packageData }: ShareSummaryPanelProps) => (
  <div className="surface-card p-5">
    <div className="flex items-center gap-3">
      <div className="rounded-2xl bg-primary-50 p-2.5 text-primary-700">
        <Send className="h-5 w-5" />
      </div>
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Package preview
        </p>
        <h3 className="text-lg font-semibold text-ink">{packageData.title}</h3>
      </div>
    </div>
    <p className="mt-4 text-sm leading-6 text-slate-700">{packageData.summary}</p>

    <div className="mt-5 rounded-3xl bg-slate-50 p-4">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Why this is being shared
      </p>
      <p className="mt-2 text-sm leading-6 text-slate-700">{packageData.purpose}</p>
    </div>

    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Included items
      </p>
      <div className="mt-3 space-y-2">
        {packageData.includes.map((item) => (
          <div
            className="rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700"
            key={item}
          >
            {item}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
        Key highlights
      </p>
      <div className="mt-3 space-y-2">
        {packageData.highlights.map((item) => (
          <div className="flex gap-2 text-sm leading-6 text-slate-700" key={item}>
            <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);
