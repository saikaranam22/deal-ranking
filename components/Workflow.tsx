"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const Workflow = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);
  const [showAnimation, setShowAnimation] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Auto-cycle through steps every 4 seconds
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const steps = [
    {
      title: "Filter & Select",
      description: "Identify the most promising deals that align with your investment thesis",
      icon: "/icons/filter.svg",
      color: "#2dd4bf" // Teal color
    },
    {
      title: "One-Click Connect",
      description: "Instantly schedule meetings with founders through automated emails",
      icon: "/icons/email.svg",
      color: "#3b82f6" // Blue color
    },
    {
      title: "Founder Confirmation",
      description: "Founders accept and select their preferred meeting time",
      icon: "/icons/event.svg",
      color: "#0ea5e9" // Sky blue color
    },
    {
      title: "Seamless Integration",
      description: "Meeting automatically added to your calendar with video conferencing link",
      icon: "/icons/calendar.svg",
      color: "#10b981" // Green color
    }
  ];

  // Animation components for each step
  const stepAnimations = [
    // Filter & Select Animation
    <div key="filter-animation" className="relative h-64 w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-3 gap-3 w-full max-w-md px-4">
          {[...Array(9)].map((_, i) => (
            <div 
              key={i} 
              className={`
                h-16 rounded bg-gray-700 border border-gray-600 flex items-center justify-center p-2
                ${i < 3 ? 'animate-pulse bg-opacity-100 border-teal-500 shadow-md shadow-teal-500/20' : 'bg-opacity-50'}
              `}
            >
              <div className="text-xs text-center">
                <div className={`font-medium ${i < 3 ? 'text-teal-400' : 'text-gray-400'}`}>Deal {i+1}</div>
                <div className={`text-[10px] ${i < 3 ? 'text-teal-300' : 'text-gray-500'}`}>{i < 3 ? '85%' : `${50 - i * 5}%`}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex justify-center">
        <div className="bg-teal-500 bg-opacity-20 text-teal-300 text-xs py-1 px-3 rounded-full">
          Top 3 deals selected
        </div>
      </div>
    </div>,

    // One-Click Connect Animation
    <div key="connect-animation" className="relative h-64 w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700">
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md bg-gray-900 rounded-lg border border-gray-700 p-3 mb-6">
          <div className="flex items-center mb-2">
            <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
            <div className="text-xs text-gray-400">New Message</div>
          </div>
          <div className="flex items-center mb-2">
            <span className="text-blue-400 text-xs mr-2">To:</span>
            <span className="text-gray-300 text-xs">founders@startups.com</span>
          </div>
          <div className="mb-3 pb-2 border-b border-gray-700">
            <span className="text-blue-400 text-xs mr-2">Subject:</span>
            <span className="text-gray-300 text-xs">Meeting Request: Investment Opportunity</span>
          </div>
          <div className="text-xs text-gray-300 mb-3">
            I'd like to discuss potential investment...
          </div>
          <div className="flex justify-end">
            <button className="bg-blue-600 text-white text-xs py-1 px-3 rounded">
              Send
            </button>
          </div>
        </div>
        
        <div className="w-full flex justify-center">
          <div className="relative">
            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </div>
            <div className="absolute top-0 left-0 w-8 h-8 rounded-full bg-blue-600 animate-ping opacity-75"></div>
          </div>
        </div>
      </div>
    </div>,

    // Founder Confirmation Animation
    <div key="confirmation-animation" className="relative h-64 w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700">
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-4">
            <div className="text-sm text-gray-300 mb-1">Founder received your request</div>
            <div className="text-xs text-gray-400">Select a time that works for you</div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 mb-4">
            {['Mon 10:00 AM', 'Tue 2:00 PM', 'Wed 11:30 AM', 'Thu 4:00 PM'].map((time, i) => (
              <div 
                key={i} 
                className={`
                  text-center p-2 rounded text-xs border
                  ${i === 1 ? 'bg-teal-600 bg-opacity-30 border-teal-500 text-teal-300' : 
                    'bg-gray-700 border-gray-600 text-gray-300'}
                `}
              >
                {time}
                {i === 1 && (
                  <div className="mt-1 flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-teal-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="flex justify-center">
            <div className="bg-teal-500 text-xs text-white py-1 px-4 rounded animate-pulse">
              Founder selected Tuesday at 2:00 PM
            </div>
          </div>
        </div>
      </div>
    </div>,

    // Calendar Integration Animation
    <div key="calendar-animation" className="relative h-64 w-full bg-gray-800 bg-opacity-50 rounded-lg overflow-hidden border border-gray-700">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="bg-gray-900 rounded-lg border border-gray-700 p-3 mb-4">
            <div className="flex justify-between items-center mb-3">
              <div className="text-xs font-medium text-gray-300">October 2023</div>
              <div className="flex space-x-1">
                <button className="w-5 h-5 flex items-center justify-center rounded bg-gray-800 text-gray-400 text-xs">
                  &lt;
                </button>
                <button className="w-5 h-5 flex items-center justify-center rounded bg-gray-800 text-gray-400 text-xs">
                  &gt;
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center text-[10px] mb-1">
              {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map((day, i) => (
                <div key={i} className="text-gray-500">{day}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-1 text-center">
              {[...Array(31)].map((_, i) => {
                const day = i + 1;
                const isMeeting = day === 15;
                
                return (
                  <div 
                    key={i} 
                    className={`
                      h-6 flex items-center justify-center rounded text-[10px]
                      ${isMeeting ? 'bg-blue-600 text-white animate-pulse' : 'text-gray-400 hover:bg-gray-800'}
                    `}
                  >
                    {day}
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-blue-600 bg-opacity-20 border border-blue-500 rounded p-2 text-xs animate-pulse">
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-blue-400 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="text-white font-medium">Meeting with Startup X</span>
            </div>
            <div className="ml-4 mt-1 text-blue-300 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm3 1h6v4H7V5zm8 8v2h1v-2h-1zm-2-6H7v2h6V7zm0 4H7v2h6v-2zm0 4H7v2h6v-2zm2-8h1v2h-1V7zm0 4h1v2h-1v-2z" clipRule="evenodd" />
              </svg>
              Oct 15, 2:00 PM • Google Meet
            </div>
          </div>
        </div>
      </div>
    </div>
  ];

  const handleStepClick = (index: number) => {
    setActiveStep(index);
    setShowAnimation(true);
    // Reset any auto-cycling
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 4000);
  };

  return (
    <section id="workflow" className="relative w-full py-20 overflow-hidden bg-gradient-to-b from-[#0a0d15] to-[#111827]">
      {/* Glowing accent */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-600 rounded-full filter blur-[100px] opacity-10" />
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-600 rounded-full filter blur-[100px] opacity-10" />
      
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-3 text-center">Streamlined Workflow</h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-16">
          Automate your outreach and meeting scheduling with founders, all in one seamless workflow
        </p>

        {/* Interactive workflow visualization */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connection lines */}
          <svg className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2" viewBox="0 0 1000 10" preserveAspectRatio="none">
            <line 
              x1="0" 
              y1="5" 
              x2="1000" 
              y2="5" 
              stroke="rgba(45, 212, 191, 0.3)" 
              strokeWidth="2"
            />
            <line 
              x1="0" 
              y1="5" 
              x2={`${(activeStep + 1) * 250 - 50}`} 
              y2="5" 
              stroke="rgba(45, 212, 191, 1)" 
              strokeWidth="2"
              strokeDasharray="5,5"
              className="transition-all duration-1000 ease-in-out"
            />
          </svg>
          
          {/* Step circles */}
          <div className="flex justify-between">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative z-10"
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
                onClick={() => handleStepClick(index)}
              >
                <div className={`
                  w-16 h-16 rounded-full flex items-center justify-center transition-all duration-500 cursor-pointer
                  ${activeStep === index ? `bg-gradient-to-r from-blue-500 to-teal-500 scale-110 shadow-lg shadow-teal-500/30` : 
                    isHovering === index ? 'bg-gray-800 scale-105' : 'bg-gray-800'}
                `}>
                  <div className={`
                    w-14 h-14 rounded-full flex items-center justify-center
                    ${activeStep === index ? 'bg-gray-900' : 'bg-gray-900'}
                  `}>
                    <div className="w-8 h-8 relative">
                      <Image 
                        src={step.icon} 
                        alt={step.title} 
                        width={32}
                        height={32}
                        className={`transition-all duration-500 ${activeStep === index ? 'filter-none' : 'filter grayscale opacity-50'}`}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Step indicator */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2">
                  <div className={`
                    w-2 h-2 rounded-full transition-all duration-300
                    ${activeStep === index ? 'bg-teal-500' : 'bg-gray-700'}
                  `}></div>
                </div>
                
                {/* Step info */}
                <div className={`
                  absolute top-full mt-8 left-1/2 -translate-x-1/2 w-64 text-center transition-all duration-500
                  ${activeStep === index ? 'opacity-100' : 'opacity-40'}
                `}>
                  <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Step-specific animation display - moved down with increased margin */}
        <div className="mt-36 max-w-2xl mx-auto transition-all duration-500">
          <div className={`transform transition-all duration-700 ${showAnimation ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {stepAnimations[activeStep]}
          </div>
        </div>

        {/* Interactive demo display */}
        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl transform transition-all duration-500 hover:shadow-teal-500/10 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">Automated Communication</h3>
            <p className="text-gray-300 mb-6">
              Send personalized outreach emails to founders with just one click. No more copying and pasting templates or manual follow-ups.
            </p>
            
            <div className="relative overflow-hidden rounded-lg h-64 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex">
                    <span className="text-teal-400 mr-2">To:</span>
                    <span className="text-gray-300">founder@startup.com</span>
                  </div>
                  <div className="flex">
                    <span className="text-teal-400 mr-2">Subject:</span>
                    <span className="text-gray-300">Meeting Request: VC Opportunity</span>
                  </div>
                  <div className="border-t border-gray-700 my-3"></div>
                  <p className="text-gray-300 text-sm">
                    Hi [Founder Name],<br/><br/>
                    I'm impressed with what you're building at [Company].<br/>
                    I'd like to schedule a meeting to discuss potential investment opportunities.<br/><br/>
                    <span className="text-blue-400">Please select a time that works for you:</span>
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-2 rounded">
                      Tue, 10:00 AM
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-2 rounded">
                      Wed, 2:00 PM
                    </button>
                    <button className="bg-gray-700 hover:bg-gray-600 text-white text-xs py-1 px-2 rounded">
                      Thu, 11:30 AM
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-800 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-xl transform transition-all duration-500 hover:shadow-teal-500/10 hover:-translate-y-1">
            <h3 className="text-2xl font-bold text-white mb-4">Calendar Integration</h3>
            <p className="text-gray-300 mb-6">
              Meetings are automatically added to your calendar with video conferencing links, ensuring you never miss an important connection.
            </p>
            
            <div className="relative overflow-hidden rounded-lg h-64 border border-gray-700">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 p-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="text-white font-medium">October 2023</div>
                  <div className="flex space-x-2">
                    <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 text-white">
                      &lt;
                    </button>
                    <button className="w-6 h-6 flex items-center justify-center rounded bg-gray-700 text-white">
                      &gt;
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2">
                  <div className="text-gray-400">Su</div>
                  <div className="text-gray-400">Mo</div>
                  <div className="text-gray-400">Tu</div>
                  <div className="text-gray-400">We</div>
                  <div className="text-gray-400">Th</div>
                  <div className="text-gray-400">Fr</div>
                  <div className="text-gray-400">Sa</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {[...Array(31)].map((_, i) => {
                    const day = i + 1;
                    const isEvent = day === 15 || day === 22;
                    
                    return (
                      <div 
                        key={i} 
                        className={`
                          h-8 flex items-center justify-center rounded text-xs
                          ${isEvent ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700'}
                        `}
                      >
                        {day}
                      </div>
                    );
                  })}
                </div>
                
                <div className="mt-4 bg-teal-600 bg-opacity-20 border border-teal-500 rounded p-2 text-xs">
                  <div className="flex items-center">
                    <div className="w-2 h-2 rounded-full bg-teal-500 mr-2"></div>
                    <span className="text-white font-medium">Meeting with Startup X</span>
                  </div>
                  <div className="ml-4 mt-1 text-teal-300">
                    15 Oct, 10:00 AM • Google Meet
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow; 