'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronLeft, ChevronRight, Rocket, Code, Globe, Cpu, Users, Github, Telescope } from 'lucide-react'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.', icon: Rocket },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.', icon: Code },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.', icon: Globe },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.', icon: Cpu },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.', icon: Users },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.', icon: Github },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.', icon: Telescope }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const navigateTimeline = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : timelineItems.length - 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex < timelineItems.length - 1 ? prevIndex + 1 : 0))
    }
  }

  const codeString = `
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Copy, Check, ChevronLeft, ChevronRight, Rocket, Code, Globe, Cpu, Users, Github, Telescope } from 'lucide-react'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.', icon: Rocket },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.', icon: Code },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.', icon: Globe },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.', icon: Cpu },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.', icon: Users },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.', icon: Github },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.', icon: Telescope }
]

export default function Component() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const navigateTimeline = (direction: 'left' | 'right') => {
    if (direction === 'left') {
      setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : timelineItems.length - 1))
    } else {
      setCurrentIndex((prevIndex) => (prevIndex < timelineItems.length - 1 ? prevIndex + 1 : 0))
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-gray-800">My Professional Journey</h1>
      <div className="w-full max-w-2xl mx-auto relative overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 mx-2 sm:mx-4 my-2 sm:my-4 flex flex-col sm:flex-row items-center sm:items-start"
          >
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-600 mb-2">{timelineItems[currentIndex].year}</h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{timelineItems[currentIndex].title}</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">{timelineItems[currentIndex].description}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              {React.createElement(timelineItems[currentIndex].icon, { size: 48, className: "text-teal-500" })}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <motion.div
            className="h-full bg-teal-500 rounded-full"
            style={{ width: \`\${((currentIndex + 1) / timelineItems.length) * 100}%\` }}
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-4 sm:mt-6 mb-2 sm:mb-4 space-x-4">
        <button
          onClick={() => navigateTimeline('left')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => navigateTimeline('right')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-200"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base text-gray-600 text-center max-w-2xl">
        Use the arrow buttons to explore my professional journey over the years.
        Each card represents an important milestone in my career as a developer.
      </p>

      <div className="mt-4 sm:mt-8 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
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
            className="mt-4 sm:mt-8 relative w-full max-w-4xl mx-auto"
          >
            <pre className="bg-gray-100 p-4 rounded-md text-xs sm:text-sm overflow-x-auto">
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
  )
}
`.trim()

  return (
    <div className=" bg-gray-50 flex flex-col justify-center items-center p-4 sm:p-8 mt-20">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-center text-gray-800">My Professional Journey</h1>
      <div className="w-full max-w-2xl mx-auto relative overflow-hidden rounded-lg shadow-lg">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-md p-4 sm:p-6 mx-2 sm:mx-4 my-2 sm:my-4 flex flex-col sm:flex-row items-center sm:items-start"
          >
            <div className="flex-grow">
              <h3 className="text-xl sm:text-2xl font-bold text-teal-600 mb-2">{timelineItems[currentIndex].year}</h3>
              <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{timelineItems[currentIndex].title}</h4>
              <p className="text-sm sm:text-base text-gray-600 mb-2 sm:mb-4">{timelineItems[currentIndex].description}</p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-6">
              {React.createElement(timelineItems[currentIndex].icon, { size: 48, className: "text-teal-500" })}
            </div>
          </motion.div>
        </AnimatePresence>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gray-200">
          <motion.div
            className="h-full bg-teal-500 rounded-full"
            style={{ width: `${((currentIndex + 1) / timelineItems.length) * 100}%` }}
          />
        </div>
      </div>
      
      <div className="flex justify-center items-center mt-4 sm:mt-6 mb-2 sm:mb-4 space-x-4">
        <button
          onClick={() => navigateTimeline('left')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-200"
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => navigateTimeline('right')}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition duration-200"
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      <p className="mt-2 text-sm sm:text-base text-gray-600 text-center max-w-2xl">
        Use the arrow buttons to explore my professional journey over the years.
        Each card represents an important milestone in my career as a developer.
      </p>

      <div className="mt-4 sm:mt-8 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
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
            className="mt-4 sm:mt-8 relative w-full max-w-4xl mx-auto"
          >
            <pre className="bg-gray-100 p-4 rounded-md text-xs sm:text-sm overflow-x-auto">
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
  )
}