import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings, Check, ChevronDown, ChevronUp } from 'lucide-react';
import { useI18n } from '../i18n/I18nContext';

const CONSENT_STORAGE_KEY = 'freegdpr_cookie_consent';

interface ConsentPreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  preferences: boolean;
}

interface StoredConsent {
  preferences: ConsentPreferences;
  timestamp: number;
  version: string;
}

const CONSENT_VERSION = '1.0';

export const CookieConsent: React.FC = () => {
  const { t } = useI18n();
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (stored) {
      try {
        const parsed: StoredConsent = JSON.parse(stored);
        if (parsed.version === CONSENT_VERSION) {
          setPreferences(parsed.preferences);
          setIsVisible(false);
          return;
        }
      } catch {
        // Invalid stored data, show banner
      }
    }
    // Show banner after a short delay for better UX
    const timer = setTimeout(() => setIsVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const saveConsent = (prefs: ConsentPreferences) => {
    const consent: StoredConsent = {
      preferences: prefs,
      timestamp: Date.now(),
      version: CONSENT_VERSION,
    };
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleAcceptAll = () => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    };
    setPreferences(allAccepted);
    saveConsent(allAccepted);
  };

  const handleAcceptSelected = () => {
    saveConsent(preferences);
  };

  const handleRejectAll = () => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    };
    setPreferences(onlyNecessary);
    saveConsent(onlyNecessary);
  };

  const togglePreference = (key: keyof ConsentPreferences) => {
    if (key === 'necessary') return; // Can't toggle necessary cookies
    setPreferences(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in-up">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-brand-100 rounded-xl shrink-0">
              <Cookie className="w-6 h-6 text-brand-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {t.cookieConsent?.title || 'We Value Your Privacy'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {t.cookieConsent?.description || 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.'}
              </p>
            </div>
            <button
              onClick={handleRejectAll}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Cookie Categories (Expandable) */}
        <div className="px-6">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors mb-3"
          >
            <Settings className="w-4 h-4" />
            {t.cookieConsent?.customize || 'Customize Preferences'}
            {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>

          {showDetails && (
            <div className="space-y-3 mb-4 animate-fade-in">
              {/* Necessary Cookies */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-slate-900">
                      {t.cookieConsent?.necessary?.title || 'Necessary Cookies'}
                    </span>
                    <span className="text-xs px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full">
                      {t.cookieConsent?.alwaysActive || 'Always Active'}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    {t.cookieConsent?.necessary?.description || 'Essential for the website to function properly.'}
                  </p>
                </div>
                <div className="w-12 h-6 bg-brand-500 rounded-full flex items-center justify-end px-1 cursor-not-allowed">
                  <div className="w-4 h-4 bg-white rounded-full shadow" />
                </div>
              </div>

              {/* Analytics Cookies */}
              <CookieToggle
                title={t.cookieConsent?.analytics?.title || 'Analytics Cookies'}
                description={t.cookieConsent?.analytics?.description || 'Help us understand how visitors interact with our website.'}
                checked={preferences.analytics}
                onChange={() => togglePreference('analytics')}
              />

              {/* Marketing Cookies */}
              <CookieToggle
                title={t.cookieConsent?.marketing?.title || 'Marketing Cookies'}
                description={t.cookieConsent?.marketing?.description || 'Used to deliver personalized advertisements.'}
                checked={preferences.marketing}
                onChange={() => togglePreference('marketing')}
              />

              {/* Preference Cookies */}
              <CookieToggle
                title={t.cookieConsent?.preferences?.title || 'Preference Cookies'}
                description={t.cookieConsent?.preferences?.description || 'Remember your settings and preferences.'}
                checked={preferences.preferences}
                onChange={() => togglePreference('preferences')}
              />
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-3 sm:justify-end">
          <button
            onClick={handleRejectAll}
            className="px-5 py-2.5 text-sm font-medium text-slate-600 hover:text-slate-800 hover:bg-slate-200 rounded-lg transition-colors"
          >
            {t.cookieConsent?.rejectAll || 'Reject All'}
          </button>
          {showDetails && (
            <button
              onClick={handleAcceptSelected}
              className="px-5 py-2.5 text-sm font-medium text-brand-600 border border-brand-300 hover:bg-brand-50 rounded-lg transition-colors"
            >
              {t.cookieConsent?.acceptSelected || 'Accept Selected'}
            </button>
          )}
          <button
            onClick={handleAcceptAll}
            className="px-5 py-2.5 text-sm font-medium text-white bg-brand-600 hover:bg-brand-700 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Check className="w-4 h-4" />
            {t.cookieConsent?.acceptAll || 'Accept All'}
          </button>
        </div>

        {/* Privacy Policy Link */}
        <div className="px-6 py-3 bg-slate-100 text-center">
          <a
            href="#"
            className="text-xs text-slate-500 hover:text-brand-600 transition-colors"
          >
            {t.cookieConsent?.privacyLink || 'Read our Privacy Policy'}
          </a>
        </div>
      </div>
    </div>
  );
};

// Reusable toggle component for cookie categories
const CookieToggle: React.FC<{
  title: string;
  description: string;
  checked: boolean;
  onChange: () => void;
}> = ({ title, description, checked, onChange }) => (
  <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
    <div className="flex-1 pr-4">
      <span className="text-sm font-medium text-slate-900">{title}</span>
      <p className="text-xs text-slate-500 mt-1">{description}</p>
    </div>
    <button
      onClick={onChange}
      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors ${
        checked ? 'bg-brand-500 justify-end' : 'bg-slate-300 justify-start'
      }`}
      role="switch"
      aria-checked={checked}
    >
      <div className="w-4 h-4 bg-white rounded-full shadow" />
    </button>
  </div>
);

export default CookieConsent;
