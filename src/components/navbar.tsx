import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../assets/arrow-right.svg";
import "./style.css";
import "../../src/index.css";

const scrollTo = (id: string) => {
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: "smooth" });
};

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
      return;
    }
    scrollTo(id);
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        transition-all duration-500 ease-in-out
        ${scrolled
          ? "bg-black/60 backdrop-blur-xl shadow-lg text-white"
          : "bg-black/60 text-white"}
      `}
    >
      <div className="nav-styles text-[14px] flex justify-between items-center px-6 py-4">
        
        {/* LOGO */}
        <div className="navText font-bold tracking-widest">MOKUBE QUINEVERT</div>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-12">
          <li onClick={() => handleScroll("hero")} className="navText cursor-pointer hover:text-red transition">
            [ HOME ]
          </li>
          <li onClick={() => handleScroll("about")} className="navText cursor-pointer hover:text-red transition">
            [ ABOUT ME ]
          </li>
          <li onClick={() => handleScroll("projects")} className="navText cursor-pointer hover:text-red transition">
            [ PROJECTS ]
          </li>
          <li onClick={() => handleScroll("services")} className="navText cursor-pointer hover:text-red transition">
            [ SERVICES ]
          </li>
        </ul>

        {/* CONTACT */}
        <Link to="/contact" className="md:flex hidden gap-2 items-center navText">
          <p>CONTACT</p>
          <img src={ArrowIcon} className="rotate-270 size-8" alt="" />
        </Link>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden h-screen bg-black/80 backdrop-blur-xl px-6 py-6 space-y-6">
          <p onClick={() => handleScroll("hero")} className="navText cursor-pointer">HOME</p>
          <p onClick={() => handleScroll("about")} className="navText cursor-pointer">ABOUT</p>
          <p onClick={() => handleScroll("projects")} className="navText cursor-pointer">PROJECTS</p>
          <p onClick={() => handleScroll("services")} className="navText cursor-pointer">SERVICES</p>
          <Link to="/contact" onClick={() => setOpen(false)} className="navText">CONTACT</Link>
        </div>
      )}
    </nav>
  );
}
