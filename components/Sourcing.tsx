'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Seeded random function to ensure consistent values between server and client
const seedRandom = (seed: number) => {
  return (index: number) => {
    const calculatedSeed = (seed * 9301 + 49297 * (index + 1)) % 233280;
    return calculatedSeed / 233280;
  };
};

// Sample data for deal sources with added trend data
const DEAL_SOURCES = [
  { 
    name: 'Cold Emails', 
    count: 156, 
    percentage: 35,
    description: 'Direct outreach from founders via email',
    trend: 12,
    trendDirection: 'up',
    quality: 68,
    color: '#2dd4bf'
  },
  { 
    name: 'LinkedIn DMs', 
    count: 98, 
    percentage: 22,
    description: 'Connection requests and direct messages',
    trend: 8,
    trendDirection: 'up',
    quality: 72,
    color: '#3b82f6'
  },
  { 
    name: 'Website Forms', 
    count: 72, 
    percentage: 16,
    description: 'Submissions through VC website',
    trend: -3,
    trendDirection: 'down',
    quality: 65,
    color: '#8b5cf6'
  },
  { 
    name: 'Referrals', 
    count: 64, 
    percentage: 14,
    description: 'Introductions from trusted network',
    trend: 5,
    trendDirection: 'up',
    quality: 89,
    color: '#f59e0b'
  },
  { 
    name: 'Trade Shows', 
    count: 45, 
    percentage: 10,
    description: 'In-person pitches at industry events',
    trend: 2,
    trendDirection: 'up',
    quality: 76,
    color: '#10b981'
  },
  { 
    name: 'Missed Calls', 
    count: 13, 
    percentage: 3,
    description: 'Missed calls from founders',
    trend: -8,
    trendDirection: 'down',
    quality: 45,
    color: '#ef4444'
  }
];

// Generate sparkline data for each source
const generateSparklineData = () => {
  const random = seedRandom(42);
  
  return DEAL_SOURCES.map((source, index) => {
    const points = [];
    let lastValue = 50;
    
    for (let i = 0; i < 10; i++) {
      // Generate values that follow the trend direction
      const change = (random(index * 10 + i) * 20) - 10;
      const directedChange = source.trendDirection === 'up' 
        ? Math.abs(change) 
        : -Math.abs(change);
      
      lastValue = Math.max(10, Math.min(90, lastValue + directedChange));
      points.push(lastValue);
    }
    
    return points;
  });
};

const SPARKLINE_DATA = generateSparklineData();

export default function Sourcing() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('volume');
  const [animatedCount, setAnimatedCount] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [hoveredSource, setHoveredSource] = useState<number | null>(null);
  const [selectedSource, setSelectedSource] = useState<number | null>(null);
  
  // Animation effect on load
  useEffect(() => {
    setIsVisible(true);
    
    // Animate the total deal count
    const totalDeals = DEAL_SOURCES.reduce((sum, source) => sum + source.count, 0);
    let count = 0;
    const interval = setInterval(() => {
      count += Math.ceil(totalDeals / 30);
      if (count >= totalDeals) {
        setAnimatedCount(totalDeals);
        clearInterval(interval);
      } else {
        setAnimatedCount(count);
      }
    }, 50);
    
    // Mark component as hydrated after first render
    setHydrated(true);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Calculate total deals
  const totalDeals = DEAL_SOURCES.reduce((sum, source) => sum + source.count, 0);

  // Helper function to get color based on trend
  const getTrendColor = (trend: number) => {
    if (trend > 5) return 'text-emerald-400';
    if (trend > 0) return 'text-blue-400';
    if (trend > -5) return 'text-amber-400';
    return 'text-rose-400';
  };

  return (
    <section id="sourcing" className="py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {DEAL_SOURCES.map((source, i) => (
            <div 
              key={`bg-${i}`}
              className="absolute rounded-full opacity-10 blur-3xl"
              style={{
                width: `${source.percentage * 10}px`,
                height: `${source.percentage * 10}px`,
                backgroundColor: source.color,
                left: `${(i * 20) % 80}%`,
                top: `${(i * 15) % 70}%`,
                animation: `float ${3 + i}s ease-in-out infinite alternate`
              }}
            />
          ))}
        </div>

        {/* Top Section (Headline Area) */}
        <div className={`text-center mb-16 transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Where Do Your <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Best Deals</span> Come From?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Your pipeline, decoded. Discover the channels that drive volume and quality—at a glance.
          </p>
          
          <div className="mt-8 flex justify-center items-center space-x-6">
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400 mb-1">
                {animatedCount}
              </div>
              <div className="text-sm text-gray-400">Total Deals This Quarter</div>
            </div>
            
            <div className="h-12 w-px bg-gray-700"></div>
            
            <div className="flex items-center space-x-2">
              <div className="flex">
                <button 
                  className={`px-4 py-2 rounded-l-md text-sm transition-all ${activeTab === 'volume' ? 'bg-blue-500/20 text-blue-400 border-b-2 border-blue-500' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('volume')}
                >
                  Volume
                </button>
                <button 
                  className={`px-4 py-2 rounded-r-md text-sm transition-all ${activeTab === 'quality' ? 'bg-blue-500/20 text-blue-400 border-b-2 border-blue-500' : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`}
                  onClick={() => setActiveTab('quality')}
                >
                  Quality
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Visualization Section */}
        <div className={`mb-16 transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '200ms'}}>
          {/* Radial Visualization */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Left side - Radial chart */}
            <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-gray-800/50 backdrop-blur-sm flex items-center justify-center border border-gray-700">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">{totalDeals}</div>
                    <div className="text-xs text-gray-400">Total Deals</div>
                  </div>
                </div>
              </div>
              
              {/* Radial segments */}
              {DEAL_SOURCES.map((source, index) => {
                const angle = (index / DEAL_SOURCES.length) * 360;
                const isActive = hoveredSource === index || selectedSource === index;
                const scale = isActive ? 1.1 : 1;
                const opacity = hoveredSource !== null && hoveredSource !== index && selectedSource === null ? 0.5 : 1;
                
                return (
                  <div 
                    key={index}
                    className="absolute top-1/2 left-1/2 origin-left cursor-pointer transition-all duration-300"
                    style={{
                      transform: `rotate(${angle}deg) scaleX(${scale})`,
                      opacity
                    }}
                    onMouseEnter={() => setHoveredSource(index)}
                    onMouseLeave={() => setHoveredSource(null)}
                    onClick={() => setSelectedSource(selectedSource === index ? null : index)}
                  >
                    <div 
                      className="h-2 rounded-full"
                      style={{
                        width: `${150 * (source.percentage / 100) * 2.5}px`,
                        backgroundColor: source.color,
                        boxShadow: isActive ? `0 0 15px ${source.color}` : 'none'
                      }}
                    />
                    
                    {isActive && (
                      <div 
                        className="absolute left-full ml-2 px-2 py-1 rounded whitespace-nowrap text-xs text-white bg-gray-800/80 backdrop-blur-sm"
                        style={{
                          transform: `rotate(-${angle}deg)`,
                          boxShadow: `0 0 10px rgba(0,0,0,0.5)`
                        }}
                      >
                        {source.name}: {source.count} ({source.percentage}%)
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
            
            {/* Right side - Details panel */}
            <div className="w-full md:w-1/2 bg-gray-900/30 backdrop-blur-md rounded-xl border border-gray-800/50 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Deal Sources</h3>
              
              <div className="space-y-4">
                {DEAL_SOURCES.map((source, index) => {
                  const isActive = hoveredSource === index || selectedSource === index;
                  
                  return (
                    <div 
                      key={index}
                      className={`flex items-center transition-all duration-300 p-2 rounded-lg cursor-pointer ${isActive ? 'bg-gray-800/50' : 'hover:bg-gray-800/30'}`}
                      onMouseEnter={() => setHoveredSource(index)}
                      onMouseLeave={() => setHoveredSource(null)}
                      onClick={() => setSelectedSource(selectedSource === index ? null : index)}
                    >
                      <div 
                        className="w-3 h-3 rounded-full mr-3"
                        style={{ backgroundColor: source.color }}
                      />
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium">{source.name}</span>
                          <div className="flex items-center">
                            <span className="text-gray-400 mr-2">{source.count}</span>
                            <div className={`flex items-center ${getTrendColor(source.trend)}`}>
                              {source.trendDirection === 'up' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                </svg>
                              ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                                </svg>
                              )}
                              <span className="ml-1 text-xs">{Math.abs(source.trend)}%</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-1 flex items-center">
                          <div className="flex-1 h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div 
                              className="h-full rounded-full transition-all duration-500"
                              style={{ 
                                width: isVisible ? `${activeTab === 'quality' ? source.quality : source.percentage}%` : '0%',
                                backgroundColor: source.color
                              }}
                            />
                          </div>
                          <span className="ml-2 text-xs text-gray-400">
                            {activeTab === 'quality' ? `${source.quality}%` : `${source.percentage}%`}
                          </span>
                        </div>
                        
                        {isActive && (
                          <div className="mt-2 text-xs text-gray-400">{source.description}</div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section (Strategic Tools) */}
        <div className={`transition-all duration-700 relative z-10 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{transitionDelay: '400ms'}}>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-blue-900/10 rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] -z-10"></div>
              <div className="h-full backdrop-blur-sm rounded-xl border border-blue-500/10 p-6 transition-all duration-300 group-hover:border-blue-500/30">
                <div className="w-12 h-12 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-blue-400">
                    <path d="M9 5H7C5.89543 5 5 5.89543 5 7V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V7C19 5.89543 18.1046 5 17 5H15M9 5C9 6.10457 9.89543 7 11 7H13C14.1046 7 15 6.10457 15 5M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Centralize Deal Flow</h3>
                <p className="text-gray-400">
                  One pipeline. All touchpoints. From cold emails to trade shows—every deal, synced.
                </p>
                
                <div className="mt-4 h-10 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Deal Sync Rate</span>
                    <span className="text-xs font-medium text-blue-400">98%</span>
                  </div>
                  <div className="mt-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-blue-500 to-blue-400 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-purple-900/10 rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] -z-10"></div>
              <div className="h-full backdrop-blur-sm rounded-xl border border-purple-500/10 p-6 transition-all duration-300 group-hover:border-purple-500/30">
                <div className="w-12 h-12 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-purple-400">
                    <path d="M3 4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V6.58579C21 6.851 20.8946 7.10536 20.7071 7.29289L14.2929 13.7071C14.1054 13.8946 14 14.149 14 14.4142V17L10 21V14.4142C10 14.149 9.89464 13.8946 9.70711 13.7071L3.29289 7.29289C3.10536 7.10536 3 6.851 3 6.58579V4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Track All Channels</h3>
                <p className="text-gray-400">
                  Unified dashboard for outreach sources. Filter the noise, amplify what works.
                </p>
                
                <div className="mt-4 h-10 relative">
                  <div className="grid grid-cols-6 gap-1">
                    {DEAL_SOURCES.map((source, i) => (
                      <div key={i} className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ 
                            width: `${source.percentage * 2}%`,
                            backgroundColor: source.color
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-1 flex justify-between">
                    <span className="text-xs text-gray-500">Channel Distribution</span>
                    <span className="text-xs font-medium text-purple-400">{DEAL_SOURCES.length} Active</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-teal-900/10 rounded-xl transform transition-all duration-300 group-hover:scale-[1.02] -z-10"></div>
              <div className="h-full backdrop-blur-sm rounded-xl border border-teal-500/10 p-6 transition-all duration-300 group-hover:border-teal-500/30">
                <div className="w-12 h-12 mb-4">
                  <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-teal-400">
                    <path d="M9 19V13M9 13V9C9 7.89543 9.89543 7 11 7H13C14.1046 7 15 7.89543 15 9V13M9 13H15M15 13V19M9 19H7C5.89543 19 5 18.1046 5 17V5C5 3.89543 5.89543 3 7 3H9M15 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                
                <h3 className="text-lg font-semibold text-white mb-2">Performance Insights</h3>
                <p className="text-gray-400">
                  Automatic highlights of fastest-growing sources, top-performing deal types, and quality-over-quantity trends.
                </p>
                
                <div className="mt-4 h-10 relative">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500">Top Performer</span>
                    <span className="text-xs font-medium text-teal-400">Referrals (89% Quality)</span>
                  </div>
                  <div className="mt-1 flex items-center">
                    <div className="w-4 h-4 rounded-full mr-2" style={{ backgroundColor: DEAL_SOURCES[3].color }}></div>
                    <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full" style={{ width: '89%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  );
} 