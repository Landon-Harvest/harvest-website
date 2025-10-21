import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] mt-16">
      <div className="container py-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4 text-sm">
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Services</div>
          <ul className="space-y-1">
            <li><Link href="/services/bi-modernization">BI Modernization</Link></li>
            <li><Link href="/services/analytics-engineering">Analytics Engineering</Link></li>
            <li><Link href="/services/data-science-ml">Data Science & ML</Link></li>
            <li><Link href="/services/genai-llms">GenAI & LLMs</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1">
            <li><Link href="/insights">Insights</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Legal</div>
          <ul className="space-y-1">
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[var(--border)]">
        <div className="container text-xs py-4 flex items-center justify-between">
          <span>© {new Date().getFullYear()} Harvest Analytics</span>
          <span>Rochester, IL</span>
        </div>
      </div>
    </footer>
  );
}


