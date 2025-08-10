import type { FormData, EligibilityResult } from '../types';

export function calculateEligibility(data: FormData): EligibilityResult {
  const { serviceHistory, disabilityConditions, specialStatus } = data;
  
  let status: EligibilityResult['status'] = 'not-eligible';
  const benefits: string[] = [];
  const nextSteps: string[] = [];
  const documentation: string[] = [];

  // Basic eligibility checks
  const hasHonorableDischarge = serviceHistory.dischargePeriod === 'Honorable' || 
                                serviceHistory.dischargePeriod === 'General (Under Honorable Conditions)';
  const hasDisability = disabilityConditions.hasDisability;
  const hasSpecialStatus = specialStatus.purpleHeart || specialStatus.medalOfHonor || 
                          specialStatus.pow || specialStatus.combatVeteran;

  // Determine primary eligibility status
  if (hasHonorableDischarge) {
    if (hasDisability || hasSpecialStatus) {
      status = 'eligible';
    } else {
      status = 'maybe-eligible';
    }
  } else if (hasDisability && disabilityConditions.combatRelated) {
    status = 'maybe-eligible';
  }

  // Healthcare Benefits
  if (hasHonorableDischarge && hasDisability) {
    benefits.push('VA Healthcare');
    benefits.push('Priority Healthcare Access');
  } else if (hasHonorableDischarge) {
    benefits.push('Basic VA Healthcare (may require enrollment)');
  }

  // Disability Compensation
  if (hasDisability && hasHonorableDischarge) {
    benefits.push('Disability Compensation');
    if (disabilityConditions.combatRelated) {
      benefits.push('Combat-Related Special Compensation');
    }
  }

  // Education Benefits
  if (hasHonorableDischarge) {
    const yearsNumber = getYearsFromString(serviceHistory.yearsServed);
    if (yearsNumber >= 3) {
      benefits.push('GI Bill Education Benefits');
      benefits.push('Vocational Rehabilitation');
    } else if (yearsNumber >= 2) {
      benefits.push('Limited GI Bill Benefits');
    }
  }

  // Home Loan Benefits
  if (hasHonorableDischarge) {
    benefits.push('VA Home Loan Guarantee');
  }

  // Special Status Benefits
  if (specialStatus.purpleHeart || specialStatus.medalOfHonor) {
    benefits.push('Priority Access to All Benefits');
    benefits.push('Veteran ID Card');
    if (specialStatus.medalOfHonor) {
      benefits.push('Medal of Honor Pension');
    }
  }

  if (specialStatus.pow) {
    benefits.push('POW Special Benefits Package');
    benefits.push('Presumptive Health Conditions Coverage');
  }

  if (specialStatus.combatVeteran) {
    benefits.push('Combat Veteran Healthcare Priority');
    benefits.push('Readjustment Counseling');
  }

  // Burial Benefits
  if (hasHonorableDischarge || hasDisability) {
    benefits.push('Burial and Cemetery Benefits');
  }

  // Generate next steps based on status
  if (status === 'eligible') {
    nextSteps.push('Apply for benefits online at VA.gov');
    nextSteps.push('Gather supporting military and medical documentation');
    nextSteps.push('Consider scheduling a consultation with a VSO (Veterans Service Officer)');
    nextSteps.push('Start with the most critical benefits for your situation');
  } else if (status === 'maybe-eligible') {
    nextSteps.push('Contact a VA representative for detailed eligibility review');
    nextSteps.push('Gather complete military service records');
    nextSteps.push('Consider applying for benefits you may qualify for');
    nextSteps.push('Speak with a Veterans Service Officer for guidance');
  } else {
    nextSteps.push('Contact VA for appeal options if you believe this assessment is incorrect');
    nextSteps.push('Gather additional documentation about your service');
    nextSteps.push('Consider consulting with a veterans advocate');
  }

  // Documentation requirements
  documentation.push('DD-214 (Certificate of Release or Discharge from Active Duty)');
  
  if (hasDisability) {
    documentation.push('Medical records showing service-connected conditions');
    documentation.push('Current medical evaluations and treatment records');
  }

  if (specialStatus.purpleHeart || specialStatus.medalOfHonor) {
    documentation.push('Award citation and supporting military records');
  }

  if (specialStatus.pow) {
    documentation.push('POW status verification documents');
  }

  documentation.push('Military service records (if available)');
  documentation.push('Dependency records (if applicable)');

  return {
    status,
    benefits: [...new Set(benefits)], // Remove duplicates
    nextSteps,
    documentation
  };
}

function getYearsFromString(yearsServed: string): number {
  if (yearsServed.includes('Less than 1')) return 0;
  if (yearsServed.includes('1-2')) return 2;
  if (yearsServed.includes('3-5')) return 4;
  if (yearsServed.includes('6-10')) return 8;
  if (yearsServed.includes('11-20')) return 15;
  if (yearsServed.includes('More than 20')) return 25;
  return 0;
} 