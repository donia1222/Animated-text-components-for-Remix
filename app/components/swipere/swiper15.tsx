'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Code, Check, Copy, X } from 'lucide-react'

const products = [
    { id: 1, name: "Micrófono Pro", image: "/images/dev1.jpg", description: "Captura audio con calidad de estudio." },
    { id: 2, name: "Auriculares Elite", image: "/images/dev2.jpg", description: "Sumérgete en un sonido envolvente." },
    { id: 3, name: "Altavoz Potente", image: "/images/dev3.jpg", description: "Llena cualquier espacio con música." },
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showInfo, setShowInfo] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
    setShowInfo(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
    setShowInfo(false)
  }

  const toggleInfo = () => setShowInfo(!showInfo)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const products = [
  { id: 1, name: "Micrófono Pro", image: "/placeholder.svg?height=200&width=200", description: "Captura audio con calidad de estudio." },
  { id: 2, name: "Auriculares Elite", image: "/placeholder.svg?height=200&width=200", description: "Sumérgete en un sonido envolvente." },
  { id: 3, name: "Altavoz Potente", image: "/placeholder.svg?height=200&width=200", description: "Llena cualquier espacio con música." },
];

export default function ProductCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showInfo, setShowInfo] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    setShowInfo(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
    setShowInfo(false);
  };

  const toggleInfo = () => setShowInfo(!showInfo);

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-br from-purple-700 to-indigo-900 overflow-hidden flex items-center justify-center">
      <div className="relative w-[400px] h-[400px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="relative w-full h-full" onClick={toggleInfo}>
              <img
                src={products[currentIndex].image}
                alt={products[currentIndex].name}
                className="w-full h-full object-contain cursor-pointer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black bg-opacity-50 rounded-full p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-purple-100 transition-colors duration-200"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-purple-100 transition-colors duration-200"
      >
        <ChevronRight size={24} />
      </button>

      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="absolute inset-x-0 bottom-0 bg-white p-6 rounded-t-3xl shadow-2xl"
          >
            <button
              onClick={toggleInfo}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-2">{products[currentIndex].name}</h2>
            <p className="text-gray-600">{products[currentIndex].description}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
  `.trim()

  return (
    <div className="space-y-8">
         <h1 className="text-3xl font-bold mb-6 text-pink-600">Image Text Modal</h1>
         <p className="text-lg text-gray-700 mb-4">
        An interactive product showcase featuring a smooth image carousel with modal information display. 
        This component combines elegant animations, responsive design, and intuitive user interactions. 
        Built with React, Framer Motion, and Tailwind CSS for a modern and engaging user experience.
      </p>
      <div className="relative w-full h-[600px] bg-gradient-to-br from-purple-700 to-indigo-200 overflow-hidden flex items-center justify-center">
        <div className="relative w-[800px] h-[400px] rounded-lg ">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center rounded-lg "
            >
              <div className="relative w-full h-full rounded-lg " onClick={toggleInfo}>
                <img
                  src={products[currentIndex].image}
                  alt={products[currentIndex].name}
                  className="w-full h-full object-contain cursor-pointer rounded-lg "
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-50 rounded-full p-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-purple-100 transition-colors duration-200"
        >
          <ChevronLeft size={24} />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-purple-700 p-2 rounded-full shadow-lg hover:bg-purple-100 transition-colors duration-200"
        >
          <ChevronRight size={24} />
        </button>

        <AnimatePresence>
          {showInfo && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="absolute inset-x-0 bottom-0 bg-white p-6 rounded-t-3xl shadow-2xl"
            >
              <button
                onClick={toggleInfo}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold mb-2">{products[currentIndex].name}</h2>
              <p className="text-gray-600">{products[currentIndex].description}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          <Code size={20} />
          <span> {showCode ? 'Hide Code' : 'Show Code'}</span>
        </button>
      </div>

      {showCode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <pre className="bg-gray-100 p-4 rounded-lg text-sm overflow-x-auto">
            <code className="language-typescript">{codeString}</code>
          </pre>
          <button
            onClick={copyCode}
            className="absolute top-2 right-2 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200 transform hover:scale-105"
            aria-label="Copiar código"
          >
            {copied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </motion.div>
      )}
    </div>
  )
}