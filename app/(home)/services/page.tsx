"use client";

import { motion } from "framer-motion";
import {
  FaCode,
  FaServer,
  FaMobileAlt,
  FaPaintBrush,
  FaCameraRetro,
  FaPenNib,
  FaBrush,
} from "react-icons/fa";

const services = [
  // 💻 توسعه وب و اپلیکیشن
  {
    icon: <FaCode />,
    title: "توسعه وب",
    desc: "طراحی و پیاده‌سازی وب‌سایت‌های واکنش‌گرا و بهینه برای موتورهای جستجو با استفاده از React، Next.js و Tailwind CSS.",
  },
  {
    icon: <FaServer />,
    title: "توسعه بک‌اند",
    desc: "ساخت APIها و سیستم‌های قدرتمند سمت سرور با Node.js، Express و MongoDB.",
  },
  {
    icon: <FaMobileAlt />,
    title: "طراحی واکنش‌گرا",
    desc: "طراحی رابط‌هایی که در تمامی اندازه‌های صفحه‌نمایش، زیبا و سازگار نمایش داده می‌شوند.",
  },

  // 🎨 طراحی گرافیک و برندینگ
  {
    icon: <FaPaintBrush />,
    title: "برندسازی و هویت بصری",
    desc: "طراحی پالت رنگی، تایپوگرافی و عناصر بصری برای ایجاد هویت منحصربه‌فرد برند.",
  },
  {
    icon: <FaPenNib />,
    title: "طراحی لوگو",
    desc: "ساخت لوگوهای خلاقانه، معنادار و به‌یادماندنی با استفاده از Photoshop و Illustrator.",
  },
  {
    icon: <FaCameraRetro />,
    title: "ویرایش و روتوش عکس",
    desc: "بهبود کیفیت، تنظیم رنگ و اصلاح تصاویر برای برندها یا استفاده شخصی.",
  },
  {
    icon: <FaBrush />,
    title: "طراحی گرافیک شبکه‌های اجتماعی",
    desc: "ایجاد طرح‌های مدرن و جذاب برای پست‌ها و کمپین‌های تبلیغاتی در اینستاگرام، یوتیوب و سایر پلتفرم‌ها.",
  },
];

export default function ServicesPage() {
  return (
    <section className='min-h-screen py-20 mt-10 text-my-light bg-my-white px-6 md:px-16 transition-colors'>
      {/* ✨ عنوان بخش */}
      <div className='max-w-5xl mb-16'>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-4xl md:text-5xl font-bold'>
          خدمات <span className='text-my-blue'>من</span>
        </motion.h2>
        <p className='mt-4 md:text-[16px] text-[14px] max-w-2xl'>
          از طراحی و توسعه وب‌سایت‌های فول‌استک گرفته تا خلق هویت بصری برند — من
          با ترکیب خلاقیت و فناوری، ایده‌های شما را به واقعیت تبدیل می‌کنم.
        </p>
      </div>

      {/* 🧩 شبکه خدمات */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className='p-8 rounded-2xl overflow-hidden group flex flex-col justify-between shadow-2xl dark:border-my-gray/50 hover:-translate-y-1 transition-all duration-300'>
            <div className='mb-4 flex items-center gap-2 text-my-blue text-4xl'>
              {service.icon}
              <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
            </div>
            <p className='text-sm leading-relaxed'>{service.desc}</p>

            {/* خط و نوشته هنگام هاور */}
            <div className='hidden items-center md:flex justify-end mt-5 gap-1 transition-all duration-300'>
              <span className='text-xs transform translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300'>
                مشاهده بیشتر
              </span>
              <span className='bg-my-light h-[1px] mt-1 w-[2rem] transform translate-x-[4rem] group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-[1rem]' />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
