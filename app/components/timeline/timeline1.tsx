'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';


export default function TimelineComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineItems = [
    { year: 2018, title: 'Start of Freelance Career', description: 'Beginning my journey as an independent developer.' },
    { year: 2019, title: 'App Development', description: 'Creating efficient and powerful mobile applications.' },
    { year: 2020, title: 'AI Solutions', description: 'Integrating advanced AI solutions for automation and expansion.' },
    { year: 2021, title: 'Web Development', description: 'CMS-free solutions for optimal performance and customized design.' },
    { year: 2022, title: 'Innovation', description: 'Innovating to create new opportunities and better solutions for my clients.' },
    { year: 2023, title: 'Skill Expansion', description: 'Continuous training in new technologies and methods.' },
    { year: 2024, title: 'Future Projects', description: 'Focusing on sustainable and future-oriented development projects.' },
  ];


  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((v) => {
      setCurrentIndex(Math.min(Math.floor(v * timelineItems.length), timelineItems.length - 1));
    });
    return () => unsubscribe();
  }, [smoothProgress, timelineItems.length]);

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeString = `
'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

export default function TimelineComponent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const timelineItems = [
    { year: 2018, title: 'Start of Freelance Career', description: 'Beginning my journey as an independent developer.' },
    { year: 2019, title: 'App Development', description: 'Creating efficient and powerful mobile applications.' },
    { year: 2020, title: 'AI Solutions', description: 'Integrating advanced AI solutions for automation and expansion.' },
    { year: 2021, title: 'Web Development', description: 'CMS-free solutions for optimal performance and customized design.' },
    { year: 2022, title: 'Innovation', description: 'Innovating to create new opportunities and better solutions for my clients.' },
    { year: 2023, title: 'Skill Expansion', description: 'Continuous training in new technologies and methods.' },
    { year: 2024, title: 'Future Projects', description: 'Focusing on sustainable and future-oriented development projects.' },
  ];


  useEffect(() => {
    const unsubscribe = smoothProgress.onChange((v) => {
      setCurrentIndex(Math.min(Math.floor(v * timelineItems.length), timelineItems.length - 1));
    });
    return () => unsubscribe();
  }, [smoothProgress, timelineItems.length]);

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mi Trayectoria como Desarrollador</h1>
        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
            <motion.div
              className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800">{timelineItems[currentIndex].year}</h2>
                <h3 className="text-2xl font-semibold text-blue-600">{timelineItems[currentIndex].title}</h3>
              </motion.div>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {timelineItems[currentIndex].description}
              </motion.p>
              <motion.div
                className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-blue-600"
                  style={{ scaleX: smoothProgress }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Botón para Mostrar/Ocultar Código */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={toggleCode}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
          >
            {showCode ? 'Ocultar Código' : 'Mostrar Código'}
          </button>
        </div>

        {/* Bloque de Código con Animaciones */}
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 relative"
            >
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                <code>{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                aria-label="Copiar código"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <h2 className="text-3xl font-bold">Diseñando el Futuro del Desarrollo</h2>
      </div>
    }
    `.trim();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Mi Trayectoria como Desarrollador</h1>
        <div ref={containerRef} className="relative h-[300vh]">
          <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
            <motion.div
              className="w-full max-w-4xl bg-white rounded-xl shadow-2xl p-8"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="flex justify-between items-center mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-gray-800">{timelineItems[currentIndex].year}</h2>
                <h3 className="text-2xl font-semibold text-blue-600">{timelineItems[currentIndex].title}</h3>
              </motion.div>
              <motion.p
                className="text-lg text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                {timelineItems[currentIndex].description}
              </motion.p>
              <motion.div
                className="mt-8 h-2 bg-gray-200 rounded-full overflow-hidden"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-blue-600"
                  style={{ scaleX: smoothProgress }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Botón para Mostrar/Ocultar Código */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={toggleCode}
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
        </div>

        {/* Bloque de Código con Animaciones */}
        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 relative"
            >
              <pre className="bg-gray-100 p-4 rounded-md text-sm overflow-x-auto">
                <code>{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                aria-label="Copiar código"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="h-screen flex items-center justify-center bg-gray-800 text-white">
        <h2 className="text-3xl font-bold">Designing the Future of Development</h2>
      </div>
    </div>
  );
}
