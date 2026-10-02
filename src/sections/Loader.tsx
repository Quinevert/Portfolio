import { useEffect, useState, useRef } from "react";
import ArrowIcon from "../assets/arrow-right.svg";

type LoaderProps = {
  onComplete?: () => void;
};
export default function Loader({ onComplete }: LoaderProps) {
  const container = useRef(null);
  const [progress, setProgress] = useState<number>(0);

  // loader
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          // ⬇️ Auto move after short delay
          setTimeout(() => {
            onComplete?.();
          }, 600);
          return 100;
        }
        return prev + 1;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [onComplete]);

  const radius = 150;
  const stroke = 1;
  const normalizedRadius = radius - stroke * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      {/* {progress < 100 ? ( */}
      <section ref={container} className="flex flex-col loaderpage h-[100vh] bg-[#000000]">
        <div className="flex items-center justify-center h-screen">
          <div className="relative">
            <svg height={radius * 2} width={radius * 2}>
              {/* Background circle */}
              <circle
                stroke="#000000"
                fill="transparent"
                strokeWidth={stroke}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
              />
              {/* Progress circle */}
              <circle
                stroke="#ffffff"
                fill="transparent"
                strokeWidth={stroke}
                strokeDasharray={circumference + " " + circumference}
                style={{ strokeDashoffset }}
                strokeLinecap="round"
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                className="transition-all duration-200"
              />
            </svg>

            {/* Center text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-semibold">
                <h2 className="text-[2em] percentage text-[#B50808] kdam-thmor-pro-regular flex-1 flex items-center justify-center">{progress}%</h2>
              </span>
            </div>
          </div>
        </div>
        <p className="flex justify-center hero-subtitle kay-pho-du-regular name text-[10em] b-4 w-full text-[#090909] text-center">MOKUBE QUINEVERT</p>
      </section>
    </section>
  );
}
