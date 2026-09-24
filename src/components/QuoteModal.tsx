import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';
import { ConsultationFormData } from '../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  onSubmit: (data: ConsultationFormData) => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
  onSubmit,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    phone: '',
    email: '',
    projectType: preselectedService || 'Kitchen Remodeling',
    timeline: 'Within 1-3 Months',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 4000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-xl rounded-2xl bg-[#111111] border border-[#FF914D]/60 shadow-2xl p-6 sm:p-8 max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white hover:bg-neutral-800 rounded-full transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] uppercase font-bold tracking-widest text-[#FF914D] block mb-1">
            Free Estimate &amp; Feasibility
          </span>
          <h3
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Start Your Custom Project
          </h3>
          <p className="text-xs text-neutral-400 mt-1">
            Discuss your remodel with Sina Design &amp; Build's master craftsmen.
          </p>
        </div>

        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-[#FF914D]/20 border border-[#FF914D] flex items-center justify-center mb-4">
              <CheckCircle2 className="w-8 h-8 text-[#FF914D]" />
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Request Received!</h4>
            <p className="text-xs text-neutral-300 max-w-sm leading-relaxed mb-6">
              Thank you, {formData.fullName}. Our team will review your specifications and
              contact you within 24 hours.
            </p>
            <div className="text-xs text-neutral-400">
              Immediate inquiry? Call{' '}
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="text-[#FF914D] font-bold underline ml-1"
              >
                {COMPANY_INFO.phone}
              </a>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Richard Hendricks"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(714) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] focus:ring-1 focus:ring-[#FF914D]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Project Type
              </label>
              <select
                value={formData.projectType}
                onChange={(e) =>
                  setFormData({ ...formData, projectType: e.target.value })
                }
                className="w-full px-3 py-2.5 rounded-lg bg-[#141414] border border-neutral-700 text-white text-xs focus:outline-none focus:border-[#FF914D]"
              >
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Remodeling">Bathroom Remodeling</option>
                <option value="Flooring">Flooring Solutions</option>
                <option value="Tile & Stone">Tile &amp; Stone Installation</option>
                <option value="Full Renovation">Full Custom Design Build</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-semibold uppercase tracking-wider text-neutral-300 mb-1">
                Project Details or Questions
              </label>
              <textarea
                rows={3}
                placeholder="Describe your residence, scope, or desired timeline..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-lg bg-black/60 border border-neutral-700 text-white text-xs placeholder-neutral-500 focus:outline-none focus:border-[#FF914D] resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-black bg-gradient-to-r from-[#FF914D] to-[#FFB27D] hover:shadow-orange-glow transition-all flex items-center justify-center gap-2"
            >
              <span>SUBMIT ESTIMATE REQUEST</span>
              <Send className="w-3.5 h-3.5 text-black" />
            </button>

            <div className="pt-2 flex items-center justify-between text-[11px] text-neutral-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF914D]" />
                CSLB #1084291
              </span>
              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="flex items-center gap-1 hover:text-[#FF914D] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#FF914D]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
