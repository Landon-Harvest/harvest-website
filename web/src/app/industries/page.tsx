const industries = [
  { title: "Retail & E‑commerce", desc: "Demand forecasting, personalization, and inventory analytics." },
  { title: "FinTech", desc: "Risk analytics, fraud detection, and regulatory reporting." },
  { title: "SaaS/B2B", desc: "Product analytics, funnels, and monetization metrics." },
  { title: "Healthcare", desc: "Operational analytics and patient flow optimization." },
];

export default function IndustriesPage() {
  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>Industries & Use Cases</h1>
        <p className="text-[var(--neutral-700)] max-w-2xl">Problem → Approach → Outcomes. We tailor solutions per industry while keeping core analytics craftsmanship consistent.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {industries.map((i) => (
          <div key={i.title} className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
            <div className="font-semibold mb-2">{i.title}</div>
            <p className="text-sm text-[var(--neutral-700)]">{i.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}


