"use client";

import { useState, useRef, useEffect } from "react";
import Dropdown from "./Dropdown";

interface FilterSortProps {
  categories: string[];
  activeCategory: string;
  setActiveCategory: (cat: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
}

export default function FilterBlog({
  categories,
  activeCategory,
  setActiveCategory,
  activeSort,
  setActiveSort,
}: FilterSortProps) {
  const [openCategory, setOpenCategory] = useState(false);
  const [openSort, setOpenSort] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const sortRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoryRef.current &&
        !categoryRef.current.contains(event.target as Node)
      ) {
        setOpenCategory(false);
      }
      if (sortRef.current && !sortRef.current.contains(event.target as Node)) {
        setOpenSort(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sortOptions = [
    { value: "newest", label: "جدیدترین" },
    { value: "oldest", label: "قدیمی‌ترین" },
    { value: "title-asc", label: "عنوان صعودی" },
    { value: "title-desc", label: "عنوان نزولی" },
  ];

  const categoryOptions = categories.map((cat) => ({
    value: cat,
    label: cat === "all" ? "همه دسته‌بندی‌ها" : cat,
  }));
  return (
    <div className='flex items-center md:gap-4 gap-1.5 my-8'>
      <Dropdown
        label='دسته‌بندی'
        options={categoryOptions}
        activeValue={activeCategory}
        onChange={setActiveCategory}
      />

      <Dropdown
        label='مرتب‌سازی'
        options={sortOptions}
        activeValue={activeSort}
        onChange={setActiveSort}
      />
    </div>
  );
}
