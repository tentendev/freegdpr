export type LanguageCode = 'en' | 'zh-CN' | 'zh-TW' | 'ja' | 'ko' | 'es' | 'fr' | 'de' | 'pt' | 'ru';

export interface LanguageConfig {
  code: LanguageCode;
  name: string;
  nativeName: string;
  flag: string;
  policyLanguage: string;
}

export const SUPPORTED_LANGUAGES: LanguageConfig[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇺🇸', policyLanguage: 'English' },
  { code: 'zh-CN', name: 'Simplified Chinese', nativeName: '简体中文', flag: '🇨🇳', policyLanguage: 'Simplified Chinese' },
  { code: 'zh-TW', name: 'Traditional Chinese', nativeName: '繁體中文', flag: '🇹🇼', policyLanguage: 'Traditional Chinese' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', policyLanguage: 'Japanese' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷', policyLanguage: 'Korean' },
  { code: 'es', name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', policyLanguage: 'Spanish' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷', policyLanguage: 'French' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', policyLanguage: 'German' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', policyLanguage: 'Portuguese' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', policyLanguage: 'Russian' },
];

export const DEFAULT_LANGUAGE: LanguageCode = 'en';

export type TranslationKeys = typeof translations.en;

export const translations = {
  en: {
    // Meta & SEO
    meta: {
      title: 'FreeGDPR - Free AI Privacy Policy Generator',
      description: 'Generate GDPR, CCPA compliant privacy policies for free using AI. Instant, customized, legally robust privacy policies for your website or app.',
      keywords: 'privacy policy generator, GDPR, CCPA, free privacy policy, AI privacy policy',
    },
    // Header
    header: {
      generator: 'Generator',
      whyFree: 'Why Free?',
      howItWorks: 'How it Works',
      resources: 'Legal Resources',
    },
    // Hero
    hero: {
      badge: 'AI-Powered Legal Tech',
      title: 'FreeGDPR',
      titleHighlight: 'Privacy Policy Generator',
      subtitle: 'Generate compliant policies for CCPA, GDPR, Google Analytics & AdSense in seconds using advanced AI.',
    },
    // Steps
    steps: {
      generalInfo: 'General Info',
      dataCollection: 'Data Collection',
      compliance: 'Compliance',
      thirdParty: 'Third Party',
      back: 'Back',
      nextStep: 'Next Step',
      generatePolicy: 'Generate Policy',
    },
    // Form - General Info
    generalInfoForm: {
      title: 'General Information',
      subtitle: "Let's start with the basics about your business or project.",
      companyName: 'Company/Entity Name',
      companyNamePlaceholder: 'e.g. Acme Corp LLC',
      websiteName: 'Website/App Name',
      websiteNamePlaceholder: 'e.g. My Awesome App',
      websiteUrl: 'Website URL',
      websiteUrlPlaceholder: 'https://example.com',
      contactEmail: 'Contact Email',
      contactEmailPlaceholder: 'privacy@example.com',
      country: 'Country',
      policyLanguage: 'Policy Language',
      platformType: 'Platform Type',
      website: 'Website',
      mobileApp: 'Mobile App',
      both: 'Website & Mobile App',
    },
    // Form - Data Collection
    dataCollectionForm: {
      title: 'Data Collection',
      subtitle: 'What kind of information do you collect from your users?',
      emailAddresses: 'Email Addresses',
      emailDesc: 'For newsletters, account creation, or support.',
      personalNames: 'Personal Names',
      namesDesc: 'First and last names of users.',
      cookies: 'Cookies & Tracking',
      cookiesDesc: 'Standard web cookies for analytics or preferences.',
      paymentInfo: 'Payment Info',
      paymentDesc: 'Credit card numbers, billing addresses.',
      phoneNumbers: 'Phone Numbers',
      phoneDesc: 'For SMS notifications or contact.',
      physicalAddresses: 'Physical Addresses',
      addressDesc: 'Shipping or billing addresses.',
      geolocation: 'Geolocation',
      locationDesc: 'GPS data or precise location tracking.',
      deviceData: 'Device Data',
      deviceDesc: 'IP address, device ID, browser type.',
    },
    // Form - Compliance
    complianceForm: {
      title: 'Legal Compliance',
      subtitle: 'Select the regulations you need to comply with based on your user base.',
      gdpr: 'GDPR (Europe)',
      gdprDesc: 'General Data Protection Regulation. Essential if you have users in the EU.',
      ccpa: 'CCPA (California)',
      ccpaDesc: 'California Consumer Privacy Act. Required for California residents.',
      cpra: 'CPRA (California Amended)',
      cpraDesc: 'California Privacy Rights Act. The update to CCPA.',
      caloppa: 'CalOPPA (California Online)',
      caloppaDesc: 'California Online Privacy Protection Act. Broad requirement for commercial sites.',
      coppa: 'COPPA (Children)',
      coppaDesc: "Children's Online Privacy Protection Act. If you target children under 13.",
    },
    // Form - Third Party
    thirdPartyForm: {
      title: 'Third-Party Services',
      subtitle: 'Which external tools or services interact with your user data?',
      googleAnalytics: 'Google Analytics',
      googleAdSense: 'Google AdSense',
      facebookPixel: 'Meta / Facebook Pixel',
      stripe: 'Stripe Payments',
      paypal: 'PayPal',
      intercom: 'Intercom / Chat',
    },
    // AI Thinking
    aiThinking: {
      analyzing: 'Analyzing business structure...',
      checking: 'Checking GDPR & CCPA requirements...',
      formulating: 'Formulating data retention clauses...',
      drafting: 'Drafting legal document...',
      poweredBy: 'Powered by AI',
      finalizing: 'Finalizing document structure...',
    },
    // Policy Result
    policyResult: {
      savedBadge: 'You just saved ~$500 in legal fees!',
      successTitle: 'Policy Generated Successfully',
      successDesc: 'Your document is legally robust and ready to use. If you found this tool helpful, please consider sharing it with your network.',
      documentPreview: 'Document Preview',
      showHtml: 'Show HTML',
      showPreview: 'Show Preview',
      copy: 'Copy',
      copied: 'Copied',
      whatsNext: "What's Next?",
      step1: 'Copy the HTML or Markdown text.',
      step2: 'Create a new page on your site (e.g., /privacy).',
      step3: 'Link to it from your footer.',
      makeAdjustments: 'Make Adjustments',
      trustBadge: 'Free Trust Badge',
      trustBadgeDesc: 'Add this badge to your website footer to show your users that you care about their privacy.',
      disclaimer: 'Disclaimer: This policy was generated by AI. It is provided for informational purposes only and does not constitute legal advice. You should consult with a qualified attorney to review your privacy policy to ensure full compliance with applicable laws.',
    },
    // How It Works Page
    howItWorks: {
      title: 'How FreeGDPR Works',
      subtitle: 'Generate a legally robust privacy policy in minutes, not days.',
      step1Title: '1. Enter Details',
      step1Desc: 'Fill out a simple questionnaire about your website or app, data collection practices, and third-party tools.',
      step2Title: '2. AI Generation',
      step2Desc: 'Our advanced AI analyzes your inputs and drafts a comprehensive privacy policy tailored to your specific needs.',
      step3Title: '3. Review Compliance',
      step3Desc: 'The generated policy includes clauses for GDPR, CCPA, and other regulations based on your selection.',
      step4Title: '4. Download & Publish',
      step4Desc: 'Copy the markdown or download the file, then publish it to your website or mobile app.',
      ctaTitle: 'Ready to protect your business?',
      ctaDesc: 'Start the wizard now and get your free privacy policy.',
    },
    // Legal Resources Page
    legalResources: {
      title: 'Legal Resources',
      subtitle: 'Helpful links and documentation to understand data privacy regulations.',
      gdprTitle: 'GDPR Official Text',
      gdprDesc: 'The complete official text of the General Data Protection Regulation.',
      ccpaTitle: 'CCPA Guide (California)',
      ccpaDesc: 'Official information on the California Consumer Privacy Act.',
      coppaTitle: 'COPPA FAQ',
      coppaDesc: "FTC guidance on Children's Online Privacy Protection Rule.",
      gaTitle: 'Google Analytics Privacy',
      gaDesc: 'Data privacy and security information for Google Analytics users.',
    },
    // Why Free Page
    whyFree: {
      badge: 'Open Source Philosophy',
      title: "Privacy shouldn't be a",
      titleHighlight: 'luxury tax',
      subtitle: "We believe every entrepreneur, creator, and developer deserves legal protection without the $5,000 price tag. We used AI to democratize compliance.",
      compareTitle: 'Compare Options',
      compareSubtitle: 'Is free really better?',
      lawFirm: 'Traditional Law Firm',
      lawFirmSlow: 'Very Slow (Weeks)',
      lawFirmLiability: 'Full Liability Coverage',
      lawFirmBilling: 'Hourly Billing',
      templates: 'Generic Templates',
      templatesInstant: 'Instant Download',
      templatesGeneric: 'Generic / Outdated',
      templatesNoCustom: 'No Customization',
      freeGdpr: 'FreeGDPR',
      freeGdprInstant: 'Instant AI Draft',
      freeGdprTailored: 'Tailored to You',
      freeGdprAlways: 'Always Free',
      nextStepTitle: 'A Policy is Just the First Step',
      nextStepDesc: 'Having a document makes you compliant on paper. But do you have the technical implementation to back it up?',
      technicalTitle: 'Technical Implementation',
      technicalDesc: 'Do you have Google Consent Mode v2 set up? Are your cookies actually blocked before consent? Writing the text is easy; coding the barrier is hard.',
      riskTitle: 'Risk Audit & Enterprise Needs',
      riskDesc: "If you handle sensitive data (Health, Finance, Children), a free generator isn't enough. You need a human expert to audit your data flows.",
      ctaTitle: 'Need Professional Implementation?',
      ctaDesc: "Don't risk fines due to bad technical setup. Hire the team that built this tool to implement your Cookie Consent Managers, Server-side tracking, and Data Governance.",
      ctaButton: 'Contact Tenten AI Agency',
      ctaSubtext: 'The Leading AI-First Agency in Asia',
    },
    // Footer
    footer: {
      copyright: '© {year} FreeGDPR. All rights reserved.',
      builtBy: 'Built with Love ❤️ by',
      tentenDesc: 'The Leading AI-First Agency in Asia',
      disclaimer: 'Privacy Policy Generator provided for informational purposes only.',
    },
  },
} as const;
