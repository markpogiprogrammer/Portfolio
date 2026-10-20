"use client";

import { useState } from "react";
import {
  AlertCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import Reveal from "@/app/components/motion/Reveal";
import {
  Orb,
  Panel,
  Section,
  SectionHeader,
} from "@/app/components/ui/primitives";
import { SOCIALS } from "@/app/lib/social";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Errors = Partial<Record<keyof FormState, string>>;

const inputClass =
  "w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 text-[15px] text-ink shadow-[inset_0_1px_0_0_rgba(255,255,255,0.9)] backdrop-blur-md transition-colors placeholder:text-ink-3 focus:outline-none";

export default function ContactSection(): React.JSX.Element {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    // Clear a field's error as soon as the visitor starts fixing it.
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): Errors => {
    const next: Errors = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (!form.email.trim()) next.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim()))
      next.email = "That doesn't look like a valid email address.";
    if (!form.message.trim()) next.message = "Please add a short message.";
    return next;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) {
      // Move focus to the first invalid control.
      const first = Object.keys(next)[0];
      document.getElementById(first)?.focus();
      return;
    }

    setStatus("submitting");

    const subject = encodeURIComponent(
      form.subject.trim() || `Inquiry from ${form.name.trim()} via Portfolio`,
    );
    const body = encodeURIComponent(
      `Hello Mark,\n\nName: ${form.name.trim()}\nEmail: ${form.email.trim()}\n\nMessage:\n${form.message.trim()}`,
    );

    window.location.href = `mailto:markoliverquiazon@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 700);
  };

  const errorList = Object.values(errors).filter(Boolean);

  return (
    <Section
      id="contact"
      className="pb-28"
      orbs={
        <>
          <Orb className="-right-28 top-10 h-[30rem] w-[30rem]" color="from-accent/22" />
          <Orb className="-left-28 bottom-0 h-[26rem] w-[26rem]" color="from-sky/25" />
        </>
      }
    >
      <SectionHeader
        eyebrow="Direct Communication"
        eyebrowIcon={Mail}
        title="Get in"
        highlight="Touch"
        lede="Hiring for a Software QA, test automation, or systems QA role? Send a message or reach out directly — I read everything."
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Details */}
        <Reveal className="lg:col-span-5">
          <Panel className="flex h-full flex-col gap-6 p-6 sm:p-7">
            <h3 className="font-display text-xl font-semibold">Contact Information</h3>

            <div className="space-y-3">
              <a
                href="mailto:markoliverquiazon@gmail.com"
                className="glass-inset group flex items-center gap-3.5 rounded-2xl p-4 transition-all duration-300 hover:bg-white/70"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep transition-transform duration-300 group-hover:scale-105">
                  <Mail className="h-4.5 w-4.5" />
                </span>
                <span className="min-w-0">
                  <span className="mono-meta block text-accent-deep">Direct email</span>
                  <span className="block truncate text-[15px] font-semibold text-ink transition-colors group-hover:text-accent-deep">
                    markoliverquiazon@gmail.com
                  </span>
                </span>
              </a>

              <div className="glass-inset flex items-center gap-3.5 rounded-2xl p-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/10 text-accent-deep">
                  <MapPin className="h-4.5 w-4.5" />
                </span>
                <span>
                  <span className="mono-meta block text-accent-deep">Location</span>
                  <span className="block text-[15px] font-semibold text-ink">
                    Metro Manila, Philippines
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-auto space-y-3 border-t border-ink/[0.07] pt-5">
              <h4 className="mono-meta text-ink-3">Professional channels</h4>
              <div className="grid grid-cols-2 gap-2.5">
                {SOCIALS.map(({ href, label, Icon, tone }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/60 px-3.5 py-2.5 text-[13px] font-semibold text-ink-2 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:text-ink"
                  >
                    <Icon className={`h-4 w-4 shrink-0 ${tone}`} />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </Panel>
        </Reveal>

        {/* Form */}
        <Reveal delay={90} className="lg:col-span-7">
          <Panel className="h-full p-6 sm:p-7" hover={false}>
            <h3 className="font-display text-xl font-semibold">Send a message</h3>
            <p className="mt-1 text-sm text-ink-2">
              Opens a pre-filled draft in your email client addressed to{" "}
              <span className="font-medium text-ink">markoliverquiazon@gmail.com</span>.
            </p>

            {/* Error summary — announced, and links to the offending field. */}
            {errorList.length > 0 && (
              <div
                role="alert"
                className="mt-5 flex gap-2.5 rounded-xl border border-rust/25 bg-rust/[0.06] p-3.5 text-sm text-rust animate-fade-rise"
              >
                <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-semibold">
                    {errorList.length === 1
                      ? "One field needs attention"
                      : `${errorList.length} fields need attention`}
                  </p>
                  <ul className="mt-1 list-disc space-y-0.5 pl-4">
                    {errorList.map((message) => (
                      <li key={message}>{message}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {status === "success" && (
              <div
                role="status"
                className="mt-5 flex gap-2.5 rounded-xl border border-emerald/25 bg-emerald/[0.07] p-3.5 text-sm text-emerald animate-fade-rise"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                <div>
                  <p className="font-semibold">Your email client is opening.</p>
                  <p className="mt-1 text-ink-2">
                    If nothing happened,{" "}
                    <a
                      href="mailto:markoliverquiazon@gmail.com"
                      className="font-semibold text-emerald underline underline-offset-2"
                    >
                      send it directly
                    </a>
                    .
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <Field
                  id="name"
                  label="Your full name"
                  required
                  error={errors.name}
                  input={
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Alex Santos"
                      value={form.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      className={`${inputClass} ${
                        errors.name ? "border-rust/50" : "focus:border-accent/45"
                      }`}
                    />
                  }
                />

                <Field
                  id="email"
                  label="Email address"
                  required
                  error={errors.email}
                  input={
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="e.g. alex@company.com"
                      value={form.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      className={`${inputClass} ${
                        errors.email ? "border-rust/50" : "focus:border-accent/45"
                      }`}
                    />
                  }
                />
              </div>

              <Field
                id="subject"
                label="Subject"
                hint="Optional"
                input={
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="e.g. QA / Software Testing Opportunity"
                    value={form.subject}
                    onChange={handleChange}
                    className={`${inputClass} focus:border-accent/45`}
                  />
                }
              />

              <Field
                id="message"
                label="Message"
                required
                error={errors.message}
                input={
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share role specifications, project details, or an inquiry…"
                    value={form.message}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? "message-error" : undefined}
                    className={`${inputClass} resize-none ${
                      errors.message ? "border-rust/50" : "focus:border-accent/45"
                    }`}
                  />
                }
              />

              <button
                type="submit"
                disabled={status === "submitting"}
                className="btn btn-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Opening email client…" : "Send Email"}
              </button>
            </form>
          </Panel>
        </Reveal>
      </div>
    </Section>
  );
}

/* -------------------------------------------------------------------------- */

function Field({
  id,
  label,
  required,
  hint,
  error,
  input,
}: {
  id: string;
  label: string;
  required?: boolean;
  hint?: string;
  error?: string;
  input: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="flex items-baseline gap-2 text-[13px] font-semibold text-ink-2">
        {label}
        {required ? (
          <span className="text-accent" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="mono-meta font-normal text-ink-3">{hint}</span>
        )}
      </label>
      {input}
      {error && (
        <p id={`${id}-error`} className="flex items-center gap-1.5 text-[13px] text-rust">
          <AlertCircle className="h-3.5 w-3.5 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}