import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import Hero from "@/components/home/Hero";
import Packages from "@/components/home/Packages";
import Sample from "@/components/home/Sample";
import WhyWebsite from "@/components/home/WhyWebsite";
import Image from "next/image";

export default function Home() {
  return (
    <div className='bg-my-white'>
      <Hero />
      <WhyWebsite />
      <Packages />

      <div className='md:w-[90%] w-full mx-auto rounded-xl overflow-hidden'>
        <Image
          src={"/assets/banner-sm.jpg"}
          width={1500}
          height={700}
          className='object-cover w-full md:hidden flex'
          alt='banner'
        />
        <Image
          src={"/assets/banner.jpg"}
          width={1500}
          height={700}
          className='object-cover w-full md:flex hidden'
          alt='banner'
        />
      </div>
      <About />
      <Sample />
      <Blog />
    </div>
  );
}
