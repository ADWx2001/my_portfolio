"use client";

import { motion } from "framer-motion";
import { React, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub, BsTypeH2 } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderButton from "@/components/WorkSliderButton";
import Ongoing from "@/components/Ongoing";

const projects = [
  {
    num: "01",
    category: "FullStack ",
    title: "Eaton Cleaning Web Application",
    description:
      "A web application for a cleaning service located in Kurunegala, Sri Lanka",
    stack: [
      { name: "MERN Stack" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
      { name: "Redux" },
      { name: "Firebase" },
    ],
    image: "/assets/work/proj1.png",
    live: "https://eatoncleaning.com/",
    github: "https://github.com/username/portfolio",
  },
  {
    num: "02",
    category: "fullstack",
    title: "Hostel Management Web Application",
    description:
      "A full-stack application for online hostel find and booking for uni students.",
    stack: [
      { name: "MERN Stack" },
      { name: "Redux" },
      { name: "Tailwind" },
      { name: "Framer-Motin" },
    ],
    image: "/assets/work/proj2.png",
    live: "",
    github: "https://github.com/IT22102546/HostelManagement",
  },
  {
    num: "03",
    category: "Mobile Apps",
    title: "Socially ",
    description: "A social app connect, follow and share reels.",
    stack: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Dart" }],
    image: "/assets/work/proj3.png",
    live: "",
    github:
      "https://github.com/ADWx2001/flutter-app-practice/tree/main/socially_app/socially_app",
  },
  {
    num: "04",
    category: "Mobile App",
    title: "Easy Weather",
    description: "A Weather app to get real time weather by location.",
    stack: [{ name: "Flutter" }, { name: "Weather API" }, { name: "Dart" }],
    image: "/assets/work/proj4.png",
    live: "https://blogapi.com/docs",
    github: "https://github.com/username/blog-api",
  },
  {
    num: "05",
    category: "Mobile App",
    title: "Maternity Mate",
    description:
      "A mobile app that helps pregnant women to monitor sysptoms, kick count, meal plans exercise appointment and more.",
    stack: [
      { name: "React Native" },
      { name: "Firebase" },
      { name: "NativeWind" },
    ],
    image: "/assets/work/proj5.png",
    live: "",
    github: "https://github.com/IT22102546/Maternity-Care",
  },
];

function PortFolio() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    //get current index
    const currentIndex = swiper.activeIndex;
    //update the project state based the slide index
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div
              className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between
            order-2 xl:order-none"
            >
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-6xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                {/* Project Name */}
                <h2
                  className="text-[36px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500 capitalize"
                >
                  {project.title}
                </h2>

                {/* Project category */}
                <h2
                  className="text-[25px] font-bold leading-none text-accent group-hover:text-accent
                transition-all duration-500 capitalize"
                >
                  {project.category}
                </h2>

                {/* project description */}
                <p className="text-white/60">{project.description}</p>

                {/* Stack used */}
                <ul className="flex gap-4 ">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-accent ">
                        {item.name},{/* remove last comma */}
                        {index !== project.stack.length - 1}
                      </li>
                    );
                  })}
                </ul>

                {/* border */}
                <div className="border border-white/20"></div>
                {/* buttons */}
                <div className="flex items-center gap-4 ">
                  {/* Github project button */}
                  <Link href={project.github}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full bg-white/5 
                        flex justify-center items-center group"
                        >
                          <BsGithub
                            className="text-white text-3xl group-hover:text-accent
                          "
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repo </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* Live project button */}
                  <Link href={project.live}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger
                          className="w-[70px] h-[70px] rounded-full bg-white/5 
                        flex justify-center items-center group"
                        >
                          <BsArrowUpRight
                            className="text-white text-3xl group-hover:text-accent
                          "
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full ">
                      <div
                        className="h-[460px] relative group flex justify-center items-center
                      bg-pink-50/20"
                      >
                        {/* overlay */}
                        <div
                          className="absolute top-0 bottom-0 w-full h-full 
                        bg-black/10 z-10"
                        ></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                {/* slider button  */}
                <WorkSliderButton
                  containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                  btnStyles="bg-accent
                hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                items-center transition-all "
                />
              </Swiper>
            </div>
          </div>
          <Ongoing />
        </div>
      </div>
    </motion.section>
  );
}

export default PortFolio;
