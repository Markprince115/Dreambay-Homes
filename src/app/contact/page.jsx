'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import ABOUT1 from '@/assets/images/about1.jpg'
import Image from 'next/image'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }

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
          {/* Left Column - Phone SVG Animation */}
          <motion.div 
            variants={fadeInUpVariants}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              {/* Phone Image Placeholder */}
              <motion.div 
                className="w-80 h-96 relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <svg viewBox="0 0 320 400" className="w-full h-full">
                  {/* Phone Background */}
                  <rect x="0" y="0" width="320" height="400" rx="20" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2"/>
                  
                  {/* Vintage Phone Body */}
                  <motion.ellipse 
                    cx="160" cy="200" rx="120" ry="100" fill="#14b8a6"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.5, duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                  />
                  <motion.ellipse 
                    cx="160" cy="200" rx="100" ry="80" fill="#0d9488"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Phone Details */}
                  <motion.circle 
                    cx="160" cy="160" r="30" fill="#ffffff" opacity="0.9"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                  />
                  <motion.circle 
                    cx="160" cy="160" r="25" fill="#065f46"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Dial Numbers */}
                  {[
                    { cx: 140, cy: 140 }, { cx: 180, cy: 140 }, { cx: 120, cy: 160 },
                    { cx: 200, cy: 160 }, { cx: 140, cy: 180 }, { cx: 180, cy: 180 }
                  ].map((pos, index) => (
                    <motion.circle 
                      key={index}
                      cx={pos.cx} cy={pos.cy} r="8" fill="#ffffff" opacity="0.7"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 0.7 }}
                      transition={{ delay: 0.9 + (index * 0.1), duration: 0.3 }}
                      viewport={{ once: true }}
                    />
                  ))}
                  
                  {/* Handset */}
                  <motion.rect 
                    x="120" y="240" width="80" height="20" rx="10" fill="#065f46"
                    initial={{ y: 280, opacity: 0 }}
                    whileInView={{ y: 240, opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                  />
                  <motion.rect 
                    x="125" y="245" width="70" height="10" rx="5" fill="#0d9488"
                    initial={{ y: 285, opacity: 0 }}
                    whileInView={{ y: 245, opacity: 1 }}
                    transition={{ delay: 1.3, duration: 0.6, type: "spring" }}
                    viewport={{ once: true }}
                  />
                  
                  {/* Phone Cord */}
                  <motion.path 
                    d="M160 260 Q140 280 160 300 Q180 320 160 340" 
                    stroke="#065f46" strokeWidth="3" fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1, ease: "easeInOut" }}
                    viewport={{ once: true }}
                  />
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.form 
            variants={containerVariants}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={fadeInUpVariants}>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Connect To Find Your Apartment
              </h2>
              <p className="text-gray-600 text-lg">
                We're here to help you find the perfect place to call home.
              </p>
            </motion.div>

            {/* Form Fields */}
            <motion.div 
              variants={containerVariants}
              className="space-y-6"
            >
              {/* Name Fields */}
              <motion.div variants={fadeInUpVariants} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First name"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last name"
                    className="w-full"
                  />
                </div>
              </motion.div>

              {/* Contact Fields */}
              <motion.div variants={fadeInUpVariants} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className="w-full"
                  />
                </div>
              </motion.div>

              {/* Property Details */}
              <motion.div variants={fadeInUpVariants} className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="propertyType" className="text-sm font-medium text-gray-700">
                    Property Type
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="studio">Studio</SelectItem>
                      <SelectItem value="1bedroom">1 Bedroom</SelectItem>
                      <SelectItem value="2bedroom">2 Bedroom</SelectItem>
                      <SelectItem value="3bedroom">3 Bedroom</SelectItem>
                      <SelectItem value="penthouse">Penthouse</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget" className="text-sm font-medium text-gray-700">
                    Budget Range
                  </Label>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                      <SelectItem value="2000-3000">$2,000 - $3,000</SelectItem>
                      <SelectItem value="over3000">Over $3,000</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div variants={fadeInUpVariants}>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about what you're looking for..."
                    rows={4}
                    className="w-full resize-none"
                  />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div variants={fadeInUpVariants}>
                <Button
                  type="submit"
                  className="w-full bg-teal-500 hover:bg-teal-600 text-white"
                >
                  Send Inquiry
                </Button>
              </motion.div>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}