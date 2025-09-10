'use client'
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

export const ContactFormLogic = ({ fadeInUpVariants, containerVariants, isInView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      // Show loading toast
      const loadingToast = toast.loading('Sending your message...');

      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      // Dismiss loading toast and show success toast
      toast.dismiss(loadingToast);
      toast.success('Message sent successfully!');

      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      // Dismiss loading toast and show error toast
      toast.dismiss();
      toast.error('Failed to send message. Please try again.');
      console.error('EmailJS error:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="space-y-6"
    >
      <motion.div variants={fadeInUpVariants}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          disabled={isSending}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </motion.div>
      <motion.div variants={fadeInUpVariants}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          disabled={isSending}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        />
      </motion.div>
      <motion.div variants={fadeInUpVariants}>
        <textarea
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message"
          disabled={isSending}
          className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"
          required
        ></textarea>
      </motion.div>
      <motion.div variants={fadeInUpVariants}>
        <button
          type="submit"
          disabled={isSending}
          className="w-full bg-[#00163BD9] text-white py-3 rounded-md font-bold transition-colors duration-300 hover:bg-[#00163B] disabled:bg-gray-400"
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </motion.div>
    </motion.form>
  );
};