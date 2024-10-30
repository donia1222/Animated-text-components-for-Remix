'use client'

import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'

const texts = [
  'Modern Websites',
  'AI Solutions',
  'App Development',
  'Custom Plugins',
  'Custom Components',
]

const gradients = [
  'from-purple-400 via-pink-500 to-yellow-500',
  'from-blue-400 via-indigo-500 to-teal-500',
  'from-yellow-400 via-red-500 to-purple-500',
  'from-green-400 via-blue-500 to-indigo-500',
]

function TextCrossing() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
          delay: i * 2,
        },
      },
    }))
  }, [controls])

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden flex flex-col justify-center bg-gray-800">
      {texts.map((text, index) => (
        <motion.div
          key={index}
          className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text ${
            gradients[index % gradients.length]
          } whitespace-nowrap`}
          style={{
            y: `${(index * 100) / texts.length}%`,
          }}
          initial={{ x: '100%' }}
          animate={controls}
          custom={index}
        >
          {text}
        </motion.div>
      ))}
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

import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'

const texts = [
  'Modern Websites',
  'AI Solutions',
  'App Development',
  'Custom Plugins',
  'Custom Components',
]

const gradients = [
  'from-purple-400 via-pink-500 to-yellow-500',
  'from-blue-400 via-indigo-500 to-teal-500',
  'from-yellow-400 via-red-500 to-purple-500',
  'from-green-400 via-blue-500 to-indigo-500',
]

export default function TextCrossing() {
  const controls = useAnimation()

  useEffect(() => {
    controls.start((i) => ({
      x: ['100%', '-100%'],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 10,
          ease: 'linear',
          delay: i * 2,
        },
      },
    }))
  }, [controls])

  return (
    <div className="relative w-full h-64 md:h-96 overflow-hidden flex flex-col justify-center bg-gray-800">
      {texts.map((text, index) => (
        <motion.div
          key={index}
          className={\`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-gradient-to-r bg-clip-text \${
            gradients[index % gradients.length]
          } whitespace-nowrap\`}
          style={{
            y: \`\${(index * 100) / texts.length}%\`,
          }}
          initial={{ x: '100%' }}
          animate={controls}
          custom={index}
        >
          {text}
        </motion.div>
      ))}
    </div>
  )
}`

  return (
    <div className=" ">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">Crossing Text Animation with Gradient</h1>
        <div className="rounded-lg shadow-lg overflow-hidden mb-8">
          <TextCrossing />
        </div>
        <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            This component displays a dynamic text animation where different texts with gradients 
            slide across the screen from right to left. The texts overlap, creating a 
            flowing, multi-layered visual effect. The component uses Framer Motion for smooth 
            animations and React Hooks for animation control.
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
          {copied && (
            <p className="text-green-500 mt-2">Code copied to clipboard!</p>
          )}
        </div>
      </div>
    </div>
  )
}