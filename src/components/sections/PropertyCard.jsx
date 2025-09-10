'use client'
import React, { useRef } from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'

const PropertyCard = ({
    image,
    title,
    description,
    features,
    buttonText,
    buttonColor = "bg-teal-500 hover:bg-teal-600"}) => {
    
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <motion.div 
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={fadeInUpVariants}
      transition={{ duration: 0.5 }}
      className="w-[400px] flex flex-col rounded-lg shadow-md p-4 bg-white"
    >
      {/* image */}
      <motion.div 
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full"
      >
        <Image 
          src={image} 
          width={400} 
          height={250} 
          alt={title} 
          className="object-cover rounded-md" 
        />
      </motion.div>

      {/* card content */}
      <motion.div 
        variants={fadeInUpVariants}
        transition={{ duration: 0.5, delay: 0.3 }}
        className='mt-4 flex flex-col flex-grow'
      >
        {/* card title */}
        <motion.h2 
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.4 }}
          className='text-left font-bold text-xl mb-2'
        >
          {title}
        </motion.h2>
        <motion.p 
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='text-neutral-500 text-sm leading-relaxed min-h-[60px]'
        >
          {description}
        </motion.p>

        {/* card features */}
        <motion.div 
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.6 }}
          className='mt-2 flex flex-col flex-grow'
        >
          <span className='border border-teal-500 rounded-full px-5 py-1 font-semibold text-sm inline-block w-fit'>
            Features:
          </span>
          {/* features */}
          <div className="grid grid-cols-2 gap-3 mt-3 mb-4">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                variants={fadeInUpVariants}
                transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
                className="flex items-center gap-2"
              >
                {feature.icon}
                <span className="text-sm text-neutral-600">{feature.label}</span>
              </motion.div>
            ))}
          </div>
          <motion.div 
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-auto"
          >
          <Link href='/contact'>
            <Button className={`w-full text-white mt-2 ${buttonColor}`}>
              {buttonText}
            </Button>
          </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default PropertyCard
