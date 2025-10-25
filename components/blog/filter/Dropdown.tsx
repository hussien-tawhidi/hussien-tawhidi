"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";

interface DropdownProps {
  label?: string;
  options: { value: string; label: string }[];
  activeValue: string;
  onChange: (value: string) => void;
}

export default function Dropdown({
  label,
  options,
  activeValue,
  onChange,
}: DropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const activeLabel =
    options.find((opt) => opt.value === activeValue)?.label ||
    label ||
    "انتخاب کنید";

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className='relative md:w-52 w-full font-vazir'>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`w-full flex justify-between items-center p-4 font-medium
           text-my-light rounded-xl
          shadow-md transition-all duration-300 
          hover:shadow-lg focus:outline-none`}>
        <span className="md:text-[14px] text-[12px]">{activeLabel}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <FaChevronDown />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className='absolute z-10 w-full mt-2 bg-my-white rounded-xl shadow-lg overflow-hidden'>
            {options.map((opt) => (
              <motion.li
                key={opt.value}
                onClick={() => {
                  onChange(opt.value);
                  setOpen(false);
                }}
                whileHover={{ scale: 1.02 }}
                className={`px-4 py-3 text-my-blue md:text-[14px] text-[12px] text-base cursor-pointer transition-all duration-200
                  ${
                    activeValue === opt.value
                      ? "bg-my-blue/10 text-my-blue font-semibold"
                      : ""
                  }`}>
                {opt.label}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
