'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const remixConcepts = [
  'Routes', 'Loaders', 'Actions', 'Forms', 'Outlets', 'Links',
  'ErrorBoundary', 'CatchBoundary', 'Meta', 'useParams', 'useLoaderData',
  'useFetcher', 'useTransition', 'useSubmit', 'useNavigate', 'useLocation'
]

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
  angle: number
  text: string
}

const RemixParticleVortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2) // Increase resolution for sharper text

    const centerX = canvas.width / 4
    const centerY = canvas.height / 4

    const initialParticles: Particle[] = remixConcepts.map((concept, index) => ({
      x: Math.random() * (canvas.width / 2),
      y: Math.random() * (canvas.height / 2),
      size: 3,
      color: `hsl(${Math.random() * 360}, 100%, 70%)`, // Brighter colors
      speed: 0.3 + Math.random() * 0.3,
      angle: Math.random() * Math.PI * 2,
      text: concept
    }))

    setParticles(initialParticles)

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const dx = centerX - particle.x
          const dy = centerY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          particle.angle += 0.001
          particle.x += Math.cos(particle.angle) * particle.speed
          particle.y += Math.sin(particle.angle) * particle.speed

          if (distance < 30) {
            particle.x += (Math.random() - 0.5) * 1.5
            particle.y += (Math.random() - 0.5) * 1.5
          }

          if (particle.x < 0 || particle.x > canvas.width / 2) particle.x = Math.random() * (canvas.width / 2)
          if (particle.y < 0 || particle.y > canvas.height / 2) particle.y = Math.random() * (canvas.height / 2)

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()

          // Improved text rendering
          ctx.font = 'bold 16px Arial'
          ctx.textBaseline = 'middle'
          ctx.textAlign = 'left'
          ctx.fillStyle = 'white'
          ctx.strokeStyle = 'black'
          ctx.lineWidth = 3
          ctx.strokeText(particle.text, particle.x + particle.size + 4, particle.y)
          ctx.fillText(particle.text, particle.x + particle.size + 4, particle.y)

          return particle
        })
      )

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900 rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-white px-6 py-3 rounded-full bg-black bg-opacity-50 shadow-lg">
          Remix Vortex
        </h2>
      </motion.div>
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

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const remixConcepts = [
  'Routes', 'Loaders', 'Actions', 'Forms', 'Outlets', 'Links',
  'ErrorBoundary', 'CatchBoundary', 'Meta', 'useParams', 'useLoaderData',
  'useFetcher', 'useTransition', 'useSubmit', 'useNavigate', 'useLocation'
]

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speed: number
  angle: number
  text: string
}

const RemixParticleVortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth * 2
    canvas.height = canvas.offsetHeight * 2
    ctx.scale(2, 2) // Increase resolution for sharper text

    const centerX = canvas.width / 4
    const centerY = canvas.height / 4

    const initialParticles: Particle[] = remixConcepts.map((concept, index) => ({
      x: Math.random() * (canvas.width / 2),
      y: Math.random() * (canvas.height / 2),
      size: 3,
      color: \`hsl(\${Math.random() * 360}, 100%, 70%)\`, // Brighter colors
      speed: 0.3 + Math.random() * 0.3,
      angle: Math.random() * Math.PI * 2,
      text: concept
    }))

    setParticles(initialParticles)

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)'
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)

      setParticles(prevParticles => 
        prevParticles.map(particle => {
          const dx = centerX - particle.x
          const dy = centerY - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          particle.angle += 0.001
          particle.x += Math.cos(particle.angle) * particle.speed
          particle.y += Math.sin(particle.angle) * particle.speed

          if (distance < 30) {
            particle.x += (Math.random() - 0.5) * 1.5
            particle.y += (Math.random() - 0.5) * 1.5
          }

          if (particle.x < 0 || particle.x > canvas.width / 2) particle.x = Math.random() * (canvas.width / 2)
          if (particle.y < 0 || particle.y > canvas.height / 2) particle.y = Math.random() * (canvas.height / 2)

          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fillStyle = particle.color
          ctx.fill()

          // Improved text rendering
          ctx.font = 'bold 16px Arial'
          ctx.textBaseline = 'middle'
          ctx.textAlign = 'left'
          ctx.fillStyle = 'white'
          ctx.strokeStyle = 'black'
          ctx.lineWidth = 3
          ctx.strokeText(particle.text, particle.x + particle.size + 4, particle.y)
          ctx.fillText(particle.text, particle.x + particle.size + 4, particle.y)

          return particle
        })
      )

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900 rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-white px-6 py-3 rounded-full bg-black bg-opacity-50 shadow-lg">
          Remix Vortex
        </h2>
      </motion.div>
    </div>
  )
}

export default RemixParticleVortex`

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Remix Particle Vortex</h1>
      <RemixParticleVortex />
      <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Immerse yourself in the gently swirling vortex of Remix concepts! This refined animation 
            showcases key Remix terms as vibrant, clearly visible particles. Watch as they orbit 
            slowly, creating a mesmerizing visual representation of the Remix ecosystem's 
            interconnected features.
          </p>
          <div className="font-bold">
          <p>
            TypeScript, Canvas API & Framer Motion
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