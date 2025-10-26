"use client";

import Link from "next/link";
import { services } from "../../constant/home";
import { Parallax } from "react-scroll-parallax";

export default function About() {
  return (
    <div className='pt-20 text-my-light'>
      <div className='flex items-center md:mb-16 mb-8 px-5 md:mr-20'>
        <div className='flex items-center gap-2'>
          <div className=''>
            <p className='text-my-light font-extrabold text-xl'>خدمات ما</p>
            <p className='leading-relaxed'>
              تنها چند واژه کافی است تا تصویری از شرکت ما در ذهن شما ایجاد کند.
            </p>
          </div>
        </div>
      </div>
      <div className='relative flex justify-center items-start py-20 overflow-hidden'>
       

        {/* محتوای اصلی */}
        <div className=' flex md:flex-row flex-col gap-16'>
          {/* باکس ۱ */}
          {services.map((item, index) => (
            <Parallax
              speed={5}
              key={index}
              className='group max-w-xs p-6 flex justify-between flex-col rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 cursor-pointer text-my-light shadow-my-blue/90 hover:shadow-my-light/30'>
              <div className='flex items-center gap-2 mb-4 '>
                <item.icon className='w-8 h-8 mr-3 transition-colors duration-300' />
                <h3 className='text-2xl font-bold transition-colors duration-300'>
                  {item.title}
                </h3>
              </div>

              <p className=' mb-4 leading-6 text-sm font-light'>{item.desc}</p>

              <Link
                href={item.link}
                className='text-sm font-medium  underline underline-offset-4 group-hover:no-underline transition-all duration-300'>
                ادامه مطلب →
              </Link>
            </Parallax>
          ))}
        </div>
      </div>
    </div>
  );
}
