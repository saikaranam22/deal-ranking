"use client";

import React from 'react';

const ProofPromises = () => {
  const metrics = [
    {
      value: "< 10 min",
      description: "Top 5 ranked deals from signup",
      icon: "⚡",
      color: "from-yellow-600 to-amber-600",
      textColor: "text-yellow-400",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-700/40"
    },
    {
      value: "< 1 sec",
      description: "Scoring refresh when moving sliders", 
      icon: "🎯",
      color: "from-red-600 to-pink-600",
      textColor: "text-red-400",
      bgColor: "bg-red-900/20", 
      borderColor: "border-red-700/40"
    },
    {
      value: "≤ 30 sec",
      description: "LP letter generated",
      icon: "📄",
      color: "from-blue-600 to-cyan-600",
      textColor: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/40"
    },
    {
      value: "80%",
      description: "of founders complete monthly KPI form within 48 hours",
      icon: "📊",
      color: "from-green-600 to-emerald-600",
      textColor: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700/40"
    }
  ];

  return (
    <section id="proof-promises" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Background effects */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-yellow-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-400">
            What You Can Expect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real performance metrics from our product development and testing
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {metrics.map((metric, index) => (
            <div key={index} className={`${metric.bgColor} backdrop-blur-sm border ${metric.borderColor} rounded-2xl p-8 hover:scale-105 transition-transform`}>
              <div className="text-center">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${metric.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white text-2xl">{metric.icon}</span>
                </div>
                
                {/* Value */}
                <div className={`text-3xl font-bold ${metric.textColor} mb-3`}>
                  {metric.value}
                </div>
                
                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Performance Guarantee */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Performance Guarantee</h3>
              <p className="text-gray-300">
                If Valorum doesn't save you at least 5 hours per week in the first month, we'll refund your full subscription.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-yellow-400 text-3xl mb-2">🕐</div>
                <h4 className="text-white font-medium mb-1">Time Saved</h4>
                <p className="text-gray-400 text-sm">5+ hours/week guaranteed</p>
              </div>
              
              <div className="text-center">
                <div className="text-green-400 text-3xl mb-2">✅</div>
                <h4 className="text-white font-medium mb-1">Money Back</h4>
                <p className="text-gray-400 text-sm">Full refund if not satisfied</p>
              </div>
              
              <div className="text-center">
                <div className="text-blue-400 text-3xl mb-2">🎯</div>
                <h4 className="text-white font-medium mb-1">Better Decisions</h4>
                <p className="text-gray-400 text-sm">Data-driven deal ranking</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full border-2 border-gray-800"></div>
              </div>
              <span className="text-white font-medium">Trusted by 50+ funds</span>
            </div>
            <p className="text-gray-400 text-sm">
              Currently in private beta with seed and early-stage VCs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProofPromises; 