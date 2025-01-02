import React, { useRef } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import {
  FaReact,
  FaNode,
  FaJs,
  FaPhp,
  FaAndroid,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNextdotjs,
  SiFlutter,
  SiGithub,
  SiPostman,
  SiFastapi,
  SiFirebase,
} from "react-icons/si";

const ParalxEffect = () => {
  const iconsRef = useRef(null);

  const techStackIcons = [
    { Icon: FaReact, className: "top-10 left-10 text-[#61DAFB]" },
    { Icon: SiNextdotjs, className: "top-20 right-72 text-white text-[60px]" },
    { Icon: FaNode, className: "bottom-28 left-20 text-green-700 text-[100px]" },
    { Icon: SiMongodb, className: "top-1/3 left-3/4 text-green-600 text-[70px]" },
    { Icon: SiFirebase, className: "bottom-24 right-72 text-orange-500" },
    { Icon: SiTailwindcss, className: "top-30 right-40 text-teal-500" },
    { Icon: FaPhp, className: "bottom-52 right-16 text-purple-500" },
    { Icon: FaFigma, className: "bottom-28 mx-auto text-pink-500" },
    { Icon: FaJs, className: "bottom-1/4 left-1/3 text-[#F7DF1E]" },
    { Icon: FaAndroid, className: "top-20 right-20 text-[#3DDC84]" },
    { Icon: SiExpress, className: "top-24 left-64 text-gray-500" },
    { Icon: SiFlutter, className: "top-36 right-50 text-[#02569B] text-[70px]" },
    { Icon: SiGithub, className: "top-44 left-1/4 text-white" },
    { Icon: SiPostman, className: "top-64 left-52 text-[#FF6C37]" },
    { Icon: SiFastapi, className: "bottom-24 left-1/4 text-[#009688]" },
  ];

  const handleMouseMove = (e) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const icons = container.querySelectorAll(".tech-icon");

    icons.forEach((icon, index) => {
      const moveX = ((x - rect.width / 2) / 60) * (index + 1);
      const moveY = ((y - rect.height / 2) / 60) * (index + 1);

      requestAnimationFrame(() => {
        icon.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    });
  };

  const handleMouseLeave = () => {
    const icons = iconsRef.current.querySelectorAll(".tech-icon");
    icons.forEach((icon) => {
      requestAnimationFrame(() => {
        icon.style.transform = "translate(0px, 0px)";
      });
    });
  };

  return (
    <div
      className="relative w-full top-6 h-screen flex flex-col justify-center items-center bg-primary"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={iconsRef}
    >
      <h1 className="text-5xl font-bold text-center mb-4">My Tech Stack</h1>
      <div className="flex flex-wrap justify-center mb-8 gap-6">
        <Link href="/portfolio">
          <Button>Projects</Button>
        </Link>

        <Link href="/resume">
          <Button href="/resume">Resume</Button>
        </Link>

        <Link href="/contact">
          <Button href="/contact">Contact Me</Button>
        </Link>
      </div>
      {techStackIcons.map(({ Icon, className }, index) => (
        <div
          key={index}
          className={`absolute text-6xl transition-transform duration-150 ease-out tech-icon ${className}`}
        >
          <Icon />
        </div>
      ))}
    </div>
  );
};

export default ParalxEffect;
