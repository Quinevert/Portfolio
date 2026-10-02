import profile from "../assets/profile.png";
import Line from "../assets/Line.svg";
import ArrowIcon from "../assets/arrow-right.svg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F7F7F7] flex flex-col text-black justify-center items-center py-[150px] gap-[66px]"
    >
      {/* TITLE */}
      <div className="flex justify-center mb-16">
        <h2 className="kdam-thmor-pro-regular text-[42px] sm:text-[64px] md:text-[80px] lg:text-[100px] leading-none">
          ABOUT ME
        </h2>
      </div>

      {/* CONTENT */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_50%] gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
        {/* IMAGE */}
        <div className="flex justify-left lg:justify-start">
          <img
            src={profile}
            className="grayscale w-full max-w-sm sm:max-w-md lg:max-w-lg object-cover"
            alt="Profile"
          />
        </div>

        {/* TEXT */}
        <div className="flex flex-col gap-20 kay-pho-du-regular">
          {/* LINE */}
          <div className="flex justify-end">
            <img src={Line} alt="" className="w-24" />
          </div>

          {/* INTRO */}
          <div>
            <p className="uppercase kay-pho-du-semibold text-sm tracking-widest">
              Hello!
            </p>
            <p className="uppercase kay-pho-du-semibold text-lg">
              I'm Mokube Quinevert
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="flex flex-col gap-6">
            <div className="flex w-full justify-between items-center gap-12">
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-[#78808A] uppercase tracking-widest text-xs">
                    My Experience
                  </p>
                  <img src={ArrowIcon} className="w-6" alt="" />
                </div>
                <p className="text-[#3D3B3B] uppercase text-sm sm:text-base leading-relaxed">
                  I’m a product-focused UI/UX designer creating clear and pleasant
                  digital experiences. My work sits at the intersection of design,
                  usability, and strategy.
                </p>
              </div>

              <p className="text-[#3D3B3B] uppercase text-sm sm:text-base leading-relaxed">
                With a background in frontend development and product thinking, I
                design solutions that are not only visually refined, but practical,
                scalable, and ready to be built.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
