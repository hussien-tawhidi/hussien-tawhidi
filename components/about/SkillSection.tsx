"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const programmingSkills = [
    { skill: "React / Next.js", level: 95 },
    { skill: "Tailwind CSS / استایل‌سازی", level: 90 },
    { skill: "Node.js / Express", level: 85 },
    { skill: "MongoDB / Mongoose", level: 80 },
  ];

  const languageSkills = [
    { skill: "انگلیسی", level: 90 },
    { skill: "فارسی", level: 95 },
    { skill: "پشتو", level: 85 },
  ];

  const SkillBar = ({ skill, level }: { skill: string; level: number }) => (
    <div className='group mb-5 text-my-light'>
      <div className='flex justify-between text-sm mb-1'>
        <span className='font-medium'>{skill}</span>
        <span className='font-semibold'>{level}%</span>
      </div>
      <div className='relative w-full h-2.5 rounded-full overflow-hidden bg-my-blue/10'>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className='absolute top-0 right-0 h-full rounded-full bg-gradient-to-l from-my-blue to-my-blue/60'
        />
      </div>
    </div>
  );

  return (
    <div className='mt-16 grid grid-cols-1 md:grid-cols-2 gap-12'>
      {/* مهارت‌های برنامه‌نویسی */}
      <div className='p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-lg'>
        <h4 className='text-2xl font-semibold mb-6 text-my-light'>
          مهارت‌های برنامه‌نویسی
        </h4>
        {programmingSkills.map((s, i) => (
          <SkillBar key={i} {...s} />
        ))}
      </div>

      {/* مهارت‌های زبانی */}
      <div className='p-6 rounded-2xl shadow-2xl transition-all duration-300 hover:shadow-lg'>
        <h4 className='text-2xl font-semibold mb-6 text-my-light'>
          مهارت‌های زبانی
        </h4>
        {languageSkills.map((s, i) => (
          <SkillBar key={i} {...s} />
        ))}
      </div>
    </div>
  );
}
