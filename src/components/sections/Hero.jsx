'use client'
import React, { useRef } from 'react'
import HEROBG from '@/assets/images/herobg.jpg'
import { Button } from '@/components/ui/button'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const Hero = () => {
  const ref = useRef(null)
  // Trigger the animation when 50% of the section is in view
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  // Parent container variants to orchestrate animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger children animations by 0.2s
      },
    },
  }

  // Child item variants for the fade-up effect
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" 
      }
    },
  }

  return (
    <section
      ref={ref}
      className='relative h-screen w-full bg-cover bg-center'
      style={{ backgroundImage: `url(${HEROBG.src})` }}
    >
      {/* Background Overlay */}
      <div className='absolute inset-0 bg-blue-950/80'></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className='relative z-10 flex h-full flex-col items-center justify-center p-4 text-center text-white'
      >
        <motion.p
          variants={itemVariants}
          className='mb-4 rounded-full border border-green-300/40 bg-transparent px-6 py-2 text-sm'
        >
          LUXURY REAL ESTATE
        </motion.p>

        <motion.h1
          variants={itemVariants}
          className='mb-4 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl md:text-6xl'
        >
          Your Perfect Balance of Comfort, Class and Convenience.
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mb-8 max-w-2xl text-base text-white/80 md:text-lg"
        >
          We believe every stay should feel effortless. That's why Dreambay Homes
          offers fully serviced apartments in prime locations — giving you a home
          that works for your lifestyle.
        </motion.p>

        <motion.div variants={itemVariants}>
          <Link href='/contact'>
            <Button className='rounded-lg bg-green-300/60 px-8 py-6 text-base font-semibold text-white transition hover:bg-green-300/80'>
              Book an Appointment
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero