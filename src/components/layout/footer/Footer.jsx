'use client'
import Image from 'next/image'
import React, { useRef } from 'react'
import LOGO from '@/assets/images/logo.png'
import { motion, useInView } from 'framer-motion'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
}

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <footer className="bg-slate-900 text-white" ref={ref}>
      {/* Main Footer Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Description */}
          <motion.div variants={fadeInUpVariants} className="lg:col-span-1">
            <div>
              <Image src={LOGO} width={40} height={40} alt='Logo' />
            </div>
            <p className="text-gray-300 leading-relaxed text-sm mt-4">
              We are committed to providing modern, well-designed, and strategically-located properties that meet the needs of today's discerning travelers and residents. Through excellent booking, personalized check and top-notch service, we make every stay effortlessly comfortable and memorable.
            </p>
          </motion.div>

          {/* Company Links */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-gray-300 hover:text-white transition-colors text-sm">
                  About us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Guest Media Links */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Guest Media</h3>
            <ul className="space-y-3">
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Property
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Blog
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Services & Contact */}
          <motion.div variants={fadeInUpVariants}>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3 mb-8">
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Short-let Property
                </a>
              </li>
              <li>
                <a href="/properties" className="text-gray-300 hover:text-white transition-colors text-sm">
                  Long-term Property
                </a>
              </li>
            </ul>

            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:info@dreambayhomes.com" className="text-gray-300 hover:text-white transition-colors text-sm">
                  info@dreambayhomes.com
                </a>
              </li>
              <li>
                <a href="tel:+234-810-7890" className="text-gray-300 hover:text-white transition-colors text-sm">
                  +234-810-7890
                </a>
              </li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="border-t border-slate-700"
      >
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div variants={fadeInUpVariants} className="text-gray-400 text-sm">
              <p>Copyright © 2024 Dreambay Homes. All rights reserved.</p>
            </motion.div>

            {/* Footer Links */}
            <motion.div variants={fadeInUpVariants} className="flex flex-wrap justify-center md:justify-end space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Cookies Settings
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Large Background Text */}
      <motion.div
        variants={fadeInUpVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <h2 className="text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-bold bg-gradient-to-r from-teal-300 via-cyan-200 to-blue-700 bg-clip-text text-transparent tracking-wider select-none">
            DREAMBAY
          </h2>
        </div>
        <div className="h-24 md:h-32 lg:h-40"></div>
      </motion.div>
    </footer>
  )
}

export default Footer
