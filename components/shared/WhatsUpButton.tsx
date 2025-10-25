"use client"
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsUpButton() {
  return (
    <Link href={"https://wa.me/+989388595962"} className='Btn'>
      {/* <span className='text'>واتس اپ</span> */}
      <span className='svgIcon'>
        <FaWhatsapp />
      </span>
    </Link>
  );
}
