'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarIcon, Clock, Users, Utensils, Code, Copy, Check } from 'lucide-react'

export default function RestaurantReservation() {
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')
  const [guests, setGuests] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setDate(new Date())
      setTime('')
      setGuests('')
      setName('')
      setEmail('')
    }, 5000)
  }

  const generateTimeOptions = () => {
    const options = []
    for (let i = 17; i <= 23; i++) {
      options.push(<option key={i} value={`${i}:00`}>{`${i}:00`}</option>)
    }
    return options
  }

  const toggleCode = () => setShowCode(!showCode)

  const copyCode = () => {
    navigator.clipboard.writeText(codeString)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const codeString = `
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CalendarIcon, Clock, Users, Utensils, Code, Copy, Check } from 'lucide-react'

export default function RestaurantReservation() {
  const [date, setDate] = useState<Date>(new Date())
  const [time, setTime] = useState<string>('')
  const [guests, setGuests] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setDate(new Date())
      setTime('')
      setGuests('')
      setName('')
      setEmail('')
    }, 5000)
  }

  const generateTimeOptions = () => {
    const options = []
    for (let i = 17; i <= 23; i++) {
      options.push(<option key={i} value={\`\${i}:00\`}>\`\${i}:00\`</option>)
    }
    return options
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-orange-200 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-800">Book a Table</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="date" className=" text-orange-800 font-medium flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Select Date
            </label>
            <div className="flex justify-center">
              <input
                type="date"
                id="date"
                value={date.toISOString().split('T')[0]}
                onChange={(e) => setDate(new Date(e.target.value))}
                className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="time" className=" text-orange-800 font-medium flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Select Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a time</option>
              {generateTimeOptions()}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className=" text-orange-800 font-medium flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select number of guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num.toString()}>{num}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-orange-800 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-orange-800 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={\`w-full p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center \${
                (isSubmitting || isSubmitted) ? 'opacity-50 cursor-not-allowed' : ''
              }\`}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : isSubmitted ? (
                'Reservation Confirmed!'
              ) : (
                <>
                  Book Now
                  <Utensils className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </motion.div>
        </form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center"
          >
            Your reservation has been confirmed. We look forward to seeing you!
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
  `.trim()

  return (
    <div className=" bg-gradient-to-br from-amber-100 to-orange-200 flex flex-col items-center justify-center p-4 mt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-800">Book a Table</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="date" className=" text-orange-800 font-medium flex items-center justify-center">
              <CalendarIcon className="w-5 h-5 mr-2" />
              Select Date
            </label>
            <div className="flex justify-center">
              <input
                type="date"
                id="date"
                value={date.toISOString().split('T')[0]}
                onChange={(e) => setDate(new Date(e.target.value))}
                className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="time" className=" text-orange-800 font-medium flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              Select Time
            </label>
            <select
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select a time</option>
              {generateTimeOptions()}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="guests" className=" text-orange-800 font-medium flex items-center">
              <Users className="w-5 h-5 mr-2" />
              Number of Guests
            </label>
            <select
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="">Select number of guests</option>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                <option key={num} value={num.toString()}>{num}</option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="name" className="block text-orange-800 font-medium">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-orange-800 font-medium">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-orange-200 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full p-2 bg-orange-500 hover:bg-orange-600 text-white rounded-md transition-colors duration-200 flex items-center justify-center ${
                (isSubmitting || isSubmitted) ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <motion.div
                  className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                />
              ) : isSubmitted ? (
                'Reservation Confirmed!'
              ) : (
                <>
                  Book Now
                  <Utensils className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </motion.div>
        </form>

        {isSubmitted && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-md text-center"
          >
            Your reservation has been confirmed. We look forward to seeing you!
          </motion.div>
        )}
      </motion.div>
      
      <motion.button
        onClick={toggleCode}
        className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-colors duration-200 flex items-center"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Code className="mr-2" />
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