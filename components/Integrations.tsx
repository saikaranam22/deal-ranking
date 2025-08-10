"use client";

import React from 'react';

const Integrations = () => {
  const integrations = [
    { name: "Gmail", icon: "📧", color: "text-red-400" },
    { name: "Outlook", icon: "📨", color: "text-blue-400" },
    { name: "Google Drive", icon: "📁", color: "text-green-400" },
    { name: "LinkedIn", icon: "💼", color: "text-blue-500" },
    { name: "Typeform", icon: "📝", color: "text-purple-400" },
    { name: "Slack", icon: "💬", color: "text-pink-400" }
  ];

  return (
    <section id="integrations" className="relative w-full py-20 bg-gradient-to-b from-[#111827] to-[#0a0d15]">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
            Connect in Minutes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Connect at least one inbox + one file source and see your first ranked list in minutes.
          </p>
        </div>

        {/* Integration Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-4xl mx-auto mb-16">
          {integrations.map((integration, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 hover:border-emerald-500/50 transition-colors group">
              <div className="text-center">
                <div className={`text-4xl mb-3 group-hover:scale-110 transition-transform ${integration.color}`}>
                  {integration.icon}
                </div>
                <h3 className="text-white font-medium text-sm">{integration.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Flow */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Choose Sources</h3>
              <p className="text-gray-400">Select your email and file storage</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-teal-900/30">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">One-Click Connect</h3>
              <p className="text-gray-400">OAuth authentication, no passwords</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-900/30">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Instant Sync</h3>
              <p className="text-gray-400">Deals start flowing immediately</p>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="text-center mb-16">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <span className="text-emerald-400 text-xl">🔒</span>
              <span className="text-white font-medium">Enterprise-Grade Security</span>
            </div>
            <p className="text-gray-400 text-sm">
              SOC 2 compliant • Read-only access • Data encrypted at rest and in transit • Your data never leaves your control
            </p>
          </div>
        </div>

        {/* Minimum Requirements */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-emerald-900/30 to-teal-900/30 backdrop-blur-sm border border-emerald-700/40 rounded-xl p-8 max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Minimum Setup for First Ranked List</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-emerald-400 font-medium mb-2">✅ Required</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• 1 email account (Gmail or Outlook)</li>
                  <li>• 1 file source (Drive or similar)</li>
                </ul>
              </div>
              <div>
                <h4 className="text-teal-400 font-medium mb-2">⚡ Optional (but recommended)</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• LinkedIn for network insights</li>
                  <li>• Slack for team notifications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations; 