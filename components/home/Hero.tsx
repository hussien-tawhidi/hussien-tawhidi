"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiMessageDetail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa6";
import { IoPhonePortraitOutline } from "react-icons/io5";
import TypingText from "./HeroTextTyping";

export const heroContact = [
  {
    id: 1,
    link: "https://wa.me/93700123456", // ✅ WhatsApp link — replace with your number (e.g., +93 for Afghanistan)
    icon: FaWhatsapp,
  },
  {
    id: 2,
    link: "tel:+93700123456", // ✅ Click-to-call phone number
    icon: IoPhonePortraitOutline,
  },
  {
    id: 3,
    link: "mailto:info@clarityweb.com", // ✅ Email message link
    icon: BiMessageDetail,
  },
];

export default function Hero() {
  return (
    <>
      {/* large screen */}
      <div className='md:flex hidden'>
        <section className='relative  h-screen w-full overflow-hidden'>
          {/* Background Image */}
          <motion.div
            className='absolute inset-0'
            initial={{ scale: 1 }}
            animate={{ scale: 1.05, x: 20 }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}>
            <Image
              src='/assets/hero-bg.jpg'
              alt='Clarity Background'
              fill
              priority
              className='object-cover object-center'
            />
          </motion.div>
        </section>
      </div>
      {/* small screen */}
      <div className='md:hidden flex'>
        <section className='relative h-screen w-full overflow-hidden'>
          {/* Background Image */}
          <motion.div
            className='absolute inset-0'
            initial={{ scale: 1 }}
            animate={{ scale: 1.1 }}
            transition={{
              duration: 15,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}>
            <Image
              src='/assets/sm-poster.jpg'
              alt='Clarity Background'
              width={1000}
              height={1000}
              className='object-cover w-full h-full object-center'
            />
          </motion.div>
          {/* Centered Text */}
          <div className='relative z-[2] flex h-full flex-col items-center justify-center text-center px-6'>
            <div className='overflow-hidden flex flex-col w-[80%] p-3 rounded-xl mr-auto text-left filter backdrop-blur-xs'>
              <motion.h1
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className='text-3xl md:text-7xl text-left mr-auto font-extrabold tracking-wider text-[#2b4c7e]'>
                تمیز و شیک
              </motion.h1>

              {/* 3-line description */}
              <TypingText />
            </div>
            <div className='w-full h-16 filter backdrop-blur-sm flex px-3 items-center justify-between absolute bottom-0 left-0 right-0'>
              <div className='flex items-center gap-2'>
                {heroContact.map((item) => (
                  <Link
                    href={item.link}
                    key={item.id}
                    className='text-xl bg-my-white text-my-light p-2 rounded-full'>
                    {<item.icon />}
                  </Link>
                ))}
              </div>
              <button className='px-4 py-1 rounded-xl bg-my-blue text-my-white text-xs'>
                مشاوره
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
