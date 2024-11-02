'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code, Check, Copy } from 'lucide-react';

const images = [
  '/images/dev1.jpg',
  '/images/dev2.jpg',
  '/images/dev3.jpg',
  '/images/mic.png',
];

const WideImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeString = `
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  '/images/mic.png',
  '/images/mic.png',
  '/images/mic.png',
  '/images/mic.png',
  '/images/mic.png',
];

const WideImageCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="absolute inset-0 flex items-center justify-center">
        {images.map((src, index) => {
          const offset = (index - currentIndex + images.length) % images.length;
          const zIndex = offset === 0 ? 10 : 5 - Math.abs(offset);
          const opacity = 1 - Math.abs(offset) * 0.2;
          const scale = 1 - Math.abs(offset) * 0.1;
          const translateX = offset * 80;

          return (
            <motion.div
              key={index}
              className="absolute w-[80vw] h-[50vh] rounded-lg shadow-xl overflow-hidden"
              style={{
                zIndex,
                opacity,
                scale,
                x: translateX,
              }}
              initial={false}
              animate={{
                zIndex,
                opacity,
                scale,
                x: translateX,
                rotateY: offset * -15,
              }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={'Slide ' + (index + 1)}
                className="w-full h-full object-cover"
              />
            </motion.div>
          );
        })}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-20"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-20"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default WideImageCarousel;
  `.trim();

  return (
    <div className="space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-pink-600">Wide Image Carousel</h1>
      <div className="relative w-full h-[40vh] overflow-hidden bg-gradient-to-r from-purple-400 via-pink-500 ">
        <div className="absolute inset-0 flex items-center justify-center">
          {images.map((src, index) => {
            const offset = (index - currentIndex + images.length) % images.length;
            const zIndex = offset === 0 ? 10 : 5 - Math.abs(offset);
            const opacity = 1 - Math.abs(offset) * 0.2;
            const scale = 1 - Math.abs(offset) * 0.1;
            const translateX = offset * 80;

            return (
              <motion.div
                key={index}
                className="absolute w-[80vw] h-[50vh] rounded-lg shadow-xl overflow-hidden"
                style={{
                  zIndex,
                  opacity,
                  scale,
                  x: translateX,
                }}
                initial={false}
                animate={{
                  zIndex,
                  opacity,
                  scale,
                  x: translateX,
                  rotateY: offset * -15,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={src}
                  alt={'Slide ' + (index + 1)}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            );
          })}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-20"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200 z-20"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          <Code size={20} />
          <span>  {showCode ? 'Hide Code' : 'Show Code'}</span>
        </button>
      </div>

      <AnimatePresence>
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
      </AnimatePresence>
    </div>
  );
};

export default WideImageCarousel;