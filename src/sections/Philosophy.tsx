import profile from "../assets/profile.png"
import fullbody from "../assets/full image.png";
import hand from "../assets/hand.png";
import ArrowIcon from "../assets/arrow-right.svg";


export default function Philosophy() {
    return (
        <section id="philosophy" className="flex text-[#ffffff] gap-[100px] flex-col justify-center text-start p-[150px] items-start bg-[#353534] bg-[url(../assets/redfloverbg.jpg)] bg-blend-multiply bg-cover bg-center">
            <div id="section1" className="flex w-full text-left items-start flex-col">
                <h2 className="text-[24px] tracking-[-1px] text-[#6E7176] sm:text-[32px] md:text-[48px] lg:text-[64px] mb-6 flex text-left">DESIGN IS NOT JUST A CAREER FOR ME, <br /> IT’S HOW I VIEW LIFE</h2>
                <div className="flex w-[80%] items-center justify-center">
                    <p className="w-[70%] uppercase text-[#ffffff] text-center sm:text-[14px] md:text-[16px] lg:text-[24px]">
                        I value focus, balance, and intention in both my work and daily life. I’m inspired by simplicity, responsibility, and creativity.
                    </p>
                </div>
            </div>
            <div id="section2" className="flex gap-[24px] w-full justify-end items-end">
                <img src={fullbody} alt="" />
                <div>
                    <img src={hand} alt="" />
                    <div className="flex items-center gap-2 text-[16px] md:text-[24px] kay-pho-du-regular">
                        <p className="break-all sm:break-normal uppercase">
                            contact me
                        </p>
                        <img src={ArrowIcon} className="rotate-270 w-5 sm:w-6" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
                <img src={profile} className="grayscale" />
                <div>
                    <p className="text-neutral-700 mb-4">
                        I’m an experienced product and UX/UI designer crafting meaningful
                        digital experiences for brands of all sizes.
                    </p>
                    <p className="text-neutral-700">
                        My work is guided by clarity, usability, and thoughtful visual
                        execution across platforms and devices.
                    </p>
                </div>
            </div> */}
        </section>
    );
}
