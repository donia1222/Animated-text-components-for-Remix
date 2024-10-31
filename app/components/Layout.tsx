import { Link, useLocation } from "@remix-run/react";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion'; 

export default function Component({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Cerrar el menú cuando cambia la ruta
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white bg-opacity-80 backdrop-blur-md shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
            <motion.h1
            className="text-3xl font-bold text-gray-500 "
            initial={{ opacity: 0, y: -50 }} // Estado inicial: transparente y desplazado hacia arriba
            animate={{ opacity: 1, y: 0 }}  // Animación: opacidad completa y posición original
            transition={{ duration: 1, ease: 'easeOut' }} // Duración y tipo de transición
          >
            Animation<span className="ml-2 text-[#ff69b4] text-3xl font-bold">
            Showcaser
          </span>
          </motion.h1>
            </div>
            {/* Desktop menu */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/" className="text-gray-600 hover:text-indigo-600 transition duration-150 ease-in-out"></Link>

            </nav>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg p-6">
            {children}
          </div>
        </div>
      </main>
    </div>
  );
}