import Link from "next/link";
import { DataVisualizationBackground } from "@/components/DataVisualizationBackground";

export default function Home() {
  return (
    <section className="grid gap-10">
      {/* full-bleed hero so text can align to far-left */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] min-h-[560px]">
        {/* Background mounted outside text container so it isn't clipped */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <DataVisualizationBackground />
        </div>
        <div className="relative z-10 grid gap-6 px-4 md:px-8 py-12 md:py-20 md:grid-cols-12 items-center">
          <h1 className="text-center md:col-span-8 md:col-start-3 text-4xl md:text-6xl font-bold tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
          Elevate Decisions with Modern Business Intelligence and AI
        </h1>
          <p className="text-center md:col-span-8 md:col-start-3 text-lg md:text-xl text-[var(--neutral-700)] max-w-3xl mx-auto">
          Harvest Analytics helps teams turn data into outcomes—BI modernization, Analytics Engineering, Data Science, and ML—delivered with speed, clarity, and measurable impact.
        </p>
        <div className="md:col-span-8 md:col-start-3 flex items-center justify-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-[var(--brand-accent)] text-black px-5 py-3 text-sm font-medium hover:opacity-90"
          >
            Book a consultation
          </Link>
          <Link href="/insights" className="text-sm underline text-[var(--neutral-700)] hover:text-[var(--brand-accent)]">
            View insights dashboard
          </Link>
        </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <div className="font-semibold mb-2">BI Modernization</div>
          <p className="text-sm text-[var(--neutral-700)]">From legacy dashboards to a governed, scalable analytics platform.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <div className="font-semibold mb-2">Analytics Engineering</div>
          <p className="text-sm text-[var(--neutral-700)]">Model reliable metrics and ship performant datasets for the business.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <div className="font-semibold mb-2">Data Science & ML</div>
          <p className="text-sm text-[var(--neutral-700)]">Predictive models and experimentation aligned to business outcomes.</p>
        </div>
        <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <div className="font-semibold mb-2">GenAI & LLMs</div>
          <p className="text-sm text-[var(--neutral-700)]">Pragmatic GenAI integrations where they drive measurable ROI.</p>
        </div>
      </div>
    </section>
  );
}
