import { packages } from "@/constant/home";

export default function Packages() {
  return (
    <div className='relative md:w-[92%] mx-auto w-[95%] shadow-2xl px-[2%] pb-[4%]'>
      <h2 className='my-10 text-2xl text-my-blue font-extrabold'>
        تعرفه طراحی سایت
      </h2>
      <div className='grid gap-8 text-my-light md:grid-cols-4'>
        {packages.map((pkg, index) => {
          const Icon = pkg.icon;
          return (
            <div key={index} className='flex relative rounded-lg shadow-2xl'>
              <div className='bg-my-blue/80 h-full  text-my-white font-semibold text-xl'>
                <div className='bg-my-blue p-3'>{index}</div>
              </div>
              <div className='p-3'>
                <Icon className='w-8 h-8 mb-2' />
                <h3 className='text-xl font-bold'>{pkg.name}</h3>
                <p className='text-[12px] mb-4'>{pkg.shortDescription}</p>
                <p className='absolute top-0 left-0 bg-linear-to-r from-my-blue to-my-blue/50 text-white text-sm p-2 rounded-br-lg shadow-lg'>
                  {pkg.priceRangeUSD} $
                </p>

                <ul className=' pl-5 space-y-1 text-[12px]'>
                  {pkg.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
