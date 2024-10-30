'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = [
  'Modern Websites',
  'AI Solutions',
  'App Development',
  'Custom Plugins',
]

const glitchColors = [
  'text-green-500',
  'text-blue-500',
  'text-pink-500',
]

function TypewriterGlitchText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animateText = async () => {
      const currentText = texts[currentTextIndex]

      // Typewriter effect
      for (let i = 0; i <= currentText.length; i++) {
        setDisplayedText(currentText.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      // Wait before glitch effect
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Glitch effect
      setIsGlitching(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsGlitching(false)

      // Clear text and move to next
      setDisplayedText('')
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }

    timeout = setTimeout(animateText, 500)

    return () => clearTimeout(timeout)
  }, [currentTextIndex])

  return (
    <div className="flex items-center justify-center p-40">
      <div className="relative text-4xl font-bold text-white">
        <AnimatePresence>
          {isGlitching ? (
            <motion.div
              key="glitch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {glitchColors.map((color, index) => (
                <motion.span
                  key={color}
                  className={`absolute ${color}`}
                  animate={{
                    x: [0, -4, 4, -4, 0],
                    y: [0, 2, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.1,
                  }}
                >
                  {displayedText}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayedText}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          className="inline-block w-2 h-8 ml-1 bg-white"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
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

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const texts = [
  'Modern Websites',
  'AI Solutions',
  'App Development',
  'Custom Plugins',
]

const glitchColors = [
  'text-green-500',
  'text-blue-500',
  'text-pink-500',
]

export default function TypewriterGlitchText() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const animateText = async () => {
      const currentText = texts[currentTextIndex]

      // Typewriter effect
      for (let i = 0; i <= currentText.length; i++) {
        setDisplayedText(currentText.slice(0, i))
        await new Promise((resolve) => setTimeout(resolve, 100))
      }

      // Wait before glitch effect
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Glitch effect
      setIsGlitching(true)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsGlitching(false)

      // Clear text and move to next
      setDisplayedText('')
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
    }

    timeout = setTimeout(animateText, 500)

    return () => clearTimeout(timeout)
  }, [currentTextIndex])

  return (
    <div className="flex items-center justify-center p-40">
      <div className="relative text-4xl font-bold text-white">
        <AnimatePresence>
          {isGlitching ? (
            <motion.div
              key="glitch"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              {glitchColors.map((color, index) => (
                <motion.span
                  key={color}
                  className={\`absolute \${color}\`}
                  animate={{
                    x: [0, -4, 4, -4, 0],
                    y: [0, 2, -2, 2, 0],
                  }}
                  transition={{
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                    delay: index * 0.1,
                  }}
                >
                  {displayedText}
                </motion.span>
              ))}
            </motion.div>
          ) : (
            <motion.span
              key="text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {displayedText}
            </motion.span>
          )}
        </AnimatePresence>
        <motion.span
          className="inline-block w-2 h-8 ml-1 bg-white"
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        />
      </div>
    </div>
  )
}`

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Text Animation with Glitch Effect</h1>
      <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-8">
        <TypewriterGlitchText />
      </div>
      <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
        <p>
          This component displays a text animation with typewriter and glitch effects. 
          It uses Framer Motion for smooth animations and React Hooks for state management. 
          The text is displayed letter by letter, followed by a brief glitch effect, 
          before moving on to the next text in the list.
        </p>
        <div className="font-bold">
          <p>
            TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
      <div className="mt-8">
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
  )
}