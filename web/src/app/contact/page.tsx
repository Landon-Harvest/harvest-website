export default function ContactPage() {
  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>Contact</h1>
        <p className="text-[var(--neutral-700)]">Tell us about your goals. We’ll respond within 1–2 business days.</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <form className="grid gap-4 rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <label className="grid gap-1 text-sm">
            <span>Name</span>
            <input className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent" placeholder="Jane Doe" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Email</span>
            <input type="email" className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent" placeholder="jane@company.com" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Company</span>
            <input className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent" placeholder="Acme Corp" />
          </label>
          <label className="grid gap-1 text-sm">
            <span>Message</span>
            <textarea className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent min-h-28" placeholder="What problem are you solving?" />
          </label>
          <button className="inline-flex items-center justify-center rounded-md bg-[var(--brand-accent)] text-black px-5 py-3 text-sm font-medium hover:opacity-90" type="submit">
            Send
          </button>
        </form>
        <div className="grid gap-4">
          <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
            <div className="font-semibold mb-2">Book a meeting</div>
            <p className="text-sm text-[var(--neutral-700)] mb-4">Prefer to pick a time? Use our Calendly link.</p>
            <a className="underline" href="#" target="_blank" rel="noopener noreferrer">Open Calendly</a>
          </div>
          <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)] text-sm">
            <div className="font-semibold mb-2">Email</div>
            <p>info@harvestanalytics.io</p>
          </div>
        </div>
      </div>
    </section>
  );
}


