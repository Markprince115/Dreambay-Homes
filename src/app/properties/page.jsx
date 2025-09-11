'use client'
import React, { useRef } from 'react'
import { Lightbulb, PawPrint, ShieldCheck, Wifi } from "lucide-react";
import { Button } from '@/components/ui/button';
import ABOUT1 from '@/assets/images/about1.jpg'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import LEASE from '@/assets/images/lease.jpg'
import AIRBNB from '@/assets/images/airbnb.jpg'
import Link from 'next/link';

const Properties = () => {
  // Refs for in-view animations
  const heroRef = useRef(null)
  const leaseRef = useRef(null)
  const airbnbRef = useRef(null)
  
  // In-view hooks
  const isHeroInView = useInView(heroRef, { once: true, amount: 0.2 })
  const isLeaseInView = useInView(leaseRef, { once: true, amount: 0.2 })
  const isAirbnbInView = useInView(airbnbRef, { once: true, amount: 0.2 })

  // Optimized animation variants
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInLeftVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const fadeInRightVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  }

  const featureVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        initial="hidden"
        animate={isHeroInView ? "visible" : "hidden"}
        variants={fadeInUpVariants}
        className='w-full h-[70vh] relative'
      >
        <Image 
          src={ABOUT1}
          alt="Properties Hero"
          fill
          className="object-cover"
          priority
        />
        <div className='absolute inset-0 bg-[#00163BD9]' />
        <motion.div 
          variants={fadeInUpVariants}
          className='relative container mx-auto h-full flex items-center pt-10 px-6'
        >
          <motion.h1 
            variants={fadeInUpVariants}
            className='text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-50 text-left'
          >
            Properties
            <span className='block w-full max-w-[150px] mt-4'>
              <hr className=' border-teal-500 border-2' />
            </span>
          </motion.h1>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="container mx-auto px-8 max-w-6xl py-16">
        <div className="space-y-24">
          
          {/* Properties for Lease - Rent */}
          <motion.div 
            ref={leaseRef}
            initial="hidden"
            animate={isLeaseInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Content */}
            <motion.div variants={fadeInLeftVariants}>
              <motion.h3 
                variants={fadeInUpVariants}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Properties for Lease - Rent
              </motion.h3>
              
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-700 mb-6 leading-relaxed text-lg"
              >
                Looking for long-term stay or a space you can truly call home?
              </motion.p>
              
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-700 mb-8 leading-relaxed"
              >
                Our Lease & Rent collection offers a variety of modern apartments tailored to our lifestyle. From luxury living to standard rooms, find your perfect home with all the necessary comfort, security and prime location.
              </motion.p>

              {/* Features */}
              <motion.div 
                variants={fadeInUpVariants}
                className="mb-8"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  Features: 
                  <span className='flex-1 max-w-[300px]'>
                    <hr className='border-t-2 border-teal-500'/>
                  </span>
                </h4>
                <motion.div 
                  variants={containerVariants}
                  className="flex flex-wrap gap-6"
                >
                  {[
                    { icon: ShieldCheck, text: "Security" },
                    { icon: Lightbulb, text: "Stable Electricity" },
                    { icon: PawPrint, text: "Pet-friendly" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={featureVariants}
                      className="flex items-center space-x-2"
                    >
                      <feature.icon className="w-5 h-5 text-teal-500" />
                      <span className="text-neutral-800">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUpVariants}>
                <Link href='/contact'>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Book an Appointment
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div 
              variants={fadeInRightVariants}
              className="lg:order-last"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={LEASE}
                  width={600}
                  height={400}
                  alt="Modern apartment building for long-term rent"
                  className="w-full h-auto transition-transform duration-500 hover:scale-105"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Properties for Short-let - Airbnb */}
          <motion.div 
            ref={airbnbRef}
            initial="hidden"
            animate={isAirbnbInView ? "visible" : "hidden"}
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            {/* Image - appears first on large screens */}
            <motion.div 
              variants={fadeInLeftVariants}
              className="lg:order-1"
            >
              <div className="relative overflow-hidden rounded-lg shadow-xl">
                <Image
                  src={AIRBNB}
                  width={600}
                  height={400}
                  alt="Luxury short-term rental suite"
                  className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>

            {/* Content - appears second on large screens */}
            <motion.div 
              variants={fadeInRightVariants}
              className="lg:order-2"
            >
              <motion.h3 
                variants={fadeInUpVariants}
                className="text-3xl font-bold text-gray-800 mb-6"
              >
                Properties for Short-let - Airbnb
              </motion.h3>
              
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-700 mb-6 leading-relaxed text-lg"
              >
                Need a space for a few nights, weeks or months?
              </motion.p>
              
              <motion.p 
                variants={fadeInUpVariants}
                className="text-gray-700 mb-8 leading-relaxed"
              >
                Our Short-let & Airbnb collection is designed for business travelers, tourists and anyone looking for a premium stay experience. Whether for work or leisure, enjoy modern amenities, stylish interiors, prime locations, and truly stellar hospitality in every space that makes it feel just like home.
              </motion.p>

              {/* Features */}
              <motion.div 
                variants={fadeInUpVariants}
                className="mb-8"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  Features: 
                  <span className='flex-1 max-w-[300px]'>
                    <hr className='border-t-2 border-teal-500'/>
                  </span>
                </h4>
                <motion.div 
                  variants={containerVariants}
                  className="flex flex-wrap gap-6"
                >
                  {[
                    { icon: ShieldCheck, text: "Security" },
                    { icon: Lightbulb, text: "Stable Electricity" },
                    { icon: PawPrint, text: "Pet-Friendly" },
                    { icon: Wifi, text: "Free WiFi" }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      variants={featureVariants}
                      className="flex items-center space-x-2"
                    >
                      <feature.icon className="w-5 h-5 text-teal-500" />
                      <span className="text-neutral-800">{feature.text}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div variants={fadeInUpVariants}>
                <Link href='/'>
                  <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-md font-medium transition-all duration-300 hover:shadow-lg hover:scale-105">
                    Book an Appointment
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Properties