import React from 'react';
import { ClipboardCheck, Sparkles, Download, ShieldCheck } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export const HowItWorks: React.FC = () => {
  const { t } = useI18n();

  const icons = [ClipboardCheck, Sparkles, ShieldCheck, Download];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in flex-grow">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.howItWorks.title}</h2>
        <p className="text-lg text-slate-600">{t.howItWorks.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.howItWorks.steps.map((step, index) => {
          const Icon = icons[index];
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
                <Icon size={24} />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-brand-50 rounded-2xl p-8 text-center border border-brand-100">
        <h3 className="text-2xl font-bold text-brand-900 mb-4">{t.howItWorks.cta.title}</h3>
        <p className="text-brand-700 mb-0">{t.howItWorks.cta.description}</p>
      </div>
    </div>
  );
};
