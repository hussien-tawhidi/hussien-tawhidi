"use client";

import { useState, useEffect } from "react";

export default function TypingEffect() {
  const words = ["Web Developer", "UI/UX Designer", "React Enthusiast"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 150; // speed of typing per character
  const deletingSpeed = 50; // speed of deleting
  const delay = 1500; // delay before typing next word

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleTyping = () => {
      const fullText = words[currentWordIndex];

      if (!isDeleting) {
        // Typing
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === fullText.length) {
          timeout = setTimeout(() => setIsDeleting(true), delay);
          return;
        }
      } else {
        // Deleting
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }

      timeout = setTimeout(
        handleTyping,
        isDeleting ? deletingSpeed : typingSpeed
      );
    };

    timeout = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentWordIndex]);

  return (
    <h2 className='text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300 h-10'>
      {displayedText}
      <span className='animate-pulse'>|</span>
    </h2>
  );
}
