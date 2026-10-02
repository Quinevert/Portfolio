import { useRef, useEffect, useState } from "react";
import Hero from "../sections/Hero";
import Loader from "../sections/loader";
import About from "../sections/About";
import Philosophy from "../sections/Philosophy";
import gsap from "gsap";
import { Navbar } from "../components/navbar";
import Quote from "../sections/Quote";

export default function LandingPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const loaderRef = useRef<HTMLDivElement | null>(null);
  const container = useRef(null);
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

   const handleComplete = () => {
    if (!loaderRef.current || !heroRef.current) return;

    const tl = gsap.timeline();

  const scrollToHero = () => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div ref={container}>
      {!isLoadingComplete ? (
        <Loader onComplete={() => setIsLoadingComplete(true)} />
      ) : (
        <div className="flex flex-col bg-[#000]">
          {/* <Loader onComplete={scrollToHero} /> */}
          <Navbar />
          <Hero ref={heroRef} />
          <Quote />
          <About />
          <Philosophy />
        </div>
      )}
    </ div>
  );
}}
