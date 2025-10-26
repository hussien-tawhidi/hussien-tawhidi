"use client";

import { useState } from "react";
import FilterBlog from "@/components/blog/filter/FilterBlog";
import BlogCard from "@/components/blog/BlogCard";
import { getMonth } from "@/helpers/blog";

export default function MagazinePage() {
  const [activeSort, setActiveSort] = useState("newest");
  const [activeCategory, setActiveCategory] = useState("all");

  const posts = [
    {
      id: 1,
      title: "افزایش نرخ تبدیل شما",
      date: "۱۶ مارس ۲۰۲۰",
      category: "بازاریابی",
      image: "/assets/about.webp",
      excerpt:
        "یاد بگیرید چطور با بهینه‌سازی تجربه کاربر و طراحی حرفه‌ای، نرخ تبدیل وب‌سایت خود را افزایش دهید.",
      author: {
        name: "مایکل فاستر",
        role: "هم‌بنیان‌گذار / مدیر فنی",
        image:
          "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 2,
      title: "چطور با سئو فروش را افزایش دهیم",
      date: "۱۰ مارس ۲۰۲۰",
      category: "فروش",
      image: "/assets/about.webp",
      excerpt:
        "سئو یکی از مؤثرترین ابزارها برای جذب مشتریان جدید است. در این مقاله با روش‌های حرفه‌ای افزایش ترافیک آشنا شوید.",
      author: {
        name: "لیندزی والتون",
        role: "توسعه‌دهنده فرانت‌اند",
        image:
          "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
    {
      id: 3,
      title: "بهبود تجربه مشتری در وب‌سایت",
      date: "۱۲ فوریه ۲۰۲۰",
      category: "کسب‌وکار",
      image: "/assets/about.webp",
      excerpt:
        "تجربه کاربری ضعیف باعث از دست دادن مشتری می‌شود. در این مقاله یاد بگیرید چگونه تجربه‌ای لذت‌بخش برای کاربران خلق کنید.",
      author: {
        name: "تام کوک",
        role: "مدیر محصول",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    },
  ];

  // Helper functions
  function persianToEnglishNumbers(str: string) {
    return str.replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString());
  }

  function parseDate(d: string) {
    const parts = d.split(" "); // ["۱۶", "مارس", "۲۰۲۰"]
    const day = Number(persianToEnglishNumbers(parts[0]));
    const month = getMonth(parts[1]);
    const year = Number(persianToEnglishNumbers(parts[2]));
    return new Date(year, month, day);
  }

  // Filter posts
  const filteredPosts = posts.filter((p) =>
    activeCategory === "all" ? true : p.category === activeCategory
  );

  // Sort posts
  filteredPosts.sort((a, b) => {
    switch (activeSort) {
      case "newest":
        return parseDate(b.date).getTime() - parseDate(a.date).getTime();
      case "oldest":
        return parseDate(a.date).getTime() - parseDate(b.date).getTime();
      case "title-asc":
        return a.title.localeCompare(b.title);
      case "title-desc":
        return b.title.localeCompare(a.title);
      default:
        return 0;
    }
  });

  // Unique categories
  const categories = ["all", ...new Set(posts.map((p) => p.category))];

  return (
    <div className='bg-my-white py-24 sm:py-32 text-right'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        {/* Header */}
        <div className='max-w-3xl text-right'>
          <h2 className='text-4xl font-extrabold tracking-tight text-my-light sm:text-5xl'>
            وبلاگ، مقالات و آموزش‌ها
          </h2>
          <p className='mt-4 text-my-light opacity-85 leading-relaxed'>
            در اینجا ایده‌ها، تجربیات و نکاتی را می‌خوانید که حاصل سال‌ها فعالیت
            در حوزه طراحی، توسعه و بازاریابی دیجیتال است. هر مقاله تلاشی است
            برای کمک به شما تا برندتان را{" "}
            <span className='font-semibold text-my-light'>
              پایدارتر، مؤثرتر و حرفه‌ای‌تر
            </span>{" "}
            بسازید.
          </p>
        </div>

        {/* Filters + Sort */}
        <FilterBlog
          categories={categories}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeSort={activeSort}
          setActiveSort={setActiveSort}
        />

        {/* Posts Grid */}
        <div className='mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-my-blue/20 md:pt-8 pt-4 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
          {filteredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
