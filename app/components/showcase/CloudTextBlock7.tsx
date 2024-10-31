'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const remixTerms = [
  'Remix', 'React', 'Router', 'Loader', 'Action', 'Form', 'Outlet', 'Link',
  'useParams', 'useLoaderData', 'useFetcher', 'ErrorBoundary', 'CatchBoundary',
  'Meta', 'Links', 'Scripts', 'LiveReload', 'json', 'redirect', 'Response'
]

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(240, 248, 255, 0.1)' // Very light blue with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#4299e1' // Blue color for the text
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = remixTerms[Math.floor(Math.random() * remixTerms.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 bg-white bg-opacity-70 px-6 py-3 rounded-full shadow-lg">
          Remix Magic
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

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

const remixTerms = [
  'Remix', 'React', 'Router', 'Loader', 'Action', 'Form', 'Outlet', 'Link',
  'useParams', 'useLoaderData', 'useFetcher', 'ErrorBoundary', 'CatchBoundary',
  'Meta', 'Links', 'Scripts', 'LiveReload', 'json', 'redirect', 'Response'
]

const CodeRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const columns = Math.floor(canvas.width / 20)
    const drops: number[] = new Array(columns).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(240, 248, 255, 0.1)' // Very light blue with high transparency
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#4299e1' // Blue color for the text
      ctx.font = '15px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = remixTerms[Math.floor(Math.random() * remixTerms.length)]
        ctx.fillText(text, i * 20, drops[i] * 20)

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }
    }

    const interval = setInterval(draw, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden bg-gradient-to-b from-blue-100 to-white rounded-lg shadow-inner">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h2 className="text-4xl font-bold text-blue-600 bg-white bg-opacity-70 px-6 py-3 rounded-full shadow-lg">
          Remix Magic
        </h2>
      </motion.div>
    </div>
  )
}

export default CodeRain`

  return (
    <div className="container mx-auto px-4 ">
      <h1 className="text-3xl font-bold mb-6 text-pink-600">Remix Code Rain</h1>
      <CodeRain />
      <div className="mt-6 text-center text-gray-600 max-w-2xl mx-auto">
          <p>
            Experience the flow of Remix concepts in this mesmerizing code rain animation. 
            Watch as Remix-related terms cascade down the screen, creating a dynamic and 
            engaging visual representation of the Remix ecosystem.
          </p>
          <div className="font-bold">
          <p>
            TypeScript & Canvas API
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