"use client";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsUpButton() {
  return (
    <Link
      href={"https://wa.me/+989388595962"}
      className='p-3 md:text-xl text-sm bg-my-blue text-my-light flex items-center rounded-xl hover:bg-my-blue/80 hover:text-my-dark transition-all duration-200'>
      {/* <span className='text'>واتس اپ</span> */}
      <span className='svgIcon'>
        <FaWhatsapp />
      </span>
    </Link>
  );
}
