export enum AppType {
  WEBSITE = 'Website',
  MOBILE_APP = 'Mobile App',
  BOTH = 'Website & Mobile App'
}

export interface PolicyFormData {
  // General Info
  companyName: string;
  websiteName: string;
  websiteUrl: string;
  contactEmail: string;
  contactAddress: string;
  country: string;
  language: string; // Added language
  effectiveDate: string;
  appType: AppType;

  // Data Collection
  collectsEmail: boolean;
  collectsNames: boolean;
  collectsPhone: boolean;
  collectsAddress: boolean;
  collectsPayment: boolean;
  collectsCookies: boolean;
  collectsLocation: boolean;
  collectsDeviceData: boolean;
  collectsSocial: boolean;

  // Compliance
  complianceGDPR: boolean; // Europe
  complianceCCPA: boolean; // California
  complianceCPRA: boolean; // California Amended
  complianceCalOPPA: boolean; // California Online Privacy
  compliancePIPEDA: boolean; // Canada
  complianceCOPPA: boolean; // Children

  // Third Party
  usesGoogleAnalytics: boolean;
  usesGoogleAdSense: boolean;
  usesFacebookPixel: boolean;
  usesStripe: boolean;
  usesPayPal: boolean;
  usesIntercom: boolean;
}

export const initialFormData: PolicyFormData = {
  companyName: '',
  websiteName: '',
  websiteUrl: '',
  contactEmail: '',
  contactAddress: '',
  country: 'United States',
  language: 'English', // Default language
  effectiveDate: new Date().toISOString().split('T')[0],
  appType: AppType.WEBSITE,

  collectsEmail: true,
  collectsNames: false,
  collectsPhone: false,
  collectsAddress: false,
  collectsPayment: false,
  collectsCookies: true,
  collectsLocation: false,
  collectsDeviceData: true,
  collectsSocial: false,

  complianceGDPR: false,
  complianceCCPA: false,
  complianceCPRA: false,
  complianceCalOPPA: false,
  compliancePIPEDA: false,
  complianceCOPPA: false,

  usesGoogleAnalytics: false,
  usesGoogleAdSense: false,
  usesFacebookPixel: false,
  usesStripe: false,
  usesPayPal: false,
  usesIntercom: false,
};

export type GenerationStatus = 'idle' | 'generating' | 'success' | 'error';