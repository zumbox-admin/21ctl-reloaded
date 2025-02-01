'use client'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';


// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import Button from '@/components/Button';
import BgSection from '@/components/main/BgSection';

const LatestUpdateSlider = [
    {
        title: "How Renewable Energy is Reshaping the Power Sector.",
        smallText: "Explore Konet Tools",
        buttonText: "Konet",
        alternateColor:"bg-cerise-lighter",
        buttonStyle:"bg-cerise-light px-10  font-bold"
    },
    {
        title: "AI Super Cloud: The Future of Data Processing.",
        smallText: "Discover KonetPay",
        buttonText: "Payment",
        alternateColor:"bg-curiousBlue",
        buttonStyle:"bg-[#02A4EE] px-10  font-bold"
    },
    {
      title: "How Renewable Energy is Reshaping the Power Sector.",
      smallText: "Explore Konet Tools",
      buttonText: "Konet",
      alternateColor:"bg-cerise-lighter",
      buttonStyle:"bg-cerise-light px-10  font-bold"
  },
    {
      title: "AI Super Cloud: The Future of Data Processing.",
      smallText: "Discover KonetPay",
      buttonText: "Payment",
      alternateColor:"bg-curiousBlue",
      buttonStyle:"bg-[#02A4EE] px-10  font-bold"
  },
]

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const LatestUpdate = () => {
  const [isHidden, setHidden] =  useState(false)
  useEffect(() => {
   const timer = setTimeout(() => {
      setHidden(true)
    }, 3000);

    return () => clearTimeout(timer);
  }, [isHidden])
  return ( 
    <section className="bg-primaryBlack min-h-[1050px] mt-20 w-full myContainer">
      <div className='flex justify-between space-y-2 mt-20'>
        <div className="">
            <p className="text-white text-sm  font-bold">News & Insights</p>
            <h2 className="text-white">Stay Ahead with the Latest Updates</h2>
            <p className="text-white">Discover thought leadership articles, company news, and industry trends:</p>
        </div>
        <div className={cn(!isHidden ? "hidden" : "block" ,"custom-pagination-latest-update")}></div>
      </div>
        <div className='mt-20 pb-10 relative'>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ el: '.custom-pagination-latest-update', clickable: true }}
        loop={true}
        autoplay = {{
          delay:8000,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {
            LatestUpdateSlider.map((slider,i) => (
                <SwiperSlide className='min-h-[470px] max-w-[55rem]' key={i}>
                <BgSection buttontext={slider.buttonText} title={slider.title} smallText={slider.smallText} classname='m-0' alternateColor={slider.alternateColor} containerClassName="h-full w-full" container={false}  buttonStyle={slider.buttonStyle} />
            </SwiperSlide>
            ))
        }
      </Swiper>
       {/* Custom Pagination */}
       <div className='mt-16'>
       <Button cta={"Read More Success Stories"} polycolor='bg-primaryBlack' className='bg-primary'/>
       </div>
      </div>
    </section>
  )
}

export default LatestUpdate


