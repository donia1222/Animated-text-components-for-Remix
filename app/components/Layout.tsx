import { Link } from "@remix-run/react";
import { useState } from "react";
import { Menu, X, Sparkles, MousePointer, Image } from "lucide-react";

export default function Component({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

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
            <div className="flex items-center"></div>
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="flex items-center text-gray-700 hover:text-red-600 transition duration-150 ease-in-out">
                <Sparkles className="h-5 w-5 mr-1" />
                <span>Text Animation</span>
              </Link>

              <Link to="/about" className="flex items-center text-gray-700 hover:text-red-600 transition duration-150 ease-in-out">
                <MousePointer className="h-5 w-5 mr-1" />
                <span>Modern Button</span>
              </Link>
              <Link to="/contact" className="flex items-center text-gray-700 hover:text-red-600 transition duration-150 ease-in-out">
                <Image className="h-5 w-5 mr-1" />
                <span>Carousel</span>
              </Link>

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
              <Link to="/" onClick={closeMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition duration-150 ease-in-out">
                <Sparkles className="h-5 w-5 mr-2" />
                <span>Text Animation</span>
              </Link>

              <Link to="/about" onClick={closeMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition duration-150 ease-in-out">
                <MousePointer className="h-5 w-5 mr-2" />
                <span>Modern Button</span>
              </Link>

              <Link to="/contact" onClick={closeMenu} className="flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-red-600 hover:bg-red-50 transition duration-150 ease-in-out">
                <Image className="h-5 w-5 mr-2" />
                <span>Carousel</span>
              </Link>

            </div>
          </div>
        )}
      </header>

      {/* Main content */}
      <main className="relative z-10 py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {children}
        </div>
      </main>
    </div>
  );
}
