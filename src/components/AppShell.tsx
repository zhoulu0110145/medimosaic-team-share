import { HeartPulse, ScrollText, ShieldCheck } from "lucide-react";
import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

import { useAppMode } from "../app/useAppMode";
import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

export const AppShell = ({ children }: PropsWithChildren) => {
  const { isSimple } = useAppMode();

  return (
    <div className="min-h-dvh bg-shell">
      <div className="mx-auto flex min-h-dvh max-w-7xl gap-6 p-4 lg:items-start lg:justify-center lg:px-8">
        {!isSimple ? (
          <aside className="hidden w-full max-w-sm shrink-0 flex-col gap-4 pt-8 lg:flex">
            <div className="surface-card p-6">
              <p className="section-kicker">Demo support</p>
              <h2 className="mt-3 text-3xl font-display font-semibold text-ink">
                MediVoice presentation build
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                This mobile-first prototype follows the PDFs closely: fragmented record upload,
                plain-language translation, gentle trend monitoring, and caregiver sharing.
              </p>
              <div className="mt-5 space-y-3">
                <Link className="soft-button w-full" to="/dashboard">
                  Start patient route
                </Link>
                <Link className="soft-button w-full" to="/timeline">
                  Start caregiver route
                </Link>
                <Link className="soft-button w-full" to="/presentation">
                  Open presentation page
                </Link>
              </div>
            </div>
            <div className="surface-card p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Design metaphor translated into UX
              </p>
              <div className="mt-4 space-y-3">
                <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
                  <ScrollText className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
                  <div>
                    <p className="text-sm font-semibold text-ink">The Scribe</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Quietly organises records from photos, PDFs, and home readings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
                  <ShieldCheck className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
                  <div>
                    <p className="text-sm font-semibold text-ink">The Translator</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Rewrites medical jargon into supportive, plain English.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3 rounded-3xl bg-slate-50 p-4">
                  <HeartPulse className="mt-1 h-4 w-4 shrink-0 text-primary-700" />
                  <div>
                    <p className="text-sm font-semibold text-ink">The Vigilant Watcher</p>
                    <p className="mt-1 text-sm leading-6 text-slate-600">
                      Shows gentle trends without panic-inducing alert overload.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        ) : null}

        <div className="mx-auto flex min-h-[calc(100dvh-2rem)] w-full max-w-[440px] flex-col overflow-hidden rounded-[32px] border border-white/70 bg-white/90 shadow-soft backdrop-blur">
          <Header />
          <main className="relative flex-1 overflow-y-auto px-4 pb-28 pt-4">{children}</main>
          <BottomNav />
        </div>
      </div>
    </div>
  );
};
