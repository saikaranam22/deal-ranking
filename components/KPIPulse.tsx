"use client";

import React from 'react';

const KPIPulse = () => {
  const steps = [
    {
      number: 1,
      title: "Set Template",
      description: "ARR, churn, runway, headcount",
      icon: "📋"
    },
    {
      number: 2, 
      title: "Auto-Email",
      description: "Secure link monthly to founders",
      icon: "📧"
    },
    {
      number: 3,
      title: "Live Stream",
      description: "Data streams into dashboard in real time",
      icon: "📊"
    }
  ];

  const healthSignals = [
    {
      title: "Valuation Gap",
      description: "vs market comps",
      icon: "💰",
      status: "normal"
    },
    {
      title: "Funding Barometer", 
      description: "peer raises",
      icon: "🌡️",
      status: "normal"
    },
    {
      title: "Talent Momentum",
      description: "headcount growth",
      icon: "👥", 
      status: "positive"
    },
    {
      title: "User Traffic",
      description: "trends",
      icon: "📈",
      status: "positive"
    },
    {
      title: "News Sentiment",
      description: "brand monitoring",
      icon: "📰",
      status: "normal"
    },
    {
      title: "Competitive Chatter",
      description: "market intelligence",
      icon: "🔍",
      status: "alert"
    },
    {
      title: "Regulatory Watch",
      description: "compliance tracking",
      icon: "⚖️",
      status: "normal"
    }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'positive': 
        return 'text-green-400 bg-green-900/20 border-green-700/40';
      case 'alert': 
        return 'text-red-400 bg-red-900/20 border-red-700/40';
      default: 
        return 'text-blue-400 bg-blue-900/20 border-blue-700/40';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'positive': 
        return '↗️';
      case 'alert': 
        return '⚠️';
      default: 
        return '→';
    }
  };

  return (
    <section id="kpi-pulse" className="relative w-full py-20 bg-gradient-to-b from-[#111827] to-[#0a0d15]">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-rose-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-rose-400 to-pink-400">
            Fresh KPIs Without Nagging
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Automated monthly collection with real-time health monitoring
          </p>
        </div>

        {/* 3-Step Process */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-gradient-to-r from-rose-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 shadow-lg shadow-rose-900/30">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Health Signals Grid */}
        <div className="max-w-6xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-white text-center mb-12">Live Health Signals</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {healthSignals.map((signal, index) => (
              <div key={index} className={`backdrop-blur-sm border rounded-xl p-4 hover:scale-105 transition-transform ${getStatusColor(signal.status)}`}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{signal.icon}</span>
                  <span className="text-xl">{getStatusIcon(signal.status)}</span>
                </div>
                <h4 className="font-semibold text-white text-sm mb-1">{signal.title}</h4>
                <p className="text-xs opacity-80">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Alert Example */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
              <span className="text-rose-400 mr-2">🔔</span>
              Alert Example
            </h3>
            
            <div className="bg-red-900/20 border border-red-700/40 rounded-lg p-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">!</span>
                </div>
                <div>
                  <p className="text-white font-medium">Slack Alert</p>
                  <p className="text-red-300 text-sm">"Runway &lt; 6 mo for Company D - Schedule check-in"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metric */}
        <div className="text-center">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-md mx-auto">
            <div className="text-3xl font-bold text-rose-400 mb-2">80%</div>
            <p className="text-white font-medium mb-1">Founder Completion Rate</p>
            <p className="text-gray-400 text-sm">Complete monthly KPI form within 48 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KPIPulse; 