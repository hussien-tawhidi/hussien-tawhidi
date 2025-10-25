import Image from "next/image";
import Link from "next/link";
import { CiCalendarDate } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { LiaArrowLeftSolid } from "react-icons/lia";

export default function Blog() {
  const blogs = [
    {
      title: "چگونه یک وب‌سایت حرفه‌ای بسازیم؟",
      category: "طراحی وب",
      date: "۲۱ مهر ۱۴۰۳",
      views: "۲.۱K",
      link: "#",
      image: "/assets/about.webp",
    },
    {
      title: "۵ نکته برای بهبود تجربه کاربری (UX)",
      category: "تجربه کاربری",
      date: "۲۰ مهر ۱۴۰۳",
      views: "۲.۰K",
      link: "#",
      image: "/assets/hero-bg.jpg",
    },
    {
      title: "مزایای استفاده از Next.js در پروژه‌ها",
      category: "توسعه وب",
      date: "۱۹ مهر ۱۴۰۳",
      views: "۱.۸K",
      link: "#",
      image: "/assets/nextjs.png",
    },
    {
      title: "چطور برند شخصی خود را در اینترنت بسازیم",
      category: "بازاریابی دیجیتال",
      date: "۱۸ مهر ۱۴۰۳",
      views: "۱.۵K",
      link: "#",
      image: "/assets/hero.jpg",
    },
  ];

  return (
    <section className='py-16 md:w-[90%] w-[95%] mx-auto' id='blog'>
      <div className='container mx-auto space-y-10'>
        <div className='flex items-center justify-between border-b border-my-gray/20 pb-2 mb-4'>
          <h4 className='text-lg font-bold text-my-blue'>مقالات</h4>
          <Link
            href='/blog'
            className='text-sm text-my-blue hover:text-my-orange transition-colors duration-300 flex items-center gap-1'>
            <span>همه مقالات</span>
            <LiaArrowLeftSolid />
          </Link>
        </div>

        <div className='grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
          {blogs.map((post, index) => (
            <Link
              href={post.link}
              key={index}
              className='flex flex-col rounded-2xl overflow-hidden shadow-xl text-my-blue hover:shadow-lg transition-all duration-500 hover:-translate-y-2'>
              {/* Image */}
              <div aria-label={post.title}>
                <div className='relative w-full h-52 overflow-hidden'>
                  <Image
                    width={500}
                    height={300}
                    alt={post.title}
                    src={post.image}
                    className='object-cover w-full h-full transition-transform duration-500 hover:scale-105'
                  />
                </div>
              </div>

              {/* Content */}
              <div className='flex flex-col flex-1 p-5 space-y-3'>
                <div className='text-xs font-semibold tracking-wider uppercase opacity-80 hover:opacity-100 transition-opacity'>
                  {post.category}
                </div>

                <h3 className='text-lg text-my-blue font-semibold leading-snug line-clamp-2'>
                  {post.title}
                </h3>

                <div className='flex justify-between items-center pt-2 text-xs opacity-80'>
                  <span className='flex items-center gap-1.5'>
                    <CiCalendarDate className='text-base' />
                    {post.date}
                  </span>
                  <span className='flex items-center gap-1.5'>
                    <IoEyeOutline className='text-base' />
                    {post.views}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
