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
  
  return (
    <header className={"w-full fixed flex items-center justify-between p-4" + (isScrolled ? " bg-white shadow-md" : " bg-transparent") + " transition-all duration-300 z-50"}>
        {/* logo image */}
        {/* change logo image on scroll */}
        <div className=' text-center'>
          {isScrolled ? (
            <Image src={LOGO2} alt="logo" className="w-30 object-contain"/>
          ):(
            <Image src={LOGO} alt="logo" className="w-30 object-contain"/>
          )}
        </div>

        {/* navigation menu - hidden on mobile and smooth animation using framer motion*/}
        <nav className='hidden md:flex items-center gap-6 font-medium'>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="flex gap-6"
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
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

        {/* mobile menu button */}
        <div className='flex items-center justify-center gap-2'>
          <Button className='hidden md:block bg-teal-500 text-neutral-50'> Book Appointment</Button>
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
        </div>

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
            <Button className='bg-teal-500 text-neutral-50 w-full' onClick={() => setMenuToggle(false)}>
              Book Appointment
            </Button>
          </motion.div>
        </motion.div>
    </header>
  )
}

export default Header