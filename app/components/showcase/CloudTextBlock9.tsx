'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const remixConcepts = [
  'Routes', 'Loaders', 'Actions', 'Forms', 'Outlets', 'Links',
  'ErrorBoundary', 'CatchBoundary', 'Meta', 'useParams', 'useLoaderData',
  'useFetcher', 'useTransition', 'useSubmit', 'useNavigate', 'useLocation'
]

interface Ball {
  x: number
  y: number
  radius: number
  speed: number
  concept: string
  color: string
}

const ImprovedRemixConceptPinball: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [balls, setBalls] = useState<Ball[]>([])
  const paddleRef = useRef<{ x: number, width: number, height: number }>({ x: 0, width: 100, height: 10 })
  const [score, setScore] = useState(0)

  const abbreviateConcept = (concept: string, maxLength: number = 10) => {
    if (concept.length <= maxLength) return concept
    return concept.slice(0, maxLength - 3) + '...'
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createBall = () => {
      const radius = 30
      const x = Math.random() * (canvas.width / 2 - radius * 2) + radius
      const y = -radius
      const speed = Math.random() * 1 + 0.5
      const concept = abbreviateConcept(remixConcepts[Math.floor(Math.random() * remixConcepts.length)])
      const color = `hsl(${Math.random() * 360}, 70%, 50%)`
      setBalls(prev => [...prev, { x, y, radius, speed, concept, color }])
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)

      const { x, width, height } = paddleRef.current

      ctx.fillStyle = '#4299e1'
      ctx.fillRect(x, canvas.height / 2 - height, width, height)

      setBalls(prev => 
        prev.map(ball => {
          ball.y += ball.speed

          if (
            ball.y + ball.radius > canvas.height / 2 - height &&
            ball.y - ball.radius < canvas.height / 2 &&
            ball.x > x &&
            ball.x < x + width
          ) {
            setScore(s => s + 1)
            return null
          }

          if (ball.y - ball.radius > canvas.height / 2) {
            return null
          }

          ctx.beginPath()
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
          ctx.fillStyle = ball.color
          ctx.fill()
          ctx.closePath()

          ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
          ctx.shadowOffsetX = 1
          ctx.shadowOffsetY = 1
          ctx.shadowBlur = 2

          const fontSize = Math.min(20, ball.radius / 2)
          ctx.font = `bold ${fontSize}px Arial`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'

          const hsl = ball.color.match(/hsl$$(\d+), (\d+)%, (\d+)%$$/)
          let textColor = 'white'
          if (hsl) {
            const h = parseInt(hsl[1], 10)
            const s = parseInt(hsl[2], 10)
            const l = parseInt(hsl[3], 10)
            textColor = l < 50 ? 'white' : 'black'
          }

          ctx.strokeStyle = 'black'
          ctx.lineWidth = 2
          ctx.strokeText(ball.concept, ball.x, ball.y)

          ctx.fillStyle = textColor
          ctx.fillText(ball.concept, ball.x, ball.y)

          ctx.shadowColor = 'transparent'

          return ball
        }).filter(Boolean) as Ball[]
      )

      if (Math.random() < 0.02) createBall()

      requestAnimationFrame(animate)
    }

    animate()
    createBall()

    const handleMove = (clientX: number) => {
      const rect = canvas.getBoundingClientRect()
      const newX = (clientX - rect.left) * 2 - paddleRef.current.width / 2
      paddleRef.current.x = Math.max(0, Math.min(newX, canvas.width - paddleRef.current.width))
    }

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      setBalls([])
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
    }
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900 rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
      <motion.div
        className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white font-bold">Score: {score}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-white px-6 py-3 rounded-full bg-black bg-opacity-50 shadow-lg">
          Remix Pinball
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

  const codeString = `
'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const remixConcepts = [
  'Routes', 'Loaders', 'Actions', 'Forms', 'Outlets', 'Links',
  'ErrorBoundary', 'CatchBoundary', 'Meta', 'useParams', 'useLoaderData',
  'useFetcher', 'useTransition', 'useSubmit', 'useNavigate', 'useLocation'
]

interface Ball {
  x: number
  y: number
  radius: number
  speed: number
  concept: string
  color: string
}

const ImprovedRemixConceptPinball: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [balls, setBalls] = useState<Ball[]>([])
  const paddleRef = useRef<{ x: number, width: number, height: number }>({ x: 0, width: 100, height: 10 })
  const [score, setScore] = useState(0)

  // Function to abbreviate long concepts
  const abbreviateConcept = (concept: string, maxLength: number = 10) => {
    if (concept.length <= maxLength) return concept
    return concept.slice(0, maxLength - 3) + '...'
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Adjust canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth * 2
      canvas.height = canvas.offsetHeight * 2
      ctx.scale(2, 2)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const createBall = () => {
      const radius = 30
      const x = Math.random() * (canvas.width / 2 - radius * 2) + radius
      const y = -radius
      const speed = Math.random() * 1 + 0.5
      const concept = abbreviateConcept(remixConcepts[Math.floor(Math.random() * remixConcepts.length)])
      const color = \`hsl(\${Math.random() * 360}, 70%, 50%)\`
      setBalls(prev => [...prev, { x, y, radius, speed, concept, color }])
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
      ctx.fillRect(0, 0, canvas.width / 2, canvas.height / 2)

      // Access current paddle position
      const { x, width, height } = paddleRef.current

      // Draw paddle
      ctx.fillStyle = '#4299e1'
      ctx.fillRect(x, canvas.height / 2 - height, width, height)

      setBalls(prev => 
        prev.map(ball => {
          ball.y += ball.speed

          // Check collision with paddle
          if (
            ball.y + ball.radius > canvas.height / 2 - height &&
            ball.y - ball.radius < canvas.height / 2 &&
            ball.x > x &&
            ball.x < x + width
          ) {
            setScore(s => s + 1)
            return null // Remove the ball
          }

          // Remove ball if it's out of canvas
          if (ball.y - ball.radius > canvas.height / 2) {
            return null
          }

          // Draw the ball
          ctx.beginPath()
          ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2)
          ctx.fillStyle = ball.color
          ctx.fill()
          ctx.closePath()

          // Set shadow for text
          ctx.shadowColor = 'rgba(0, 0, 0, 0.5)'
          ctx.shadowOffsetX = 1
          ctx.shadowOffsetY = 1
          ctx.shadowBlur = 2

          // Adjust font size
          const fontSize = Math.min(20, ball.radius / 2)
          ctx.font = \`bold \${fontSize}px Arial\`
          ctx.textAlign = 'center'
          ctx.textBaseline = 'middle'

          // Determine text color based on ball color
          const hsl = ball.color.match(/hsl\$$(\\d+), (\\d+)%, (\\d+)%\$$/)
          let textColor = 'white'
          if (hsl) {
            const h = parseInt(hsl[1], 10)
            const s = parseInt(hsl[2], 10)
            const l = parseInt(hsl[3], 10)
            textColor = l < 50 ? 'white' : 'black'
          }

          // Add outline to text
          ctx.strokeStyle = 'black'
          ctx.lineWidth = 2
          ctx.strokeText(ball.concept, ball.x, ball.y)

          // Fill text with appropriate color
          ctx.fillStyle = textColor
          ctx.fillText(ball.concept, ball.x, ball.y)

          // Reset shadow properties
          ctx.shadowColor = 'transparent'

          return ball
        }).filter(Boolean) as Ball[]
      )

      if (Math.random() < 0.02) createBall()

      requestAnimationFrame(animate)
    }

    animate()
    createBall()

    const handleMove = (clientX: number) => {
      const rect = canvas.getBoundingClientRect()
      const newX = (clientX - rect.left) * 2 - paddleRef.current.width / 2
      paddleRef.current.x = Math.max(0, Math.min(newX, canvas.width - paddleRef.current.width))
    }

    const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX)
    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      handleMove(e.touches[0].clientX)
    }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('touchmove', handleTouchMove)

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      setBalls([])
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('touchmove', handleTouchMove)
    }
  }, []) // Empty dependencies to run once

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gray-900 rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }} />
      <motion.div
        className="absolute top-2 left-2 bg-black bg-opacity-50 px-3 py-1 rounded-full"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-white font-bold">Score: {score}</p>
      </motion.div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-white px-6 py-3 rounded-full  bg-black bg-opacity-50 shadow-lg">
          Remix Pinball
        </h2>
      </motion.div>
    </div>
  )
}
`

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Improved Remix Concept Pinball</h1>
      <ImprovedRemixConceptPinball />
      <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
        <p>
          Catch the falling Remix concepts in this improved Pinball game! Colorful balls, each 
          representing a key Remix concept, fall from the top. Move your mouse or finger 
          across the game area to control the paddle and catch the concepts before they disappear. 
          Each caught concept increases your score. How many Remix concepts can you master?
        </p>
        <div className="font-bold">
          <p>
            TypeScript, Canvas API, Framer Motion & Interactive Gameplay
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