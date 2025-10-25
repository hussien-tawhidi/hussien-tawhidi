import React from "react";
import { menu, socialMediaIcons } from "../constant/home";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <div className='w-full py-10 flex items-center bg-my-white justify-center'>
      <div className='md:w-2/3 w-full px-4 flex flex-col'>
        <div className='w-full md:text-5xl text-2xl font-bold text-my-blue'>
          <h1 className='w-full md:w-2/3'>
            چگونه می‌توانیم به شما کمک کنیم؟ با ما در تماس باشید
          </h1>
        </div>
        <div className='flex mt-8 flex-col md:flex-row md:justify-between'>
          <p className='w-full md:w-2/3 text-my-gray md:text-[16px] text-sm'>
            برای اطمینان از اینکه تمام محتوای ویکی‌پدیا قابل بررسی است، هر کسی
            می‌تواند یک ادعای بدون منبع را زیر سوال ببرد.
          </p>
          <div className='w-44 pt-6 md:pt-0'>
            <Link
              href={"/"}
              className='bg-my-blue text-my-white justify-center text-center rounded-lg shadow px-10 py-3 flex items-center'>
              تماس با ما
            </Link>
          </div>
        </div>
        <div className='flex flex-col'>
          <div className='flex mt-24 mb-12 flex-row justify-between'>
            <Image
              src={"/assets/logo-dark.png"}
              alt='logo'
              width={70}
              height={70}
              className='object-cover mx-auto md:mx-0'
            />

            {menu.map((item, index) => (
              <Link
                href={item.href}
                className='hidden md:block cursor-pointer hover:text-white uppercase'
                key={index}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className='flex flex-row items-center text-my-blue justify-center gap-10'>
            {socialMediaIcons.map((item, index) => (
              <Link href={item.link} key={index}>
                <item.icon />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
