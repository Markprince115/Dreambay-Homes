'use client'
import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const Faq = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const faqItems = [
    {
      question: "What amenities are included in your serviced apartments?",
      answer: "Our serviced apartments come fully furnished and equipped with modern amenities including high-speed Wi-Fi, flat-screen TVs, fully-equipped kitchens, laundry facilities, and 24/7 customer support to ensure a comfortable and convenient stay."
    },
    {
      question: "How does the booking process work?",
      answer: "Booking with us is simple and straightforward. click on book an appointment to discuss with us."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Our cancellation policy varies depending on the type of booking and the specific apartment. Generally, we offer flexible cancellation options, but we recommend reviewing the terms and conditions at the time of booking for detailed information."
    },
    {
      question: "Do you offer long-term stays?",
      answer: "Yes, we offer special rates and packages for long-term stays. Whether you're staying for a month or several months, we can provide comfortable and affordable accommodation options tailored to your needs."
    },
    {
      question: "Are your apartments pet-friendly?",
      answer: "We understand that pets are part of the family. Please contact us directly to discuss our pet policy and any additional requirements or fees that may apply for your furry companions during your stay."
    },
    {
      question: "Do you have parking spaces available?",
      answer: "Yes, we provide secure parking facilities for our guests. Parking availability and arrangements vary by location, so we recommend confirming parking options when making your reservation."
    },
    {
      question: "What if I have issues during my stay?",
      answer: "We provide 24/7 customer support to ensure your comfort throughout your stay. You can reach our dedicated support team via phone, email, or through our mobile app for any concerns or assistance you may need."
    },
    {
      question: "What safety measures do you have in place?",
      answer: "We prioritize the safety and security of our guests. Our apartments are equipped with modern security systems, including surveillance cameras, and regular safety inspections. Additionally, we follow strict cleaning protocols to ensure a safe and hygienic environment."
    }
  ]

  return (
    <section ref={ref} className="py-20 bg-neutral-50">
      <motion.div 
        variants={staggerContainer}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="container mx-auto max-w-4xl px-6"
      >
        {/* Section header */}
        <motion.div 
          variants={fadeInUpVariants}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-neutral-600">Find answers to common questions about our services</p>
        </motion.div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </section>
  )
}

export default Faq
