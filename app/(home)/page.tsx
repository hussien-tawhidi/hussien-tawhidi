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

      <About />
      <Sample />
      <Blog />
    </div>
  );
}
