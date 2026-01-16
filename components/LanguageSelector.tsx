import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Languages } from 'lucide-react';

interface LanguageSelectorProps {
  value: string;
  onChange: (value: string) => void;
  variant?: 'default' | 'header';
}

const LANGUAGES = [
  "English",
  "Simplified Chinese",
  "Traditional Chinese",
  "Japanese",
  "Korean",
  "Hindi",
  "Spanish",
  "French",
  "Arabic",
  "Portuguese",
  "Russian"
];

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange, variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isHeader = variant === 'header';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  return (
    <div className={`relative ${isHeader ? 'w-auto' : 'w-full'}`} ref={wrapperRef}>
      <div 
        className={`
          flex items-center justify-between cursor-pointer transition-all bg-white
          ${isHeader 
            ? `px-3 py-1.5 rounded-full border text-xs font-medium ${isOpen ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300'}`
            : `w-full px-4 py-2 border rounded-lg ${isOpen ? 'border-brand-500 ring-2 ring-brand-500' : 'border-slate-300 hover:border-slate-400'}`
          }
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center gap-2">
          <Languages size={isHeader ? 14 : 18} className="text-slate-400" />
          <span className={`${value ? 'text-slate-900' : 'text-slate-400'} whitespace-nowrap`}>
            {value || "Select language"}
          </span>
        </div>
        <ChevronDown 
          size={isHeader ? 14 : 20} 
          className={`text-slate-400 transition-transform duration-200 ml-2 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className={`
          absolute z-50 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-72 overflow-y-auto animate-in fade-in zoom-in-95 duration-100
          ${isHeader ? 'right-0 w-48' : 'left-0 w-full top-full'}
        `}>
          <div className="p-1">
            {LANGUAGES.map((lang) => (
              <div
                key={lang}
                className={`px-3 py-2.5 text-sm rounded-md cursor-pointer flex items-center justify-between transition-colors
                  ${value === lang 
                    ? 'bg-brand-50 text-brand-700 font-medium' 
                    : 'text-slate-700 hover:bg-slate-100'}
                `}
                onClick={() => {
                  onChange(lang);
                  setIsOpen(false);
                }}
              >
                {lang}
                {value === lang && <Check size={16} className="text-brand-600" />}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};