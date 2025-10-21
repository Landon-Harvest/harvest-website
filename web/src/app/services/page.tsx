import Link from "next/link";

const services = [
  { href: "/services/bi-modernization", title: "BI Modernization", desc: "From legacy dashboards to a governed, scalable analytics platform." },
  { href: "/services/analytics-engineering", title: "Analytics Engineering", desc: "Model reliable metrics and ship performant datasets for the business." },
  { href: "/services/data-science-ml", title: "Data Science & ML", desc: "Predictive models and experimentation aligned to business outcomes." },
  { href: "/services/genai-llms", title: "GenAI & LLMs", desc: "Pragmatic GenAI integrations where they drive measurable ROI." },
  { href: "/services/data-strategy", title: "Data Strategy", desc: "Roadmaps, governance, and operating models that scale with your needs." },
];

export default function ServicesPage() {
  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>Services</h1>
        <p className="text-[var(--neutral-700)] max-w-2xl">Strategy to implementation: architecture, pipelines, dashboards, and models. We focus on fast value and maintainability.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Link key={s.href} href={s.href} className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)] hover:shadow-sm">
            <div className="font-semibold mb-2">{s.title}</div>
            <p className="text-sm text-[var(--neutral-700)]">{s.desc}</p>
            <div className="mt-4 text-sm underline">Learn more</div>
          </Link>
        ))}
      </div>
      <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
        <div className="font-semibold mb-2">Delivery Model</div>
        <p className="text-sm text-[var(--neutral-700)]">Engagements run in 2–6 week increments with weekly demos, written status, and measurable outcomes. We partner closely with your team for knowledge transfer.</p>
      </div>
    </section>
  );
}


