"use client";

import React, { useState } from 'react';

const DealInbox = () => {
  const [teamWeight, setTeamWeight] = useState(75);

  const features = [
    {
      icon: "📇",
      title: "Standardized cards",
      description: "sector, stage, ask, fit score"
    },
    {
      icon: "🧠",
      title: "Thesis-aware",
      description: "scoring reflects the 10 factors defined in onboarding"
    },
    {
      icon: "📊",
      title: "Portfolio-aware", 
      description: "overweight sectors rank lower automatically"
    },
    {
      icon: "⚡",
      title: "Live sliders",
      description: "move 'Team' weight and watch order change instantly"
    }
  ];

  const deals = [
    {
      name: "CloudSecure AI",
      sector: "Enterprise SaaS",
      stage: "Seed",
      ask: "$2M",
      score: 85 + Math.floor((teamWeight - 75) * 0.2),
      teamScore: teamWeight > 75 ? 10 : teamWeight < 75 ? 6 : 8,
      ticketPenalty: -6
    },
    {
      name: "GreenTech Solutions",
      sector: "ClimaTech",
      stage: "Pre-Seed", 
      ask: "$800K",
      score: 78 + Math.floor((teamWeight - 75) * 0.15),
      teamScore: teamWeight > 75 ? 9 : teamWeight < 75 ? 5 : 7,
      ticketPenalty: 0
    },
    {
      name: "HealthBot Pro",
      sector: "HealthTech",
      stage: "Seed",
      ask: "$1.5M", 
      score: 82 + Math.floor((teamWeight - 75) * 0.18),
      teamScore: teamWeight > 75 ? 8 : teamWeight < 75 ? 4 : 6,
      ticketPenalty: -3
    }
  ];

  const sortedDeals = deals.sort((a, b) => b.score - a.score);

  return (
    <section id="deal-inbox" className="relative w-full py-20 bg-gradient-to-b from-[#111827] to-[#0a0d15]">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
            Your Thesis, Scored in Real Time
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-green-500/50 transition-colors">
              <div className="text-center">
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Deal List */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="text-green-400 mr-2">📋</span>
              Deal Pipeline
            </h3>
            
            <div className="space-y-4">
              {sortedDeals.map((deal, index) => (
                <div key={deal.name} className="bg-gray-800/50 rounded-lg p-4 border border-gray-700 hover:border-green-500/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-white font-medium">{deal.name}</h4>
                      <p className="text-gray-400 text-sm">{deal.sector} • {deal.stage}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{deal.score}</div>
                      <div className="text-xs text-gray-500">fit score</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300 text-sm">Ask: {deal.ask}</span>
                    <div className="flex items-center space-x-1">
                      <div className={`w-2 h-2 rounded-full ${deal.score >= 80 ? 'bg-green-400' : deal.score >= 70 ? 'bg-yellow-400' : 'bg-red-400'}`}></div>
                      <span className="text-xs text-gray-500">#{index + 1}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scoring Panel */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-white mb-6 flex items-center">
              <span className="text-emerald-400 mr-2">🔍</span>
              Why this score?
            </h3>
            
            {/* Selected Deal Breakdown */}
            <div className="mb-6">
              <h4 className="text-white font-medium mb-4">{sortedDeals[0].name} Breakdown</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Team Experience</span>
                  <span className="text-green-400 font-medium">+{sortedDeals[0].teamScore}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Market Size</span>
                  <span className="text-green-400 font-medium">+12</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Product Fit</span>
                  <span className="text-green-400 font-medium">+9</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Ticket Size Fit</span>
                  <span className="text-red-400 font-medium">{sortedDeals[0].ticketPenalty}</span>
                </div>
                <div className="border-t border-gray-700 pt-2 flex justify-between items-center">
                  <span className="text-white font-medium">Total Score</span>
                  <span className="text-green-400 font-bold text-lg">{sortedDeals[0].score}</span>
                </div>
              </div>
            </div>

            {/* Live Slider Control */}
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <h5 className="text-white font-medium mb-4">Live Weight Adjustment</h5>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-300">Team Weight</span>
                  <span className="text-emerald-400 font-medium">{teamWeight}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={teamWeight}
                  onChange={(e) => setTeamWeight(Number(e.target.value))}
                  className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                />
              </div>
              
              <div className="text-xs text-gray-400 text-center">
                <span className="inline-flex items-center">
                  ⚡ Watch scores update in real-time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #34d399);
          cursor: pointer;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: linear-gradient(45deg, #10b981, #34d399);
          cursor: pointer;
          border: none;
          box-shadow: 0 0 10px rgba(16, 185, 129, 0.5);
        }
      `}</style>
    </section>
  );
};

export default DealInbox; 