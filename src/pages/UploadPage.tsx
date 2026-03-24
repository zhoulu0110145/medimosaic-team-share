import { Camera, FileText, RefreshCw, ScanLine, Upload, UploadCloud } from "lucide-react";
import { useRef, useState, type ChangeEvent, type DragEvent } from "react";
import { Link } from "react-router-dom";

import { useDemo } from "../app/DemoContext";
import { useAppMode } from "../app/useAppMode";
import { uploadMessages } from "../data/mockData";

export const UploadPage = () => {
  const { isSimple, to } = useAppMode();
  const imageInputRef = useRef<HTMLInputElement | null>(null);
  const pdfInputRef = useRef<HTMLInputElement | null>(null);
  const [activeFileName, setActiveFileName] = useState<string>("No file selected yet");
  const [dragActive, setDragActive] = useState(false);
  const { simulateUpload, uploadStatus, uploadFeedback, resetUpload } = useDemo();

  const runUpload = async (kind: "photo" | "pdf" | "blurry", fileName?: string) => {
    if (fileName) {
      setActiveFileName(fileName);
    }
    await simulateUpload(kind);
  };

  const handleSelectedFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }

    const isPdf =
      file.type === "application/pdf" || file.name.toLowerCase().trim().endsWith(".pdf");
    await runUpload(isPdf ? "pdf" : "photo", file.name);
    event.target.value = "";
  };

  const handleDrop = async (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);

    const file = event.dataTransfer.files?.[0];
    if (!file) {
      return;
    }

    const isPdf =
      file.type === "application/pdf" || file.name.toLowerCase().trim().endsWith(".pdf");
    await runUpload(isPdf ? "pdf" : "photo", file.name);
  };

  const showReset = uploadStatus === "success" || uploadStatus === "error";

  return (
    <div className="space-y-4">
      <section className="surface-card p-5">
        <div
          className={`rounded-[28px] border-2 border-dashed p-6 text-center transition ${
            dragActive ? "border-primary-500 bg-primary-50" : "border-primary-200 bg-slate-50"
          }`}
          onDragEnter={(event) => {
            event.preventDefault();
            setDragActive(true);
          }}
          onDragLeave={(event) => {
            event.preventDefault();
            setDragActive(false);
          }}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white text-primary-700 shadow-sm">
            <UploadCloud className="h-6 w-6" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-ink">Upload from file or drag it here</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            MediVoice accepts a photo of a paper report or a PDF from another clinic.
            If you are unsure, you can start with the large buttons below.
          </p>
          <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm text-slate-500 shadow-sm">
            {activeFileName}
          </p>
        </div>

        <input
          accept="image/*"
          capture="environment"
          className="hidden"
          onChange={handleSelectedFile}
          ref={imageInputRef}
          type="file"
        />
        <input
          accept=".pdf,application/pdf"
          className="hidden"
          onChange={handleSelectedFile}
          ref={pdfInputRef}
          type="file"
        />

        <div className="mt-5 grid gap-3">
          <button
            className="soft-button w-full justify-start gap-3"
            onClick={() => imageInputRef.current?.click()}
            type="button"
          >
            <Camera className="h-5 w-5" />
            Take photo
          </button>
          <button
            className="soft-button w-full justify-start gap-3"
            onClick={() => imageInputRef.current?.click()}
            type="button"
          >
            <Upload className="h-5 w-5" />
            Choose image from device
          </button>
          <button
            className="soft-button w-full justify-start gap-3"
            onClick={() => pdfInputRef.current?.click()}
            type="button"
          >
            <FileText className="h-5 w-5" />
            Upload PDF
          </button>
        </div>
      </section>

      {!isSimple ? (
        <section className="surface-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
            Quick demo states
          </p>
          <div className="mt-4 grid gap-3">
            <button
              className="soft-button w-full justify-start gap-3"
              onClick={() => runUpload("photo", "sample-lab-photo.jpg")}
              type="button"
            >
              <ScanLine className="h-5 w-5" />
              Use sample photo upload
            </button>
            <button
              className="soft-button w-full justify-start gap-3"
              onClick={() => runUpload("pdf", "follow-up-note.pdf")}
              type="button"
            >
              <FileText className="h-5 w-5" />
              Use sample PDF upload
            </button>
            <button
              className="soft-button w-full justify-start gap-3"
              onClick={() => runUpload("blurry", "blurry-lab-photo.jpg")}
              type="button"
            >
              <RefreshCw className="h-5 w-5" />
              See blurry image error
            </button>
          </div>
        </section>
      ) : null}

      {uploadStatus === "uploading" ? (
        <section className="surface-card p-5">
          <p className="text-sm font-semibold text-ink">Uploading and organising your document</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            MediVoice is extracting the key values and preparing a summary.
          </p>
          <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-3/4 animate-pulse rounded-full bg-primary-600" />
          </div>
        </section>
      ) : null}

      {uploadFeedback ? (
        <section className="surface-card p-5">
          <p className="text-sm font-semibold text-ink">{uploadFeedback.title}</p>
          <p className="mt-2 text-sm leading-6 text-slate-600">{uploadFeedback.body}</p>

          {uploadStatus === "success" ? (
            <div className="mt-4 grid gap-3">
              <Link className="primary-button w-full" to={to("/summary")}>
                View summary
              </Link>
              <Link className="soft-button w-full justify-center" to={to("/timeline")}>
                Go to health timeline
              </Link>
            </div>
          ) : null}

          {uploadStatus === "error" ? (
            <div className="mt-4 rounded-3xl bg-slate-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
                Recovery tips
              </p>
              <div className="mt-3 space-y-2 text-sm leading-6 text-slate-700">
                <p>Place the paper flat on a table.</p>
                <p>Move closer until the text looks sharp.</p>
                <p>Use brighter light and avoid shadows across the page.</p>
              </div>
            </div>
          ) : null}

          {showReset ? (
            <button className="soft-button mt-4 w-full justify-center" onClick={resetUpload} type="button">
              Try another upload
            </button>
          ) : null}
        </section>
      ) : null}

      <section className="surface-card p-5">
        <p className="text-sm font-semibold text-ink">Helper copy for low-tech users</p>
        <div className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
          <p>Use a clear photo if you have a paper report.</p>
          <p>If you already have a file from the clinic, choose the PDF button.</p>
          <p>{isSimple ? uploadMessages.successPdf.body : uploadMessages.successPhoto.body}</p>
          <p>{uploadMessages.blurry.body}</p>
        </div>
      </section>
    </div>
  );
};
