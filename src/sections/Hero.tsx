import { forwardRef } from "react";
import ArrowIcon from "../assets/arrow-right.svg";
import Rectangle from "../assets/Rectangle.svg";
import { Navbar } from "../components/navbar";
import Me from '../assets/redfloverbg.jpg';
import DesignerText from '../assets/Designer text.svg';

type HeroProps = {
  // add props here if needed
};

const Hero = forwardRef<HTMLElement, HeroProps>((props, ref) => {
  return (
    <section ref={ref} className="bg-[#FDFDFD] text-[#000] py-14 sm:py-16 lg:py-20 px-6 sm:px-10 lg:px-[100px]">
      {/* heading */}
      <div className="flex flex-col gap-[24px]">
        <p className="kdam-thmor-pro-regular text-[42px] sm:text-[64px] md:text-[80px] lg:text-[100px]">
          PRODUCT <br />
          <img src={DesignerText} alt="" className="w-[500px]" />
        </p>
        <p className="text-[24px] text-[#78808A] tracking-[16px] kdam-thmor-pro-regular">BASED IN YAOUNDé</p>
        {/* image */}
        <div className="h-[150px] w-[60px] p-[3px] rounded-[400px] bg-gradient-to-b from-[#B50808] to-transparent">
          <div className="bg-[url(../assets/redfloverbg.jpg)] bg-cover bg-center rounded-[400px] w-full h-full">
            <p>  </p>
          </div>
          {/* <img src={Me} className="w-full h-full rounded-[100px] bg-cover bg-center" alt="" /> */}
        </div>
      </div>

      <div className="kay-pho-du-regular text-[42px] sm:text-[64px] md:text-[80px] lg:text-[100px] text-base/30 flex flex-auto items-end justify-end text-right">
        <p>MOKUBE <br /> QUINEVERT</p>
      </div>
      <div className="flex flex-col gap-2 text-left">
        <p className="kay-pho-du-regular text-[16px] md:text-[20px] text-[#96999E] tracking-[-12]">
          AVAILABLE FOR COLLABORATION
        </p>

        <div className="flex items-center gap-2 text-[16px] md:text-[28px] kay-pho-du-semibold">
          <p className="break-all sm:break-normal">
            quinevertm8@gmail.com
          </p>
          <img src={ArrowIcon} className="rotate-270 w-5 sm:w-6" alt="" />
        </div>
      </div>
    </section>
  );
});

export default Hero;
