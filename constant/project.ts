export interface Project  {
  title: string;
  description: string;
  image: string;
  link: string;
};

export const projects = [
  {
    title: "فروشگاه آنلاین آراکس",
    description:
      "یک وب‌سایت فروشگاهی مدرن ساخته‌شده با Next.js، Tailwind CSS و MongoDB برای تجربه‌ای سریع و کاربرپسند.",
    image: "/assets/projects/arax.jpg",
    link: "https://arax-three.vercel.app/",
  },
  {
    title: "کتاب‌فروشی آنلاین",
    description:
      "وب‌سایتی برای خرید و دانلود کتاب‌های الکترونیکی (PDF) با طراحی ساده و دسترسی آسان.",
    image: "/assets/projects/book.jpg",
    link: "https://ketab-8foo.vercel.app/",
  },
  {
    title: "پلتفرم آنلاین HT",
    description:
      "پلتفرمی واکنش‌گرا با قابلیت احراز هویت و نمایش محصولات، طراحی‌شده برای عملکرد بهینه در تمام دستگاه‌ها.",
    image: "/assets/projects/ht.jpg",
    link: "https://ht-online.vercel.app/",
  },
];
