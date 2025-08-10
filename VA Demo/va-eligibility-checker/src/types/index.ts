export interface ServiceHistory {
  branch: string;
  yearsServed: string;
  dischargePeriod: string;
}

export interface DisabilityConditions {
  hasDisability: boolean;
  combatRelated: boolean;
  percentageRating: string;
  conditions: string[];
}

export interface SpecialStatus {
  purpleHeart: boolean;
  medalOfHonor: boolean;
  pow: boolean;
  combatVeteran: boolean;
}

export interface FormData {
  serviceHistory: ServiceHistory;
  disabilityConditions: DisabilityConditions;
  specialStatus: SpecialStatus;
}

export interface EligibilityResult {
  status: 'eligible' | 'maybe-eligible' | 'not-eligible';
  benefits: string[];
  nextSteps: string[];
  documentation: string[];
}

export type Step = 1 | 2 | 3 | 4;
export type CurrentStep = 0 | Step; 