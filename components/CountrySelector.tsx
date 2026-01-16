import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check } from 'lucide-react';

interface CountrySelectorProps {
  value: string;
  onChange: (value: string) => void;
}

// A more comprehensive list of countries can be added here
const COUNTRIES = [
  "United States", "United Kingdom", "Canada", "Australia", "Germany", "France", "India", 
  "China", "Japan", "Brazil", "Mexico", "Italy", "Spain", "Netherlands", "Sweden", 
  "Switzerland", "Belgium", "Austria", "Norway", "Denmark", "Finland", "Ireland", 
  "New Zealand", "Singapore", "South Africa", "United Arab Emirates", "Portugal",
  "Poland", "Greece", "Turkey", "Russia", "South Korea", "Argentina", "Chile", 
  "Colombia", "Egypt", "Saudi Arabia", "Israel", "Taiwan", "Other"
].sort();

export const CountrySelector: React.FC<CountrySelectorProps> = ({ value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [wrapperRef]);

  // Focus search input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const filteredCountries = COUNTRIES.filter(country => 
    country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="relative" ref={wrapperRef}>
      <div 
        className={`w-full px-4 py-2 border rounded-lg cursor-pointer flex items-center justify-between transition-all bg-white
          ${isOpen ? 'border-brand-500 ring-2 ring-brand-500' : 'border-slate-300 hover:border-slate-400'}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'text-slate-900' : 'text-slate-400'}>
          {value || "Select a country"}
        </span>
        <ChevronDown 
          size={20} 
          className={`text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-xl max-h-72 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100 top-full">
          <div className="p-2 border-b border-slate-100 bg-slate-50">
            <div className="relative">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
              <input
                ref={inputRef}
                type="text"
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent text-slate-900 placeholder:text-slate-400"
                placeholder="Search country..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
          <div className="overflow-y-auto flex-1 p-1">
            {filteredCountries.length === 0 ? (
              <div className="p-4 text-sm text-slate-500 text-center">No countries found</div>
            ) : (
              filteredCountries.map((country) => (
                <div
                  key={country}
                  className={`px-3 py-2.5 text-sm rounded-md cursor-pointer flex items-center justify-between transition-colors
                    ${value === country 
                      ? 'bg-brand-50 text-brand-700 font-medium' 
                      : 'text-slate-700 hover:bg-slate-100'}
                  `}
                  onClick={() => {
                    onChange(country);
                    setIsOpen(false);
                    setSearchTerm('');
                  }}
                >
                  {country}
                  {value === country && <Check size={16} className="text-brand-600" />}
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};