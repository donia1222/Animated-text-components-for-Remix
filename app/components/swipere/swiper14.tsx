'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Code, Check, Copy } from 'lucide-react';

const slides = [
  {
    image: '/images/dev1.jpg',
    title: 'Micrófono de Alta Calidad',
    description: 'Captura cada detalle con nuestro micrófono de última generación. Perfecto para grabaciones profesionales y transmisiones en vivo.'
  },
  {
    image: '/images/dev2.jpg',
    title: 'Auriculares Inmersivos',
    description: 'Sumérgete en un mundo de sonido cristalino con nuestros auriculares de alta fidelidad. Experimenta la música como nunca antes.'
  },
  {
    image: '/images/dev3.jpg',
    title: 'Altavoz Potente',
    description: 'Llena cualquier espacio con un sonido envolvente y potente. Nuestro altavoz ofrece una experiencia auditiva sin igual.'
  }
];

const ImageTextSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeString = `
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: '/images/mic.png',
    title: 'Micrófono de Alta Calidad',
    description: 'Captura cada detalle con nuestro micrófono de última generación. Perfecto para grabaciones profesionales y transmisiones en vivo.'
  },
  {
    image: '/images/headphones.png',
    title: 'Auriculares Inmersivos',
    description: 'Sumérgete en un mundo de sonido cristalino con nuestros auriculares de alta fidelidad. Experimenta la música como nunca antes.'
  },
  {
    image: '/images/speaker.png',
    title: 'Altavoz Potente',
    description: 'Llena cualquier espacio con un sonido envolvente y potente. Nuestro altavoz ofrece una experiencia auditiva sin igual.'
  }
];

const ImageTextSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto h-[500px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
      <div className="flex h-full">
        <div className="w-1/2 relative overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={currentIndex}
              src={slides[currentIndex].image}
              alt={slides[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              custom={direction}
              variants={{
                enter: (direction: number) => {
                  return {
                    x: direction > 0 ? 1000 : -1000,
                    opacity: 0
                  };
                },
                center: {
                  zIndex: 1,
                  x: 0,
                  opacity: 1
                },
                exit: (direction: number) => {
                  return {
                    zIndex: 0,
                    x: direction < 0 ? 1000 : -1000,
                    opacity: 0
                  };
                }
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            />
          </AnimatePresence>
        </div>
        <div className="w-1/2 p-12 flex flex-col justify-center">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={{
                enter: (direction: number) => {
                  return {
                    y: direction > 0 ? 100 : -100,
                    opacity: 0
                  };
                },
                center: {
                  zIndex: 1,
                  y: 0,
                  opacity: 1
                },
                exit: (direction: number) => {
                  return {
                    zIndex: 0,
                    y: direction < 0 ? 100 : -100,
                    opacity: 0
                  };
                }
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                y: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
            >
              <h2 className="text-3xl font-bold mb-4">{slides[currentIndex].title}</h2>
              <p className="text-lg">{slides[currentIndex].description}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default ImageTextSlider;
  `.trim();

  return (
    <div className="space-y-8">
          <h1 className="text-3xl font-bold mb-6 text-pink-600">Image Text Slider</h1>
      <div className="relative w-full max-w-6xl mx-auto h-[500px] bg-gray-100 rounded-xl overflow-hidden shadow-lg">
        <div className="flex h-full">
          <div className="w-1/2 relative overflow-hidden">
            <AnimatePresence initial={false} custom={direction}>
              <motion.img
                key={currentIndex}
                src={slides[currentIndex].image}
                alt={slides[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover"
                custom={direction}
                variants={{
                  enter: (direction: number) => {
                    return {
                      x: direction > 0 ? 1000 : -1000,
                      opacity: 0
                    };
                  },
                  center: {
                    zIndex: 1,
                    x: 0,
                    opacity: 1
                  },
                  exit: (direction: number) => {
                    return {
                      zIndex: 0,
                      x: direction < 0 ? 1000 : -1000,
                      opacity: 0
                    };
                  }
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              />
            </AnimatePresence>
          </div>
          <div className="w-1/2 p-12 flex flex-col justify-center">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={{
                  enter: (direction: number) => {
                    return {
                      y: direction > 0 ? 100 : -100,
                      opacity: 0
                    };
                  },
                  center: {
                    zIndex: 1,
                    y: 0,
                    opacity: 1
                  },
                  exit: (direction: number) => {
                    return {
                      zIndex: 0,
                      y: direction < 0 ? 100 : -100,
                      opacity: 0
                    };
                  }
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  y: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
              >
                <h2 className="text-3xl font-bold mb-4">{slides[currentIndex].title}</h2>
                <p className="text-lg">{slides[currentIndex].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-200"
        >
          <ChevronRight size={24} />
        </button>
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
  );
};

export default ImageTextSlider;