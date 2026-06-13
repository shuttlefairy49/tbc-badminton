"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Facebook,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageCircle,
} from "lucide-react";

const socialLinks = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@tbcbadminton",
    href: "https://instagram.com",
    color: "from-purple-500 to-pink-500",
    description: "Follow for session clips, highlights, and updates",
  },
  {
    icon: Facebook,
    label: "Facebook",
    handle: "TBC Badminton Club",
    href: "https://facebook.com",
    color: "from-blue-600 to-blue-700",
    description: "Join our community group for session announcements",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "hello@tbcbadminton.com",
    href: "mailto:hello@tbcbadminton.com",
    color: "from-tbc-orange to-tbc-orange-dark",
    description: "For inquiries, partnerships, and anything else",
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-tbc-black overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-tbc-orange to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <span className="inline-flex items-center gap-2 text-tbc-orange font-semibold text-sm uppercase tracking-widest mb-4">
            <MessageCircle className="w-4 h-4" /> Reach Out
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            Get in <span className="text-tbc-orange">Touch</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Questions, session inquiries, partnership requests — we reply fast.
            Usually within a day.
          </p>
        </div>
      </section>

      <section className="py-20 bg-tbc-cream dark:bg-tbc-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left: Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                Find us here
              </h2>

              {/* Social cards */}
              <div className="space-y-4 mb-10">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-tbc-gray-800 rounded-2xl border border-gray-100 dark:border-tbc-gray-700 hover:border-tbc-orange/40 dark:hover:border-tbc-orange/40 hover:shadow-md dark:hover:shadow-black/20 transition-all group"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-105 transition-transform`}
                    >
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {link.label}
                      </p>
                      <p className="text-tbc-orange text-sm font-medium">
                        {link.handle}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                        {link.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-5">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-tbc-orange/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-tbc-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Primary Venue
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Titan Sports Complex, BGC, Taguig
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs mt-0.5">
                      + 11 other courts across Metro Manila
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-tbc-orange/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-tbc-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">
                      Typical Session Times
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Weekends: 7:00 AM – 12:00 PM
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Weeknights: 6:00 PM – 9:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white dark:bg-tbc-gray-800 rounded-3xl p-8 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-tbc-gray-700">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Thanks for reaching out. We&apos;ll get back to you within 24
                      hours.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormState({ name: "", email: "", subject: "", message: "" });
                      }}
                      className="mt-6 px-5 py-2.5 rounded-xl bg-tbc-orange text-white font-semibold text-sm hover:bg-tbc-orange-dark transition-colors"
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Send us a message
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Your Name
                          </label>
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) =>
                              setFormState({ ...formState, name: e.target.value })
                            }
                            placeholder="Juan dela Cruz"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all text-sm"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                            Email Address
                          </label>
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) =>
                              setFormState({ ...formState, email: e.target.value })
                            }
                            placeholder="you@example.com"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all text-sm"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Subject
                        </label>
                        <select
                          value={formState.subject}
                          onChange={(e) =>
                            setFormState({ ...formState, subject: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all text-sm"
                        >
                          <option value="">Select a topic…</option>
                          <option>I want to join TBC</option>
                          <option>Session inquiry</option>
                          <option>Court partnership</option>
                          <option>Sponsorship / collaboration</option>
                          <option>General question</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                          Message
                        </label>
                        <textarea
                          required
                          rows={5}
                          value={formState.message}
                          onChange={(e) =>
                            setFormState({ ...formState, message: e.target.value })
                          }
                          placeholder="Tell us about yourself, your skill level, or whatever's on your mind…"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-tbc-gray-700 bg-tbc-cream dark:bg-tbc-gray-700 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-tbc-orange/50 focus:border-tbc-orange transition-all text-sm resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-tbc-orange text-white font-bold hover:bg-tbc-orange-dark shadow-orange hover:shadow-orange-lg transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {loading ? (
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        ) : (
                          <>
                            <Send className="w-4 h-4" />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
