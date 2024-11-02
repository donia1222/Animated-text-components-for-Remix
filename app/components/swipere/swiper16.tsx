'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Check, Copy } from 'lucide-react'

const tabs = [
  { 
    name: 'Code', 
    image: '/images/dev1.jpg',
    title: 'Efficient Coding',
    description: 'Write clean, efficient code with AI-powered suggestions and auto-completions.'
  },
  { 
    name: 'Plan', 
    image: '/images/dev2.jpg',
    title: 'Strategic Planning',
    description: 'Organize your projects and tasks with intelligent planning tools and insights.'
  },
  { 
    name: 'Collaborate', 
    image: '/images/dev3.jpg',
    title: 'Seamless Collaboration',
    description: 'Work together in real-time with advanced collaboration features and integrations.'
  },
  { 
    name: 'Automate', 
    image: '/images/dev1.jpg',
    title: 'Workflow Automation',
    description: 'Streamline your development process with powerful automation capabilities.'
  },
  { 
    name: 'Secure', 
    image: '/images/dev2.jpg',
    title: 'Enhanced Security',
    description: 'Protect your code and data with state-of-the-art security measures and best practices.'
  },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState(tabs[0].name)
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

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Code, Check, Copy } from 'lucide-react'

const tabs = [
  { 
    name: 'Code', 
    image: '/images/dev1.jpg',
    title: 'Efficient Coding',
    description: 'Write clean, efficient code with AI-powered suggestions and auto-completions.'
  },
  { 
    name: 'Plan', 
    image: '/images/dev2.jpg',
    title: 'Strategic Planning',
    description: 'Organize your projects and tasks with intelligent planning tools and insights.'
  },
  { 
    name: 'Collaborate', 
    image: '/images/dev3.jpg',
    title: 'Seamless Collaboration',
    description: 'Work together in real-time with advanced collaboration features and integrations.'
  },
  { 
    name: 'Automate', 
    image: '/images/dev1.jpg',
    title: 'Workflow Automation',
    description: 'Streamline your development process with powerful automation capabilities.'
  },
  { 
    name: 'Secure', 
    image: '/images/dev2.jpg',
    title: 'Enhanced Security',
    description: 'Protect your code and data with state-of-the-art security measures and best practices.'
  },
]

export default function Component() {
  const [activeTab, setActiveTab] = useState(tabs[0].name)

  return (
    <div className="bg-gradient-to-b from-slate-900/50 to-slate-900/90 flex flex-col items-center justify-center p-4 backdrop-blur-xl">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="relative inline-flex items-center bg-slate-900/50 rounded-full p-1 backdrop-blur-sm mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={\`relative px-6 py-2 text-sm font-medium transition-colors duration-200 \${
                activeTab === tab.name ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }\`}
            >
              {activeTab === tab.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-700/50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative">{tab.name}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              activeTab === tab.name && (
                <motion.img
                  key={tab.name}
                  src={tab.image}
                  alt={\`\${tab.name} illustration\`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )
            ))}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.name && (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">{tab.title}</h2>
                <p className="text-slate-300">{tab.description}</p>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
  `.trim()

  return (
    <div className="space-y-8">
 <h1 className="text-3xl font-bold mb-6 text-pink-600">Image Text Nav</h1>
 <p className="text-lg text-gray-700 mb-4">
        A dynamic and interactive tab-based navigation component showcasing different aspects of development. 
        Features smooth transitions, responsive design, and a sleek dark theme. Built with React, Framer Motion, 
        and Tailwind CSS for a modern and engaging user interface.
      </p>
    <div className="bg-gradient-to-b from-slate-900/50 to-slate-900/90 flex flex-col items-center justify-center p-4 backdrop-blur-xl">

      <div className="w-full max-w-3xl flex flex-col items-center">
        <div className="relative inline-flex items-center bg-slate-900/50 rounded-full p-1 backdrop-blur-sm mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`relative px-6 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === tab.name ? 'text-white' : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {activeTab === tab.name && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-slate-700/50 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative">{tab.name}</span>
            </button>
          ))}
        </div>
        <div className="relative w-full aspect-video rounded-lg overflow-hidden mb-4">
          <AnimatePresence mode="wait">
            {tabs.map((tab) => (
              activeTab === tab.name && (
                <motion.img
                  key={tab.name}
                  src={tab.image}
                  alt={`${tab.name} illustration`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              )
            ))}
          </AnimatePresence>
        </div>
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            activeTab === tab.name && (
              <motion.div
                key={tab.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center mb-8"
              >
                <h2 className="text-2xl font-bold text-white mb-2">{tab.title}</h2>
                <p className="text-slate-300">{tab.description}</p>
              </motion.div>
            )
          ))}
        </AnimatePresence>
        
        <div className="flex justify-center mb-4">
          <button
            onClick={toggleCode}
            className="bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 text-white font-bold py-2 px-4 rounded-full flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
          >
            <Code size={20} />
            <span>  {showCode ? 'Hide Code' : 'Show Code'}</span>
          </button>
        </div>

        <AnimatePresence>
          {showCode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full"
            >
              <pre className="bg-slate-800 p-4 rounded-lg text-sm overflow-x-auto text-slate-300">
                <code>{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-2 right-2 p-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition duration-200 transform hover:scale-105"
                aria-label="Copy code"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
    </div>
  )
}