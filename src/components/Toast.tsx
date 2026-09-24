import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  subMessage?: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, subMessage, onClose }) => {
  return (
    <div className="fixed top-5 right-5 z-50 max-w-sm w-full bg-[#111111] border border-[#FF914D] shadow-orange-glow rounded-xl p-4 text-white animate-fadeIn flex items-start justify-between gap-3">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FF914D]/20 text-[#FF914D] flex items-center justify-center shrink-0 mt-0.5">
          <CheckCircle2 className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white">
            {message}
          </h4>
          {subMessage && (
            <p className="text-[11px] text-neutral-300 mt-0.5 leading-relaxed">
              {subMessage}
            </p>
          )}
        </div>
      </div>
      <button
        onClick={onClose}
        className="text-neutral-400 hover:text-white p-1"
        aria-label="Close notification"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};
