'use client'


import { motion } from 'framer-motion'
import CloudTextBlock1d from '~/components/swipere/swiper1'
import CloudTextBlock2d from '~/components/swipere/swiper12'
import CloudTextBlock3d from '~/components/swipere/swiper13'
import CloudTextBlock4d from '~/components/swipere/swiper14'
import CloudTextBlock5d from '~/components/swipere/swiper15'



const components = [
  { name: '', Component: CloudTextBlock1d, description: 'A dynamic cloud-like text animation with gradient colors.' },
  { name: '', Component: CloudTextBlock2d, description: 'A dynamic cloud-like text animation with gradient colors.' },
  { name: '', Component: CloudTextBlock3d, description: 'A dynamic cloud-like text animation with gradient colors.' },
  { name: '', Component: CloudTextBlock4d, description: 'A dynamic cloud-like text animation with gradient colors.' },
  { name: '', Component: CloudTextBlock5d, description: 'A dynamic cloud-like text animation with gradient colors.' },

]

export default function Index() {


  return (
    <div className="">



        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4 text-center text-blue-900">Modern Carousel</h2>
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
  
            </div>
          </motion.div>
        ))}


      <footer className="bg-blue-200 bg-opacity-50 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mt-2 text-sm text-blue-600">Crafted with care for developers and designers alike.</p>
        </div>
      </footer>
    </div>
  )
}