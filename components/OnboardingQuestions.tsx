"use client";

import React from 'react';

const OnboardingQuestions = () => {
  const questions = [
    "What sectors do you typically invest in?",
    "What's your typical cheque size range?", 
    "What ownership percentage do you target?",
    "What stages do you focus on (Pre-seed, Seed, Series A)?",
    "What geographies do you invest in?",
    "What's your fund size and dry powder?",
    "How many deals do you typically do per year?",
    "What are your key portfolio construction rules?",
    "Who are your key decision makers and investment committee?",
    "What exclusion criteria do you have (if any)?"
  ];

  return (
    <section id="onboarding-questions" className="relative w-full py-20 bg-gradient-to-b from-[#111827] to-[#0a0d15]">
      {/* Background effects */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-cyan-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-sky-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-sky-400">
            The Only Questions We Need to Ask
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Answer these once — everything else is automatic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {questions.map((question, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-cyan-500/50 transition-colors">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-600 to-sky-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {index + 1}
                </div>
                <p className="text-gray-300 leading-relaxed">{question}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-cyan-400 text-2xl">⏱️</span>
              <span className="text-white font-medium text-lg">5 minutes setup</span>
              <span className="text-cyan-400 text-2xl">✨</span>
            </div>
            <p className="text-gray-400">
              After these 10 questions, Valorum learns your preferences and automatically scores all future deals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnboardingQuestions; 