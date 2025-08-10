"use client";

import React from 'react';

const WorkflowSteps = () => {
  const steps = [
    {
      number: 1,
      icon: "👤",
      title: "Create Profile",
      description: "Google SSO, roles setup in seconds"
    },
    {
      number: 2,
      icon: "📋",
      title: "Light KYC",
      description: "Fund name, size, dry powder, deals done"
    },
    {
      number: 3,
      icon: "🔗",
      title: "Connect Sources",
      description: "Gmail/Outlook, Drive folder, LinkedIn, Pitch Form"
    },
    {
      number: 4,
      icon: "📄",
      title: "Upload Thesis",
      description: "PDF upload with instant parsing"
    },
    {
      number: 5,
      icon: "❓",
      title: "Confirm Questions",
      description: "10 quick questions about sectors, cheque size, ownership"
    },
    {
      number: 6,
      icon: "⚖️",
      title: "Set Deal Weights",
      description: "5 sliders + presets, admin lock options"
    },
    {
      number: 7,
      icon: "👥",
      title: "Seats & Workflows",
      description: "Auto-assign roles, set Slack digest time"
    },
    {
      number: 8,
      icon: "🎯",
      title: "See Sample List",
      description: "Top 5 deals with scoring reasons"
    }
  ];

  return (
    <section id="workflow-steps" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Background effects */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px] opacity-15" />
      <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-600 rounded-full filter blur-[120px] opacity-15" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
            How Valorum Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From sign-up to your first ranked list in under 10 minutes.
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-30"></div>
            
            <div className="grid grid-cols-4 gap-8 mb-12">
              {steps.slice(0, 4).map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-900/30">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-indigo-500/50 transition-colors">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-4 gap-8">
              {steps.slice(4, 8).map((step, index) => (
                <div key={step.number} className="relative">
                  {/* Step indicator */}
                  <div className="flex justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-purple-900/30">
                      {step.number}
                    </div>
                  </div>
                  
                  {/* Step content */}
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-purple-500/50 transition-colors">
                    <div className="text-center mb-4">
                      <div className="text-3xl mb-2">{step.icon}</div>
                      <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-900/30">
                  {step.number}
                </div>
              </div>
              
              <div className="flex-grow bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-4">
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl">{step.icon}</span>
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-indigo-900/30 transition-all hover:scale-105">
            Start Now
          </button>
          <p className="mt-4 text-gray-400 text-sm">
            No spam — only invites & important updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSteps; 