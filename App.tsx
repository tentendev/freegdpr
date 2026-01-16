import React, { useState, useEffect, useRef } from 'react';
import { 
  Shield, 
  ChevronRight, 
  ChevronLeft, 
  Layout, 
  Database,
  Scale,
  Settings2,
  Sparkles,
  CheckCircle2,
  Cpu,
  Loader2,
  BrainCircuit,
  FileText,
  SearchCheck
} from 'lucide-react';
import { initialFormData, PolicyFormData, AppType, GenerationStatus } from './types';
import { generatePrivacyPolicyStream } from './services/geminiService';
import { StepIndicators } from './components/StepIndicators';
import { PolicyResult } from './components/PolicyResult';
import { HowItWorks } from './components/HowItWorks';
import { LegalResources } from './components/LegalResources';
import { CountrySelector } from './components/CountrySelector';
import { WhyFreeGDPR } from './components/WhyFreeGDPR';
import { LanguageSelector } from './components/LanguageSelector';

// --- Reusable Input Components ---

const SectionTitle = ({ title, subtitle, icon: Icon }: { title: string, subtitle: string, icon: any }) => (
  <div className="mb-6">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-brand-100 text-brand-600 rounded-lg">
        <Icon size={24} />
      </div>
      <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    </div>
    <p className="text-slate-500 ml-12">{subtitle}</p>
  </div>
);

const InputGroup = ({ label, children }: { label: string, children?: React.ReactNode }) => (
  <div className="mb-4">
    <label className="block text-sm font-semibold text-slate-700 mb-1.5">{label}</label>
    {children}
  </div>
);

const CheckboxCard = ({ 
  checked, 
  onChange, 
  title, 
  description 
}: { 
  checked: boolean, 
  onChange: (c: boolean) => void, 
  title: string, 
  description?: string 
}) => (
  <div 
    onClick={() => onChange(!checked)}
    className={`p-4 border rounded-xl cursor-pointer transition-all duration-200 flex items-start gap-3
      ${checked ? 'border-brand-500 bg-brand-50 shadow-md ring-1 ring-brand-200' : 'border-slate-200 hover:border-brand-300 hover:bg-slate-50'}
    `}
  >
    <div className={`mt-0.5 w-5 h-5 rounded border flex items-center justify-center shrink-0 transition-colors
      ${checked ? 'bg-brand-500 border-brand-500' : 'bg-white border-slate-300'}
    `}>
      {checked && <CheckCircle2 size={14} className="text-white" />}
    </div>
    <div>
      <h3 className={`font-medium text-sm ${checked ? 'text-brand-900' : 'text-slate-800'}`}>{title}</h3>
      {description && <p className="text-xs text-slate-500 mt-1">{description}</p>}
    </div>
  </div>
);

type Page = 'home' | 'how-it-works' | 'resources' | 'why-free-gdpr';

// --- Main App ---

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<PolicyFormData>(initialFormData);
  const [status, setStatus] = useState<GenerationStatus>('idle');
  const [policyContent, setPolicyContent] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  
  // AI Thinking State
  const [thinkingStep, setThinkingStep] = useState(0);
  const thinkingIntervalRef = useRef<number | null>(null);

  const aiThinkingSteps = [
    { text: "Analyzing business structure...", icon: BrainCircuit },
    { text: "Checking GDPR & CCPA requirements...", icon: SearchCheck },
    { text: "Formulating data retention clauses...", icon: Database },
    { text: "Drafting legal document...", icon: FileText },
  ];

  // Load from local storage on mount
  useEffect(() => {
    const saved = localStorage.getItem('freegdpr_form_data');
    if (saved) {
      try {
        setFormData(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load saved data");
      }
    }
  }, []);

  // Save to local storage on change
  useEffect(() => {
    localStorage.setItem('freegdpr_form_data', JSON.stringify(formData));
  }, [formData]);

  // Handle Thinking Animation
  useEffect(() => {
    if (status === 'generating' && policyContent.length === 0) {
      setThinkingStep(0);
      thinkingIntervalRef.current = window.setInterval(() => {
        setThinkingStep((prev) => (prev + 1) % aiThinkingSteps.length);
      }, 2000);
    } else {
      if (thinkingIntervalRef.current) clearInterval(thinkingIntervalRef.current);
    }
    return () => {
      if (thinkingIntervalRef.current) clearInterval(thinkingIntervalRef.current);
    };
  }, [status, policyContent.length]);

  const steps = [
    "General Info",
    "Data Collection",
    "Compliance",
    "Third Party"
  ];

  const updateField = <K extends keyof PolicyFormData>(key: K, value: PolicyFormData[K]) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const navigateTo = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    } else {
      handleGenerate();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleGenerate = async () => {
    setStatus('generating');
    setPolicyContent(''); // Reset content
    setErrorMsg('');
    
    try {
      let currentText = '';
      await generatePrivacyPolicyStream(formData, (chunk) => {
        currentText += chunk;
        setPolicyContent(currentText);
      });
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong while generating the policy.');
    }
  };

  const resetToEdit = () => {
    setStatus('idle');
  };

  // Render Steps
  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6 animate-fade-in">
            <SectionTitle 
              title="General Information" 
              subtitle="Let's start with the basics about your business or project."
              icon={Layout}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputGroup label="Company/Entity Name">
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. Acme Corp LLC"
                  value={formData.companyName}
                  onChange={(e) => updateField('companyName', e.target.value)}
                />
              </InputGroup>

              <InputGroup label="Website/App Name">
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="e.g. My Awesome App"
                  value={formData.websiteName}
                  onChange={(e) => updateField('websiteName', e.target.value)}
                />
              </InputGroup>

              <InputGroup label="Website URL">
                <input 
                  type="url" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="https://example.com"
                  value={formData.websiteUrl}
                  onChange={(e) => updateField('websiteUrl', e.target.value)}
                />
              </InputGroup>

              <InputGroup label="Contact Email">
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all bg-white text-slate-900 placeholder:text-slate-400"
                  placeholder="privacy@example.com"
                  value={formData.contactEmail}
                  onChange={(e) => updateField('contactEmail', e.target.value)}
                />
              </InputGroup>

              <InputGroup label="Country">
                <CountrySelector 
                  value={formData.country}
                  onChange={(val) => updateField('country', val)}
                />
              </InputGroup>

              <InputGroup label="Policy Language">
                <LanguageSelector 
                  value={formData.language}
                  onChange={(val) => updateField('language', val)}
                />
              </InputGroup>

               <InputGroup label="Platform Type">
                <div className="flex gap-4">
                  {[AppType.WEBSITE, AppType.MOBILE_APP, AppType.BOTH].map((type) => (
                    <button
                      key={type}
                      onClick={() => updateField('appType', type)}
                      className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                        formData.appType === type 
                          ? 'bg-brand-50 border-brand-500 text-brand-700 shadow-sm' 
                          : 'border-slate-200 hover:border-brand-200 text-slate-600 bg-white hover:bg-slate-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </InputGroup>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="space-y-6 animate-fade-in">
             <SectionTitle 
              title="Data Collection" 
              subtitle="What kind of information do you collect from your users?"
              icon={Database}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxCard 
                title="Email Addresses" 
                description="For newsletters, account creation, or support."
                checked={formData.collectsEmail}
                onChange={(v) => updateField('collectsEmail', v)}
              />
              <CheckboxCard 
                title="Personal Names" 
                description="First and last names of users."
                checked={formData.collectsNames}
                onChange={(v) => updateField('collectsNames', v)}
              />
               <CheckboxCard 
                title="Cookies & Tracking" 
                description="Standard web cookies for analytics or preferences."
                checked={formData.collectsCookies}
                onChange={(v) => updateField('collectsCookies', v)}
              />
              <CheckboxCard 
                title="Payment Info" 
                description="Credit card numbers, billing addresses."
                checked={formData.collectsPayment}
                onChange={(v) => updateField('collectsPayment', v)}
              />
              <CheckboxCard 
                title="Phone Numbers" 
                description="For SMS notifications or contact."
                checked={formData.collectsPhone}
                onChange={(v) => updateField('collectsPhone', v)}
              />
              <CheckboxCard 
                title="Physical Addresses" 
                description="Shipping or billing addresses."
                checked={formData.collectsAddress}
                onChange={(v) => updateField('collectsAddress', v)}
              />
               <CheckboxCard 
                title="Geolocation" 
                description="GPS data or precise location tracking."
                checked={formData.collectsLocation}
                onChange={(v) => updateField('collectsLocation', v)}
              />
              <CheckboxCard 
                title="Device Data" 
                description="IP address, device ID, browser type."
                checked={formData.collectsDeviceData}
                onChange={(v) => updateField('collectsDeviceData', v)}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-6 animate-fade-in">
            <SectionTitle 
              title="Legal Compliance" 
              subtitle="Select the regulations you need to comply with based on your user base."
              icon={Scale}
            />
            <div className="grid grid-cols-1 gap-4">
              <CheckboxCard 
                title="GDPR (Europe)" 
                description="General Data Protection Regulation. Essential if you have users in the EU."
                checked={formData.complianceGDPR}
                onChange={(v) => updateField('complianceGDPR', v)}
              />
              <CheckboxCard 
                title="CCPA (California)" 
                description="California Consumer Privacy Act. Required for California residents."
                checked={formData.complianceCCPA}
                onChange={(v) => updateField('complianceCCPA', v)}
              />
               <CheckboxCard 
                title="CPRA (California Amended)" 
                description="California Privacy Rights Act. The update to CCPA."
                checked={formData.complianceCPRA}
                onChange={(v) => updateField('complianceCPRA', v)}
              />
              <CheckboxCard 
                title="CalOPPA (California Online)" 
                description="California Online Privacy Protection Act. Broad requirement for commercial sites."
                checked={formData.complianceCalOPPA}
                onChange={(v) => updateField('complianceCalOPPA', v)}
              />
               <CheckboxCard 
                title="COPPA (Children)" 
                description="Children's Online Privacy Protection Act. If you target children under 13."
                checked={formData.complianceCOPPA}
                onChange={(v) => updateField('complianceCOPPA', v)}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6 animate-fade-in">
            <SectionTitle 
              title="Third-Party Services" 
              subtitle="Which external tools or services interact with your user data?"
              icon={Settings2}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <CheckboxCard 
                title="Google Analytics" 
                checked={formData.usesGoogleAnalytics}
                onChange={(v) => updateField('usesGoogleAnalytics', v)}
              />
              <CheckboxCard 
                title="Google AdSense" 
                checked={formData.usesGoogleAdSense}
                onChange={(v) => updateField('usesGoogleAdSense', v)}
              />
              <CheckboxCard 
                title="Meta / Facebook Pixel" 
                checked={formData.usesFacebookPixel}
                onChange={(v) => updateField('usesFacebookPixel', v)}
              />
              <CheckboxCard 
                title="Stripe Payments" 
                checked={formData.usesStripe}
                onChange={(v) => updateField('usesStripe', v)}
              />
              <CheckboxCard 
                title="PayPal" 
                checked={formData.usesPayPal}
                onChange={(v) => updateField('usesPayPal', v)}
              />
              <CheckboxCard 
                title="Intercom / Chat" 
                checked={formData.usesIntercom}
                onChange={(v) => updateField('usesIntercom', v)}
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const renderHomeContent = () => {
    // Show results if success OR if generating (to show the stream)
    if (status === 'success' || (status === 'generating' && policyContent.length > 0)) {
      return (
        <div className="min-h-screen bg-slate-50 py-12 px-4">
           <div className="max-w-5xl mx-auto mb-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-2 text-brand-600">
                <Shield size={40} className="fill-current" />
                <span className="text-2xl font-bold tracking-tight text-slate-900">FreeGDPR</span>
              </div>
              {status === 'generating' && (
                <p className="text-slate-500 animate-pulse">Finalizing document structure...</p>
              )}
           </div>
          <div className="max-w-5xl mx-auto">
            <PolicyResult content={policyContent} onBack={resetToEdit} />
          </div>
        </div>
      );
    }

    return (
      <>
        {/* Compact, Tech-Forward Hero Section */}
        {currentStep === 0 && (
          <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
            {/* Abstract Tech Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute inset-0 z-0 bg-gradient-to-b from-white/0 to-white"></div>
            
            <div className="relative z-10 max-w-4xl mx-auto px-4 py-8 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-brand-100 text-brand-700 text-xs font-medium mb-4 shadow-sm backdrop-blur-sm animate-fade-in">
                <Cpu size={14} className="text-brand-500" />
                <span>AI-Powered Legal Tech</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-2">
                FreeGDPR
                <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-indigo-600 to-violet-600">
                   Privacy Policy Generator
                </span>
              </h1>
              
              <p className="text-sm md:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
                Generate compliant policies for CCPA, GDPR, Google Analytics & AdSense in seconds using advanced AI.
              </p>
            </div>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-grow py-8 px-4">
          <div className="max-w-3xl mx-auto">
            
            {/* Progress */}
            <StepIndicators currentStep={currentStep} totalSteps={steps.length} steps={steps} />

            {/* Form Container */}
            <div className="bg-white rounded-2xl shadow-xl border border-slate-100 relative transition-all duration-300">
              
              {/* Detailed AI Thinking Overlay */}
              {status === 'generating' && policyContent.length === 0 && (
                <div className="absolute inset-0 bg-white/95 z-50 flex flex-col items-center justify-center backdrop-blur-sm rounded-2xl p-8 text-center animate-in fade-in duration-300">
                  <div className="relative mb-8">
                     <div className="absolute inset-0 bg-brand-200 rounded-full blur-xl opacity-50 animate-pulse"></div>
                     <BrainCircuit size={64} className="text-brand-600 relative z-10 animate-bounce-subtle" />
                  </div>
                  
                  <div className="space-y-4 max-w-md w-full">
                    {aiThinkingSteps.map((step, index) => (
                      <div 
                        key={index}
                        className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-500 ${
                          index === thinkingStep 
                            ? 'bg-brand-50 border-brand-200 scale-105 shadow-sm' 
                            : index < thinkingStep
                              ? 'bg-slate-50 border-slate-100 opacity-50'
                              : 'bg-transparent border-transparent opacity-30 blur-[1px]'
                        }`}
                      >
                         <div className={`p-2 rounded-full ${index === thinkingStep ? 'bg-brand-100 text-brand-600' : 'bg-slate-100 text-slate-400'}`}>
                           {index < thinkingStep ? <CheckCircle2 size={16} /> : (index === thinkingStep ? <Loader2 size={16} className="animate-spin" /> : <step.icon size={16} />)}
                         </div>
                         <span className={`text-sm font-medium ${index === thinkingStep ? 'text-brand-900' : 'text-slate-500'}`}>
                           {step.text}
                         </span>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-slate-400 mt-8">Powered by Google Gemini AI</p>
                </div>
              )}
              
              {/* Error Message */}
              {status === 'error' && (
                 <div className="mx-6 mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 flex items-center gap-3">
                    <div className="shrink-0 font-bold">Error:</div>
                    <div>{errorMsg}</div>
                 </div>
              )}

              <div className="p-6 md:p-8 min-h-[400px]">
                {renderStepContent()}
              </div>

              {/* Footer Navigation */}
              <div className="bg-slate-50 p-6 border-t border-slate-100 flex justify-between items-center rounded-b-2xl">
                <button 
                  onClick={handleBack}
                  disabled={currentStep === 0 || status === 'generating'}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium transition-colors
                    ${currentStep === 0 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'}`}
                >
                  <ChevronLeft size={20} />
                  Back
                </button>

                <button 
                  onClick={handleNext}
                  disabled={status === 'generating'}
                  className="flex items-center gap-2 px-8 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-lg font-medium shadow-lg shadow-brand-500/30 transition-all transform active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {currentStep === steps.length - 1 ? (
                    <>
                      <Sparkles size={20} />
                      Generate Policy
                    </>
                  ) : (
                    <>
                      Next Step
                      <ChevronRight size={20} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
      
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div 
            className="flex items-center gap-2 text-brand-600 cursor-pointer"
            onClick={() => navigateTo('home')}
          >
            <Shield size={32} className="fill-current" />
            <span className="text-xl font-bold tracking-tight text-slate-900">FreeGDPR</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <button 
              onClick={() => navigateTo('home')}
              className={`hover:text-brand-600 transition-colors ${currentPage === 'home' ? 'text-brand-600' : ''}`}
            >
              Generator
            </button>
             <button 
              onClick={() => navigateTo('why-free-gdpr')}
              className={`hover:text-brand-600 transition-colors ${currentPage === 'why-free-gdpr' ? 'text-brand-600' : ''}`}
            >
              Why Free?
            </button>
            <button 
              onClick={() => navigateTo('how-it-works')}
              className={`hover:text-brand-600 transition-colors ${currentPage === 'how-it-works' ? 'text-brand-600' : ''}`}
            >
              How it Works
            </button>
            <button 
              onClick={() => navigateTo('resources')}
              className={`hover:text-brand-600 transition-colors ${currentPage === 'resources' ? 'text-brand-600' : ''}`}
            >
              Legal Resources
            </button>

            {/* Language Selector in Header */}
            <div className="pl-4 border-l border-slate-200">
              <LanguageSelector 
                value={formData.language} 
                onChange={(val) => updateField('language', val)}
                variant="header"
              />
            </div>

          </div>
        </div>
      </header>

      {/* Dynamic Content */}
      {currentPage === 'home' && renderHomeContent()}
      {currentPage === 'why-free-gdpr' && <WhyFreeGDPR />}
      {currentPage === 'how-it-works' && <HowItWorks />}
      {currentPage === 'resources' && <LegalResources />}

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 mt-auto">
        <div className="max-w-6xl mx-auto px-4 text-center text-slate-500 text-sm">
          <p className="mb-2">© {new Date().getFullYear()} FreeGDPR. All rights reserved.</p>
          <p className="mb-2">© Built with Love ❤️ by <a href="https://tenten.co" target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 transition-colors">Tenten AI</a> | The Leading AI-First Agency in Asia</p>
          <p>Privacy Policy Generator provided for informational purposes only.</p>
        </div>
      </footer>
    </div>
  );
}