"use client";

import Link from "next/link";

interface Author {
  name: string;
  role: string;
  image: string;
}

interface Post {
  id: number;
  title: string;
  date: string;
  category: string;
  image?: string;
  excerpt: string;
  author: Author;
}

interface BlogCardProps {
  post: Post;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.id}-${encodeURIComponent(post.title)}`}
      className='relative flex flex-col justify-end w-full h-96 rounded-2xl overflow-hidden shadow-lg bg-center bg-cover group transition-all duration-300 hover:scale-[1.02]'
      style={{
        backgroundImage: `url(${post.image || "/assets/hero.jpg"})`,
      }}>
      {/* Overlay Gradient */}
      <div className='absolute inset-0 bg-gradient-to-t from-my-dark via-my-dark/50 to-transparent transition-opacity duration-300 group-hover:opacity-90'></div>

      {/* Category + Date */}
      <div className='absolute top-0 left-0 right-0 flex items-center justify-between p-4 text-my-light'>
        <span className='px-3 py-1 text-xs font-semibold tracking-wider uppercase bg-my-blue/80 text-my-white rounded'>
          {post.category || "دسته‌بندی"}
        </span>
        <div className='flex flex-col items-center text-sm font-medium text-my-white'>
          <span className='text-2xl leading-none'>
            {post.date?.split(" ")[0] || "19"}
          </span>
          <span className='uppercase text-xs'>
            {post.date?.split(" ")[1] || "Jul"}
          </span>
        </div>
      </div>

      {/* Title & Excerpt */}
      <div className='relative z-10 p-5'>
        <h2 className='text-lg font-semibold leading-snug mb-2'>
          <span className='hover:text-my-light text-my-white transition-colors duration-300'>
            {post.title}
          </span>
        </h2>
        <p className='text-sm text-my-white/90 line-clamp-2'>{post.excerpt}</p>
      </div>
    </Link>
  );
}
