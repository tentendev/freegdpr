import React from 'react';
import { ClipboardCheck, Sparkles, Download, ShieldCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: ClipboardCheck,
      title: "1. Enter Details",
      description: "Fill out a simple questionnaire about your website or app, data collection practices, and third-party tools."
    },
    {
      icon: Sparkles,
      title: "2. AI Generation",
      description: "Our advanced AI analyzes your inputs and drafts a comprehensive privacy policy tailored to your specific needs."
    },
    {
      icon: ShieldCheck,
      title: "3. Review Compliance",
      description: "The generated policy includes clauses for GDPR, CCPA, and other regulations based on your selection."
    },
    {
      icon: Download,
      title: "4. Download & Publish",
      description: "Copy the markdown or download the file, then publish it to your website or mobile app."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-fade-in flex-grow">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">How FreeGDPR Works</h2>
        <p className="text-lg text-slate-600">Generate a legally robust privacy policy in minutes, not days.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mb-4">
              <step.icon size={24} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
            <p className="text-slate-600">{step.description}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-brand-50 rounded-2xl p-8 text-center border border-brand-100">
        <h3 className="text-2xl font-bold text-brand-900 mb-4">Ready to protect your business?</h3>
        <p className="text-brand-700 mb-0">Start the wizard now and get your free privacy policy.</p>
      </div>
    </div>
  );
};