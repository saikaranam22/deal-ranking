import React, { useState, useMemo } from 'react';
import { Layout } from './components/Layout';
import { ProgressBar } from './components/ProgressBar';
import { Landing } from './components/steps/Landing';
import { Step1 } from './components/steps/Step1';
import { Step2 } from './components/steps/Step2';
import { Step3 } from './components/steps/Step3';
import { Results } from './components/steps/Results';
import { calculateEligibility } from './utils/eligibilityLogic';
import type { FormData, Step, CurrentStep } from './types';

function App() {
  const [currentStep, setCurrentStep] = useState<CurrentStep>(0); // 0 for landing
  const [formData, setFormData] = useState<FormData>({
    serviceHistory: {
      branch: '',
      yearsServed: '',
      dischargePeriod: ''
    },
    disabilityConditions: {
      hasDisability: false,
      combatRelated: false,
      percentageRating: '',
      conditions: []
    },
    specialStatus: {
      purpleHeart: false,
      medalOfHonor: false,
      pow: false,
      combatVeteran: false
    }
  });

  // Calculate eligibility result when form data changes
  const eligibilityResult = useMemo(() => {
    if (currentStep === 4) {
      return calculateEligibility(formData);
    }
    return null;
  }, [formData, currentStep]);

  const updateServiceHistory = (data: FormData['serviceHistory']) => {
    setFormData(prev => ({ ...prev, serviceHistory: data }));
  };

  const updateDisabilityConditions = (data: FormData['disabilityConditions']) => {
    setFormData(prev => ({ ...prev, disabilityConditions: data }));
  };

  const updateSpecialStatus = (data: FormData['specialStatus']) => {
    setFormData(prev => ({ ...prev, specialStatus: data }));
  };

  const goToStep = (step: CurrentStep) => {
    setCurrentStep(step);
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep((prev) => Math.min(prev + 1, 4) as CurrentStep);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => Math.max(prev - 1, 0) as CurrentStep);
    }
  };

  const restart = () => {
    setCurrentStep(0);
    setFormData({
      serviceHistory: {
        branch: '',
        yearsServed: '',
        dischargePeriod: ''
      },
      disabilityConditions: {
        hasDisability: false,
        combatRelated: false,
        percentageRating: '',
        conditions: []
      },
      specialStatus: {
        purpleHeart: false,
        medalOfHonor: false,
        pow: false,
        combatVeteran: false
      }
    });
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return <Landing onStart={() => goToStep(1)} />;
      case 1:
        return (
          <Step1
            data={formData.serviceHistory}
            onUpdate={updateServiceHistory}
            onNext={nextStep}
            onBack={() => goToStep(0)}
          />
        );
      case 2:
        return (
          <Step2
            data={formData.disabilityConditions}
            onUpdate={updateDisabilityConditions}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 3:
        return (
          <Step3
            data={formData.specialStatus}
            onUpdate={updateSpecialStatus}
            onNext={nextStep}
            onBack={prevStep}
          />
        );
      case 4:
        return eligibilityResult ? (
          <Results
            result={eligibilityResult}
            formData={formData}
            onBack={prevStep}
            onRestart={restart}
          />
        ) : null;
      default:
        return <Landing onStart={() => goToStep(1)} />;
    }
  };

  return (
    <Layout>
      {currentStep > 0 && currentStep < 4 && (
        <div className="mb-8">
          <ProgressBar currentStep={currentStep as Step} totalSteps={3} />
        </div>
      )}
      {renderStep()}
    </Layout>
  );
}

export default App;
