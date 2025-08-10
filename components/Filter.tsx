'use client';

import { useState, useEffect, useMemo } from 'react';

// Generate a large set of sample deal data with varied scores
// Using a seeded random function to ensure consistent values between server and client
const seedRandom = (seed: number) => {
  return () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
};

// Scoring weights used to compute totalScore in the Details modal
const SCORING_WEIGHTS = {
  linkedinStrength: 0.25,
  exitStrategyStrength: 0.25,
  gtmStrength: 0.25,
  businessModelStrength: 0.25,
};

// Helper to create reasons per factor
const generateReasons = (deal: any) => {
  return {
    linkedinStrength: deal.linkedinStrength >= 85
      ? 'Strong founder/operator network with 3+ relevant intros and high engagement.'
      : deal.linkedinStrength >= 70
      ? 'Decent network presence; several warm intros likely.'
      : 'Limited network strength; fewer warm paths to founders.',
    exitStrategyStrength: deal.exitStrategyStrength >= 85
      ? 'Clear exit path with multiple acquirer profiles and precedent transactions.'
      : deal.exitStrategyStrength >= 70
      ? 'Exit opportunities exist but require milestone validation.'
      : 'Exit path unclear; requires strategy work with founders.',
    gtmStrength: deal.gtmStrength >= 85
      ? 'Efficient bottom‑up GTM with high conversion from POC to paid.'
      : deal.gtmStrength >= 70
      ? 'GTM channels identified; repeatability still being proven.'
      : 'Early GTM validation; channel economics not yet demonstrated.',
    businessModelStrength: deal.businessModelStrength >= 85
      ? 'Compelling unit economics and gross margin profile for scale.'
      : deal.businessModelStrength >= 70
      ? 'Unit economics trending positively; margin expansion expected.'
      : 'Unit economics unproven; material margin risk at scale.',
  };
};

const generateDeals = () => {
  // Use a fixed seed for random generation to ensure server/client consistency
  const random = seedRandom(42);
  
  const industries = [
    'AI', 'Healthcare', 'Fintech', 'EdTech', 'CleanTech', 'Blockchain', 'Cybersecurity', 
    'E-commerce', 'Logistics', 'AgTech', 'BioTech', 'Real Estate', 'Manufacturing', 
    'Robotics', 'AR/VR', 'Gaming', 'SaaS', 'IoT', 'Space Tech', 'Food Tech'
  ];
  
  const companyPrefixes = [
    'Tech', 'Smart', 'Next', 'Future', 'Quantum', 'Infinity', 'Global', 'Innovative', 
    'Digital', 'Advanced', 'Eco', 'Cyber', 'Meta', 'Hyper', 'Ultra', 'Omni', 'Synergy'
  ];
  
  const companyTypes = [
    'Solutions', 'Systems', 'Technologies', 'Innovations', 'Ventures', 'Labs', 'Group', 
    'Network', 'Platform', 'AI', 'Analytics', 'Dynamics', 'Connect', 'Corp', 'Inc.'
  ];
  
  const deals = [] as any[];
  
  // Create 25 deals with varied scores
  for (let i = 1; i <= 25; i++) {
    // Create score ranges with wider variance to ensure different filtering results
    const baseScore = Math.max(30, 100 - (i * 2.8));
    const variance = 20;
    
    const linkedinStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const exitStrategyStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const gtmStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const businessModelStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));

    // Compute weighted score (kept consistent with existing approximation)
    const weightedScore =
      linkedinStrength * SCORING_WEIGHTS.linkedinStrength +
      exitStrategyStrength * SCORING_WEIGHTS.exitStrategyStrength +
      gtmStrength * SCORING_WEIGHTS.gtmStrength +
      businessModelStrength * SCORING_WEIGHTS.businessModelStrength;

    const totalScore = Math.round(weightedScore);
    
    const industry = industries[Math.floor(random() * industries.length)];
    const prefix = companyPrefixes[Math.floor(random() * companyPrefixes.length)];
    const type = companyTypes[Math.floor(random() * companyTypes.length)];
    
    let name: string, company: string;
    
    if (i <= 6) {
      // Keep the original 6 deals
      switch (i) {
        case 1:
          name = 'AI Healthcare Platform';
          company = 'MediTech Solutions';
          break;
        case 2:
          name = 'Sustainable Energy Storage';
          company = 'GreenPower Inc.';
          break;
        case 3:
          name = 'Remote Work Collaboration Tool';
          company = 'TeamSync';
          break;
        case 4:
          name = 'Blockchain Supply Chain';
          company = 'ChainTrack';
          break;
        case 5:
          name = 'AR Shopping Experience';
          company = 'VirtualTry';
          break;
        case 6:
          name = 'Food Delivery Optimization';
          company = 'QuickBite';
          break;
        default:
          name = `${industry} Platform`;
          company = `${prefix}${type}`;
      }
    } else {
      name = `${industry} ${random() > 0.5 ? 'Platform' : 'Solution'}`;
      company = `${prefix}${random() > 0.7 ? industry : ''}${type}`;
    }
    
    const factors = {
      linkedinStrength,
      exitStrategyStrength,
      gtmStrength,
      businessModelStrength,
    };

    const reasons = generateReasons(factors);

    deals.push({
      id: i,
      name,
      company,
      ...factors,
      totalScore,
      reasons,
      weights: { ...SCORING_WEIGHTS },
      breakdown: {
        linkedin: Math.round(factors.linkedinStrength * SCORING_WEIGHTS.linkedinStrength),
        exit: Math.round(factors.exitStrategyStrength * SCORING_WEIGHTS.exitStrategyStrength),
        gtm: Math.round(factors.gtmStrength * SCORING_WEIGHTS.gtmStrength),
        businessModel: Math.round(factors.businessModelStrength * SCORING_WEIGHTS.businessModelStrength),
      },
      calculation: `${Math.round(factors.linkedinStrength * SCORING_WEIGHTS.linkedinStrength)} + ${Math.round(factors.exitStrategyStrength * SCORING_WEIGHTS.exitStrategyStrength)} + ${Math.round(factors.gtmStrength * SCORING_WEIGHTS.gtmStrength)} + ${Math.round(factors.businessModelStrength * SCORING_WEIGHTS.businessModelStrength)} = ${totalScore}`,
    });
  }
  
  return deals.sort((a, b) => b.totalScore - a.totalScore);
};

// Generate deals once to avoid hydration mismatch
const DEALS = generateDeals();

export default function Filter() {
  const [filters, setFilters] = useState({
    linkedin: 0,
    exitStrategy: 0,
    gtm: 0,
    businessModel: 0
  });
  
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedDeal, setSelectedDeal] = useState<any | null>(null);
  const dealsPerPage = 5; // Changed from 10 to 5 deals per page

  // Animation effect on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Filter deals based on current filter settings - memoize to avoid recalculation
  const filteredDeals = useMemo(() => {
    return DEALS.filter(deal => 
      deal.linkedinStrength >= filters.linkedin &&
      deal.exitStrategyStrength >= filters.exitStrategy &&
      deal.gtmStrength >= filters.gtm &&
      deal.businessModelStrength >= filters.businessModel
    );
  }, [filters]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredDeals.length / dealsPerPage);
  const displayedDeals = useMemo(() => {
    const startIndex = (currentPage - 1) * dealsPerPage;
    return filteredDeals.slice(startIndex, startIndex + dealsPerPage);
  }, [filteredDeals, currentPage]);

  const handleFilterChange = (filter: string, value: number) => {
    setFilters(prev => ({ ...prev, [filter]: value }));
    setActiveFilter(filter);
    setCurrentPage(1); // Reset to first page when filter changes
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-green-500';
    if (score >= 70) return 'bg-blue-500';
    if (score >= 60) return 'bg-yellow-500';
    if (score >= 50) return 'bg-orange-500';
    return 'bg-red-500';
  };

  return (
    <section id="filter" className="py-20 bg-[var(--background)]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deal <span className="gradient-text">Filtering</span></h2>
          <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Discover and evaluate the best investment opportunities through our AI-powered deal pipeline. Filter deals based on key metrics and find your next big opportunity.
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative mb-16">
          {/* Filter Controls */}
          <div className={`bg-[var(--card)] rounded-lg border border-[var(--border)] p-6 mb-8 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
            <h3 className="text-xl font-semibold mb-4">Filter Deals by Strength</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">LinkedIn Strength</label>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === 'linkedin' ? 'bg-blue-500/20 text-blue-400' : 'bg-[var(--muted)]/20'}`}>
                    {filters.linkedin}+
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={filters.linkedin} 
                  onChange={(e) => handleFilterChange('linkedin', parseInt(e.target.value))}
                  className="w-full h-2 bg-[var(--muted)]/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Exit Strategy</label>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === 'exitStrategy' ? 'bg-purple-500/20 text-purple-400' : 'bg-[var(--muted)]/20'}`}>
                    {filters.exitStrategy}+
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={filters.exitStrategy} 
                  onChange={(e) => handleFilterChange('exitStrategy', parseInt(e.target.value))}
                  className="w-full h-2 bg-[var(--muted)]/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Go-to-Market</label>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === 'gtm' ? 'bg-green-500/20 text-green-400' : 'bg-[var(--muted)]/20'}`}>
                    {filters.gtm}+
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={filters.gtm} 
                  onChange={(e) => handleFilterChange('gtm', parseInt(e.target.value))}
                  className="w-full h-2 bg-[var(--muted)]/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <label className="text-sm font-medium">Business Model</label>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${activeFilter === 'businessModel' ? 'bg-yellow-500/20 text-yellow-400' : 'bg-[var(--muted)]/20'}`}>
                    {filters.businessModel}+
                  </span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={filters.businessModel} 
                  onChange={(e) => handleFilterChange('businessModel', parseInt(e.target.value))}
                  className="w-full h-2 bg-[var(--muted)]/30 rounded-lg appearance-none cursor-pointer"
                />
              </div>
            </div>
            
            {/* Filter stats */}
            <div className="mt-4 flex flex-wrap items-center justify-between border-t border-[var(--border)] pt-4">
              <div className="text-sm text-[var(--foreground)]/70">
                <span className="font-medium">{filteredDeals.length}</span> deals match your criteria
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => setFilters({ linkedin: 0, exitStrategy: 0, gtm: 0, businessModel: 0 })}
                  className="text-sm text-[var(--foreground)]/70 hover:text-[var(--foreground)] transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          </div>

          {/* Deal Pipeline */}
          <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">Deal Pipeline</h3>
              <div className="flex gap-2 items-center">
                <span className="text-xs text-[var(--muted)]">Score range:</span>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <span className="text-xs">80+</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-blue-500"></span>
                  <span className="text-xs">70+</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                  <span className="text-xs">60+</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-orange-500"></span>
                  <span className="text-xs">50+</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="w-3 h-3 rounded-full bg-red-500"></span>
                  <span className="text-xs">&lt;50</span>
                </div>
              </div>
            </div>
            
            {filteredDeals.length === 0 ? (
              <div className="bg-[var(--card)] rounded-lg border border-[var(--border)] p-8 text-center">
                <p className="text-[var(--foreground)]/70">No deals match your current filter criteria.</p>
                <button 
                  className="mt-4 btn-secondary"
                  onClick={() => setFilters({ linkedin: 0, exitStrategy: 0, gtm: 0, businessModel: 0 })}
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {displayedDeals.map((deal, index) => {
                    // Ensure we're using the actual deal ID, not the index
                    return (
                      <div 
                        key={deal.id}
                        className={`bg-[var(--card)] rounded-lg border border-[var(--border)] p-4 md:p-6 transition-all duration-500 hover:shadow-lg hover:border-[var(--primary)]/50 ${index === 0 && currentPage === 1 ? 'border-l-4 border-l-green-500' : ''} animate-slide-in opacity-0`}
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-md flex items-center justify-center text-white font-bold ${getScoreColor(deal.totalScore)}`}>
                                {/* Use a static value that won't change between server/client renders */}
                                {deal.id}
                              </div>
                              <div>
                                <h4 className="font-semibold">{deal.name}</h4>
                                <p className="text-sm text-[var(--foreground)]/70">{deal.company}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                            <div className="text-center">
                              <div className="text-xs text-[var(--muted)] mb-1">LinkedIn</div>
                              <div className="relative h-1.5 w-full bg-[var(--muted)]/30 rounded-full overflow-hidden">
                                <div 
                                  className="absolute top-0 left-0 h-full bg-blue-500 rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${deal.linkedinStrength}%` : '0%' }}
                                ></div>
                              </div>
                              <div className="text-sm font-medium mt-1">{deal.linkedinStrength}%</div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-xs text-[var(--muted)] mb-1">Exit Strategy</div>
                              <div className="relative h-1.5 w-full bg-[var(--muted)]/30 rounded-full overflow-hidden">
                                <div 
                                  className="absolute top-0 left-0 h-full bg-purple-500 rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${deal.exitStrategyStrength}%` : '0%' }}
                                ></div>
                              </div>
                              <div className="text-sm font-medium mt-1">{deal.exitStrategyStrength}%</div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-xs text-[var(--muted)] mb-1">GTM</div>
                              <div className="relative h-1.5 w-full bg-[var(--muted)]/30 rounded-full overflow-hidden">
                                <div 
                                  className="absolute top-0 left-0 h-full bg-green-500 rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${deal.gtmStrength}%` : '0%' }}
                                ></div>
                              </div>
                              <div className="text-sm font-medium mt-1">{deal.gtmStrength}%</div>
                            </div>
                            
                            <div className="text-center">
                              <div className="text-xs text-[var(--muted)] mb-1">Business Model</div>
                              <div className="relative h-1.5 w-full bg-[var(--muted)]/30 rounded-full overflow-hidden">
                                <div 
                                  className="absolute top-0 left-0 h-full bg-yellow-500 rounded-full transition-all duration-1000"
                                  style={{ width: isVisible ? `${deal.businessModelStrength}%` : '0%' }}
                                ></div>
                              </div>
                              <div className="text-sm font-medium mt-1">{deal.businessModelStrength}%</div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="text-center">
                              <div className="text-xs text-[var(--muted)] mb-1">Score</div>
                              <div className={`text-lg font-bold px-3 py-1 rounded ${getScoreColor(deal.totalScore)} text-white`}>
                                {deal.totalScore}%
                              </div>
                            </div>
                            <button onClick={() => setSelectedDeal(deal)} className="btn-secondary text-sm py-1 px-3">Details</button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-8">
                    <button 
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      className={`p-2 rounded-md ${currentPage === 1 ? 'text-[var(--muted)] cursor-not-allowed' : 'text-[var(--foreground)] hover:bg-[var(--card-hover)]'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    
                    <div className="flex gap-1">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`w-8 h-8 flex items-center justify-center rounded-md ${
                            currentPage === page 
                              ? 'bg-blue-600 text-white' 
                              : 'text-[var(--foreground)] hover:bg-[var(--card-hover)]'
                          }`}
                        >
                          {page}
                        </button>
                      ))}
                    </div>
                    
                    <button 
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      className={`p-2 rounded-md ${currentPage === totalPages ? 'text-[var(--muted)] cursor-not-allowed' : 'text-[var(--foreground)] hover:bg-[var(--card-hover)]'}`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {selectedDeal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" onClick={() => setSelectedDeal(null)}>
          <div className="w-full max-w-3xl bg-[var(--card)] border border-[var(--border)] rounded-2xl shadow-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-[var(--border)] flex items-start justify-between">
              <div>
                <h3 className="text-xl font-bold">{selectedDeal.name}</h3>
                <p className="text-sm text-[var(--foreground)]/70">{selectedDeal.company}</p>
              </div>
              <button onClick={() => setSelectedDeal(null)} className="text-[var(--muted)] hover:text-[var(--foreground)]">✕</button>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Weights */}
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4">
                <h4 className="font-semibold mb-3">Weights</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>LinkedIn</span><span>{Math.round(selectedDeal.weights.linkedinStrength * 100)}%</span></li>
                  <li className="flex justify-between"><span>Exit Strategy</span><span>{Math.round(selectedDeal.weights.exitStrategyStrength * 100)}%</span></li>
                  <li className="flex justify-between"><span>GTM</span><span>{Math.round(selectedDeal.weights.gtmStrength * 100)}%</span></li>
                  <li className="flex justify-between"><span>Business Model</span><span>{Math.round(selectedDeal.weights.businessModelStrength * 100)}%</span></li>
                </ul>
              </div>

              {/* Scores */}
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4">
                <h4 className="font-semibold mb-3">Scores</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>LinkedIn Strength</span><span>{selectedDeal.linkedinStrength}%</span></li>
                  <li className="flex justify-between"><span>Exit Strategy</span><span>{selectedDeal.exitStrategyStrength}%</span></li>
                  <li className="flex justify-between"><span>GTM</span><span>{selectedDeal.gtmStrength}%</span></li>
                  <li className="flex justify-between"><span>Business Model</span><span>{selectedDeal.businessModelStrength}%</span></li>
                </ul>
              </div>

              {/* Contribution */}
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4">
                <h4 className="font-semibold mb-3">Contributions</h4>
                <ul className="text-sm space-y-2">
                  <li className="flex justify-between"><span>LinkedIn</span><span>{selectedDeal.breakdown.linkedin}</span></li>
                  <li className="flex justify-between"><span>Exit Strategy</span><span>{selectedDeal.breakdown.exit}</span></li>
                  <li className="flex justify-between"><span>GTM</span><span>{selectedDeal.breakdown.gtm}</span></li>
                  <li className="flex justify-between"><span>Business Model</span><span>{selectedDeal.breakdown.businessModel}</span></li>
                </ul>
              </div>
            </div>

            {/* Reasons */}
            <div className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4">
                <h4 className="font-semibold mb-3">Why this ranking</h4>
                <ul className="text-sm space-y-2 list-disc list-inside text-[var(--foreground)]/80">
                  <li><span className="font-medium">LinkedIn:</span> {selectedDeal.reasons.linkedinStrength}</li>
                  <li><span className="font-medium">Exit Strategy:</span> {selectedDeal.reasons.exitStrategyStrength}</li>
                  <li><span className="font-medium">GTM:</span> {selectedDeal.reasons.gtmStrength}</li>
                  <li><span className="font-medium">Business Model:</span> {selectedDeal.reasons.businessModelStrength}</li>
                </ul>
              </div>
              <div className="bg-[var(--background)] rounded-xl border border-[var(--border)] p-4">
                <h4 className="font-semibold mb-3">Overall Calculation</h4>
                <div className="text-sm">
                  <div className="mb-2">Weighted Sum:</div>
                  <div className="text-[var(--foreground)]/90 font-mono">{selectedDeal.calculation}</div>
                  <div className="mt-3">Overall Score: <span className="font-semibold">{selectedDeal.totalScore}</span></div>
                </div>
              </div>
            </div>

            <div className="px-6 pb-6">
              <button onClick={() => setSelectedDeal(null)} className="btn-primary">Close</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
} 