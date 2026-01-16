import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Download, Copy, Check, ArrowLeft, Code, Eye, Share2, Twitter, Linkedin, Gift, Shield } from 'lucide-react';

interface PolicyResultProps {
  content: string;
  onBack: () => void;
}

export const PolicyResult: React.FC<PolicyResultProps> = ({ content, onBack }) => {
  const [copied, setCopied] = useState(false);
  const [embedCopied, setEmbedCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'preview' | 'html'>('preview');

  // Embed Badge Code (Growth Hack)
  const embedCode = `<!-- FreeGDPR Privacy Badge -->
<a href="https://yourdomain.com" target="_blank" style="display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:20px;text-decoration:none;color:#475569;font-family:sans-serif;font-size:12px;font-weight:500;">
  <span style="color:#2563eb;">●</span> Privacy Verified by FreeGDPR
</a>`;

  const getHtmlContent = (md: string) => {
    return md
      .replace(/^### (.*$)/gim, '<h3>$1</h3>')
      .replace(/^## (.*$)/gim, '<h2>$1</h2>')
      .replace(/^# (.*$)/gim, '<h1>$1</h1>')
      .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
      .replace(/\*(.*)\*/gim, '<em>$1</em>')
      .replace(/^- (.*$)/gim, '<li>$1</li>')
      .replace(/\n/gim, '<br />');
  };

  const handleCopy = () => {
    const textToCopy = viewMode === 'html' ? getHtmlContent(content) : content;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleCopyEmbed = () => {
    navigator.clipboard.writeText(embedCode);
    setEmbedCopied(true);
    setTimeout(() => setEmbedCopied(false), 2000);
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([content], { type: 'text/markdown' });
    element.href = URL.createObjectURL(file);
    element.download = "privacy_policy.md";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = (platform: 'twitter' | 'linkedin') => {
    const text = encodeURIComponent("I just generated a comprehensive Privacy Policy for free using FreeGDPR. Check it out!");
    const url = encodeURIComponent("https://freegdpr.com"); // Replace with actual URL
    
    if (platform === 'twitter') {
      window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, '_blank');
    } else {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
    }
  };

  return (
    <div className="animate-fade-in-up space-y-6">
      
      {/* 1. Value Realization Card (Growth Hack: Reciprocity) */}
      <div className="bg-gradient-to-r from-brand-600 to-indigo-600 rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 p-32 bg-white opacity-5 rounded-full transform translate-x-12 -translate-y-12"></div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
           <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-brand-500/30 px-3 py-1 rounded-full text-xs font-semibold mb-3 border border-brand-400/30">
                <Gift size={12} />
                <span>You just saved ~$500 in legal fees!</span>
              </div>
              <h2 className="text-3xl font-bold mb-2">Policy Generated Successfully</h2>
              <p className="text-brand-100 max-w-lg">
                Your document is legally robust and ready to use. If you found this tool helpful, please consider sharing it with your network.
              </p>
           </div>
           <div className="flex gap-3">
              <button 
                onClick={() => handleShare('twitter')}
                className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-lg transition-all"
                title="Share on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => handleShare('linkedin')}
                className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-lg transition-all"
                 title="Share on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </button>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden border border-slate-100 flex flex-col">
          <div className="bg-slate-50 border-b border-slate-200 p-4 flex justify-between items-center flex-wrap gap-2">
            <h3 className="font-semibold text-slate-700">Document Preview</h3>
             <div className="flex gap-2">
              <button 
                onClick={() => setViewMode(viewMode === 'preview' ? 'html' : 'preview')}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-600 bg-white border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                {viewMode === 'preview' ? <Code size={14} /> : <Eye size={14} />}
                {viewMode === 'preview' ? 'Show HTML' : 'Show Preview'}
              </button>
              <button 
                onClick={handleCopy}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-brand-600 rounded-md hover:bg-brand-700 transition-colors shadow-sm"
              >
                {copied ? <Check size={14} /> : <Copy size={14} />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <button 
                onClick={handleDownload}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-100 rounded-md hover:bg-slate-200 transition-colors"
              >
                <Download size={14} />
              </button>
            </div>
          </div>

          <div className="p-8 max-h-[600px] overflow-y-auto bg-white policy-content">
            {viewMode === 'preview' ? (
              <ReactMarkdown>{content}</ReactMarkdown>
            ) : (
              <pre className="whitespace-pre-wrap font-mono text-sm text-slate-600 bg-slate-50 p-4 rounded border border-slate-200">
                {getHtmlContent(content)}
              </pre>
            )}
          </div>
        </div>

        {/* Sidebar Actions */}
        <div className="space-y-6">
          {/* Action Card */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-slate-100">
            <h3 className="font-bold text-slate-900 mb-4">What's Next?</h3>
            <ul className="space-y-3">
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs font-bold">1</div>
                Copy the HTML or Markdown text.
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs font-bold">2</div>
                Create a new page on your site (e.g., /privacy).
              </li>
              <li className="flex gap-3 text-sm text-slate-600">
                <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 text-xs font-bold">3</div>
                Link to it from your footer.
              </li>
            </ul>
             <button 
              onClick={onBack}
              className="w-full mt-6 py-2.5 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium flex items-center justify-center gap-2"
            >
              <ArrowLeft size={16} />
              Make Adjustments
            </button>
          </div>

          {/* Badge Generator (Growth Hack: Viral Loop) */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
               <div className="p-1.5 bg-brand-100 text-brand-600 rounded-md">
                 <Shield size={16} />
               </div>
               <h3 className="font-bold text-slate-900 text-sm">Free Trust Badge</h3>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Add this badge to your website footer to show your users that you care about their privacy.
            </p>
            
            {/* Live Preview of Badge */}
            <div className="mb-4 flex justify-center py-4 bg-white border border-slate-200 rounded-lg border-dashed">
               <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs font-medium text-slate-600">
                  <span className="w-2 h-2 rounded-full bg-brand-500"></span>
                  Privacy Verified by FreeGDPR
               </div>
            </div>

            <div className="relative">
              <pre className="text-[10px] bg-slate-800 text-slate-300 p-3 rounded-lg overflow-x-auto">
                {embedCode}
              </pre>
              <button 
                onClick={handleCopyEmbed}
                className="absolute top-2 right-2 p-1.5 bg-white/10 hover:bg-white/20 rounded text-white transition-colors"
                title="Copy Code"
              >
                {embedCopied ? <Check size={12} /> : <Copy size={12} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-4 bg-slate-100 rounded-lg text-center text-xs text-slate-500">
        Disclaimer: This policy was generated by AI. It is provided for informational purposes only and does not constitute legal advice. You should consult with a qualified attorney to review your privacy policy to ensure full compliance with applicable laws.
      </div>
    </div>
  );
};