import React from "react";
import { Star } from "./Icon";
import Image from 'next/image'
const Aboutus = () => {
  return (
    <div className="lg:pt-[150px] sm:pt-[80px] relative" id="about">
        <Image src="/assets/images/triangle.webp" width={70.97} height={95.49} alt="tri" className="absolute lg:top-[-5%] sm:top-[-10%] top-[-16%] md:left-[3%] left-[20%]" />
        <Image src="/assets/images/triangle.webp" width={70.97} height={95.49} alt="tri" className="absolute bottom-[7%] right-[3%] hidden lg:block" />
      <div className="container max-w-[1140px] 2xl:max-w-[1320px] mx-auto w-full px-3">
        <div className="flex flex-row flex-wrap -mx-3">
          <div className="lg:w-1/2 px-3 max-lg:flex justify-center mx-auto" data-aos="fade-right">
            <div className="lg:pr-[51px]">
              <Image src="/assets/images/aboutimg.webp" alt="img" width={544} height={567} />
            </div>
          </div>
          <div className="lg:w-1/2 px-3 flex justify-center lg:block" data-aos="fade-left">
            <div className=" pt-4 flex flex-col items-center lg:block">
              <div className="flex gap-[6px] items-center justify-center lg:justify-normal">
                <Star />
                <p className=" font-exo text-sm sm:text-base text-[#131200] font-normal">
                  About Us
                </p>
              </div>
              <h2 className=" font-outfit text-3xl md:text-5xl font-light md:leading-[57.6px] mb-4 text-center lg:text-start">
                Pioneering Vision & Mission-
                <span className=" font-semibold">
                  Driven Sectoral Innovation
                </span>
              </h2>
              <p className="lg:max-w-[491px] font-exo text-sm sm:text-base font-normal text-black text-center lg:text-start mx-auto lg:mx-0">
                Imagine a future in Saudi Arabia influenced by the potential of
                Al, with Noble Mind at the forefront of this transformation.
                Healthcare stands to gain with the promise of enhanced data
                precision. In education, there's the potential for
                individualized learning experiences. Finance could witness
                seamless transactions, and entertainment may revel in customized
                experiences. Through Al's promise, transportation could innovate
                and cities might adapt smarter infrastructures. In every domain,
                the vision of Noble Mind hints at a brighter, more efficient
                nation.
              </p>
              <button className=" bg-btn-gradient text-white text-sm  sm:text-base font-outfit py-[14px] px-6 rounded-[4px] mt-5 md:mt-[42px] z-[1] before:z-[-1]  before:transition-all before:ease-linear before:hover:bg-white duration-300 before:duration-300 before:absolute before:left-[-100%] before:bg-transparent before:hover:left-[0] before:hover:w-full before:top-0 before:w-full before:h-full  relative overflow-hidden border-transparent border-[2px] hover:text-[#A854E9] hover:border-[#A854E9]">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
