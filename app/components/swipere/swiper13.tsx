'use client';

import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Check, Copy } from 'lucide-react';

const TextImageScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeString = `
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextImageScroll: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          <img
            src="/images/mic.png"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          ref={ref}
          className="relative z-10 h-full flex items-center justify-center"
          style={{ y: textY }}
        >
          <div className="max-w-2xl p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
            <motion.h2
              className="text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Descubre la Magia del Sonido
            </motion.h2>
            <motion.p
              className="text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Sumérgete en un mundo de audio cristalino y experiencias sonoras
              inmersivas. Nuestros micrófonos de alta calidad capturan cada
              detalle, permitiéndote expresar tu creatividad sin límites.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TextImageScroll;
  `.trim();

  return (
    <div className="space-y-8">
      <div ref={containerRef} className="relative h-[100vh] bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <div className="sticky top-0 h-screen overflow-hidden">
          <motion.div
            className="absolute inset-0 z-0"
            style={{ scale: imageScale, opacity: imageOpacity }}
          >
            <img
              src="/images/dev1.jpg"
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            ref={ref}
            className="relative z-10 h-full flex items-center justify-center"
            style={{ y: textY }}
          >
            <div className="max-w-4xl p-8 bg-white bg-opacity-80 rounded-lg shadow-lg">
              <motion.h2
                className="text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Descubre la Magia del Sonido
              </motion.h2>
              <motion.p
                className="text-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Sumérgete en un mundo de audio cristalino y experiencias sonoras
                inmersivas. Nuestros micrófonos de alta calidad capturan cada
                detalle, permitiéndote expresar tu creatividad sin límites.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          <Code size={20} />
          <span>  {showCode ? 'Hide Code' : 'Show Code'}</span>
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

export default TextImageScroll;