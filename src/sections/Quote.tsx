import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import Signature from "../assets/signature.svg";


export default function Quote() {
    const GsapTo = () => {
        // gsap to method
        useGSAP (() => {
            gsap.to('circle' , {
                x=250,
                repeat: =1,
                yoyo:
            })
        })
    }

    return (
        <section id="about" className="flex justify-center text-center items-center bg-[#4D4C4B] bg-[url(../assets/redfloverbg.jpg)] bg-blend-multiply bg-cover bg-center h-[900px]">
            <div id="circle" className="flex flex-col bg-[#B50808] h-[350px] w-[350px] text-[#fff] rounded-[500px] justify-center items-center text-center p-12">
                <h2 className="text-l font-medium mb-6 uppercase">“ I believe Great design begins with observation: of people, of things, and of the life they create together.”</h2>
                <p>
                    <img src={Signature} alt="" className="w-full h-full" />
                </p>
            </div>
        </section>
    );
}
