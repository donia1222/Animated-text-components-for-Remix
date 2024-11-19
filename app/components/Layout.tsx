'use client'

import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X, Sparkles, MousePointer, Image, ExternalLink, Activity, Loader2, FileText } from 'lucide-react';

export default function Component({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [location]);

  const getLinkClass = (path: string) => {
    return `flex items-center px-3 py-2 rounded-md text-base font-medium ${
      location.pathname === path
        ? 'bg-cyan-500 text-white'
        : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
    } transition duration-150 ease-in-out`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-red-100 relative">
      {/* SVG Background */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="#000000"></circle>
          </pattern>
          <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="https://roberto.lweb.ch" className="text-2xl font-bold" target="_blank" rel="noopener noreferrer">
                <span className="text-blue-500">LWEB </span>
                <span className="text-pink-400">Schweiz</span>
              </Link>
            </div>
            
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={getLinkClass("/")}>
                <Sparkles className="h-5 w-5 mr-1" />
                <span>Text Animation</span>
              </Link>
              <Link to="/button" className={getLinkClass("/button")}>
                <MousePointer className="h-5 w-5 mr-1" />
                <span>Modern Button</span>
              </Link>
              <Link to="/carrousel" className={getLinkClass("/carrousel")}>
                <Image className="h-5 w-5 mr-1" />
                <span>Modern Carousel</span>
              </Link>
              <Link to="/timeline" className={getLinkClass("/timeline")}>
                <Activity className="h-5 w-5 mr-1" />
                <span>Timeline</span>
              </Link>
              <Link to="/forms" className={getLinkClass("/forms")}>
                <FileText className="h-5 w-5 mr-1" />
                <span>Forms</span>
              </Link>
              <a href="https://roberto.lweb.ch" className={`${getLinkClass("")} text-green-600 hover:text-green-700`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-1" />
                <span>Go to LWEB</span>
              </a>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600 focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/" onClick={closeMenu} className={getLinkClass("/")}>
                <Sparkles className="h-5 w-5 mr-2" />
                <span>Text Animation</span>
              </Link>
              <Link to="/button" onClick={closeMenu} className={getLinkClass("/button")}>
                <MousePointer className="h-5 w-5 mr-2" />
                <span>Modern Button</span>
              </Link>
              <Link to="/carrousel" onClick={closeMenu} className={getLinkClass("/carrousel")}>
                <Image className="h-5 w-5 mr-2" />
                <span>Modern Carousel</span>
              </Link>
              <Link to="/timeline" onClick={closeMenu} className={getLinkClass("/timeline")}>
                <Activity className="h-5 w-5 mr-2" />
                <span>Timeline</span>
              </Link>
              <Link to="/forms" onClick={closeMenu} className={getLinkClass("/forms")}>
                <FileText className="h-5 w-5 mr-2" />
                <span>Forms</span>
              </Link>
              <a href="https://roberto.lweb.ch" onClick={closeMenu} className={`${getLinkClass("")} text-green-600 hover:text-green-700`} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-5 w-5 mr-2" />
                <span>Go to LWEB</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Loader */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-75">
          <Loader2 className="w-12 h-12 text-cyan-500 animate-spin" />
        </div>
      )}

      {/* Main content */}
      <main className="relative z-10 py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
}