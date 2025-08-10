"use client";

import React from 'react';

const LPLetter = () => {
  return (
    <section id="lp-letter" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Background effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full filter blur-[120px] opacity-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-indigo-600 rounded-full filter blur-[120px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-indigo-400">
            LP Update in 30 Seconds
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            IRR, company blurbs, cap tables, ESG/DEI counts — pulled from your live data into a PDF in under 30 seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* LP Letter Mockup */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-8">
            <div className="bg-white rounded-lg p-6 shadow-2xl">
              {/* Header */}
              <div className="border-b border-gray-200 pb-4 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Seedstage Ventures</h3>
                <p className="text-gray-600">Q4 2024 Portfolio Update</p>
              </div>
              
              {/* Fund Overview */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Fund Performance</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="text-sm text-gray-600">Total IRR</div>
                    <div className="text-xl font-bold text-green-600">24.3%</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded">
                    <div className="text-sm text-gray-600">Deployed Capital</div>
                    <div className="text-xl font-bold text-gray-900">$18.2M</div>
                  </div>
                </div>
              </div>
              
              {/* Portfolio Highlights */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Portfolio Highlights</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div>• CloudSecure AI: Series A led by Andreessen ($15M)</div>
                  <div>• GreenTech Solutions: 300% revenue growth QoQ</div>
                  <div>• HealthBot Pro: FDA approval milestone achieved</div>
                </div>
              </div>
              
              {/* ESG/DEI Metrics */}
              <div className="bg-blue-50 p-4 rounded">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">ESG/DEI Metrics</h4>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <div>Female Founders: 40%</div>
                  <div>Underrepresented: 25%</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Generation Process */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-violet-900/30">
                <span className="text-white text-4xl">📄</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Instant Generation</h3>
              <p className="text-gray-300 mb-6">
                All data automatically pulled from your live portfolio tracking, formatted professionally, and exported as PDF.
              </p>
            </div>
            
            {/* Data Sources */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="text-violet-400 text-xl mb-2">💼</div>
                <h4 className="text-white font-medium mb-1">Live Portfolio Data</h4>
                <p className="text-gray-400 text-sm">Real-time valuations & metrics</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="text-indigo-400 text-xl mb-2">📊</div>
                <h4 className="text-white font-medium mb-1">Fund Performance</h4>
                <p className="text-gray-400 text-sm">IRR, MOIC, deployment rates</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="text-purple-400 text-xl mb-2">🏢</div>
                <h4 className="text-white font-medium mb-1">Company Updates</h4>
                <p className="text-gray-400 text-sm">KPIs, milestones, news</p>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
                <div className="text-blue-400 text-xl mb-2">🌍</div>
                <h4 className="text-white font-medium mb-1">ESG Tracking</h4>
                <p className="text-gray-400 text-sm">Diversity & impact metrics</p>
              </div>
            </div>
            
            {/* Generate Button */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-violet-900/30 transition-all hover:scale-105 flex items-center space-x-3 mx-auto">
                <span>⚡</span>
                <span>Generate LP Letter</span>
                <span className="bg-white/20 px-2 py-1 rounded text-sm">30s</span>
              </button>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-medium text-lg shadow-lg shadow-violet-900/30 transition-all hover:scale-105">
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

export default LPLetter; 