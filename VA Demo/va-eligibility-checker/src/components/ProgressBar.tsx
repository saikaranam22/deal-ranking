import React from 'react';
import type { Step } from '../types';

interface ProgressBarProps {
  currentStep: Step;
  totalSteps: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps }) => {
  const progress = (currentStep / totalSteps) * 100;
  const vaBlue = '#005ea2';

  return (
    <div className="w-full mb-8">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Step {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progress)}% Complete
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="h-3 rounded-full transition-all duration-500" 
          style={{ width: `${progress}%`, backgroundColor: vaBlue }}
        />
      </div>
    </div>
  );
}; 