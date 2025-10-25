"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import HamburgerButton from "./HamburgerButton";
import { menu } from "../../constant/home";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const toggleMenu = () => setIsVisible(!isVisible);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 border-b border-my-gray/30 bg-my-white/80 backdrop-blur-sm transition-all duration-300 ${
        scrolled ? "shadow-md" : "shadow-none"
      }`}>
      <div className='mx-auto flex h-16 w-full max-w-[1200px] items-center justify-between px-4 py-1 relative'>
        {/* Logo */}
        <Link href='/' className='flex items-center gap-3 group'>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className='flex items-center'>
            <Image
              src={"/assets/logo-dark.png"}
              width={70}
              height={70}
              alt='logo'
              className='object-cover transition-transform duration-300 group-hover:rotate-6'
            />
          </motion.div>
        </Link>

        {/* Hamburger for mobile */}
        <div className='md:hidden z-50 relative'>
          <HamburgerButton onClick={toggleMenu} open={isVisible} />
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex md:w-[72%] gap-3 lg:w-[65%] md:flex-row md:items-center md:justify-end space-x-6 rtl:space-x-reverse'>
          {menu.map((item) => (
            <motion.li
              key={item.href}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className='relative group'>
              <Link
                href={item.href}
                className='transition-all flex items-center gap-2 duration-200 hover:text-my-blue'>
                <item.icon />
                {item.title}
              </Link>
              <motion.span
                layoutId='underline'
                className='absolute bottom-0 left-0 h-[2px] w-0 bg-my-blue group-hover:w-full transition-all duration-300'
              />
            </motion.li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key='mobileMenu'
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className='absolute top-16 left-0 flex flex-col justify-between z-40 h-[calc(100vh-4rem)] pb-20 w-full bg-my-white text-my-light md:hidden shadow-xl border-t border-my-gray/20'>
              <motion.ul
                initial='closed'
                animate='open'
                exit='closed'
                variants={{
                  open: {
                    transition: { staggerChildren: 0.05, delayChildren: 0.1 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.03, staggerDirection: -1 },
                  },
                }}
                className='flex flex-col items-start space-y-6 px-4 py-6'>
                {menu.map((item) => (
                  <motion.li
                    key={item.href}
                    variants={{
                      open: { opacity: 1, x: 0 },
                      closed: { opacity: 0, x: -20 },
                    }}
                    transition={{ duration: 0.25 }}
                    onClick={() => setIsVisible(false)}
                    className='w-full border-b text-my-blue border-my-blue/10 pb-2 flex items-center gap-2'>
                    <item.icon className='' />
                    <Link
                      href={item.href}
                      className='block text-sm md:text-base hover:text-my-blue transition-colors duration-150'>
                      {item.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div
                initial='closed'
                animate='open'
                exit='closed'
                variants={{
                  open: {
                    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                  },
                  closed: {
                    transition: { staggerChildren: 0.05, staggerDirection: -1 },
                  },
                }}
                className='text-left font-serif font-semibold mb-12 text-3xl md:text-5xl leading-tight space-y-1 pl-3'>
                {["LET'S DESIGN", "CLEAN", "BEAUTIFUL"].map((text, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      open: { opacity: 1, y: 0, scale: 1 },
                      closed: { opacity: 0, y: 30, scale: 0.95 },
                    }}
                    transition={{
                      duration: 0.6,
                      ease: [0.25, 0.1, 0.25, 1],
                      delay: i * 0.1,
                    }}
                    className='bg-gradient-to-r from-[#2b4c7e]  to-my-white bg-clip-text text-transparent drop-shadow-sm tracking-wide'>
                    {text}
                  </motion.p>
                ))}

                {/* Elegant underline accent */}
                <motion.div
                  initial={{ width: 0, opacity: 0 }}
                  animate={{ width: "60%", opacity: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className='mt-4 h-[2px] bg-gradient-to-r mr-auto from-[#2b4c7e] to-[#a9bdd9] rounded-full'
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Header;
