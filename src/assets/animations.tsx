import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Box() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.to(boxRef.current, {
      x: 300,
      duration: 1,
    });
  }, []);

  return <div ref={boxRef} className="box">Hello</div>;
}