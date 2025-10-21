type Case = { title: string; summary: string; metrics?: string };

const cases: Case[] = [
  { title: "Enhanced Sales Prediction Models", summary: "Improved forecast accuracy and reduced stockouts with ML pipelines.", metrics: "+12% MAPE improvement" },
  { title: "Aspect-Based Employee Survey Analysis", summary: "NLP to extract themes and sentiment from open-ended responses.", metrics: "95% coverage of key themes" },
];

export default function CaseStudiesPage() {
  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>Case Studies</h1>
        <p className="text-[var(--neutral-700)] max-w-2xl">Real results, delivered quickly. Each project pairs rigorous engineering with clear business outcomes.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        {cases.map((c) => (
          <article key={c.title} className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
            <h2 className="font-semibold mb-1">{c.title}</h2>
            <p className="text-sm text-[var(--neutral-700)] mb-2">{c.summary}</p>
            {c.metrics ? <div className="text-xs opacity-80">{c.metrics}</div> : null}
          </article>
        ))}
      </div>
    </section>
  );
}


