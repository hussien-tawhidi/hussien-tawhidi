"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaGithub } from "react-icons/fa";
const contactItems = [
  {
    icon: FaEnvelope,
    label: "ایمیل:",
    value: "hussientawhidi710@gmail.com",
    href: "mailto:hussientawhidi710@gmail.com",
  },
  {
    icon: FaPhoneAlt,
    label: "شماره تماس:",
    value: "00989932268115",
    href: "tel:+989932268115",
  },
  {
    icon: FaGithub,
    label: "گیت‌هاب:",
    value: "github.com/hussien-tawhidi",
    href: "https://github.com/hussien-tawhidi",
    target: "_blank",
  },
];
export default function ContactPage() {
  return (
    <div
      dir='rtl'
      className='min-h-screen py-20 mt-10 bg-my-white px-6 text-my-light'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-center mb-12'>
        <h1 className='text-4xl font-bold text-right mb-3 text-my-light'>
          ارتباط با من
        </h1>
        <p className='max-w-2xl md:mx-auto text-sm text-right'>
          خوشحال می‌شوم از شما بشنوم! اگر سؤال، پیشنهاد یا درخواستی دارید، لطفاً
          از طریق فرم زیر یا اطلاعات تماس با من در ارتباط باشید.
        </p>
      </motion.div>

      {/* Content Grid */}
      <div className='max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10'>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='rounded-2xl p-8'>
          <h2 className='md:text-3xl text-xl font-bold md:mb-8 mb-3 flex items-center gap-2'>
            اطلاعات تماس
          </h2>

          <ul className='md:space-y-5 space-y-3'>
            {contactItems.map((item, index) => (
              <li key={index} className='flex items-center gap-3 group'>
                <item.icon className='text-my-light text-xl group-hover:scale-110 transition-transform duration-300' />
                <span>
                  <strong className='md:flex hidden'>{item.label}</strong>{" "}
                  <Link
                    href={item.href}
                    target={item.target || "_self"}
                    className='text-my-light hover:underline transition-colors'>
                    {item.value}
                  </Link>
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className='rounded-2xl shadow-md md:p-8 p-3 space-y-6'
          onSubmit={(e) => e.preventDefault()}>
          <h2 className='text-2xl font-semibold mb-4 text-my-light'>
            ارسال پیام
          </h2>

          <div>
            <input
              type='text'
              placeholder='نام خود را وارد کنید'
              className='w-full px-4 py-3 rounded-lg border-b border-my-gray/30 focus:outline-none focus:ring-2 focus:ring-my-gray transition'
            />
          </div>

          <div>
            <input
              type='email'
              placeholder='ایمیل خود را وارد کنید'
              className='w-full px-4 py-3 rounded-lg border-b border-my-gray/30 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
            />
          </div>

          <div>
            <textarea
              placeholder='متن پیام خود را بنویسید...'
              rows={4}
              className='w-full px-4 py-3 rounded-lg border border-my-gray/50 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.2 }}
            className='w-full py-3 rounded-lg border border-my-blue text-my-light font-semibold transition'>
            ارسال پیام
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
}
