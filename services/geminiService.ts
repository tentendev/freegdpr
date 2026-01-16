import { PolicyFormData } from '../types';

const OPENROUTER_API_URL = 'https://openrouter.ai/api/v1/chat/completions';
const MODEL = 'xiaomi/mimo-v2-flash:free';

const getApiKey = () => {
  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    throw new Error("OpenRouter API Key not found in environment variables");
  }
  return apiKey;
};

export const generatePrivacyPolicyStream = async (
  data: PolicyFormData,
  onChunk: (text: string) => void
): Promise<void> => {
  const apiKey = getApiKey();

  const prompt = `Act as a professional legal expert specializing in data privacy and compliance.
Draft a comprehensive, legally compliant Privacy Policy for the following entity using the provided details.

IMPORTANT: The entire document must be written in ${data.language || 'English'}.

The output must be formatted in clean Markdown (use ## for section headers, bullet points for lists).
Do not include any conversational filler (like "Here is your policy"). Start directly with the policy title.

DETAILS:
- **Entity Name:** ${data.companyName || '[Company Name]'}
- **Website/App Name:** ${data.websiteName || '[App Name]'}
- **URL:** ${data.websiteUrl}
- **Type:** ${data.appType}
- **Country of Operation:** ${data.country}
- **Language:** ${data.language || 'English'}
- **Contact Email:** ${data.contactEmail}
- **Effective Date:** ${data.effectiveDate}

DATA COLLECTED:
${data.collectsEmail ? '- Email Addresses' : ''}
${data.collectsNames ? '- First and Last Names' : ''}
${data.collectsPhone ? '- Phone Numbers' : ''}
${data.collectsAddress ? '- Physical Addresses' : ''}
${data.collectsPayment ? '- Payment Information' : ''}
${data.collectsCookies ? '- Cookies and Usage Data' : ''}
${data.collectsLocation ? '- Geolocation Data' : ''}
${data.collectsDeviceData ? '- Device identifiers and attributes' : ''}
${data.collectsSocial ? '- Social Media Profile Data' : ''}

COMPLIANCE REQUIREMENTS (Ensure specific clauses for these are included):
${data.complianceGDPR ? '- GDPR (General Data Protection Regulation) for EU users' : ''}
${data.complianceCCPA ? '- CCPA (California Consumer Privacy Act)' : ''}
${data.complianceCPRA ? '- CPRA (California Privacy Rights Act)' : ''}
${data.complianceCalOPPA ? '- CalOPPA (California Online Privacy Protection Act)' : ''}
${data.compliancePIPEDA ? '- PIPEDA (Canada)' : ''}
${data.complianceCOPPA ? '- COPPA (Childrens Online Privacy Protection Act)' : ''}

THIRD PARTY SERVICES (Include standard disclosures for these):
${data.usesGoogleAnalytics ? '- Google Analytics' : ''}
${data.usesGoogleAdSense ? '- Google AdSense' : ''}
${data.usesFacebookPixel ? '- Meta/Facebook Pixel' : ''}
${data.usesStripe ? '- Stripe Payments' : ''}
${data.usesPayPal ? '- PayPal' : ''}
${data.usesIntercom ? '- Intercom' : ''}

STRUCTURE:
1. Introduction
2. Information We Collect
3. How We Use Your Information
4. Cookies and Tracking Technologies
5. Third-Party Services
6. Data Retention
7. Data Security
8. User Rights (GDPR/CCPA specific rights if selected)
9. Children's Privacy
10. Changes to This Policy
11. Contact Us

Tone: Professional, Clear, Legally Robust.`;

  try {
    const response = await fetch(OPENROUTER_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': data.websiteUrl || 'https://freegdpr.com',
        'X-Title': 'FreeGDPR Privacy Policy Generator'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        stream: true
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenRouter API error: ${response.status} - ${errorText}`);
    }

    const reader = response.body?.getReader();
    if (!reader) {
      throw new Error('Failed to get response reader');
    }

    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value, { stream: true });
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6);
          if (data === '[DONE]') continue;

          try {
            const parsed = JSON.parse(data);
            const content = parsed.choices?.[0]?.delta?.content;
            if (content) {
              onChunk(content);
            }
          } catch {
            // Skip non-JSON lines
          }
        }
      }
    }
  } catch (error) {
    console.error("Error generating policy:", error);
    throw error;
  }
};

export const generatePrivacyPolicy = async (data: PolicyFormData): Promise<string> => {
  let fullText = "";
  await generatePrivacyPolicyStream(data, (chunk) => {
    fullText += chunk;
  });
  return fullText;
};