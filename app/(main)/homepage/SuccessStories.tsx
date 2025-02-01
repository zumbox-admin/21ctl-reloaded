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


const SuccessStories = () => {
  return (
    <section className="bg-primary min-h-[950px] mt-20 w-full myContainer lg:py-24">
     <div className="flex justify-center">
        <div className="text-center">
          <p className="text-primaryGray font-bold">Case Studies/Success Stories</p>
          <h2>Driving Impact Across the Globe</h2>
          <p className="text-primaryGray">Our expertise spans diverse industries, delivering customized solutions that meet unique challenges</p>
        </div>
      </div>
      <div className='mt-20 relative'>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        pagination={{ el: '.custom-pagination-success-stories', clickable: true }}
        loop={true}
        autoplay = {{
          delay:8000
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper "
      >
        {
          Array.from({length: 9}, (_,i) => (
            <SwiperSlide className='min-h-[470px] max-w-[55rem]' key={i}>
                <BgSection buttontext="Data Center" title="Leading the charge in renewable energy with innovative solutions like solar panels and gas turbines." smallText="Learn More" classname='min-h-[470px] m-0' alternateColor="bg-white" containerClassName="h-full w-full" container={false}  buttonStyle="bg-primary px-10 text-primaryBlack font-bold" />
            </SwiperSlide>
          ))
        }
      </Swiper>
       {/* Custom Pagination */}
       <div className="custom-pagination-success-stories mt-4 flex space-x-2 absolute right-0 bottom-3"></div>
       <div className='mt-16'>
       <Button cta={"Read More Success Stories"} polycolor='bg-primary' className='bg-white'/>
       </div>
      </div>
    </section>
  )
}

export default SuccessStories
