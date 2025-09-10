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
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
    },
    {
      question: "How does the booking process work?",
      answer: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto."
    },
    {
      question: "Do you offer long-term stays?",
      answer: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est."
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
      answer: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati."
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
