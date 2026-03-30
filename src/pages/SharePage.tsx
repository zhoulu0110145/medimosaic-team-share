import { CheckCircle2, Send, UserRound, UsersRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { sharePackages, useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { ShareSummaryPanel } from "../components/ShareSummaryPanel";

export const SharePage = () => {
  const { isSimple } = useAppMode();
  const [searchParams] = useSearchParams();
  const { setShareTarget, shareTarget } = useDemo();
  const [isSharing, setIsSharing] = useState(false);
  const [isShared, setIsShared] = useState(false);

  useEffect(() => {
    const nextTarget = searchParams.get("target") === "doctor" ? "doctor" : "caregiver";
    setShareTarget(nextTarget);
  }, [searchParams, setShareTarget]);

  const handleShare = async () => {
    setIsSharing(true);
    setIsShared(false);
    await new Promise<void>((resolve) => {
      window.setTimeout(() => resolve(), 900);
    });
    setIsSharing(false);
    setIsShared(true);
  };

  const packageData = sharePackages[shareTarget];

  return (
    <div className="space-y-4">
      <section className="surface-card p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          Choose recipient
        </p>
        <div className="mt-4 grid grid-cols-2 gap-3">
          <button
            className={`rounded-[28px] border px-4 py-4 text-left ${
              shareTarget === "caregiver"
                ? "border-primary-700 bg-primary-50 text-primary-800"
                : "border-slate-200 bg-white text-slate-600"
            }`}
            onClick={() => {
              setShareTarget("caregiver");
              setIsShared(false);
            }}
            type="button"
          >
            <UsersRound className="h-5 w-5" />
            <p className="mt-3 text-sm font-semibold">Share with caregiver</p>
            <p className="mt-1 text-sm leading-6">Best for home support and family updates.</p>
          </button>
          <button
            className={`rounded-[28px] border px-4 py-4 text-left ${
              shareTarget === "doctor"
                ? "border-primary-700 bg-primary-50 text-primary-800"
                : "border-slate-200 bg-white text-slate-600"
            }`}
            onClick={() => {
              setShareTarget("doctor");
              setIsShared(false);
            }}
            type="button"
          >
            <UserRound className="h-5 w-5" />
            <p className="mt-3 text-sm font-semibold">Share with doctor</p>
            <p className="mt-1 text-sm leading-6">Best for pre-visit review and continuity of care.</p>
          </button>
        </div>
      </section>

      <section className="surface-card p-5">
        <p className="text-sm font-semibold text-ink">What will be shared</p>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          MediMosaic only shares the selected summary package. The preview below makes the
          contents visible before anything is sent.
        </p>
      </section>

      <ShareSummaryPanel packageData={packageData} />

      <button className="primary-button w-full" disabled={isSharing} onClick={handleShare} type="button">
        <Send className="mr-2 h-4 w-4" />
        {isSharing ? "Sending package..." : `Share with ${shareTarget}`}
      </button>

      {isShared ? (
        <section className="surface-card p-5">
          <div className="flex items-start gap-3">
            <div className="rounded-2xl bg-emerald-50 p-2.5 text-emerald-700">
              <CheckCircle2 className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-ink">Share successful</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {isSimple
                  ? `The ${shareTarget} package has been prepared and shared successfully.`
                  : `The ${shareTarget} package has been prepared and sent in the prototype flow. This confirmation state is presentation-ready for the class demo.`}
              </p>
            </div>
          </div>
        </section>
      ) : null}
    </div>
  );
};
