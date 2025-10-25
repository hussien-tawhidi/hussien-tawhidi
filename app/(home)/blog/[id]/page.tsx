
import Image from "next/image";

export default function SingleBlogPage() {
  const post = {
    title: "افزایش نرخ تبدیل شما",
    date: "۱۶ مارس ۲۰۲۰",
    category: "بازاریابی",
    image: "/assets/hero.jpg",
    content: `
      در این مقاله یاد می‌گیرید چگونه با بهینه‌سازی تجربه کاربری و طراحی حرفه‌ای،
      نرخ تبدیل وب‌سایت خود را افزایش دهید. استفاده از رنگ‌بندی مناسب، CTAهای واضح
      و محتوای جذاب می‌تواند تاثیر مستقیمی روی فروش و تعامل کاربران داشته باشد.
    `,
    author: {
      name: "مایکل فاستر",
      role: "هم‌بنیان‌گذار / مدیر فنی",
      image:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  };

  return (
    <div className='bg-my-white text-right py-24 px-6 sm:px-16 max-w-5xl mx-auto'>
      {/* Header / Title */}
      <div className='mb-10'>
        <h1 className='text-4xl sm:text-5xl font-extrabold text-my-blue mb-4'>
          {post.title}
        </h1>
        <div className='flex items-center gap-4 text-sm text-my-light'>
          <span>{post.date}</span>
          <span className='px-2 py-1 bg-my-blue/20 text-my-blue rounded'>
            {post.category}
          </span>
        </div>
      </div>

      {/* Featured Image */}
      <div className='relative w-full h-96 mb-10 rounded-lg overflow-hidden shadow-lg'>
        <Image
          src={post.image}
          alt={post.title}
          fill
          className='object-cover'
        />
      </div>

      {/* Author */}
      <div className='flex items-center gap-4 mb-10'>
        <img
          src={post.author.image}
          alt={post.author.name}
          className='w-12 h-12 rounded-full'
        />
        <div>
          <p className='font-semibold text-my-dark'>{post.author.name}</p>
          <p className='text-sm text-my-light'>{post.author.role}</p>
        </div>
      </div>

      {/* Content */}
      <div className='prose prose-my-blue max-w-none text-my-dark'>
        <p>{post.content}</p>
      </div>
    </div>
  );
}
