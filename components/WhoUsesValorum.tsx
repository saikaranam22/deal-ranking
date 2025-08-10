"use client";

import React from 'react';

const WhoUsesValorum = () => {
  const personas = [
    {
      title: "Partner / GP",
      need: "needs top 5 deals before coffee",
      icon: "☕",
      color: "from-amber-600 to-orange-600",
      textColor: "text-amber-400",
      bgColor: "bg-amber-900/20",
      borderColor: "border-amber-700/40"
    },
    {
      title: "Analyst / Associate", 
      need: "ditch manual data entry",
      icon: "📊",
      color: "from-blue-600 to-indigo-600",
      textColor: "text-blue-400",
      bgColor: "bg-blue-900/20",
      borderColor: "border-blue-700/40"
    },
    {
      title: "Fund Ops",
      need: "clean reserves & fast LP answers",
      icon: "⚙️",
      color: "from-green-600 to-emerald-600", 
      textColor: "text-green-400",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-700/40"
    },
    {
      title: "LP",
      need: "exposure & updates without back-and-forth",
      icon: "💼",
      color: "from-purple-600 to-violet-600",
      textColor: "text-purple-400", 
      bgColor: "bg-purple-900/20",
      borderColor: "border-purple-700/40"
    }
  ];

  return (
    <section id="who-uses-valorum" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-slate-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-300 to-gray-300">
            Who It's For
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Every role in your fund benefits from Valorum's automation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {personas.map((persona, index) => (
            <div key={index} className={`${persona.bgColor} backdrop-blur-sm border ${persona.borderColor} rounded-2xl p-8 hover:scale-105 transition-transform`}>
              <div className="text-center">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-r ${persona.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <span className="text-white text-3xl">{persona.icon}</span>
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold ${persona.textColor} mb-4`}>
                  {persona.title}
                </h3>
                
                {/* Need */}
                <p className="text-gray-300 leading-relaxed">
                  {persona.need}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom message */}
        <div className="text-center mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              Whether you're sourcing deals, analyzing opportunities, managing operations, or reporting to LPs — Valorum streamlines your workflow.
            </p>
            <div className="flex items-center justify-center space-x-2">
              <span className="text-slate-400">🚀</span>
              <span className="text-white font-medium">One platform, every role covered</span>
              <span className="text-slate-400">🚀</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoUsesValorum; 