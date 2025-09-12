'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import ABOUT1 from '@/assets/images/about1.jpg'
import ABOUT2 from '@/assets/images/about2.jpg'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section ref={ref} className='w-full bg-white py-20'>
      <div className='container mx-auto max-w-6xl px-4'>
        {/* section title */}
        <motion.div 
          variants={fadeInUpVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className='flex items-center gap-4 mb-12'
        >
          <h2 className='text-2xl font-bold'>About</h2>
          <div className='flex-1 max-w-[100px]'>
            <hr className='border-t-2 border-teal-500'/>
          </div>
        </motion.div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          {/* first col */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.2 }}
            className='space-y-6 md:mt-0 mt-8 w-full max-w-[600px]'
          >
            <motion.div 
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: 0.4 }}
              className='relative w-full aspect-[4/3] overflow-hidden'
            >
              <Image 
                src={ABOUT1} 
                alt='Luxury living space'
                width={600}
                height={450}
                className='object-cover rounded-2xl w-full h-full'
                priority
              />
            </motion.div>
            <motion.div 
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
              className='relative w-[85%] aspect-[3/2] overflow-hidden ml-auto'
            >
              <Image 
                src={ABOUT2}
                alt='Modern interior'
                width={500}
                height={333}
                className='object-cover rounded-2xl w-full h-full'
              />
            </motion.div>
          </motion.div>

          {/* second cols */}
          <motion.div 
            variants={fadeInUpVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.8, delay: 0.4 }}
            className='space-y-4'
          >
            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              At Dreambay Homes, we believe finding the perfect place to stay should feel effortless. We provide beautifully designed shortlets and fully serviced apartments that combine luxury, comfort, and convenience for today's modern lifestyle.
            </motion.p>
            <motion.p
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Whether you're traveling for business, leisure, or a longer retreat, our spaces are crafted to feel like home — warm, stylish, and thoughtfully equipped. With prime locations, seamless booking, and personalized service, we go beyond accommodation to create memorable experiences.
            </motion.p>
            <motion.div
              variants={fadeInUpVariants}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <Link href="/about" aria-label="Read more about us">
                <Button variant="default" className='bg-teal-500 text-neutral-50'> 
                  Read More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About