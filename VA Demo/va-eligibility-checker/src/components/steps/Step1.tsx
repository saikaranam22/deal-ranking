import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import type { ServiceHistory } from '../../types';

interface Step1Props {
  data: ServiceHistory;
  onUpdate: (data: ServiceHistory) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step1: React.FC<Step1Props> = ({ data, onUpdate, onNext, onBack }) => {
  const branches = [
    'Army', 'Navy', 'Air Force', 'Marines', 'Coast Guard', 'Space Force'
  ];

  const yearsOptions = [
    'Less than 1 year', '1-2 years', '3-5 years', '6-10 years', 
    '11-20 years', 'More than 20 years'
  ];

  const dischargeOptions = [
    'Honorable', 'General (Under Honorable Conditions)', 
    'Other Than Honorable', 'Bad Conduct', 'Dishonorable'
  ];

  const handleUpdate = (field: keyof ServiceHistory, value: string) => {
    onUpdate({ ...data, [field]: value });
  };

  const isValid = data.branch && data.yearsServed && data.dischargePeriod;

  return (
    <div className="step-container">
      <Card className="desktop-card">
        <CardHeader className="pb-8">
          <CardTitle className="text-3xl text-center text-va-gray-900">Service History</CardTitle>
          <p className="text-lg text-va-gray-600 text-center max-w-2xl mx-auto">
            Please provide information about your military service. This helps us determine 
            your foundational eligibility for VA benefits.
          </p>
        </CardHeader>
        <CardContent className="space-y-10">
          <div>
            <label className="block text-xl font-semibold text-va-gray-900 mb-6">
              Branch of Service *
            </label>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {branches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => handleUpdate('branch', branch)}
                  className={`p-6 text-lg font-medium border-2 rounded-xl transition-all duration-200 ${
                    data.branch === branch
                      ? 'bg-va-blue text-white border-va-blue shadow-lg transform scale-105'
                      : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue hover:shadow-md'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xl font-semibold text-va-gray-900 mb-6">
              Years of Service *
            </label>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {yearsOptions.map((years) => (
                <button
                  key={years}
                  onClick={() => handleUpdate('yearsServed', years)}
                  className={`p-6 text-lg font-medium border-2 rounded-xl transition-all duration-200 text-left ${
                    data.yearsServed === years
                      ? 'bg-va-blue text-white border-va-blue shadow-lg'
                      : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue hover:shadow-md'
                  }`}
                >
                  {years}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-xl font-semibold text-va-gray-900 mb-6">
              Discharge Status *
            </label>
            <div className="space-y-3">
              {dischargeOptions.map((discharge) => (
                <button
                  key={discharge}
                  onClick={() => handleUpdate('dischargePeriod', discharge)}
                  className={`w-full p-6 text-lg font-medium border-2 rounded-xl transition-all duration-200 text-left ${
                    data.dischargePeriod === discharge
                      ? 'bg-va-blue text-white border-va-blue shadow-lg'
                      : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue hover:shadow-md'
                  }`}
                >
                  {discharge}
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-va-gray-200">
            <Button variant="outline" onClick={onBack} className="desktop-button">
              <ArrowLeft className="mr-3 h-5 w-5" />
              Back to Home
            </Button>
            <Button 
              onClick={onNext} 
              disabled={!isValid}
              className={`desktop-button ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              Continue to Disability Assessment
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>

          {!isValid && (
            <div className="text-center">
              <p className="text-va-gray-500 text-base">
                Please complete all required fields to continue
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}; 