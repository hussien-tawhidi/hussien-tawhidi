"use client";

import { Parallax } from "react-scroll-parallax";
import { websiteBenefits } from "../../constant/home";

export default function WhyWebsite() {
  return (
    <div className='text-my-light py-10 md:w-[90%] mx-auto w-[95%]'>
      <div className='p-4 md:p-2 rounded-xl mb-10'>
        <Parallax speed={5}>
          <h1 className='text-2xl md:text-3xl font-bold md:mb-4 text-my-light'>
            اهمیت داشتن وب‌سایت برای کسب و کار
          </h1>
        </Parallax>
        <Parallax speed={5}>
          <p className='text-[12px] md:text-sm leading-relaxed'>
            در دنیای دیجیتال امروز، داشتن وب‌سایت برای هر کسب‌وکار یک ضرورت است.
            وب‌سایت اعتبار شما را افزایش می‌دهد و به مشتریان اعتماد می‌بخشد. از
            طریق وب‌سایت می‌توانید محصولات و خدمات خود را بهتر معرفی کنید.
            تبلیغات آنلاین و استراتژی‌های دیجیتال از طریق سایت مؤثرتر انجام
            می‌شوند. کسب‌وکاری که وب‌سایت ندارد، فرصت‌های ارزشمند زیادی را از
            دست می‌دهد.
          </p>
        </Parallax>
      </div>

      <div className=''>
        <Parallax speed={5} className='md:mb-5'>
          <h2 className='font-bold text-xl text-my-light'>
            هدف از داشتن وب سایت چیست؟
          </h2>
        </Parallax>
        <ul className='grid lg:grid-cols-4 md:grid-cols-2 gap-6'>
          {websiteBenefits.map((item, index) => (
            <Parallax key={index} speed={20}>
              <li className='pb-10 p-5 rounded-xl h-full shadow-2xl hover:shadow-lg transition-shadow duration-300 overflow-hidden'>
                <div className='flex text-my-light items-start sm:items-center gap-3 mb-4'>
                  <div className='text-4xl sm:text-3xl shrink-0 hover:scale-110 transition-transform duration-300'>
                    <item.icon />
                  </div>
                  <h3 className='font-bold text-lg md:text-xl hover:text-my-light transition-colors duration-300'>
                    {item.title}
                  </h3>
                </div>
                <p className='text-[13px] md:text-sm font-light text-my-light leading-relaxed'>
                  {item.description.slice(0, 145)}...
                </p>
              </li>
            </Parallax>
          ))}
        </ul>
      </div>
    </div>
  );
}
