import type { PropsWithChildren } from "react";

interface PresentationSectionProps extends PropsWithChildren {
  eyebrow: string;
  title: string;
  description?: string;
  id?: string;
}

export const PresentationSection = ({
  eyebrow,
  title,
  description,
  id,
  children,
}: PresentationSectionProps) => (
  <section className="surface-card p-6 md:p-8" id={id}>
    <p className="section-kicker">{eyebrow}</p>
    <h2 className="section-title mt-3">{title}</h2>
    {description ? <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{description}</p> : null}
    <div className="mt-6">{children}</div>
  </section>
);
