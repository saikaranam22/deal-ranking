'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/80 backdrop-blur-md border-b border-[var(--border)] py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Valorum</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('sourcing')} 
            className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
          >
            Sourcing
          </button>
          <button 
            onClick={() => scrollToSection('filter')} 
            className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
          >
            Filter
          </button>
          <button 
            onClick={() => scrollToSection('workflow')} 
            className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
          >
            Workflow
          </button>
          <Link href="/about" className="text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors">
            About
          </Link>
          <button className="btn-primary">
            Get Started
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-[var(--foreground)] p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-[var(--card)] border-b border-[var(--border)]">
          <div className="container mx-auto py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('sourcing')}
              className="block w-full text-left text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
            >
              Sourcing
            </button>
            <button 
              onClick={() => scrollToSection('filter')}
              className="block w-full text-left text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
            >
              Filter
            </button>
            <button 
              onClick={() => scrollToSection('workflow')}
              className="block w-full text-left text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors"
            >
              Workflow
            </button>
            <Link href="/about" className="block text-[var(--foreground)]/80 hover:text-[var(--foreground)] transition-colors">
              About
            </Link>
            <button className="btn-primary w-full">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
} 