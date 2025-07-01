"use client";

import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  const handleBillingToggle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  const pricingTiers = [
    {
      name: "Starter",
      bestFor: "Solo GPs & angel syndicates (1-3 seats)",
      platformFee: billingCycle === 'monthly' ? "$250" : "$2,550",
      seatPrice: billingCycle === 'monthly' ? "$129" : "$1,315",
      includedUsage: [
        "3 k pages / mo",
        "2 GB vector storage",
        "3 data connectors"
      ],
      compliance: "Shared SOC-2 controls",
      popular: false,
      gradient: "from-blue-900/30 to-blue-800/20",
      accentColor: "border-blue-700/40",
      iconColor: "text-blue-500"
    },
    {
      name: "Pro",
      bestFor: "Seed & Series-A VCs (3-10 seats)",
      platformFee: billingCycle === 'monthly' ? "$500" : "$5,100",
      seatPrice: billingCycle === 'monthly' ? "$199" : "$2,030",
      includedUsage: [
        "10 k pages / mo",
        "5 GB storage",
        "Unlimited connectors"
      ],
      compliance: "Gmail restricted-scope audit coverage",
      popular: true,
      gradient: "from-teal-900/40 to-blue-900/30",
      accentColor: "border-teal-500/50",
      iconColor: "text-teal-400"
    },
    {
      name: "Growth",
      bestFor: "Family offices & growth funds (5-20 seats)",
      platformFee: billingCycle === 'monthly' ? "$1,250" : "$12,750",
      seatPrice: billingCycle === 'monthly' ? "$249" : "$2,540",
      includedUsage: [
        "25 k pages / mo",
        "15 GB storage",
        "Unlimited connectors"
      ],
      compliance: "SOC-2 Type I letter\nPrivate vector namespace",
      popular: false,
      gradient: "from-cyan-900/30 to-teal-900/30",
      accentColor: "border-cyan-600/40",
      iconColor: "text-cyan-400"
    },
    {
      name: "Enterprise",
      bestFor: "PE firms, multi-fund platforms, boutique banks",
      platformFee: "from $3,000",
      seatPrice: "$299",
      seatPriceDetails: "(volume breaks ≤ 50 seats)",
      includedUsage: [
        "Fair-use pages",
        "50 GB storage",
        "more on request"
      ],
      compliance: "SOC-2 Type II • SAML/SCIM • dedicated VPC / on-prem option",
      popular: false,
      gradient: "from-indigo-900/30 to-blue-900/30",
      accentColor: "border-indigo-600/40",
      iconColor: "text-indigo-400"
    }
  ];

  const additionalInfo = [
    { title: "Extra pages", value: "$0.005 / page" },
    { title: "Extra storage", value: "$8 / GB / yr" },
    { title: "Annual pre-pay", value: "−15%" },
    { title: "Design-partner equity discounts", value: "available" }
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
          Choose the plan that works for you
        </p>

        {/* Billing toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-gray-800/80 backdrop-blur-sm p-1 rounded-lg inline-flex shadow-lg shadow-blue-900/20">
            <button 
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'monthly' 
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              MONTHLY
            </button>
            <button 
              onClick={() => setBillingCycle('yearly')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                billingCycle === 'yearly' 
                  ? 'bg-gradient-to-r from-blue-600 to-teal-500 text-white shadow-md' 
                  : 'text-gray-400 hover:text-gray-300'
              }`}
            >
              YEARLY (SAVE 15%)
            </button>
          </div>
        </div>
        
        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                <p className="text-gray-400 text-sm mb-4">{tier.bestFor}</p>
                
                <div className="mb-4 bg-gray-900/40 backdrop-blur-sm rounded-lg p-4 border border-gray-800/50">
                  <div className="mb-3">
                    <div className="text-sm text-gray-400 mb-1">Platform Fee</div>
                    <div className="text-xl font-bold text-white">{tier.platformFee}</div>
                    <div className="text-xs text-gray-500">per fund, billed {billingCycle}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-400 mb-1">Seat Price</div>
                    <div className="text-xl font-bold text-white">{tier.seatPrice}</div>
                    <div className="text-xs text-gray-500">per user / mo</div>
                    {tier.seatPriceDetails && (
                      <div className="text-xs text-gray-500 mt-1">{tier.seatPriceDetails}</div>
                    )}
                  </div>
                </div>
                
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Included Usage</h5>
                  <ul className="space-y-1">
                    {tier.includedUsage.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <svg className={`w-4 h-4 ${tier.iconColor} mr-2 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h5 className="text-sm font-medium text-gray-300 mb-2">Compliance / Extras</h5>
                  <p className="text-gray-300 text-sm whitespace-pre-line">{tier.compliance}</p>
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

        {/* Additional info */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Need more?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {additionalInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-gray-900 to-gray-800/80 backdrop-blur-sm border border-gray-800 rounded-xl p-5 hover:border-teal-500/50 transition-colors shadow-md"
              >
                <div className={`text-teal-400 mb-2 text-sm`}>• {info.title}</div>
                <div className="text-white font-medium">{info.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Footnote */}
        <div className="mt-10 text-center text-gray-400 text-sm">
          <p>
            <span className="text-xs italic">A "page" ≈ 1 PDF slide, one email, or 1 000 chars of text parsed by Valorum's AI.</span>
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