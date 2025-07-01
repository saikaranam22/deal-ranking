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
  
  const deals = [];
  
  // Create 25 deals with varied scores
  for (let i = 1; i <= 25; i++) {
    // Create score ranges with wider variance to ensure different filtering results
    // This creates a more diverse set of scores across the deals
    const baseScore = Math.max(30, 100 - (i * 2.8));
    const variance = 20; // Increased variance for more diverse scores
    
    // Generate scores with higher variance for better filtering demonstration
    // Using our seeded random function instead of Math.random()
    const linkedinStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const exitStrategyStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const gtmStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    const businessModelStrength = Math.min(98, Math.max(25, Math.round(baseScore + (random() * variance * 2 - variance))));
    
    // Calculate total score as weighted average
    const totalScore = Math.round((linkedinStrength + exitStrategyStrength + gtmStrength + businessModelStrength) / 4);
    
    // Generate company name
    const industry = industries[Math.floor(random() * industries.length)];
    const prefix = companyPrefixes[Math.floor(random() * companyPrefixes.length)];
    const type = companyTypes[Math.floor(random() * companyTypes.length)];
    
    let name, company;
    
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
      }
    } else {
      // Generate new deal names for the rest
      name = `${industry} ${random() > 0.5 ? 'Platform' : 'Solution'}`;
      company = `${prefix}${random() > 0.7 ? industry : ''}${type}`;
    }
    
    deals.push({
      id: i,
      name,
      company,
      linkedinStrength,
      exitStrategyStrength,
      gtmStrength,
      businessModelStrength,
      totalScore
    });
  }
  
  // Sort by total score to ensure highest scores are at the top
  return deals.sort((a, b) => b.totalScore - a.totalScore);
};

// Generate deals once to avoid hydration mismatch
const DEALS = generateDeals();

// Pre-calculate animation values to avoid hydration mismatches
const ANIMATION_VALUES = [
  { top: '15%', left: '20%', animationDelay: '0.2s', animationDuration: '1.5s' },
  { top: '35%', left: '65%', animationDelay: '0.5s', animationDuration: '1.8s' },
  { top: '10%', left: '75%', animationDelay: '0.8s', animationDuration: '2.1s' },
  { top: '40%', left: '30%', animationDelay: '1.1s', animationDuration: '1.7s' },
  { top: '25%', left: '45%', animationDelay: '1.4s', animationDuration: '1.9s' }
];

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
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Deal <span className="gradient-text">Filtering</span></h2>
          <p className="text-[var(--foreground)]/70 max-w-2xl mx-auto">
            Discover and evaluate the best investment opportunities through our AI-powered deal pipeline. Filter deals based on key metrics and find your next big opportunity.
          </p>
        </div>

        {/* Pipeline Visualization */}
        <div className="relative mb-16">
          {/* Animated deal influx visualization */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full">
            <div className="relative w-64 h-32">
              {ANIMATION_VALUES.map((values, i) => (
                <div 
                  key={i} 
                  className="absolute w-12 h-12 rounded-lg bg-[var(--card)] border border-[var(--border)] shadow-lg transform rotate-45 opacity-80 animate-fall"
                  style={{
                    top: values.top,
                    left: values.left,
                    animationDelay: values.animationDelay,
                    animationDuration: values.animationDuration,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center transform -rotate-45">
                    <span className="text-xs font-bold">Deal</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

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
                            <button className="btn-secondary text-sm py-1 px-3">Details</button>
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
    </section>
  );
} 