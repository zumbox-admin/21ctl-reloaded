import Button from "@/components/Button"
import BgSection from "@/components/main/BgSection";
import ContactUs from "@/components/main/ContactUs";
import Equal from "@/components/main/Equal";
import PolygonBox from "@/components/main/PolygonBox";
import SuccessStories from "@/app/(main)/homepage/SuccessStories";
import { cn } from "@/lib/utils";
import Image from "next/image"
import LatestUpdate from "./LatestUpdate";
import {buttonData,featuresIcons,paternershipIcons,stats} from "@/constants/homepage"


const HomePage = () => {
  return (
    <div className="mt-40">
      {/* 1st section */}
      <section className=" flex gap-4 relative mb-20 ">
     <div className="flex w-full justify-between">
     <Image
        src={'left.svg'}
        alt="icon"
        width={317.5}
        height={365}
        className="w-[45%] md:w-[317.5px] object-contain"
      />
      <Image
        src={'right.svg'}
        alt="icon"
        width={317.5}
        height={365}
        className="w-[45%] md:w-[317.5px] object-contain"
      />
     </div>
     <div className="absolute inset-0 w-full">
        <div className="flex flex-col justify-center h-full items-center space-y-3">
            <h1>Building Africa's Largest</h1>
            <PolygonBox classname="bg-white size-12"
              otherclasses="bg-primary min-h-[7.6rem] flex items-center px-10">
              <h1>Digital Infrastructure</h1>
            </PolygonBox>
            <p className="text-center text-primaryGray">At 21st century tech we’re building bold digital infrastructure to solve today’s challenges  <br className="hidden lg:block"/> and shape tomorrow’s industries.</p>
            <Button cta={"Get Started Now"} className="bg-primary mt-2" polycolor="bg-white"/>
      </div>
     </div>
    </section>
      {/* 2nd section */}
      <section className="myContainer min-h-[22rem] w-full flex justify-center items-end">
  <div className="w-full text-center space-y-3">
    <h2 className="text-2xl md:text-3xl font-bold">
      Services tailored to your Company
    </h2>
    <p className="text-primaryGray text-sm md:text-base ">
      Leverage advanced AI and computer vision technologies to transform.
    </p>
    <div className="flex justify-center flex-wrap gap-x-3 gap-y-3  md:gap-x-5 pt-5">
      {buttonData.map((button, index) => (
        <Button
          key={index}
          cta={button.cta}
          className={button.className}
          polycolor="bg-white"
        />
      ))}
    </div>
  </div>
</section>

        {/* 3rd section */}
        <BgSection buttontext="Data Center" title="Power your business with cutting-edge infrastructure and secure, scalable solutions" smallText="Learn more" alternateColor="bg-[#FFFDEA]" containerClassName="py-2 md:py-1"  buttonStyle="text-black" />
        {/* 4th section */}
        <div className="myContainer py-2 md:py-1">
        <Equal className="gap-5">
            <BgSection alternateColor="bg-cerise-lighter" buttontext="Konet"containerClassName="py-2 md:py-1"  buttonStyle="bg-cerise-light" title="Transform your workflows with versatile software solutions." smallText="Explore Konet Tools" container={false} />
            <BgSection alternateColor="bg-curiousBlue" buttontext="Payment"containerClassName="py-2 md:py-1"  buttonStyle="bg-[#02A4EE]" title="Simplify transactions with a robust payment platform tailored to your needs." smallText="Discover KonetPay" container={false} />
        </Equal>
      </div>
      {/* 5th section */}
      {/* 6th section */}
      <BgSection buttontext="Power" title="Leading the charge in renewable energy with innovative solutions like solar panels and gas turbines." smallText="Learn About Our Energy Solutions" alternateColor="bg-[#FFFDEA]" containerClassName="py-2 md:py-1"  buttonStyle="bg-[#99D80A]" />
      {/* 7th section */}
      <BgSection buttontext="Academy" title="Leading the charge in renewable energy with innovative solutions like solar panels and gas turbines." smallText="Learn About Our Energy Solutions" alternateColor="bg-dimGray" containerClassName="py-2 md:py-1"  buttonStyle="bg-primaryBlack" />
      {/* 8th section */}
      <section className="bg-primaryBlack min-h-[1050px] mt-20 w-full myContainer">
      <div className="grid h-full grid-cols-12 gap-20">
           <div className="h-full w-full col-span-8 myContainer">
            <div className="space-y-7">
              <p className="text-white font-bold">About 21CTL</p>
              <h2 className="text-white">At 21st Century Technologies Ltd, our mission is to provide transformative technology solutions that redefine industries. From advanced AI-powered tools to renewable energy initiatives, we are shaping the future.</h2>
              <Button cta={"Learn More About Us"} className="bg-primary mt-2" polycolor="bg-primaryBlack"/>
              <div className="grid grid-cols-3 text-white gap-4">
              {stats.map((stat, index) => (
                <div key={index}>
                  <h1 className="text-white font-bold">{stat.value}</h1>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
            </div>
           </div>
            <PolygonBox
              classname="bg-primaryBlack w-10 h-10"
              otherclasses="bg-primary h-full flex items-end font-neuebold p-5 col-span-4 myContainer"
            >
              <h3 className="">
              Delivering Excellence in Technology Solutions Since [Year]
              </h3>
            </PolygonBox>
        </div>
      </section>
      {/* 9th section */}
      <section className="myContainer lg:py-24">
        <div className="flex justify-center">
              <div className="text-center">
                <p className="text-primaryGray font-bold">Industries we Serve</p>
                <h2>Tailored Solutions for Every Industry</h2>
                <p className="text-primaryGray">Our expertise spans diverse industries, delivering customized solutions that meet unique challenges</p>
              </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16">
        {featuresIcons.map((features) => (
          <PolygonBox
            key={features.title}
            classname="size-20 bg-white"
            otherclasses={cn(
              features.bgColor,
              "max-w-[18rem] h-auto min-h-[22rem] flex flex-col justify-end items-center md:items-start px-4 py-6 text-center md:text-left"
            )}
          >
            <div className="space-y-4">
              <Image src={features.icons} alt="icon" width={64} height={64} className="mx-auto md:mx-0"/>
              <h3 className="text-2xl md:text-3xl">{features.title}</h3>
              <p className="text-primaryGray text-sm md:text-base">{features.text}</p>
            </div>
          </PolygonBox>
        ))}
      </div>
        <div className="flex justify-center w-full mt-10">
        <Button cta={"Find Solutions for Your Industry"} className="bg-primary" polycolor="bg-white"/>
        </div>
      </section>
      {/* 10th section */}
      <SuccessStories/>
      {/* 11th section */}
      <section className="myContainer lg:py-24">
      <div className="flex flex-col justify-center space-y-16">
          <div className="text-center">
            <p className="text-primaryGray font-bold">Partnerships that leads to growth</p>
            <h2>Our Partners Over the Years</h2>
            <p className="text-primaryGray">Our expertise spans diverse industries, delivering customized solutions that meet unique challenges</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-10 max-w-[900px]">
            {
                paternershipIcons.map((logo, i) => (
                  <Image key={i} src={logo} alt="logo" width={64} height={64}/>
                ))
              }
            </div>
          </div>
          <div className="flex justify-center w-full mt-20">
        <Button cta={"Find Solutions for Your Industry"} className="bg-primary" polycolor="bg-white"/>
        </div>
        </div>
      </section>
      {/* 12th section */}
      <LatestUpdate/>
      {/* 13th section */}
      <ContactUs/>
    </div>
  )
}

export default HomePage
