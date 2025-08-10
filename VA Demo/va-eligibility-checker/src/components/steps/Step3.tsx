import React from 'react';
import { ArrowRight, ArrowLeft, Award, Medal, Shield, Crosshair } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import type { SpecialStatus } from '../../types';

interface Step3Props {
  data: SpecialStatus;
  onUpdate: (data: SpecialStatus) => void;
  onNext: () => void;
  onBack: () => void;
}

export const Step3: React.FC<Step3Props> = ({ data, onUpdate, onNext, onBack }) => {
  const handleUpdate = (field: keyof SpecialStatus, value: boolean) => {
    onUpdate({ ...data, [field]: value });
  };

  const specialStatuses = [
    {
      key: 'purpleHeart' as keyof SpecialStatus,
      title: 'Purple Heart',
      description: 'Awarded for wounds received in combat',
      icon: Medal
    },
    {
      key: 'medalOfHonor' as keyof SpecialStatus,
      title: 'Medal of Honor',
      description: 'Highest military decoration for valor',
      icon: Award
    },
    {
      key: 'pow' as keyof SpecialStatus,
      title: 'Prisoner of War (POW)',
      description: 'Former prisoner of war status',
      icon: Shield
    },
    {
      key: 'combatVeteran' as keyof SpecialStatus,
      title: 'Combat Veteran',
      description: 'Served in a combat zone or combat role',
      icon: Crosshair
    }
  ];

  return (
    <div className="step-container">
      <Card>
        <CardHeader>
          <CardTitle>Special Status & Recognition</CardTitle>
          <p className="text-va-gray-600">
            Please indicate if any of these special recognitions or statuses apply to you.
            These can affect your eligibility for certain benefits.
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            {specialStatuses.map((status) => {
              const IconComponent = status.icon;
              return (
                <div
                  key={status.key}
                  className={`border rounded-lg p-4 transition-colors ${
                    data[status.key]
                      ? 'border-va-blue bg-va-blue/5'
                      : 'border-va-gray-200 hover:border-va-blue/50'
                  }`}
                >
                  <div className="flex items-start space-x-4">
                    <IconComponent 
                      className={`h-8 w-8 mt-1 ${
                        data[status.key] ? 'text-va-blue' : 'text-va-gray-400'
                      }`} 
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium text-va-gray-900">
                            {status.title}
                          </h3>
                          <p className="text-sm text-va-gray-600 mt-1">
                            {status.description}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleUpdate(status.key, true)}
                            className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                              data[status.key]
                                ? 'bg-va-blue text-white border-va-blue'
                                : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                            }`}
                          >
                            Yes
                          </button>
                          <button
                            onClick={() => handleUpdate(status.key, false)}
                            className={`px-4 py-2 text-sm border rounded-md transition-colors ${
                              !data[status.key]
                                ? 'bg-va-gray-100 text-va-gray-700 border-va-gray-300'
                                : 'bg-white text-va-gray-700 border-va-gray-300 hover:border-va-blue'
                            }`}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-va-gray-50 rounded-lg p-4">
            <p className="text-sm text-va-gray-600">
              <strong>Note:</strong> These special statuses can provide priority access to certain benefits 
              and services. If you're unsure about any of these, you can skip them or contact a VA 
              representative for clarification.
            </p>
          </div>

          <div className="flex justify-between pt-6">
            <Button variant="outline" onClick={onBack}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
            <Button onClick={onNext}>
              View Results
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}; 