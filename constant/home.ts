import { CgShoppingBag } from "react-icons/cg";
import { CiInstagram, CiSettings, CiUser } from "react-icons/ci";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { LiaNewspaperSolid } from "react-icons/lia";
import { RiHomeHeartLine } from "react-icons/ri";
import { TiSocialFacebook } from "react-icons/ti";
import { FaGlobe, FaPaintBrush, FaMobileAlt } from "react-icons/fa";
import { FiBriefcase, FiShoppingCart, FiAward } from "react-icons/fi";
import { BiRocket } from "react-icons/bi";
import {
  AiOutlineClockCircle,
  AiOutlineCustomerService,
  AiOutlineSafety,
  AiOutlineDollarCircle,
} from "react-icons/ai";

export const menu = [
  { id: 1, title: "خانه", icon: RiHomeHeartLine, href: "/" },
  { id: 2, title: "درباره من", icon: CiUser, href: "/about" },
  { id: 3, title: "خدمات", icon: CiSettings, href: "/services" },
  { id: 4, title: "نمونه کارها", icon: CgShoppingBag, href: "/projects" },
  { id: 5, title: "بلاگ", icon: LiaNewspaperSolid, href: "/blog" },
  { id: 6, title: "تماس با ما", icon: HiOutlineEnvelope, href: "/contact" },
];



export const services = [

  {
    title: "توسعه وب‌سایت",
    desc: "ما وب‌سایت‌هایی سریع، واکنش‌گرا و بهینه طراحی می‌کنیم تا تجربه‌ای عالی برای کاربران و نتایجی مؤثر برای کسب‌وکار شما فراهم شود.",
    link: "#",
    icon: FaGlobe, // Modern web icon
  },
  {
    title: "طراحی رابط و تجربه کاربری (UI/UX)",
    desc: "طراحی‌های ما بر پایه‌ی سادگی، زیبایی و درک رفتار کاربر ساخته می‌شود تا ارتباطی مؤثر میان برند شما و مخاطبان ایجاد کند.",
    link: "#",
    icon: FaPaintBrush, // Design-focused icon
  },
  {
    title: "اپلیکیشن موبایل",
    desc: "توسعه اپلیکیشن‌های موبایل با عملکرد بالا و طراحی کاربرپسند برای سیستم‌عامل‌های اندروید و iOS با جدیدترین فناوری‌ها.",
    link: "#",
    icon: FaMobileAlt, // Mobile development icon
  },
];

export const packages = [
  {
    name: "بسته‌ی آغازین",
    icon: BiRocket,
    shortDescription:
      "انتخابی مناسب برای افراد و کسب‌وکارهای کوچک که می‌خواهند به‌صورت حرفه‌ای وارد دنیای آنلاین شوند.",
    priceRangeUSD: "99",
    features: [
      "تا ۵ صفحه (خانه، درباره ما، خدمات، تماس و غیره)",
      "طراحی کاملاً واکنش‌گرا برای موبایل، تبلت و کامپیوتر",
      "فرم تماس فعال و ساده",
      "تنظیمات ابتدایی سئو برای نمایش در گوگل",
      "تحویل در مدت ۵ تا ۷ روز کاری",
    ],
  },
  {
    name: "بسته‌ی تجارتی",
    icon: FiBriefcase,
    shortDescription:
      "مناسب برای شرکت‌ها و استارتاپ‌هایی که به وب‌سایتی مدرن، چندصفحه‌ای و قابل توسعه نیاز دارند.",
    priceRangeUSD: "200",
    features: [
      "تا ۱۰ صفحه با طراحی اختصاصی",
      "استفاده از React/Next.js",
      "بخش بلاگ برای انتشار مقالات و اخبار",
      "سئو در سطح حرفه‌ای",
      "اتصال Google Analytics برای آمار بازدید",
      "پشتیبانی رایگان تا ۱ ماه",
    ],
  },
  {
    name: "بسته‌ی فروشگاهی",
    icon: FiShoppingCart,
    shortDescription:
      "راه‌حل کامل برای فروشگاه‌های آنلاین و کسب‌وکارهایی که می‌خواهند محصولات خود را به‌صورت اینترنتی بفروشند.",
    priceRangeUSD: "300",
    features: [
      "ساخت فروشگاه با طراحی اختصاصی",
      "افزودن تا ۵۰ محصول با مدیریت آسان",
      "پرداخت آنلاین و سیستم سفارشات",
      "سئو پیشرفته و ابزارهای تحلیلی فروش",
      "پشتیبانی تا ۳ ماه پس از تحویل",
    ],
  },
  {
    name: "بسته‌ی ویژه",
    icon: FiAward,
    shortDescription:
      "پیشنهاد مخصوص برندها و سازمان‌هایی که به دنبال طراحی اختصاصی، امکانات پیشرفته و تجربه کاربری ممتاز هستند.",
    priceRangeUSD: "900",
    features: [
      "طراحی کاملاً سفارشی با UI/UX اختصاصی",
      "ادغام با API‌ها و سیستم‌های خارجی",
      "داشبورد مدیریتی اختصاصی",
      "بهینه‌سازی کامل عملکرد و سرعت",
      "پشتیبانی VIP تا ۶ ماه",
      "آموزش مدیریت سایت برای تیم مشتری",
    ],
  },
];


export const socialMediaIcons = [
  { icon: TiSocialFacebook, link: "/facebook" },
  { icon: FaXTwitter, link: "/twitter" },
  { icon: CiInstagram, link: "/instagram" },
  { icon: FaWhatsapp, link: "/whatupp" },
];

export const websiteBenefits = [
  {
    title: "حضور دائمی آنلاین",
    description:
      "یکی از بزرگ‌ترین مزایای وب‌سایت، دسترسی ۲۴ ساعته و بدون محدودیت مکانی است. مشتریان می‌توانند در هر زمان اطلاعات بگیرند یا خرید خود را انجام دهند. وب‌سایت باعث می‌شود کسب‌وکار همیشه فعال و در دسترس باشد.",
    icon: AiOutlineClockCircle,
  },
  {
    title: "پشتیبانی دائمی از مشتریان",
    description:
      "وب‌سایت پشتیبانی از مشتریان را آسان و کم‌هزینه می‌کند. با صفحات پرسش‌های متداول و ربات‌های سخنگو، پاسخ‌گویی سریع و ۲۴ ساعته ممکن می‌شود. این روش‌ها زمان، هزینه و نیروی انسانی را به‌طور چشمگیری کاهش می‌دهند.",
    icon: AiOutlineCustomerService
  },
  {
    title: "ایجاد اعتبار و اعتماد",
    description:
      "امروزه مشتریان انتظار دارند کسب‌وکارها وب‌سایت داشته باشند و آنلاین در دسترس باشند. وب‌سایت باعث جلب اعتماد، تقویت اعتبار و علاقه‌مندی مشتری به خرید محصولات می‌شود. کسب‌وکارهای نو با سئوی محلی می‌توانند حضور آنلاین خود را تقویت کنند.",
    icon: AiOutlineSafety,
  },
  {
    title: "درآمد",
    description:
      "وب‌سایت‌ها درآمد نامحدود برای کسب‌وکار ایجاد می‌کنند و با عبور از مرزهای جغرافیایی، فروش افزایش می‌یابد. بهینه‌سازی سایت باعث دسترسی آسان مخاطبان در هر زمان می‌شود. همچنین، بخش‌هایی از سایت می‌تواند برای تبلیغات اختصاص داده شود تا درآمد جانبی بیشتری ایجاد گردد.",
    icon: AiOutlineDollarCircle ,
  },
];