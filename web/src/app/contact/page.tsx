"use client";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import { Calendar } from "lucide-react";

export default function ContactPage() {
  const [showCalendly, setShowCalendly] = useState(false);
  
  const calendlyUrl = "https://calendly.com/landon-kaufman-harvestanalytics";

  return (
    <section className="grid gap-8">
      <div className="grid gap-2">
        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: "var(--font-sora)" }}>Contact</h1>
        <p className="text-[var(--neutral-700)]">Let&apos;s discuss how we can help transform your data strategy.</p>
      </div>

      {/* Calendly Embed Section */}
      <div className="rounded-lg border border-[var(--border)] bg-[var(--surface)] overflow-hidden">
        <div className="p-6 border-b border-[var(--border)]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-semibold mb-1 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-[var(--brand-accent)]" />
                Schedule a Consultation
              </h2>
              <p className="text-sm text-[var(--neutral-700)]">
                Book a 30-minute discovery call to explore how Harvest Analytics can help your team.
              </p>
            </div>
            <button
              onClick={() => setShowCalendly(!showCalendly)}
              className="text-sm text-[var(--brand-accent)] hover:underline"
            >
              {showCalendly ? 'Hide calendar' : 'Show calendar'}
            </button>
          </div>
        </div>
        
        {showCalendly && (
          <div className="bg-white">
            <InlineWidget 
              url={calendlyUrl}
              styles={{
                height: '700px',
                width: '100%'
              }}
            />
          </div>
        )}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <form className="grid gap-4 rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
          <div className="mb-2">
            <h3 className="text-lg font-semibold mb-1">Send us a message</h3>
            <p className="text-sm text-[var(--neutral-700)]">We&apos;ll respond within 1–2 business days.</p>
          </div>
          
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Name *</span>
            <input 
              required
              className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]" 
              placeholder="Jane Doe" 
            />
          </label>
          
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Email *</span>
            <input 
              required
              type="email" 
              className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]" 
              placeholder="jane@company.com" 
            />
          </label>
          
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Company</span>
            <input 
              className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]" 
              placeholder="Acme Corp" 
            />
          </label>
          
          <label className="grid gap-1 text-sm">
            <span className="font-medium">Message *</span>
            <textarea 
              required
              className="border border-[var(--border)] rounded-md px-3 py-2 bg-transparent min-h-28 focus:outline-none focus:ring-2 focus:ring-[var(--brand-accent)]" 
              placeholder="Tell us about your data challenges and goals..." 
            />
          </label>
          
          <button 
            className="inline-flex items-center justify-center rounded-md bg-[var(--brand-accent)] text-black px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity" 
            type="submit"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="grid gap-4 h-fit">
          <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)]">
            <div className="font-semibold mb-2">📅 Direct Booking</div>
            <p className="text-sm text-[var(--neutral-700)] mb-4">
              Open our scheduling page in a new window to view all available times.
            </p>
            <a 
              className="inline-flex items-center gap-2 text-sm font-medium text-[var(--brand-accent)] hover:underline" 
              href={calendlyUrl}
              target="_blank" 
              rel="noopener noreferrer"
            >
              Open Calendly →
            </a>
          </div>
          
          <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)] text-sm">
            <div className="font-semibold mb-2">✉️ Email</div>
            <a 
              href="mailto:info@harvestanalytics.io"
              className="text-[var(--brand-accent)] hover:underline"
            >
              info@harvestanalytics.io
            </a>
          </div>

          <div className="rounded-lg border border-[var(--border)] p-6 bg-[var(--surface)] text-sm">
            <div className="font-semibold mb-2">⏱️ Response Time</div>
            <p className="text-[var(--neutral-700)]">
              We typically respond to inquiries within 1-2 business days. For urgent matters, please use the Calendly link to schedule a same-day call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


