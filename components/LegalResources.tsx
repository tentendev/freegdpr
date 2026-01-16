import React from 'react';
import { ExternalLink, BookOpen, Scale, Globe } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export const LegalResources: React.FC = () => {
  const { t } = useI18n();

  const icons = [Globe, Scale, BookOpen, ExternalLink];
  const links = [
    "https://gdpr-info.eu/",
    "https://oag.ca.gov/privacy/ccpa",
    "https://www.ftc.gov/business-guidance/resources/complying-coppa-frequently-asked-questions",
    "https://support.google.com/analytics/answer/6004245"
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in flex-grow">
       <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{t.legalResources.title}</h2>
        <p className="text-lg text-slate-600">{t.legalResources.subtitle}</p>
      </div>

      <div className="space-y-4">
        {t.legalResources.resources.map((res, index) => {
          const Icon = icons[index];
          return (
            <a
              key={index}
              href={links[index]}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md hover:border-brand-300 transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-100 text-slate-600 rounded-lg group-hover:bg-brand-100 group-hover:text-brand-600 transition-colors">
                  <Icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1 flex items-center gap-2">
                    {res.title}
                    <ExternalLink size={16} className="text-slate-400 group-hover:text-brand-500" />
                  </h3>
                  <p className="text-slate-600">{res.description}</p>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
