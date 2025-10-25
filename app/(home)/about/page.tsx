"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import PersonalInfo from "@/components/about/PersonInfo";
import SkillsSection from "@/components/about/SkillSection";
import Link from "next/link";

export default function AboutPage() {
  return (
    <section className='bg-my-white text-my-light  min-h-screen py-20 px-6 lg:px-24'>
      {/* عنوان بخش */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='text-xl font-bold mb-10 border-b border-my-gray/50 text-my-blue inline-block pb-2'>
        درباره من
      </motion.h2>

      <div className='flex flex-col lg:flex-row items-start gap-10'>
        {/* تصویر پروفایل */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex-shrink-0 w-full lg:w-1/3 flex justify-center'>
          <Image
            src='/assets/about.webp'
            alt='پروفایل'
            width={400}
            height={400}
            className='rounded-lg shadow-lg object-cover w-80 h-80'
          />
        </motion.div>

        {/* اطلاعات متنی */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className='flex-1 space-y-5'>
          <h3 className='text-2xl font-semibold text-my-blue'>حسین توحیدی</h3>
          <p className='text-sm opacity-80 font-semibold border-b border-my-blue pb-2 text-my-blue'>
            توسعه‌دهنده وب سایت و گرافیک
          </p>
          <p className='leading-relaxed text-sm'>
            سلام، من حسین توحیدی هستم؛ یک توسعه‌دهنده فول‌استک وب با اشتیاق زیاد
            به طراحی و ساخت وب‌اپلیکیشن‌های مدرن، واکنش‌گرا و پر‌سرعت. هدف من
            ایجاد تجربه‌های دیجیتال زیبا و کاربرپسند است که ایده‌های شما را به
            واقعیت تبدیل کند.
          </p>
          <p className='leading-relaxed text-sm'>
            در تخصص من، فناوری‌هایی مانند React، Next.js، Tailwind CSS و Node.js
            نقش اصلی را دارند. تمرکزم بر ایجاد رابط‌های کاربری تمیز، سریع و مؤثر
            است تا محصولات دیجیتالی کارآمد و جذابی بسازم.
          </p>

          {/* اطلاعات شخصی */}
          <PersonalInfo />

          <Link
            href='/cv.pdf'
            download='Hussien_Tawhidi_CV.pdf'
            className='mt-6 px-6 py-2 border border-my-blue text-my-blue transition-all rounded hover:bg-my-orange hover:text-white'>
            دانلود رزومه
          </Link>
        </motion.div>
      </div>

      {/* مهارت‌ها */}
      <SkillsSection />
    </section>
  );
}
