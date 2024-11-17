'use client'

import React, { useRef, useEffect, useMemo, useState } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
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

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const { scrollXProgress } = useScroll({ container: containerRef })

  const backgroundX = useTransform(scrollXProgress, [0, 1], ['0%', '-100%'])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        container.scrollLeft += e.deltaY * 2
      }
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const memoizedTimelineItems = useMemo(() => timelineItems.map((item, index) => (
    <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 mx-4 my-4 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-teal-600 mb-2">{item.year}</h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
      <p className="text-gray-600">{item.description}</p>
    </div>
  )), [])

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `
'use client'

import React, { useRef, useEffect, useMemo } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' }
]

export default function Component() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollXProgress } = useScroll({ container: containerRef })

  const backgroundX = useTransform(scrollXProgress, [0, 1], ['0%', '-100%'])

  useEffect(() => {
    const container = containerRef.current
    if (container) {
      const handleWheel = (e: WheelEvent) => {
        e.preventDefault()
        container.scrollLeft += e.deltaY * 2
      }
      container.addEventListener('wheel', handleWheel, { passive: false })
      return () => container.removeEventListener('wheel', handleWheel)
    }
  }, [])

  const memoizedTimelineItems = useMemo(() => timelineItems.map((item, index) => (
    <div key={index} className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 mx-4 my-4 transition-all duration-300 hover:shadow-xl">
      <h3 className="text-2xl font-bold text-teal-600 mb-2">{item.year}</h3>
      <h4 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h4>
      <p className="text-gray-600">{item.description}</p>
    </div>
  )), [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">My Professional Journey</h1>
      <div className="w-full max-w-6xl relative overflow-hidden rounded-lg shadow-lg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-10"
          style={{ x: backgroundX }}
        />
        <div
          ref={containerRef}
          className="flex overflow-x-scroll pb-10 hide-scrollbar relative"
        >
          {memoizedTimelineItems}
        </div>
        <motion.div
          className="h-1 bg-teal-500 rounded-full mt-4"
          style={{ scaleX: scrollXProgress }}
        />
      </div>
      <p className="mt-8 text-gray-600 text-center max-w-2xl">
        Scroll horizontally or use the mouse wheel to explore my professional journey over the years.
        Each card represents an important milestone in my career as a developer.
      </p>
    </div>
  )
}
`.trim()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">My Professional Journey</h1>
      <div className="w-full max-w-6xl relative overflow-hidden rounded-lg shadow-lg">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-teal-500 to-blue-500 opacity-10"
          style={{ x: backgroundX }}
        />
        <div
          ref={containerRef}
          className="flex overflow-x-scroll pb-10 hide-scrollbar relative"
        >
          {memoizedTimelineItems}
        </div>
        <motion.div
          className="h-1 bg-teal-500 rounded-full mt-4"
          style={{ scaleX: scrollXProgress }}
        />
      </div>
      <p className="mt-8 text-gray-600 text-center max-w-2xl">
        Scroll horizontally or use the mouse wheel to explore my professional journey over the years.
        Each card represents an important milestone in my career as a developer.
      </p>

      <div className="mt-8 flex justify-center">
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
            className="mt-8 relative w-full max-w-6xl"
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
  )
}