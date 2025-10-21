"use client";
import Link from "next/link";
import Image from "next/image";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="border-b border-[var(--border)] bg-[var(--surface)] sticky top-0 z-50">
      <div className="container flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="Harvest Analytics logo" width={80} height={80} priority />
          <span className="font-semibold tracking-tight" style={{ fontFamily: "var(--font-sora)" }}>
            Harvest Analytics
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="hover:opacity-80">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-md bg-[var(--brand-accent)] text-black px-4 py-2 text-sm font-medium hover:opacity-90"
          >
            Book consultation
          </Link>
        </div>
      </div>
    </header>
  );
}


