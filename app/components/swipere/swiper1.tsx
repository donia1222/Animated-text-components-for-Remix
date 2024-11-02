'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Check } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/dev1.jpg',
  '/images/dev2.jpg',
  '/images/dev3.jpg',
  // Add more image paths here
];

const CarouselComponent: React.FC = () => {
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  const toggleCode = () => setShowCode(!showCode);

  const copyCode = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const codeString = `
'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const images = [
  '/images/mic.png',
  '/images/mic.png',
  '/images/mic.png',
];

const CarouselComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-64 md:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={\`Slide \${index + 1}\`}
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselComponent;
  `.trim();

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Dev Showcase Slider</h1>
      <p className="text-lg text-gray-700 mb-4">
        An interactive carousel showcasing development-related images. Features smooth transitions, 
        autoplay, and responsive design. Built with Swiper and Framer Motion for optimal performance.
      </p>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="mySwiper"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-64 md:h-96"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="object-cover w-full h-full rounded-lg shadow-md"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-4 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

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
              aria-label="Copy code"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CarouselComponent;