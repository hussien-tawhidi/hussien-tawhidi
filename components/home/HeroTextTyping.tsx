"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function TypingText() {
  const fullText =
    "ما باور داریم زیبایی در سادگی نهفته است. طراحی‌هایی که حس آرامش و حرفه‌ای بودن را القا می‌کنند. هر جزئیات با دقت و عشق ساخته شده تا تجربه‌ای ماندگار خلق کند.";

  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50); // سرعت تایپ (می‌تونی تنظیمش کنی)
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
      className='mt-6 md:text-lg text-xs leading-relaxed font-semibold text-my-blue'>
      {displayedText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 1 }}
        className='inline-block w-[6px] bg-my-blue h-5 ml-1 align-middle'
      />
    </motion.p>
  );
}
