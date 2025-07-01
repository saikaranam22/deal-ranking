'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Hero() {
  const [email, setEmail] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [typingIndex, setTypingIndex] = useState(0);
  
  // Animation effect on load
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Typing animation for code snippet that loops continuously
  useEffect(() => {
    const codeSnippet = `function s(deal) {
  return {
    roi: 0.92,
    risk: 0.15,
    fit: 0.88
  }
}`;
    
    const timer = setTimeout(() => {
      if (typingIndex < codeSnippet.length) {
        setTypingIndex(prev => prev + 1);
      } else {
        // Reset after a brief pause when complete
        setTimeout(() => {
          setTypingIndex(0);
        }, 1500);
      }
    }, 50);
    
    return () => clearTimeout(timer);
  }, [typingIndex]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-24 pb-8 overflow-hidden h-screen flex flex-col">
      {/* Background gradient effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-500/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-500/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}} />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" 
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1 0V20M0 1H20\' stroke=\'white\' stroke-opacity=\'0.4\' stroke-width=\'0.5\'/%3E%3C/svg%3E")',
           backgroundSize: '20px 20px'}} />
      
      <div className="container relative z-10 flex flex-col h-full mt-2">
        {/* Main Hero Section */}
        <div className="flex flex-col lg:flex-row items-start gap-6">
          {/* Left Content */}
          <div className="flex-1 pt-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-blue-500">AI-Powered</span> Deal <br />Ranking
            </h1>
            <p className="text-base md:text-lg text-[var(--foreground)]/80 mb-6 max-w-2xl">
              Find the best deals with our intelligent ranking system. Compare, analyze, and make smarter investment decisions.
            </p>
            
            {/* Email input */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-md bg-[#1a1e29] border border-[#2d3748] focus:border-blue-500 outline-none transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md transition-all duration-200 whitespace-nowrap">
                Get Early Access
              </button>
            </div>
            
            {/* Tech badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="px-3 py-1 rounded-full bg-[#1a1e29] border border-[#2d3748] text-xs font-medium">
                Machine Learning
              </div>
              <div className="px-3 py-1 rounded-full bg-[#1a1e29] border border-[#2d3748] text-xs font-medium">
                Financial Analysis
              </div>
              <div className="px-3 py-1 rounded-full bg-[#1a1e29] border border-[#2d3748] text-xs font-medium">
                Real-time Data
              </div>
            </div>
            
            {/* Explore button */}
            <button 
              onClick={() => scrollToSection('sourcing')}
              className="inline-flex items-center gap-2 text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors mb-10"
            >
              <span>Explore Deal Sourcing</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 animate-bounce" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L10 14.586l5.293-5.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {/* Right Content - Deal Comparison Card */}
          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Deal Comparison Card */}
              <div className="bg-[#1a1e29] rounded-lg border border-[#2d3748] overflow-hidden shadow-xl">
                <div className="p-3 border-b border-[#2d3748] flex justify-between items-center">
                  <div className="text-sm font-medium">Deal Comparison</div>
                </div>
                <div className="p-4">
                  <div className="space-y-5">
                    {/* Deal 1 */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                        1
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Deal 1</span>
                        </div>
                        <div className="h-2 bg-[#2d3748] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full" style={{width: '100%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deal 2 */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                        2
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Deal 2</span>
                          <span className="text-sm font-medium">65</span>
                        </div>
                        <div className="h-2 bg-[#2d3748] rounded-full overflow-hidden">
                          <div className="h-full bg-blue-500 rounded-full" style={{width: '65%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Deal 3 */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-blue-500/20 flex items-center justify-center text-blue-400 font-bold border border-blue-500/20">
                        3
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">Deal 3</span>
                          <span className="text-sm font-medium">4</span>
                        </div>
                        <div className="h-2 bg-[#2d3748] rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" style={{width: '40%'}}></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="mt-4 pt-4 border-t border-[#2d3748]">
                      <div className="text-sm font-medium mb-3">Key Metrics</div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-[#0f1116]/50 p-3 rounded-md border border-[#2d3748]">
                          <div className="text-xs text-[#475569]">ROI</div>
                          <div className="text-sm font-medium mt-1">High</div>
                        </div>
                        <div className="bg-[#0f1116]/50 p-3 rounded-md border border-[#2d3748]">
                          <div className="text-xs text-[#475569]">Risk</div>
                          <div className="text-sm font-medium mt-1">Low</div>
                        </div>
                        <div className="bg-[#0f1116]/50 p-3 rounded-md border border-[#2d3748]">
                          <div className="text-xs text-[#475569]">Market Fit</div>
                          <div className="text-sm font-medium mt-1">Excellent</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* AI Score Card */}
              <div className="absolute -top-4 right-0 w-36 h-36 bg-[#1a1e29] rounded-lg border border-[#2d3748] p-4 shadow-lg">
                <div className="text-xs text-[#475569]">AI Score</div>
                <div className="text-4xl font-bold text-blue-500 mt-1">92%</div>
                <div className="mt-2 h-1.5 bg-[#2d3748] rounded-full">
                  <div className="h-full bg-blue-500 rounded-full" style={{width: '92%'}}></div>
                </div>
                <div className="mt-2 text-xs text-[#e2e8f0]/70">Confidence: High</div>
              </div>
              
              {/* AI Match Card */}
              <div className="absolute -bottom-12 right-24 w-32 h-32 bg-[#1a1e29] rounded-lg border border-[#2d3748] p-4 shadow-lg transform -rotate-3">
                <div className="text-xs text-[#475569]">AI Match</div>
                <div className="flex items-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <div className="mt-2 text-xs text-[#e2e8f0]/70">Perfect match for your portfolio</div>
              </div>
              
              {/* Code snippet floating element with typing animation */}
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-32 h-48 bg-[#1a1e29] rounded-lg border border-[#2d3748] p-3 shadow-lg rotate-6 hidden lg:block">
                <div className="text-xs text-[#475569] mb-1">AI Model</div>
                <div className="text-[10px] font-mono text-green-400 overflow-hidden">
                  <div className="w-full whitespace-pre overflow-hidden">
                    {`function s(deal) {
  return {
    roi: 0.92,
    risk: 0.15,
    fit: 0.88
  }
}`.substring(0, typingIndex)}
                    <span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Cards Section - Wider spread with larger cards */}
        <div className="mt-auto mb-4">
          <div className="flex justify-around items-center w-full px-4">
            {/* Financial Analysis Card - Positioned left with hover animation */}
            <div 
              className="w-[260px] bg-[#1a1e29] rounded-lg border border-[#2d3748] p-6 shadow-lg transform -rotate-2 transition-all duration-300 hover:shadow-blue-500/20 hover:border-blue-500/50 cursor-pointer"
              onMouseEnter={() => setHoveredCard('financial')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-500/10 flex items-center justify-center text-blue-400 border border-blue-500/30 transition-all duration-300 ${hoveredCard === 'financial' ? 'animate-pulse' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 transition-transform duration-500 ${hoveredCard === 'financial' ? 'scale-110' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-lg">Financial Analysis</div>
                  <div className="text-xs text-[#475569]">AI-powered metrics</div>
                </div>
              </div>
              <div className="text-sm text-[#e2e8f0]/70 mb-3">
                Compare financial metrics across multiple deals with our advanced AI algorithms
              </div>
              <div className="flex justify-between items-center">
                <div className="text-xs text-[#475569]">Accuracy</div>
                <div className="text-xs font-medium">98.2%</div>
              </div>
              <div className="h-1 bg-[#2d3748] rounded-full mt-1 overflow-hidden">
                <div 
                  className={`h-full bg-blue-500 rounded-full transition-all duration-700 ${hoveredCard === 'financial' ? 'animate-pulse' : ''}`} 
                  style={{width: hoveredCard === 'financial' ? '100%' : '98.2%'}}
                ></div>
              </div>
            </div>
            
            {/* Data Points Circle - Positioned in center with simplified animation */}
            <div className="w-44 h-44 bg-[#1a1e29]/90 rounded-full border border-[#2d3748] flex flex-col items-center justify-center text-center shadow-lg mx-6 relative">
              <div className="text-4xl font-bold text-blue-400">120+</div>
              <div className="text-base font-medium">Data Points</div>
              <div className="text-xs text-[#e2e8f0]/70 mt-1 px-2">For each deal analysis</div>
              <div className="absolute inset-0 border border-blue-400/30 rounded-full animate-pulse"></div>
            </div>
            
            {/* Timeline Prediction Card - Positioned right with fixed layout and progress animation */}
            <div 
              className="w-[260px] bg-[#1a1e29] rounded-lg border border-[#2d3748] p-6 shadow-lg transform rotate-2 transition-all duration-300 hover:shadow-purple-500/20 hover:border-purple-500/50 cursor-pointer"
              onMouseEnter={() => setHoveredCard('timeline')}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-500/10 flex items-center justify-center text-purple-400 border border-purple-500/30 transition-all duration-300 ${hoveredCard === 'timeline' ? 'animate-pulse' : ''}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 transition-transform duration-500 ${hoveredCard === 'timeline' ? 'scale-110' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-lg">Timeline Prediction</div>
                  <div className="text-xs text-[#475569]">ML-based forecasting</div>
                </div>
              </div>
              
              <div className="text-sm text-[#e2e8f0]/70 mb-6">
                Estimate deal completion timelines with our machine learning algorithms
              </div>
              
              <div className="flex space-x-2 mt-4">
                <div className="flex-1 h-1.5 bg-[#2d3748] rounded-full overflow-hidden">
                  <div className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${hoveredCard === 'timeline' ? 'animate-pulse' : ''}`} style={{width: hoveredCard === 'timeline' ? '100%' : '75%'}}></div>
                </div>
                <div className="flex-1 h-1.5 bg-[#2d3748] rounded-full overflow-hidden">
                  <div className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${hoveredCard === 'timeline' ? 'animate-pulse' : ''}`} style={{width: hoveredCard === 'timeline' ? '80%' : '50%'}}></div>
                </div>
                <div className="flex-1 h-1.5 bg-[#2d3748] rounded-full overflow-hidden">
                  <div className={`h-full bg-purple-500 rounded-full transition-all duration-700 ${hoveredCard === 'timeline' ? 'animate-pulse' : ''}`} style={{width: hoveredCard === 'timeline' ? '60%' : '25%'}}></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Smart Recommendations Card - Positioned at bottom center with targeting animation */}
          <div 
            className="w-[280px] bg-[#1a1e29] rounded-lg border border-[#2d3748] p-6 shadow-lg mx-auto mt-6 transition-all duration-300 hover:shadow-green-500/20 hover:border-green-500/50 cursor-pointer"
            onMouseEnter={() => setHoveredCard('recommendations')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-green-500/20 to-green-500/10 flex items-center justify-center text-green-400 border border-green-500/30 transition-all duration-300 ${hoveredCard === 'recommendations' ? 'animate-pulse' : ''}`}>
                <svg xmlns="http://www.w3.org/2000/svg" className={`h-7 w-7 transition-transform duration-500 ${hoveredCard === 'recommendations' ? 'scale-110' : ''}`} viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className="font-medium text-lg">Smart Recommendations</div>
                <div className="text-xs text-[#475569]">Personalized insights</div>
              </div>
            </div>
            <div className="text-sm text-[#e2e8f0]/70">
              Get personalized deal recommendations based on your preferences and history
            </div>
            {hoveredCard === 'recommendations' && (
              <div className="mt-3 flex justify-center">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mx-1"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mx-1" style={{animationDelay: '0.2s'}}></div>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-ping mx-1" style={{animationDelay: '0.4s'}}></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 