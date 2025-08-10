"use client";

import React from 'react';

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Starter",
      customerSize: "Solo GP or 2‑person micro‑fund",
      platformFee: "US $250",
      seatPrice: "US $99",
      dealsScored: "50",
      gradient: "from-blue-900/30 to-blue-800/20",
      accentColor: "border-blue-700/40",
      iconColor: "text-blue-500"
    },
    {
      name: "Pro",
      customerSize: "Seed fund, 4‑10 people",
      platformFee: "US $400",
      seatPrice: "US $195",
      dealsScored: "200",
      popular: true,
      gradient: "from-teal-900/40 to-blue-900/30",
      accentColor: "border-teal-500/50",
      iconColor: "text-teal-400"
    },
    {
      name: "Growth",
      customerSize: "Family office / early‑stage VC, 11‑25 seats",
      platformFee: "US $900",
      seatPrice: "US $255",
      dealsScored: "500",
      gradient: "from-cyan-900/30 to-teal-900/30",
      accentColor: "border-cyan-600/40",
      iconColor: "text-cyan-400"
    },
    {
      name: "Enterprise",
      customerSize: "Large VC / boutique PE, 25 + seats",
      platformFee: "starts US $2,000",
      seatPrice: "US $ (tiered)",
      dealsScored: "1,500",
      gradient: "from-indigo-900/30 to-blue-900/30",
      accentColor: "border-indigo-600/40",
      iconColor: "text-indigo-400"
    }
  ];

  return (
    <section id="pricing" className="relative w-full py-20 bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Vibrant gradient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[120px] opacity-15" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600 rounded-full filter blur-[120px] opacity-15" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600 rounded-full filter blur-[150px] opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-5xl font-bold text-white mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-teal-400">Pricing</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Valorum Deal‑Rank — Pricing grid (deal‑volume based)
        </p>
        
        {/* Pricing Table */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 shadow-xl mb-16">
            <thead>
              <tr className="bg-gray-800/70 border-b border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Tier</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Typical customer size</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Platform fee / fund / mo<br/>(billed annually)</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Seats** (per user / mo)**</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Deals scored / month included*</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {pricingTiers.map((tier, index) => (
                <tr key={index} className={`${tier.popular ? 'bg-teal-900/20' : ''} hover:bg-gray-800/30 transition-colors`}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-white">{tier.name}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-300">{tier.customerSize}</td>
                  <td className="px-6 py-4 text-gray-300">{tier.platformFee}</td>
                  <td className="px-6 py-4 text-gray-300">{tier.seatPrice}</td>
                  <td className="px-6 py-4 text-gray-300">{tier.dealsScored}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pricing cards for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 lg:hidden">
          {pricingTiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-2xl bg-gray-900 border overflow-hidden transition-transform hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20 ${
                tier.popular ? 'border-teal-500 shadow-lg shadow-teal-500/10' : `${tier.accentColor}`
              }`}
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-center py-1.5">
                  <span className="text-xs font-medium text-white">MOST POPULAR</span>
                </div>
              )}
              <div className={`p-6 bg-gradient-to-b ${tier.gradient}`}>
                <h4 className="text-xl font-bold text-white mb-2">{tier.name}</h4>
                <p className="text-gray-400 text-sm mb-4">{tier.customerSize}</p>
                
                <div className="mb-4 bg-gray-900/40 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Platform Fee</div>
                    <div className="text-xl font-bold text-white">{tier.platformFee}</div>
                    <div className="text-xs text-gray-500">per fund / mo, billed annually</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Seat Price</div>
                    <div className="text-xl font-bold text-white">{tier.seatPrice}</div>
                    <div className="text-xs text-gray-500">per user / mo</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Deals Scored / Month</h5>
                  <div className="text-gray-300">{tier.dealsScored}</div>
                </div>
                
                <div className="mt-6">
                  <button className={`w-full py-2.5 px-4 rounded-lg font-medium transition-colors bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white shadow-md shadow-blue-900/30`}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            <span className="text-xs italic">* Additional deals can be scored for an extra fee</span>
          </p>
          <p className="mt-2">
            <span className="text-xs italic">** Minimum seat requirements apply based on tier</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-3 rounded-lg font-medium shadow-lg shadow-blue-900/30">
            Contact Sales
          </button>
          <p className="mt-4 text-gray-400">
            Need a custom plan? Contact us for enterprise pricing.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 