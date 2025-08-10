import React from 'react';
import { Shield } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 shadow-lg" style={{ backgroundColor: '#005ea2' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Shield className="h-10 w-10 text-white mr-4" />
              <div>
                <h1 className="text-white text-2xl font-bold">
                  VA Benefits Eligibility Checker
                </h1>
                <p className="text-blue-200 text-base">
                  Official Demo Application
                </p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-6">
              <span className="text-blue-200 text-sm">For demonstration purposes only</span>
            </div>
          </div>
        </div>
      </header>
      
      <main className="max-w-6xl mx-auto py-12 px-6 lg:px-8">
        {children}
      </main>
      
      <footer className="bg-white border-t border-gray-200 mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-center">
            <p className="text-gray-600 text-base mb-4">
              This is a demonstration application for educational and testing purposes only.
            </p>
            <p className="text-sm text-gray-500">
              For official VA benefits information, visit{' '}
              <a href="https://va.gov" className="text-blue-600 hover:underline font-medium" style={{ color: '#005ea2' }}>VA.gov</a>
              {' '}or call{' '}
              <a href="tel:1-800-827-1000" className="text-blue-600 hover:underline font-medium" style={{ color: '#005ea2' }}>1-800-827-1000</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}; 