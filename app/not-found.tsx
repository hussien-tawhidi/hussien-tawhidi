"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaHome, FaRedo } from "react-icons/fa";

const NotFoundPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-center text-my-gray justify-center bg-linear-to-b text-center p-6'>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='text-8xl font-extrabold tracking-tight mb-3'>
        404
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className='text-lg mb-8 max-w-md'>
        Sorry, we can’t seem to find the page you’re looking for.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className='flex flex-wrap gap-4 justify-center'>
        <Link
          href='/'
          className='flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md border border-my-gray/50 hover:shadow-lg transition-all duration-300'>
          <FaHome className='w-5 h-5' /> Go Home
        </Link>

        <button
          onClick={() => window.location.reload()}
          className='flex items-center gap-2 px-6 py-3 rounded-full border border-my-gray/50 font-medium hover:bg-gray-100 hover:shadow transition-all duration-300'>
          <FaRedo className='w-5 h-5' /> Retry
        </button>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className='mt-12 text-sm text-gray-400'>
        © {new Date().getFullYear()} All rights reserved.
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
