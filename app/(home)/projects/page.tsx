"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../../../constant/project";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectsPage = () => {
  return (
    <div className='min-h-screen text-my-light py-20 mt-10 bg-my-white px-6'>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className='relative max-w-5xl mx-auto text-center mb-16 px-4'>
        {/* Subtle Decorative Gradient Glow */}
        <div className='absolute inset-0 -z-10 blur-3xl opacity-20 bg-gradient-to-r from-my-blue via-purple-400 to-my-blue rounded-full'></div>

        {/* Section Label */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className='inline-block text-sm sm:text-base font-semibold tracking-widest text-my-blue/70 uppercase mb-4'>
          نمونه کارهای ما
        </motion.span>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className='text-4xl sm:text-5xl font-extrabold text-my-blue mb-5 leading-tight'>
          طراحی‌های مدرن، تمیز و تاثیرگذار
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className='text-my-light text-base sm:text-lg text-[12px] leading-relaxed max-w-3xl mx-auto'>
          در این بخش، برخی از پروژه‌هایی که با عشق، دقت و تمرکز بر تجربه کاربری
          طراحی شده‌اند را مشاهده می‌کنید. هدف ما خلق طراحی‌هایی است که نه‌تنها
          زیبا باشند، بلکه **تأثیرگذار و ماندگار** عمل کنند.
        </motion.p>

        {/* Animated Line Accent */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: "80px", opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className='mx-auto mt-6 h-[3px] bg-gradient-to-r from-my-blue to-my-blue/70 rounded-full'
        />
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial='hidden'
        animate='show'
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <Link
            key={index}
            href={project.link}
            target='_blank'
            className='relative overflow-hidden rounded-xl text-my-blue group shadow-md hover:shadow-xl transition-all duration-500 ease-out'>
            {/* Image */}
            <Image
              src={project.image}
              width={300}
              height={300}
              alt={project.title}
              className='object-cover w-full h-64 group-hover:grayscale-0 scale-100 group-hover:scale-110 transition-all duration-700 ease-out'
            />

            {/* Overlay Gradient */}
            <div className='absolute inset-0 bg-gradient-to-t dark:from-black/80 to-transparent transition-opacity duration-700 ease-out ' />

            {/* Overlay Text (Optional) */}
            <div className='absolute bottom-0 filter backdrop-blur-xl left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-700 ease-out'>
              <h2 className='text-lg font-semibold'>{project.title}</h2>
              <p className='text-sm'>{project.description}</p>
            </div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
