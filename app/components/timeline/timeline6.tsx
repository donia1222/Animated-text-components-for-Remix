'use client'

import React, { useRef, useState, useEffect } from 'react'
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface TimelineEvent {
  year: number
  title: string
  description: string
  icon: string
}

const timelineEvents: TimelineEvent[] = [
  { year: 2018, title: 'Inicio del Viaje', description: 'Primeros pasos en el mundo del desarrollo.', icon: '🚀' },
  { year: 2019, title: 'Aprendizaje Continuo', description: 'Dominio de nuevas tecnologías y frameworks.', icon: '📚' },
  { year: 2020, title: 'Primer Proyecto Grande', description: 'Liderazgo en el desarrollo de una aplicación empresarial.', icon: '💼' },
  { year: 2021, title: 'Contribuciones Open Source', description: 'Participación activa en proyectos de código abierto.', icon: '🌐' },
  { year: 2022, title: 'Innovación en IA', description: 'Implementación de soluciones de inteligencia artificial.', icon: '🤖' },
  { year: 2023, title: 'Conferencias y Charlas', description: 'Compartiendo conocimientos en eventos tecnológicos.', icon: '🎤' },
  { year: 2024, title: 'Visión de Futuro', description: 'Explorando tecnologías emergentes y nuevas oportunidades.', icon: '🔮' },
]

const TimelineEvent: React.FC<{ event: TimelineEvent; isActive: boolean }> = ({ event, isActive }) => {
  return (
    <motion.div 
      className={`flex flex-col items-center w-64 p-4 ${isActive ? 'bg-teal-100' : 'bg-white'} rounded-lg shadow-md transition-colors duration-300`}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: isActive ? 1 : 0.8, opacity: isActive ? 1 : 0.7 }}
      transition={{ duration: 0.3 }}
    >
      <span className="text-4xl mb-2">{event.icon}</span>
      <h3 className="text-xl font-bold mb-1 text-teal-700">{event.year}</h3>
      <h4 className="text-lg font-semibold mb-2 text-gray-800">{event.title}</h4>
      <p className="text-sm text-gray-600 text-center">{event.description}</p>
    </motion.div>
  )
}

export default function HorizontalInteractiveTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const constraintsRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()
  const x = useMotionValue(0)
  const background = useTransform(
    x,
    [-1000, 0, 1000],
    [
      "linear-gradient(90deg, #667eea 0%, #764ba2 100%)",
      "linear-gradient(90deg, #667eea 0%, #764ba2 50%, #667eea 100%)",
      "linear-gradient(90deg, #764ba2 0%, #667eea 100%)",
    ]
  )

  const handleDrag = (event: any, info: any) => {
    const timelineWidth = timelineRef.current?.scrollWidth || 0
    const containerWidth = constraintsRef.current?.offsetWidth || 0
    const maxDrag = containerWidth - timelineWidth
    const newX = info.point.x
    const activeEventIndex = Math.round((newX / maxDrag) * (timelineEvents.length - 1))
    setActiveIndex(Math.max(0, Math.min(activeEventIndex, timelineEvents.length - 1)))
  }

  const handleNavigation = (direction: 'left' | 'right') => {
    const newIndex = direction === 'left' ? activeIndex - 1 : activeIndex + 1
    if (newIndex >= 0 && newIndex < timelineEvents.length) {
      setActiveIndex(newIndex)
      const timelineWidth = timelineRef.current?.scrollWidth || 0
      const containerWidth = constraintsRef.current?.offsetWidth || 0
      const maxDrag = containerWidth - timelineWidth
      const newX = (newIndex / (timelineEvents.length - 1)) * maxDrag
      controls.start({ x: newX })
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (timelineRef.current && constraintsRef.current) {
        const timelineWidth = timelineRef.current.scrollWidth
        const containerWidth = constraintsRef.current.offsetWidth
        const maxDrag = containerWidth - timelineWidth
        const newX = (activeIndex / (timelineEvents.length - 1)) * maxDrag
        controls.set({ x: newX })
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [activeIndex, controls])

  return (
    <motion.div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center" style={{ background }}>
      <h2 className="text-4xl font-bold text-center mb-12 text-white">Mi Trayectoria Profesional</h2>
      
      <div className="w-full max-w-4xl relative" ref={constraintsRef}>
        <motion.div 
          ref={timelineRef}
          drag="x"
          dragConstraints={constraintsRef}
          onDrag={handleDrag}
          animate={controls}
          className="flex space-x-8 cursor-grab active:cursor-grabbing"
        >
          {timelineEvents.map((event, index) => (
            <TimelineEvent key={event.year} event={event} isActive={index === activeIndex} />
          ))}
        </motion.div>
        
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={() => handleNavigation('left')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Evento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-teal-600" />
          </button>
        </div>
        
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
          <button 
            onClick={() => handleNavigation('right')}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500"
            aria-label="Siguiente evento"
          >
            <ChevronRight className="w-6 h-6 text-teal-600" />
          </button>
        </div>
      </div>
      
      <motion.div 
        className="mt-8 p-4 bg-white rounded-lg shadow-md max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold mb-2 text-teal-700">{timelineEvents[activeIndex].year}</h3>
        <h4 className="text-xl font-semibold mb-2 text-gray-800">{timelineEvents[activeIndex].title}</h4>
        <p className="text-gray-600">{timelineEvents[activeIndex].description}</p>
      </motion.div>
    </motion.div>
  )
}