'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' }
]

const TimelineItem = ({ item, isActive, onClick }: { item: typeof timelineItems[0], isActive: boolean, onClick: () => void }) => {
  return (
    <div className="flex flex-col items-center snap-center w-16 sm:w-24 md:w-32 cursor-pointer" onClick={onClick}>
      <div className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${isActive ? 'bg-teal-500' : 'bg-gray-300'}`} />
      <div className="h-6 sm:h-8 w-px bg-gray-300" />
      <div className="text-xs sm:text-sm font-semibold text-gray-600">{item.year}</div>
    </div>
  )
}

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current
      const items = container.querySelectorAll('.snap-center')
      if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  const handleNavigation = (direction: 'left' | 'right') => {
    let newIndex
    if (direction === 'left') {
      newIndex = activeIndex === 0 ? timelineItems.length - 1 : activeIndex - 1
    } else {
      newIndex = activeIndex === timelineItems.length - 1 ? 0 : activeIndex + 1
    }
    setActiveIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
            setActiveIndex(index)
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    const items = container.querySelectorAll('.snap-center')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const codeString = `
'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Copy, Check, ChevronLeft, ChevronRight } from 'lucide-react'

const timelineItems = [
  { year: 2018, title: 'Journey Begins', description: 'Start of the adventure in the world of development.' },
  { year: 2019, title: 'First Projects', description: 'Development of web and mobile applications for local clients.' },
  { year: 2020, title: 'Global Expansion', description: 'Collaboration with international teams on large-scale projects.' },
  { year: 2021, title: 'Technological Innovation', description: 'Implementation of AI and machine learning solutions.' },
  { year: 2022, title: 'Technical Leadership', description: 'Taking on leadership roles in complex development projects.' },
  { year: 2023, title: 'Open Source Contributions', description: 'Active participation in the open-source development community.' },
  { year: 2024, title: 'Future Vision', description: 'Exploring emerging technologies and defining the next era of development.' }
]

const TimelineItem = ({ item, isActive, onClick }: { item: typeof timelineItems[0], isActive: boolean, onClick: () => void }) => {
  return (
    <div className="flex flex-col items-center snap-center w-16 sm:w-24 md:w-32 cursor-pointer" onClick={onClick}>
      <div className={\`w-3 h-3 sm:w-4 sm:h-4 rounded-full \${isActive ? 'bg-teal-500' : 'bg-gray-300'}\`} />
      <div className="h-6 sm:h-8 w-px bg-gray-300" />
      <div className="text-xs sm:text-sm font-semibold text-gray-600">{item.year}</div>
    </div>
  )
}

export default function Component() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current
      const items = container.querySelectorAll('.snap-center')
      if (items[index]) {
        items[index].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }

  const handleNavigation = (direction: 'left' | 'right') => {
    let newIndex
    if (direction === 'left') {
      newIndex = activeIndex === 0 ? timelineItems.length - 1 : activeIndex - 1
    } else {
      newIndex = activeIndex === timelineItems.length - 1 ? 0 : activeIndex + 1
    }
    setActiveIndex(newIndex)
    scrollToIndex(newIndex)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0', 10)
            setActiveIndex(index)
          }
        })
      },
      { root: container, threshold: 0.5 }
    )

    const items = container.querySelectorAll('.snap-center')
    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">My Professional Journey</h1>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-between items-center">
            <button 
              onClick={() => handleNavigation('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              <span className="sr-only">Previous year</span>
            </button>
            <div
              ref={containerRef}
              className="flex-1 overflow-x-auto scrollbar-hide mx-2 sm:mx-4 snap-x snap-mandatory"
            >
              <div className="flex justify-between min-w-full">
                {timelineItems.map((item, index) => (
                  <div key={index} data-index={index} className="snap-center">
                    <TimelineItem 
                      item={item} 
                      isActive={index === activeIndex}
                      onClick={() => {
                        setActiveIndex(index)
                        scrollToIndex(index)
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              <span className="sr-only">Next year</span>
            </button>
          </div>
        </div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-teal-600 mb-2">{timelineItems[activeIndex].year}</h2>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{timelineItems[activeIndex].title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{timelineItems[activeIndex].description}</p>
        </motion.div>

        <div className="mt-8 sm:mt-12 flex justify-center">
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
            <pre className="bg-gray-800 text-white p-4 rounded-md text-xs sm:text-sm overflow-x-auto">
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
    </div>
  )
}
`.trim()

  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-8 sm:mb-12">My Professional Journey</h1>
        
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-between items-center">
            <button 
              onClick={() => handleNavigation('left')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              <span className="sr-only">Previous year</span>
            </button>
            <div
              ref={containerRef}
              className="flex-1 overflow-x-auto scrollbar-hide mx-2 sm:mx-4 snap-x snap-mandatory"
            >
              <div className="flex justify-between min-w-full">
                {timelineItems.map((item, index) => (
                  <div key={index} data-index={index} className="snap-center">
                    <TimelineItem 
                      item={item} 
                      isActive={index === activeIndex}
                      onClick={() => {
                        setActiveIndex(index)
                        scrollToIndex(index)
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
            <button 
              onClick={() => handleNavigation('right')}
              className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6 text-gray-600" />
              <span className="sr-only">Next year</span>
            </button>
          </div>
        </div>

        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-4 sm:p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-xl sm:text-2xl font-bold text-teal-600 mb-2">{timelineItems[activeIndex].year}</h2>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-4">{timelineItems[activeIndex].title}</h3>
          <p className="text-sm sm:text-base text-gray-600">{timelineItems[activeIndex].description}</p>
        </motion.div>

        <div className="mt-8 sm:mt-12 flex justify-center">
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
            <pre className="bg-gray-800 text-white p-4 rounded-md text-xs sm:text-sm overflow-x-auto">
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
    </div>
  )
}