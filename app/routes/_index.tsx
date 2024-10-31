'use client'

import { useState } from 'react'
import { Link } from '@remix-run/react'
import { ArrowLeft, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import CloudTextBlock from '~/components/showcase/CloudTextBlock'
import CloudTextBlock2 from '~/components/showcase/CloudTextBlock2'
import CloudTextBlock3 from '~/components/showcase/CloudTextBlock3'
import CloudTextBlock4 from '~/components/showcase/CloudTextBlock4'
import CloudTextBlock5 from '~/components/showcase/CloudTextBlock5'
import CloudTextBlock6 from '~/components/showcase/CloudTextBlock6'
import CloudTextBlock7 from '~/components/showcase/CloudTextBlock7'
import CloudTextBlock8 from '~/components/showcase/CloudTextBlock8'

const components = [
  { name: '', Component: CloudTextBlock, description: 'A dynamic cloud-like text animation with gradient colors.' },
  { name: '', Component: CloudTextBlock4, description: 'Text with a prismatic color effect that changes over time.' },
  { name: '', Component: CloudTextBlock5, description: 'Animated particles floating around key phrases.' },
  { name: '', Component: CloudTextBlock3, description: 'Text with a glitch effect, perfect for a cyberpunk aesthetic.' },
  { name: '', Component: CloudTextBlock6, description: 'Smooth text morphing animation between different phrases.' },
  { name: '', Component: CloudTextBlock2, description: 'Text with a flowing gradient animation resembling waves.' },
  { name: '', Component: CloudTextBlock7, description: 'Text with a flowing gradient animation resembling waves.' },
  { name: '', Component: CloudTextBlock8, description: 'Text with a flowing gradient animation resembling waves.' },
]

export default function Index() {
  const [activeComponent, setActiveComponent] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-white text-blue-800 relative overflow-auto">


      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-900">Welcome to Remix Text Animation</h2>
          <p className="text-xl mb-8 text-center max-w-3xl mx-auto text-blue-700">
            Dive into the world of dynamic text animations. Each component below showcases a unique way to bring your text to life. 
            From cloud-like formations to glitch effects, explore how these animations can enhance your web projects.
          </p>
        </motion.div>

        {components.map(({ name, Component, description }, index) => (
          <motion.div
            key={index}
            className="mb-12 bg-white shadow-lg overflow-hidden sm:rounded-lg transition-all hover:shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center bg-blue-50">
              <h2 className="text-2xl leading-6 font-semibold text-blue-900">{name}</h2>

            </div>
            <div className="border-t border-blue-100">
              <div className="px-4 py-5 sm:p-6 bg-white">
                <Component />
              </div>
              {activeComponent === index && (
                <div className="px-4 py-4 sm:px-6 bg-blue-50">
                  <p className="text-sm text-blue-700">{description}</p>
                  <pre className="mt-2 bg-white p-4 rounded-md overflow-x-auto border border-blue-200">
                    <code className="text-sm text-blue-800">
                      {`// Code for ${name}\n// Add actual component code here`}
                    </code>
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </main>

      <footer className="bg-blue-200 bg-opacity-50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-2 text-sm text-blue-600">Crafted with care for developers and designers alike.</p>
        </div>
      </footer>
    </div>
  )
}