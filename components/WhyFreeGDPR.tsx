import React from 'react';
import { Check, X, Shield, Zap, Heart, ArrowRight, Building2, ServerCog, Code2, FileText } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

export const WhyFreeGDPR: React.FC = () => {
  const { t } = useI18n();

  return (
    <div className="flex-grow animate-fade-in">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-slate-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-100 text-brand-700 text-xs font-medium mb-6">
            <Heart size={12} className="text-brand-500 fill-current" />
            <span>{t.whyFree.openSourceBadge}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            {t.whyFree.title.split('{highlight}')[0]}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">{t.whyFree.titleHighlight}</span>
            {t.whyFree.title.split('{highlight}')[1]}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {t.whyFree.subtitle}
          </p>
        </div>
      </div>

      {/* Anchoring Comparison Table (Growth Hack: Show Value) */}
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">

            {/* Headers (Mobile Hidden/Inline) */}
            <div className="p-6 bg-slate-50 md:col-span-1 flex flex-col justify-center">
              <h3 className="text-lg font-bold text-slate-900">{t.whyFree.comparison.header}</h3>
              <p className="text-sm text-slate-500 mt-1">{t.whyFree.comparison.subheader}</p>
            </div>

            {/* Traditional Lawyer */}
            <div className="p-6 text-center opacity-60 hover:opacity-100 transition-opacity">
              <div className="mb-4 text-slate-400"><Building2 size={32} className="mx-auto" /></div>
              <h4 className="font-bold text-slate-700 mb-1">{t.whyFree.comparison.lawyer.title}</h4>
              <div className="text-2xl font-bold text-slate-900 mb-4">{t.whyFree.comparison.lawyer.price}</div>
              <ul className="text-sm text-slate-600 space-y-3 text-left pl-4">
                <li className="flex gap-2"><X size={16} className="text-red-500 shrink-0" /> {t.whyFree.comparison.lawyer.cons[0]}</li>
                <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0" /> {t.whyFree.comparison.lawyer.pros[0]}</li>
                <li className="flex gap-2"><X size={16} className="text-red-500 shrink-0" /> {t.whyFree.comparison.lawyer.cons[1]}</li>
              </ul>
            </div>

            {/* Generic Template */}
            <div className="p-6 text-center opacity-75 hover:opacity-100 transition-opacity">
              <div className="mb-4 text-slate-400"><FileText size={32} className="mx-auto" /></div>
              <h4 className="font-bold text-slate-700 mb-1">{t.whyFree.comparison.template.title}</h4>
              <div className="text-2xl font-bold text-slate-900 mb-4">{t.whyFree.comparison.template.price}</div>
              <ul className="text-sm text-slate-600 space-y-3 text-left pl-4">
                 <li className="flex gap-2"><Check size={16} className="text-green-500 shrink-0" /> {t.whyFree.comparison.template.pros[0]}</li>
                 <li className="flex gap-2"><X size={16} className="text-red-500 shrink-0" /> {t.whyFree.comparison.template.cons[0]}</li>
                 <li className="flex gap-2"><X size={16} className="text-red-500 shrink-0" /> {t.whyFree.comparison.template.cons[1]}</li>
              </ul>
            </div>

            {/* FreeGDPR (Winner) */}
            <div className="p-6 text-center bg-brand-50/30 relative">
               <div className="absolute top-0 left-0 w-full h-1 bg-brand-500"></div>
               <div className="mb-4 text-brand-600"><Zap size={32} className="mx-auto fill-current" /></div>
               <h4 className="font-bold text-brand-700 mb-1">{t.whyFree.comparison.freeGdpr.title}</h4>
               <div className="text-2xl font-bold text-brand-700 mb-4">{t.whyFree.comparison.freeGdpr.price}</div>
               <ul className="text-sm text-slate-700 space-y-3 text-left pl-4">
                 <li className="flex gap-2"><Check size={16} className="text-brand-600 shrink-0" /> <span className="font-semibold">{t.whyFree.comparison.freeGdpr.features[0]}</span></li>
                 <li className="flex gap-2"><Check size={16} className="text-brand-600 shrink-0" /> <span className="font-semibold">{t.whyFree.comparison.freeGdpr.features[1]}</span></li>
                 <li className="flex gap-2"><Check size={16} className="text-brand-600 shrink-0" /> <span className="font-semibold">{t.whyFree.comparison.freeGdpr.features[2]}</span></li>
               </ul>
            </div>
          </div>
        </div>
      </div>

      {/* The Upsell / Professional Service Gap */}
      <div className="bg-slate-900 text-white py-20 px-4 mt-12 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 right-0 p-32 bg-brand-500 rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 p-24 bg-indigo-500 rounded-full blur-[100px] opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.whyFree.professional.title}</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              {t.whyFree.professional.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
               <ServerCog className="text-brand-400 mb-4" size={32} />
               <h3 className="text-xl font-bold mb-2">{t.whyFree.professional.technical.title}</h3>
               <p className="text-slate-400">{t.whyFree.professional.technical.description}</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
               <Shield className="text-brand-400 mb-4" size={32} />
               <h3 className="text-xl font-bold mb-2">{t.whyFree.professional.riskAudit.title}</h3>
               <p className="text-slate-400">{t.whyFree.professional.riskAudit.description}</p>
            </div>
          </div>

          {/* Call to Action - Tenten */}
          <div className="bg-gradient-to-r from-brand-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-brand-500/50">
             <div className="inline-block p-3 bg-white/10 rounded-full mb-6 backdrop-blur-md border border-white/20">
               <Code2 size={32} className="text-white" />
             </div>
             <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
               {t.whyFree.cta.title}
             </h3>
             <p className="text-brand-100 text-lg mb-8 max-w-2xl mx-auto">
               {t.whyFree.cta.description}
             </p>
             <a
               href="https://tenten.co/contact"
               target="_blank"
               rel="noopener noreferrer"
               className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-700 font-bold rounded-full hover:bg-slate-50 transition-all transform hover:scale-105 shadow-lg group"
             >
               {t.whyFree.cta.button}
               <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
             </a>
             <p className="mt-4 text-xs text-brand-200 uppercase tracking-widest font-semibold">{t.whyFree.cta.tagline}</p>
          </div>

        </div>
      </div>
    </div>
  );
};
