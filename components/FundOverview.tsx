"use client";

import React from 'react';

const FundOverview = () => {
  const tiles = [
    {
      title: "Deployed %",
      value: "68%",
      subtext: "of total fund",
      color: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/40"
    },
    {
      title: "Dry Powder",
      value: "$12.4M",
      subtext: "available to deploy",
      color: "text-green-400", 
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700/40"
    },
    {
      title: "Reserves",
      value: "$3.2M",
      subtext: "for follow-ons",
      color: "text-purple-400",
      bgColor: "bg-purple-900/20", 
      borderColor: "border-purple-700/40"
    }
  ];

  const scenarios = [
    {
      icon: "🌱",
      title: "ClimateTech overweight",
      description: "New deals in that sector ranked lower automatically",
      impact: "Auto-adjustment"
    },
    {
      icon: "💰", 
      title: "Reserves running low",
      description: "Capital-light deals rank higher in pipeline",
      impact: "Smart prioritization"
    },
    {
      icon: "📈",
      title: "IRR ahead of plan",
      description: "Risk tolerance slightly increased for new deals",
      impact: "Dynamic scoring"
    },
    {
      icon: "🛡️",
      title: "New exclusion rule",
      description: "Auto-score 0 and mark with red shield",
      impact: "Instant compliance"
    }
  ];

  return (
    <section id="fund-overview" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Background effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-orange-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-amber-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-400">
            Always Know Your Cash & Concentration
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Nightly rebalance keeps sector/geography mix within ±5% of targets
          </p>
        </div>

        {/* Key Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {tiles.map((tile, index) => (
            <div key={index} className={`${tile.bgColor} backdrop-blur-sm border ${tile.borderColor} rounded-2xl p-8 hover:scale-105 transition-transform`}>
              <div className="text-center">
                <h3 className="text-lg font-medium text-gray-300 mb-3">{tile.title}</h3>
                <div className={`text-4xl font-bold ${tile.color} mb-2`}>{tile.value}</div>
                <p className="text-gray-400 text-sm">{tile.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scenario Examples */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Smart Guardrails in Action</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scenarios.map((scenario, index) => (
              <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-orange-500/50 transition-colors">
                <div className="flex items-start space-x-4">
                  <div className="text-3xl flex-shrink-0">{scenario.icon}</div>
                  <div className="flex-grow">
                    <h4 className="text-lg font-semibold text-white mb-2">{scenario.title}</h4>
                    <p className="text-gray-300 mb-3">{scenario.description}</p>
                    <div className="inline-flex items-center space-x-2 bg-orange-900/30 px-3 py-1 rounded-full">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <span className="text-orange-400 text-sm font-medium">{scenario.impact}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Visual Indicator */}
        <div className="mt-16 text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white font-medium">Live Monitoring Active</span>
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            <p className="text-gray-400 text-sm">
              All metrics update automatically as deals progress through your pipeline
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-orange-900/30 transition-all hover:scale-105">
            Get Early Access
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            No spam — only invites & important updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundOverview; 