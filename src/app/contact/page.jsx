// components/contact.jsx
'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ABOUT1 from '@/assets/images/about1.jpg'
import CALL from '@/assets/images/call.jpg'
import Image from 'next/image'
import { ContactFormLogic } from '@/components/contact-form-logic'
import { Toaster } from 'sonner'
import { Mail, PhoneCall } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Optimized animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  return (
    <section ref={ref} className="bg-gray-50">
      <Toaster richColors position="top-center" />
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className='w-full h-[70dvh] relative'
      >
        <Image 
          src={ABOUT1}
          alt="Contact Hero"
          fill
          className="object-cover"
          priority
        />
        <div className='absolute inset-0 bg-[#00163BD9]' />
        <motion.div 
          variants={fadeInUpVariants}
          className='relative container mx-auto pt-[20rem] px-6'
        >
          <motion.h1 
            variants={fadeInUpVariants}
            className='text-4xl md:text-5xl font-bold text-neutral-50'
          >
            Contact Us
             <span className='block w-full max-w-[150px] mt-4'>
              <hr className=' border-teal-500 border-2' />
            </span>
          </motion.h1>
        </motion.div>
      </motion.section>

      {/* Form Section */}
      <div className="container mx-auto px-6 max-w-6xl py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column - Phone image */}
          <div>
            <motion.div 
              variants={fadeInUpVariants}
              className="flex justify-center lg:justify-start"
            >
              <Image src={CALL} width={400} height={400} alt='phone image'/>
            </motion.div>

            <div>
              <div>
                {/* call icon with call us title and number */}
                <motion.h2 
                  variants={fadeInUpVariants}
                  className="text-2xl font-bold mt-8 mb-2 flex items-center gap-4"
                ><span className='p-6 bg-green-600 text-neutral-50'><PhoneCall size={40}/></span> Call Us </motion.h2>
                <motion.p 
                  variants={fadeInUpVariants}
                  className="text-gray-700"
                > +1 (123) 456-7890 </motion.p>
                </div>

                {/* mail us icon, title,and email */}
                <div className="mt-6">
                  <motion.h2 
                    variants={fadeInUpVariants}
                    className="text-2xl font-bold mb-2 flex items-center gap-4"
                  ><span className='bg-green-600 text-neutral-50'><Mail size={30}/></span> Mail Us </motion.h2>
                  <motion.p 
                    variants={fadeInUpVariants}
                    className="text-neutral-800"
                  >
                    info@dreambayhomes.com
                  </motion.p>
                </div>
              </div>
          </div>

          {/* Right Column - Contact Form */}
          <ContactFormLogic
            fadeInUpVariants={fadeInUpVariants}
            containerVariants={containerVariants}
            isInView={isInView}
          />
        </motion.div>
      </div>
    </section>
  )
}