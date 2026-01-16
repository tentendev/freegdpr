import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

interface LanguageSwitcherProps {
  variant?: 'default' | 'header';
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ variant = 'header' }) => {
  const { lang, switchLanguage, languages } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find(l => l.code === lang);
  const isHeader = variant === 'header';

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${isHeader ? 'w-auto' : 'w-full'}`} ref={wrapperRef}>
      <button
        type="button"
        className={`
          flex items-center justify-between cursor-pointer transition-all bg-white
          ${isHeader
            ? `px-3 py-1.5 rounded-full border text-xs font-medium ${isOpen ? 'border-brand-500 ring-1 ring-brand-500' : 'border-slate-200 hover:border-slate-300'}`
            : `w-full px-4 py-2 border rounded-lg ${isOpen ? 'border-brand-500 ring-2 ring-brand-500' : 'border-slate-300 hover:border-slate-400'}`
          }
        `}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <div className="flex items-center gap-2">
          <Globe size={isHeader ? 14 : 18} className="text-slate-400" />
          <span className="text-slate-900 whitespace-nowrap">
            {currentLanguage?.flag} {isHeader ? currentLanguage?.code.toUpperCase() : currentLanguage?.nativeName}
          </span>
        </div>
        <ChevronDown
          size={isHeader ? 14 : 20}
          className={`text-slate-400 transition-transform duration-200 ml-2 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          className={`
            absolute z-50 mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-80 overflow-y-auto animate-in fade-in zoom-in-95 duration-100
            ${isHeader ? 'right-0 w-56' : 'left-0 w-full top-full'}
          `}
          role="listbox"
        >
          <div className="p-1">
            {languages.map((language) => (
              <button
                key={language.code}
                type="button"
                role="option"
                aria-selected={lang === language.code}
                className={`w-full px-3 py-2.5 text-sm rounded-md cursor-pointer flex items-center justify-between transition-colors text-left
                  ${lang === language.code
                    ? 'bg-brand-50 text-brand-700 font-medium'
                    : 'text-slate-700 hover:bg-slate-100'}
                `}
                onClick={() => {
                  switchLanguage(language.code);
                  setIsOpen(false);
                }}
              >
                <span className="flex items-center gap-2">
                  <span>{language.flag}</span>
                  <span>{language.nativeName}</span>
                  <span className="text-slate-400 text-xs">({language.name})</span>
                </span>
                {lang === language.code && <Check size={16} className="text-brand-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
