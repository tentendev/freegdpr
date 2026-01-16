import React from 'react';

interface StepIndicatorsProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const StepIndicators: React.FC<StepIndicatorsProps> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative max-w-2xl mx-auto px-4">
        {/* Progress Line Background */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full"></div>
        
        {/* Progress Line Active */}
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-brand-600 -z-10 rounded-full transition-all duration-300 ease-out"
          style={{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }}
        ></div>

        {steps.map((label, index) => {
          const isActive = index === currentStep;
          const isCompleted = index < currentStep;

          return (
            <div key={index} className="flex flex-col items-center group">
              <div 
                className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-sm md:text-base font-semibold border-2 transition-all duration-300
                  ${isActive 
                    ? 'border-brand-600 bg-brand-600 text-white shadow-lg scale-110' 
                    : isCompleted 
                      ? 'border-brand-600 bg-white text-brand-600' 
                      : 'border-slate-300 bg-white text-slate-400'
                  }`}
              >
                {isCompleted ? (
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  index + 1
                )}
              </div>
              <span 
                className={`mt-2 text-xs md:text-sm font-medium absolute top-10 md:top-12 w-32 text-center transition-colors duration-300
                  ${isActive ? 'text-brand-700' : isCompleted ? 'text-slate-600' : 'text-slate-400'}`}
              >
                {label}
              </span>
            </div>
          );
        })}
      </div>
      <div className="h-8 md:h-10"></div> {/* Spacer for absolute positioned text */}
    </div>
  );
};
