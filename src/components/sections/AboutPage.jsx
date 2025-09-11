'use client'
import React, {useRef} from 'react'
import ABOUT1 from '@/assets/images/about1.jpg'
import ABOUT2 from '@/assets/images/about2.jpg'
import Image from 'next/image'
import { Mountain, Target } from 'lucide-react'
import { motion, useInView } from 'framer-motion'

function AboutPage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  // Optimized animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        delay: 0.6
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
    
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
        opacity: 1,
        transition: {
        staggerChildren: 0.2
        }
        }
    }
  return (
    <div className='w-full' ref={ref}>
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
                  About Us
                   <span className='block w-full max-w-[150px] mt-4'>
                    <hr className=' border-teal-500 border-2' />
                  </span>
                </motion.h1>
              </motion.div>
            </motion.section>

        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='flex flex-col w-full items-center justify-center py-16 px-4 md:px-8'
        >
            <div className='flex flex-col items-center justify-center max-w-4xl mx-auto text-center'>
               <motion.p 
                variants={fadeInUpVariants}
                className='text-neutral-800 text-base md:text-lg leading-relaxed mb-6 whitespace-pre-wrap'
                >At <b>Dreambay Homes</b>, we believe finding the perfect place to stay should feel effortless. We provide beautifully designed shortlets and fully serviced apartments that combine luxury, comfort, and convenience for today's modern lifestyle.
                </motion.p>
                <motion.p 
                variants={fadeInUpVariants}
                className='text-neutral-800 text-base md:text-lg leading-relaxed'
                >Whether you're traveling for business, leisure, or a longer retreat, our spaces are crafted to feel like home — warm, stylish, and thoughtfully equipped. With prime locations, seamless booking, and personalized service, we go beyond accommodation to create memorable experiences.
                </motion.p>
            </div>
        </motion.section>

        <motion.section 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className='w-full py-20 px-4 md:px-6'
        >
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <motion.div 
            variants={fadeInUpVariants}
            className='w-full flex justify-center order-first md:order-last'
            >
            <Image 
            src={ABOUT2} 
            alt='A beautifully decorated room' 
            className='w-full max-w-md h-auto rounded-2xl shadow-md object-cover'
            />
            </motion.div>

            <motion.div 
            variants={staggerContainer}
            className='flex flex-col space-y-12 px-2 md:px-4'
            >
            {[
                {
                icon: <Target size={30} />,
                title: "Our Vision",
                text: "To become Nigeria's leading choice for shortlets and apartment rentals, known for redefining temporary living through style, innovation, and exceptional service."
                },
                {
                icon: <Mountain size={30} />,
                title: "Our Mission",
                text: "We are committed to providing modern, well-designed, and strategically located apartments that meet the needs of business travelers, holidaymakers, and long-stay guests. Through seamless booking, personalized care, and high-quality spaces, we make every stay effortless, enjoyable, and memorable."
                },
                {
                icon: <Target size={30} />,
                title: "Core Value",
                text: "Comfort - Every space is designed with the guest's ease and relaxation in mind. Quality – From interiors to service, excellence defines everything we do. Trust – We deliver on our promise, ensuring transparency and reliability. Innovation – We adapt to modern lifestyles, offering flexible living solutions. Care – Hospitality is at our heart; we treat every guest like family."
                }
                ].map((item, index) => (
                <motion.div 
                key={index}
                variants={fadeInUpVariants}
                className='flex items-start gap-3'
                >
                <span className='text-teal-500 mt-1'>{item.icon}</span>
                <div>
                    <motion.h2 
                    variants={fadeInUpVariants}
                    className='text-2xl md:text-3xl font-bold mb-2'
                    >
                        {item.title}
                    </motion.h2>
                    <motion.p 
                    variants={fadeInUpVariants}
                    className='text-neutral-700 text-sm md:text-base'
                    >
                        {item.text}
                    </motion.p>
                    </div>
                </motion.div>
            ))}
            </motion.div>
        </div>
        </motion.section>
    </div>
  )
}

export default AboutPage
