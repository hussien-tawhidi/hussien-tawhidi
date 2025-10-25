import Image from "next/image";
import Link from "next/link";
import { projects } from "../../constant/project";

export default function Sample() {
  return (
    <section className='py-16 md:w-[90%] w-[95%] text-my-light mx-auto' id='projects'>
      <div className='container mx-auto px-4'>
        <div className='flex items-center justify-between mb-10'>
          <h2 className='text-3xl font-bold text-my-blue text-right'>
            نمونه‌ پروژه‌ها
          </h2>

          <Link
            href='/projects'
            className='text-sm font-medium text-my-blue border border-my-blue px-4 py-2 rounded-full hover:bg-my-blue hover:text-white transition-all duration-300'>
            همه پروژه‌ها
          </Link>
        </div>

        <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='group rounded-2xl overflow-hidden shadow-2xl bg-my-white'>
              {/* Image */}
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={400}
                className='object-cover w-full'
              />

              {/* Content */}
              <div className='p-5 flex flex-col justify-between'>
                <div>
                  <h3 className='text-xl font-bold text-my-blue mb-2 transition-colors duration-300'>
                    {project.title}
                  </h3>
                  <p className='text-my-light md:text-sm text-[12px] leading-relaxed'>
                    {project.description}
                  </p>
                </div>

                <Link
                  href={project.link}
                  target='_blank'
                  className='mt-4 inline-block font-medium text-sm underline underline-offset-4 group-hover:no-underline text-my-blue transition-colors duration-300'>
                  مشاهده پروژه
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
