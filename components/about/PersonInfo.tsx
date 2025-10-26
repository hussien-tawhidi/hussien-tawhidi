import {
  IoCalendarOutline,
  IoHomeOutline,
  IoMailOutline,
  IoCallOutline,
  IoSchoolOutline,
  IoGlobeOutline,
  IoBriefcaseOutline,
  IoPersonOutline,
} from "react-icons/io5";

export default function PersonalInfo() {
  const infoLeft = [
    { icon: IoCalendarOutline, label: "تاریخ تولد", value: "۱ تیر ۱۳۷۸" },
    { icon: IoPersonOutline, label: "سن", value: "۲۶ سال" },
    { icon: IoHomeOutline, label: "آدرس", value: "کرج، ایران" },
    {
      icon: IoMailOutline,
      label: "ایمیل",
      value: "hussientawhidi710@gmail.com",
    },
    { icon: IoCallOutline, label: "شماره تماس", value: "00989932268115" },
  ];

  const infoRight = [
    { icon: IoGlobeOutline, label: "ملیت", value: "افغان" },
    { icon: IoSchoolOutline, label: "محل تحصیل", value: "دانشگاه آزاد" },
    { icon: IoBriefcaseOutline, label: "مدرک تحصیلی", value: "لیسانس" },
    { icon: IoBriefcaseOutline, label: "وضعیت فریلنس", value: "در دسترس" },
  ];

  return (
    <div className='grid grid-cols-1 text-my-gray sm:grid-cols-2 gap-6 text-sm pt-6 border-t border-my-blue'>
      {/* ستون چپ */}
      <div className='space-y-3'>
        {infoLeft.map((item, i) => (
          <div key={i} className='flex items-center gap-3'>
            <item.icon className='text-lg text-my-light' />
            <span className='font-semibold w-28 text-my-light'>
              {item.label}:
            </span>
            <span className='truncate'>{item.value}</span>
          </div>
        ))}
      </div>

      {/* ستون راست */}
      <div className='space-y-3'>
        {infoRight.map((item, i) => (
          <div key={i} className='flex items-center gap-3'>
            <item.icon className='text-lg text-my-light' />
            <span className='font-semibold w-28 text-my-light'>
              {item.label}:
            </span>
            <span className='truncate'>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
