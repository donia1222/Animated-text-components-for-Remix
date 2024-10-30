'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = ['Websites', 'AI Solutions', 'App Development', 'Custom Plugins']
const colors = ['#ee447e', '#03a9f4', '#9400D3', '#11c1b0']

function DynamicTextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentText = texts[currentIndex]
  const currentColor = colors[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const createParticles = useMemo(() => {
    return texts.map((text) =>
      Array.from({ length: 50 }).map((_, i) => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: Math.random() * 2 + 1,
      }))
    )
  }, [])

  return (
    <div className="flex items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-800 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center p-40" style={{ color: currentColor }}>
            {createParticles[currentIndex].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ background: currentColor }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            ))}
            {currentText}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

export default function Component() {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `'use client'

import React, { useEffect, useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = ['Websites', 'AI Solutions', 'App Development', 'Custom Plugins']
const colors = ['#ee447e', '#03a9f4', '#9400D3', '#11c1b0']

export default function DynamicTextAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const currentText = texts[currentIndex]
  const currentColor = colors[currentIndex]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const createParticles = useMemo(() => {
    return texts.map((text) =>
      Array.from({ length: 50 }).map((_, i) => ({
        x: Math.random() * 200 - 100,
        y: Math.random() * 200 - 100,
        duration: Math.random() * 2 + 1,
      }))
    )
  }, [])

  return (
    <div className="flex items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 xl:p-32 bg-gray-800 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center" style={{ color: currentColor }}>
            {createParticles[currentIndex].map((particle, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full"
                style={{ background: currentColor }}
                initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
                animate={{
                  x: particle.x,
                  y: particle.y,
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: particle.duration,
                  repeat: Infinity,
                  repeatType: 'loop',
                }}
              />
            ))}
            {currentText}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}`

  return (
    <div className="">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold mb-6  text-pink-600">Dynamic Text Animation with Particle Effect</h1>
        <div className="rounded-lg shadow-lg overflow-hidden mb-8">
          <DynamicTextAnimation />
        </div>
        <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            This component displays a dynamic text animation with a particle effect. 
            The text changes every 3 seconds, along with its color. 
            For each word, particles appear at different positions, 
            creating a unique visual effect for each displayed word. 
            The component uses Framer Motion for smooth animations and React Hooks for state management.
          </p>
          <div className="font-bold">
          <p>
            TypeScript & Tailwind CSS
          </p>
          </div>
        </div>
        <div className="mt-8 ">
          <button
            onClick={toggleCode}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {showCode ? 'Hide Code' : 'Show Code'}
          </button>
          {copied && (
          <p className="text-green-500 mt-2 text-center">Code copied to clipboard!</p>
        )}
          {showCode && (
            <div className="mt-4 border rounded-lg shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-4 relative">
                <pre className="language-typescript overflow-x-auto">
                  <code>{codeString}</code>
                </pre>
                <button
                  className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 text-gray-700 font-bold py-1 px-2 rounded"
                  onClick={copyCode}
                  aria-label="Copy code"
                >
                  Copy Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}