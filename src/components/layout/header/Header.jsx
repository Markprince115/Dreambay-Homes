'use client'
import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import LOGO from '@/assets/images/logo.png'
import LOGO2 from '@/assets/images/logo2.png'
import { Button } from '@/components/ui/button';

const Header = () => {
  // state for scroll detection and mobile menu
  const [menuToggle, setMenuToggle] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // handle menu toggle
  const handleToggle = (e)=>{
    e.preventDefault()
    setMenuToggle(!menuToggle)
  }

  // scroll event
  useEffect(() => {
    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  // navigation menu links
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Properties', href: '/properties', hasDropdown: true },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];
  
  // Add animation variants
  const headerVariants = {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  }

  const childVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.4
      }
    }
  }

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className={`w-full fixed flex items-center justify-between p-4 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      } transition-all duration-300 z-50`}
    >
      {/* logo image */}
      <motion.div 
        variants={childVariants}
        className='text-center'
      >
        <Link href='/'>
        {isScrolled ? (
          <Image
            src={LOGO2}
            alt="logo"
            width={120} // Adjust width as needed
            height={40} // Adjust height as needed
            className="object-contain w-[120px] h-[40px]" // Tailwind for width/height
            priority
          />
        ) : (
          <Image
            src={LOGO}
            alt="logo"
            width={120}
            height={40}
            className="object-contain w-[120px] h-[40px]"
            priority
          />
        )}
        </Link>
      </motion.div>

      {/* navigation menu - hidden on mobile and smooth animation using framer motion*/}
      <nav className='hidden md:flex items-center gap-6 font-medium'>
        <motion.div
          variants={childVariants}
          className="flex gap-6"
        >
          {navItems.map((item, index) => (
            <motion.div
              key={index}
              variants={childVariants}
              className="relative group"
            >
              <Link 
                href={item.href} 
                className={`${isScrolled ? 'text-neutral-800' : 'text-neutral-50'} hover:text-green-300 transition-colors duration-200 flex items-center gap-1`}
              >
                {item.label}
                {item.hasDropdown && <ChevronDown size={16} className={isScrolled ? 'text-neutral-800' : 'text-neutral-50'} />}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </nav>

      {/* Button and mobile menu container */}
      <motion.div 
        variants={childVariants}
        className='flex items-center justify-center gap-2'
      >
        <Link href='/contact'><Button className='hidden md:block bg-teal-500 text-neutral-50'> Book Appointment</Button></Link>
        <button
          className="md:hidden p-3 focus:outline-none z-[100] relative"
          onClick={handleToggle}
          aria-label="Toggle menu"
        >
          {/* change toggle icon color on scroll */}
          {menuToggle ? (
            <X 
              size={30} 
              className={`absolute top-3 right-3 text-black z-[100]`}
            />
          ) : (
            <Menu 
              size={30} 
              className={isScrolled ? "text-black" : "text-white"}
            />
          )}
        </button>
      </motion.div>

      {/* mobile nav menu */}
      <motion.div
        initial={false}
        animate={menuToggle ? { x: 0 } : { x: '100%' }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed top-0 right-0 h-full w-3/4 max-w-xs bg-neutral-50 shadow-lg z-[90] flex flex-col items-start pt-16 px-5 pb-5 gap-6 md:hidden`}
        style={{ pointerEvents: menuToggle ? 'auto' : 'none' }}
      >
        {navItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: menuToggle ? 1 : 0, x: menuToggle ? 0 : 20 }}
            transition={{ duration: 0.3, delay: menuToggle ? index * 0.07 : 0 }}
            className="w-full"
          >
            <Link
              href={item.href}
              className="block w-full py-3 px-4 text-lg font-medium hover:text-green-300 hover:bg-neutral-100 rounded-lg transition-all duration-200"
              onClick={() => {
                setMenuToggle(false) // Close menu after clicking
              }}
            >
              {item.label}
              {item.hasDropdown && <ChevronDown size={16} className="inline-block ml-2" />}
            </Link>
          </motion.div>
        ))}
  
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: menuToggle ? 1 : 0, x: menuToggle ? 0 : 20 }}
          transition={{ duration: 0.3, delay: menuToggle ? navItems.length * 0.07 : 0 }}
          className="w-full mt-4"
        >
          <Link href='/contact'>
            <Button className='bg-teal-500 text-neutral-50 w-full' onClick={() => setMenuToggle(false)}>
              Book Appointment
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}

export default Header