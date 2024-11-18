'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'
import { Copy, Check } from 'lucide-react'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' }
]

const TimelineItem = ({ item, index }: { item: typeof timelineItems[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-16 sm:mb-0"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div className="p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold text-teal-600 mb-1">{item.year}</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-teal-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="rounded-full bg-white w-3 h-3"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Component() {
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `
'use client'

import React, { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' }
]

const TimelineItem = ({ item, index }: { item: typeof timelineItems[0], index: number }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="mb-16 sm:mb-0"
    >
      <div className="flex flex-col sm:flex-row items-center">
        <div className="flex justify-start w-full mx-auto items-center">
          <div className="w-full sm:w-1/2 sm:pr-8">
            <div className="p-4 bg-white rounded shadow-md">
              <h3 className="text-xl font-semibold text-teal-600 mb-1">{item.year}</h3>
              <h4 className="text-lg font-medium text-gray-800 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          </div>
        </div>
        <div className="rounded-full bg-teal-500 border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
            className="rounded-full bg-white w-3 h-3"
          />
        </div>
      </div>
    </motion.div>
  )
}

export default function Component() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Professional Journey</h1>
        <div className="relative" ref={containerRef}>
          <motion.div
            className="absolute left-1/2 w-1 h-full bg-teal-200"
            style={{ scaleY: scaleX, originY: 0 }}
          />
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
`.trim()

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">My Professional Journey</h1>
        <div className="relative" ref={containerRef}>
          <motion.div
            className="absolute left-1/2 w-1 h-full bg-teal-200"
            style={{ scaleY: scaleX, originY: 0 }}
          />
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-center">
        <button
          onClick={toggleCode}
          className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
        >
          {showCode ? 'Hide Code' : 'Show Code'}
        </button>
      </div>

      {showCode && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-8 relative w-full max-w-3xl mx-auto"
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