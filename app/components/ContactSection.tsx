"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, FacebookIcon } from "./SocialIcons";

export default function ContactSection(): React.JSX.Element {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setErrorMessage("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    setStatus("submitting");

    const emailSubject = encodeURIComponent(
      formData.subject || `Inquiry from ${formData.name} via Portfolio`
    );
    const emailBody = encodeURIComponent(
      `Hello Mark,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    const mailtoUrl = `mailto:markoliverquiazon@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    // Trigger default email client addressed to markoliverquiazon@gmail.com
    window.location.href = mailtoUrl;

    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 relative bg-gradient-to-b from-[#110720] via-[#0d051a] to-[#0a0314]">
      {/* Background glow */}
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-semibold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Initiate Direct Communication</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Get in <span className="bg-gradient-to-r from-violet-400 to-purple-300 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg text-white/70 leading-relaxed">
            Interested in hiring me for a Software QA, Test Automation, or Systems QA role? Feel free to send an email or connect directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-xl space-y-6">
              <h3 className="text-2xl font-bold text-white">Contact Information</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:markoliverquiazon@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20 hover:border-purple-400 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-purple-900/50 text-purple-300 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-purple-300/80 uppercase block">Direct Email</span>
                    <span className="text-sm sm:text-base font-bold text-white group-hover:text-purple-300 transition-colors">
                      markoliverquiazon@gmail.com
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl bg-purple-950/40 border border-purple-500/20">
                  <div className="p-3 rounded-xl bg-purple-900/50 text-purple-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-purple-300/80 uppercase block">Location</span>
                    <span className="text-sm font-bold text-white">
                      Metro Manila, Philippines
                    </span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <h4 className="text-xs font-bold text-white/80 uppercase tracking-wider">
                  Professional &amp; Social Channels
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href="https://www.linkedin.com/in/mark-quiazon-b65588290"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-white transition-all"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/markpogiprogrammer"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-white transition-all"
                  >
                    <GithubIcon className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.instagram.com/qznmark/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-white transition-all"
                  >
                    <InstagramIcon className="w-4 h-4 text-pink-400" />
                    <span>Instagram</span>
                  </a>

                  <a
                    href="https://www.facebook.com/mark6god/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-purple-500/40 text-xs font-semibold text-white transition-all"
                  >
                    <FacebookIcon className="w-4 h-4 text-blue-500" />
                    <span>Facebook</span>
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Interactive Email Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-purple-500/20 shadow-2xl space-y-6">
              
              <div>
                <h3 className="text-2xl font-bold text-white">Send Me an Email</h3>
                <p className="text-xs text-white/70 mt-1">
                  Submit your inquiry or opportunity to open an email draft directly to markoliverquiazon@gmail.com.
                </p>
              </div>

              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs flex items-center gap-2.5 animate-fadeIn">
                  <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs space-y-2 animate-fadeIn">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-semibold">Your email client has been prepared!</span>
                  </div>
                  <p className="text-white/80 text-[11px]">
                    If your email app did not open automatically, click here to send directly to{" "}
                    <a href="mailto:markoliverquiazon@gmail.com" className="underline text-emerald-300 font-bold">
                      markoliverquiazon@gmail.com
                    </a>.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-semibold text-white/80">
                      Your Full Name <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="e.g. Alex Santos"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-purple-500/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-white/80">
                      Email Address <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="e.g. alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-950/80 border border-purple-500/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-semibold text-white/80">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="e.g. QA / Software Testing Opportunity"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-purple-500/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-semibold text-white/80">
                    Message <span className="text-purple-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Share role specifications, project details, or inquiry..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/80 border border-purple-500/20 rounded-xl text-sm text-white placeholder-white/40 focus:outline-none focus:border-purple-400 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white font-semibold text-sm rounded-xl shadow-lg shadow-purple-950/60 transition-all disabled:opacity-50 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "Opening Email Client..." : "Send Email"}</span>
                </button>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
