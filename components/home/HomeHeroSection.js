import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';

export default function HomeHeroSection() {
  return (
    <div className='flex flex-col bg-[#e2e3e3] relative'>
      <div className='relative'>
        <img className='absolute top-7 left-4 z-40 zoominout' src='/images/star-1.png' alt='Star' />
        <img
          className='absolute bottom-7 left-1/2 transform -translate-x-1/2 z-40 zoominout'
          src='/images/star-1.png'
          alt='Star'
        />
        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
          }}
          loop
        >
          <SwiperSlide>
            <div className='pt-24 pb-44 relative flex items-center lg:pt-32 lg:pb-72 xl:min-h-[80vh]'>
              <div className='relative z-30 avit-container'>
                <h1 className='text-[48px] text-[#63656c] leading-[52px] font-bold mb-4 xl:text-[68px] xl:leading-[72px]'>
                  Wash, Dry, <br /> Fold & <span className='text-primary'>Delivered!</span>
                </h1>
                <p className='text-[#63656c] font-bold max-w-[400px] lg:text-[18px]'>
                  with AVIT Laundry we will pick up and deliver your clothes, let us do the dirty work!
                </p>
              </div>

              <img
                className='w-full absolute inset-0 z-10 object-cover object-center h-full'
                src='/images/bg-laundry-1.png'
                alt='Bubble'
              />
              <div className='w-full absolute inset-0 z-20 bg-[#e1e1e1] opacity-90' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='pt-24 pb-44 relative flex items-center lg:pt-32 lg:pb-72 xl:min-h-[80vh]'>
              <div className='relative z-30 avit-container'>
                <h1 className='text-[48px] text-[#63656c] leading-[52px] font-bold mb-4 xl:text-[68px] xl:leading-[72px]'>
                  <span className='text-primary'>No Cash?</span> <br className='lg:hidden' /> No Problem
                </h1>
                <p className='text-[#63656c] font-bold max-w-[400px] lg:text-[18px]'>
                  You can pay via Gcash, Paymaya, Shopeepay, Credit/Debit Card. Your choice!
                </p>
              </div>

              <img
                className='w-full absolute inset-0 z-10 object-cover object-center h-full'
                src='/images/bg-laundry-2.png'
                alt='Bubble'
              />
              <div className='w-full absolute inset-0 z-20 bg-[#e1e1e1] opacity-90' />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <img
        className='min-w-[1190px] absolute bottom-0 left-0 z-10 object-cover object-center shrink-0'
        src='/images/bubble-bg.png'
        alt='Bubble'
      />
    </div>
  );
}
