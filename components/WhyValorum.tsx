"use client";

import React from 'react';

const WhyValorum = () => {
  const painPoints = [
    {
      icon: "📧",
      text: "Scattered deal sources across email, Drive, LinkedIn"
    },
    {
      icon: "🤔",
      text: "Gut-feel filtering with no systematic scoring"
    },
    {
      icon: "📊",
      text: "Spreadsheet fund tracking that's always outdated"
    },
    {
      icon: "⏰",
      text: "Slow KPI updates requiring manual founder chasing"
    },
    {
      icon: "😴",
      text: "LP reporting weekends lost to manual data gathering"
    }
  ];

  const benefits = [
    {
      icon: "🎯",
      text: "Centralized thesis-aware deal list in one screen"
    },
    {
      icon: "⚡",
      text: "Live sliders for instant deal reranking"
    },
    {
      icon: "📈",
      text: "Real-time fund overview with automated updates"
    },
    {
      icon: "🤖",
      text: "Monthly KPI automation with founder-friendly forms"
    },
    {
      icon: "📄",
      text: "30-second LP letter generation from live data"
    }
  ];

  return (
    <section id="why-valorum" className="relative w-full py-20 bg-gradient-to-b from-[#111827] to-[#0a0d15]">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">
            Why Valorum Exists
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Small seed funds shouldn't waste time on messy deal pipelines. Valorum folds everything into one intelligent screen.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Before Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-red-900/30 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-red-400 mb-2">Before Valorum</h3>
              <p className="text-gray-400">The painful reality for most seed funds</p>
            </div>
            
            <div className="space-y-6">
              {painPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {point.icon}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{point.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* With Valorum Column */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-teal-700/40 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-teal-400 mb-2">With Valorum</h3>
              <p className="text-gray-400">Everything automated and intelligent</p>
            </div>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="text-2xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <p className="text-gray-300 leading-relaxed">{benefit.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Arrow indicator for mobile */}
        <div className="flex justify-center mt-8 lg:hidden">
          <div className="text-teal-400 text-3xl animate-bounce">↓</div>
        </div>

        {/* Arrow indicator for desktop */}
        <div className="hidden lg:flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="bg-gradient-to-r from-red-500 to-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-2">
            <span>Transform your workflow</span>
            <span className="text-xl">→</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyValorum; 