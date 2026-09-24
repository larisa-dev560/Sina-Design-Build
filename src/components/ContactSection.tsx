import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { ConsultationFormData } from '../types';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

interface ContactSectionProps {
  onSubmitLead: (data: ConsultationFormData) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onSubmitLead }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Kitchen Remodeling',
    timeline: 'Within 1-3 Months',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitLead(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: 'Kitchen Remodeling',
        timeline: 'Within 1-3 Months',
        message: '',
      });
    }, 6000);
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #000000 0%, #171717 50%, #0a0a0a 100%)' }}
    >
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-96 h-96 bg-[#FF914D]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Info & Local Context */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="h-[2px] w-6 bg-[#FF914D]" />
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.25em] text-[#FF914D]">
                  START THE CONVERSATION
                </span>
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-white mb-6 leading-tight"
                style={{ fontFamily: 'var(--font-serif)', textWrap: 'balance' }}
              >
                Let's Build Your Dream Space
              </h2>

              <p className="text-neutral-300 text-sm sm:text-base font-light mb-8 leading-relaxed">
                Whether you are envisioning a full-scale chef’s kitchen, a spa sanctuary master
                bath, or whole-home European oak flooring, our team brings clarity, precision,
                and architectural excellence to every detail.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="p-4 rounded-xl bg-black/60 border border-neutral-800 hover:border-[#FF914D] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF914D]/15 flex items-center justify-center text-[#FF914D] group-hover:bg-[#FF914D] group-hover:text-black transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-semibold text-white group-hover:text-[#FF914D] transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="p-4 rounded-xl bg-black/60 border border-neutral-800 hover:border-[#FF914D] transition-colors flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF914D]/15 flex items-center justify-center text-[#FF914D] group-hover:bg-[#FF914D] group-hover:text-black transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                      Project Inquiries
                    </span>
                    <span className="text-xs sm:text-sm font-semibold text-white group-hover:text-[#FF914D] transition-colors break-all">
                      {COMPANY_INFO.email}
                    </span>
                  </div>
                </a>

                <div className="p-4 rounded-xl bg-black/60 border border-neutral-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FF914D]/15 flex items-center justify-center text-[#FF914D]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-wider text-neutral-400 block">
                      Headquarters &amp; Service Hub
                    </span>
                    <span className="text-sm font-semibold text-white">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800/80 text-xs text-neutral-400">
              <div className="flex items-center gap-2 text-neutral-200 font-semibold mb-1">
                <ShieldCheck className="w-4 h-4 text-[#FF914D]" />
                <span>CSLB California State License #1084291</span>
              </div>
              <span>Fully Bonded, Insured, and EPA Lead-Safe Certified Contractor.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-6 sm:p-10 bg-black/75 backdrop-blur-xl border border-neutral-800 shadow-2xl relative">
              <div className="mb-6">
                <h3
                  className="text-2xl font-bold text-white tracking-tight"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Request A Consultation
                </h3>
                <p className="text-xs text-neutral-400 mt-1">
                  Fill in your project details. We will respond with preliminary feasibility
                  and availability within 24 business hours.
                </p>
              </div>

              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF914D]/20 border border-[#FF914D] flex items-center justify-center mb-4">
                    <CheckCircle2 className="w-9 h-9 text-[#FF914D]" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-2">Inquiry Confirmed</h4>
                  <p className="text-sm text-neutral-300 max-w-sm leading-relaxed mb-6">
                    Thank you, {formData.fullName}. Our lead design specialist has received your
                    project brief and will reach out shortly.
                  </p>
                  <div className="text-xs text-neutral-400">
                    Need an immediate same-day site consultation? Call us directly at{' '}
                    <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#FF914D] font-bold underline">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Email Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Eleanor Vance"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="eleanor@domain.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Timeline */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(949) 000-0000"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                        Desired Timeline
                      </label>
                      <select
                        value={formData.timeline}
                        onChange={(e) =>
                          setFormData({ ...formData, timeline: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                      >
                        <option value="Immediately / As soon as possible">
                          Immediately / Ready to start
                        </option>
                        <option value="Within 1-3 Months">Within 1 – 3 Months</option>
                        <option value="3-6 Months">3 – 6 Months</option>
                        <option value="Planning / Exploring feasibility">
                          Planning / Exploring feasibility
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Project Scope
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors"
                    >
                      <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                      <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                      <option value="Tile & Stone">Tile &amp; Stone Installation</option>
                      <option value="Flooring Solutions">Flooring Solutions</option>
                      <option value="Interior Renovation">Interior Renovation</option>
                      <option value="Full Custom Design Build">Full Custom Design Build</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1.5">
                      Tell Us About Your Vision &amp; Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Share details such as home location, current pain points, design styles you like, or specific materials..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-[#111111] border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D] transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.98] flex items-center justify-center gap-2"
                  >
                    <span>REQUEST CONSULTATION</span>
                    <Send className="w-4 h-4 text-black" />
                  </button>

                  <div className="flex items-center justify-center gap-4 text-[10px] text-neutral-400 pt-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#FF914D]" />
                      24h Response Time
                    </span>
                    <span>·</span>
                    <span>Zero Sales Pressure</span>
                    <span>·</span>
                    <span>Complimentary Estimate</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
