'use client'
import React, { useRef } from 'react'
import HEROBG from '@/assets/images/herobg.jpg'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section 
      ref={ref}
      className='w-full h-screen bg-cover bg-center relative' 
      style={{backgroundImage: `url(${HEROBG.src})`, width: '100%', height: '100vh'}}
    >
      <div className='absolute inset-0 bg-[#00163BD9]'></div>
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUpVariants}
        transition={{ duration: 0.5 }}
        className='relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4'
      >
        <motion.p 
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.2 }}
          className='border border-green-300/40 bg-transparent text-center my-2 px-7 py-2 text-sm text-neutral-50 rounded-full'
        >
          LUXURY REAL ESTATE
        </motion.p>

        <motion.h1 
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-4xl md:text-6xl font-bold mb-4'
        >
          Your Perfect Balance of Comfort, <br/> Class and Convenience.
        </motion.h1>

        <motion.p 
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg md:text-sm text-white/70 max-w-2xl mx-auto mb-7 leading-relaxed"
        >
          We believe every stay should feel effortless. That's why Dreambay Homes offers fully serviced apartments in prime locations — giving you a home that works for your lifestyle.
        </motion.p>

        <motion.div
          variants={fadeUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button href="/" className='bg-green-300/60 text-white py-3 px-6 rounded-lg'>
            Book an Appointment
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
