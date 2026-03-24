interface JourneyRouteProps {
  title: string;
  persona: string;
  steps: Array<{
    label: string;
    detail: string;
  }>;
}

export const JourneyRoute = ({ title, persona, steps }: JourneyRouteProps) => (
  <div className="rounded-[28px] border border-white/70 bg-white p-5 shadow-card">
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">{persona}</p>
    <h3 className="mt-2 text-xl font-semibold text-ink">{title}</h3>
    <div className="mt-6 space-y-3">
      {steps.map((step, index) => (
        <div
          className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-4"
          key={step.label}
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-700 text-sm font-semibold text-white">
            {index + 1}
          </div>
          <div>
            <p className="text-sm font-semibold text-ink">{step.label}</p>
            <p className="mt-1 text-sm leading-6 text-slate-600">{step.detail}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
