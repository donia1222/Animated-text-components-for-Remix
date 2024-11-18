'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: 2018, title: 'The Beginning', description: 'Start of a great adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' },
]

const TimelineEvent: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div
      ref={ref}
      className={`flex items-center mb-16 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
      style={{ opacity }}
    >
      <motion.div 
        className="w-1/2 px-4"
        style={{ y }}
      >
        <h3 className="text-2xl font-bold mb-2 text-teal-600">{event.year}</h3>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h4>
        <p className="text-gray-600">{event.description}</p>
      </motion.div>
      <div className="w-px h-24 bg-teal-500 mx-4"></div>
      <motion.div 
        className={`w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold ${index % 2 === 0 ? '-ml-6' : '-mr-6'}`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
      >
        {event.year}
      </motion.div>
    </motion.div>
  )
}

export default function InteractiveParallaxTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `
'use client'

import React, { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

interface TimelineEvent {
  year: number;
  title: string;
  description: string;
}

const timelineEvents: TimelineEvent[] = [
  { year: 2018, title: 'The Beginning', description: 'Start of a great adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' },
]

const TimelineEvent: React.FC<{ event: TimelineEvent; index: number }> = ({ event, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1])

  return (
    <motion.div
      ref={ref}
      className={\`flex items-center mb-16 \${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}\`}
      style={{ opacity }}
    >
      <motion.div 
        className="w-1/2 px-4"
        style={{ y }}
      >
        <h3 className="text-2xl font-bold mb-2 text-teal-600">{event.year}</h3>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{event.title}</h4>
        <p className="text-gray-600">{event.description}</p>
      </motion.div>
      <div className="w-px h-24 bg-teal-500 mx-4"></div>
      <motion.div 
        className={\`w-12 h-12 rounded-full bg-teal-500 flex items-center justify-center text-white font-bold \${index % 2 === 0 ? '-ml-6' : '-mr-6'}\`}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2 * index, type: "spring", stiffness: 100 }}
      >
        {event.year}
      </motion.div>
    </motion.div>
  )
}

export default function InteractiveParallaxTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative mt-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Professional Journey</h2>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-teal-500 transform origin-left"
        style={{ scaleX }}
      />

      <div ref={containerRef} className="max-w-3xl mx-auto">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
      </div>

      {showCode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 relative"
        >
          <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
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
    </div>
  )
}
`.trim()

  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 relative mt-20">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">My Professional Journey</h2>
      
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-teal-500 transform origin-left"
        style={{ scaleX }}
      />

      <div ref={containerRef} className="max-w-3xl mx-auto">
        {timelineEvents.map((event, index) => (
          <TimelineEvent key={event.year} event={event} index={index} />
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          {showCode ? 'Hide Code' : 'View Code'}
        </button>
      </div>

      {showCode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-4 relative"
        >
          <pre className="bg-gray-800 text-white p-4 rounded-md text-sm overflow-x-auto">
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
    </div>
  )
}