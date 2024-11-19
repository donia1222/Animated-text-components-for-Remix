'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, Copy, Check } from 'lucide-react'

export default function ModernContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClasses = "w-full bg-gray-50 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors duration-300 py-2 px-4 text-gray-700"
  const labelClasses = "absolute left-4 transition-all duration-300 pointer-events-none text-gray-500"

  const codeString = `
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, User, Mail, MessageSquare, CheckCircle, Copy, Check } from 'lucide-react'

export default function ModernContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const inputClasses = "w-full bg-gray-50 border-b-2 border-gray-200 focus:border-teal-500 focus:outline-none transition-colors duration-300 py-2 px-4 text-gray-700"
  const labelClasses = "absolute left-4 transition-all duration-300 pointer-events-none text-gray-500"

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 to-blue-100 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <label
              htmlFor="name"
              className={\`\${labelClasses} \${
                formData.name ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }\`}
            >
              <User className="inline-block w-4 h-4 mr-2" />
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <label
              htmlFor="email"
              className={\`\${labelClasses} \${
                formData.email ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }\`}
            >
              <Mail className="inline-block w-4 h-4 mr-2" />
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={inputClasses}
            />
            <label
              htmlFor="message"
              className={\`\${labelClasses} \${
                formData.message ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }\`}
            >
              <MessageSquare className="inline-block w-4 h-4 mr-2" />
              Message
            </label>
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={\`w-full py-2 px-4 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300 \${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }\`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <motion.div
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                Send Message
                <Send className="inline-block ml-2 -mt-1 w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.button
        onClick={toggleCode}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </motion.button>

      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full max-w-4xl"
          >
            <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative">
              <pre className="text-white text-sm overflow-x-auto">
                <code>{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                aria-label="Copy code"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
`.trim()

  return (
    <div className="bg-gradient-to-br from-teal-100 to-blue-100 flex flex-col items-center justify-center p-4 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get in Touch</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <label
              htmlFor="name"
              className={`${labelClasses} ${
                formData.name ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }`}
            >
              <User className="inline-block w-4 h-4 mr-2" />
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={inputClasses}
            />
            <label
              htmlFor="email"
              className={`${labelClasses} ${
                formData.email ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }`}
            >
              <Mail className="inline-block w-4 h-4 mr-2" />
              Email
            </label>
          </div>
          <div className="relative">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className={inputClasses}
            />
            <label
              htmlFor="message"
              className={`${labelClasses} ${
                formData.message ? '-top-6 left-0 text-sm text-teal-500' : 'top-2'
              }`}
            >
              <MessageSquare className="inline-block w-4 h-4 mr-2" />
              Message
            </label>
          </div>
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition-colors duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isSubmitting ? (
              <motion.div
                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : (
              <>
                Send Message
                <Send className="inline-block ml-2 -mt-1 w-4 h-4" />
              </>
            )}
          </motion.button>
        </form>
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md flex items-center"
            >
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      <motion.button
        onClick={toggleCode}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-200"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showCode ? 'Hide Code' : 'Show Code'}
      </motion.button>

      <AnimatePresence>
        {showCode && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 w-full max-w-4xl"
          >
            <div className="bg-gray-800 rounded-lg shadow-xl p-4 relative">
              <pre className="text-white text-sm overflow-x-auto">
                <code>{codeString}</code>
              </pre>
              <button
                onClick={copyCode}
                className="absolute top-2 right-2 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200"
                aria-label="Copy code"
              >
                {copied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}