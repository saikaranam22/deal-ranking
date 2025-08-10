import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import type { DisabilityConditions } from '../../types';

interface Step2Props {
  data: DisabilityConditions;
  onUpdate: (data: DisabilityConditions) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step2: React.FC<Step2Props> = ({ data, onUpdate, onNext, onBack }) => {
  const commonConditions = [
    'PTSD', 'Depression/Anxiety', 'Back/Spine Injury', 'Knee Injury',
    'Shoulder Injury', 'Hearing Loss', 'Tinnitus', 'Sleep Disorders',
    'Traumatic Brain Injury', 'Other'
  ];

  const percentageOptions = [
    '0%', '10%', '20%', '30%', '40%', '50%', 
    '60%', '70%', '80%', '90%', '100%'
  ];

  const handleUpdate = (field: keyof DisabilityConditions, value: any) => {
    onUpdate({ ...data, [field]: value });
  };

  const toggleCondition = (condition: string) => {
    const conditions = data.conditions.includes(condition)
      ? data.conditions.filter(c => c !== condition)
      : [...data.conditions, condition];
    onUpdate({ ...data, conditions });
  };

  return (
    <div className="step-container">
      <Card>
        <CardHeader>
          <CardTitle>Disability & Health Conditions</CardTitle>
          <p className="text-va-gray-600">
            Please share information about any service-connected disabilities or health conditions.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-va-gray-700 mb-4">
              Do you have any service-connected disabilities?
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => handleUpdate('hasDisability', true)}
                className={`px-6 py-3 border rounded-md transition-colors ${
                  data.hasDisability
                    ? 'bg-va-blue text-white border-va-blue'
                    : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                }`}
              >
                Yes
              </button>
              <button
                onClick={() => handleUpdate('hasDisability', false)}
                className={`px-6 py-3 border rounded-md transition-colors ${
                  !data.hasDisability
                    ? 'bg-va-blue text-white border-va-blue'
                    : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                }`}
              >
                No
              </button>
            </div>
          </div>

          {data.hasDisability && (
            <>
              <div>
                <label className="block text-sm font-medium text-va-gray-700 mb-2">
                  Current Disability Rating (if known)
                </label>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                  {percentageOptions.map((percentage) => (
                    <button
                      key={percentage}
                      onClick={() => handleUpdate('percentageRating', percentage)}
                      className={`p-2 text-sm border rounded-md transition-colors ${
                        data.percentageRating === percentage
                          ? 'bg-va-blue text-white border-va-blue'
                          : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                      }`}
                    >
                      {percentage}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-va-gray-700 mb-4">
                  Are any of your conditions combat-related?
                </label>
                <div className="flex gap-4">
                  <button
                    onClick={() => handleUpdate('combatRelated', true)}
                    className={`px-6 py-3 border rounded-md transition-colors ${
                      data.combatRelated
                        ? 'bg-va-blue text-white border-va-blue'
                        : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() => handleUpdate('combatRelated', false)}
                    className={`px-6 py-3 border rounded-md transition-colors ${
                      !data.combatRelated
                        ? 'bg-va-blue text-white border-va-blue'
                        : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-va-gray-700 mb-2">
                  Select any conditions that apply (optional)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {commonConditions.map((condition) => (
                    <button
                      key={condition}
                      onClick={() => toggleCondition(condition)}
                      className={`p-3 text-sm border rounded-md transition-colors text-left ${
                        data.conditions.includes(condition)
                          ? 'bg-va-blue text-white border-va-blue'
                          : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                      }`}
                    >
                      {condition}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={onNext}>
              Next Step
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 