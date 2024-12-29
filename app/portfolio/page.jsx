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

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Portfolio Website",
    description:
      "A personal portfolio website to showcase my skills, projects, and experience.",
    stack: [
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    image: "/images/portfolio.png",
    live: "https://myportfolio.com",
    github: "https://github.com/username/portfolio",
  },
  {
    num: "02",
    category: "fullstack",
    title: "E-Commerce App",
    description:
      "A full-stack application for online shopping with payment integration.",
    stack: [{ name: "Next.js" }, { name: "Node.js" }, { name: "MongoDB" }],
    image: "/images/ecommerce.png",
    live: "https://ecommerceapp.com",
    github: "https://github.com/username/ecommerce-app",
  },
  {
    num: "03",
    category: "mobile",
    title: "Fitness Tracker",
    description: "A mobile application to track workouts and fitness goals.",
    stack: [{ name: "Flutter" }, { name: "Firebase" }, { name: "Dart" }],
    image: "/images/fitness.png",
    live: "https://play.google.com/store/apps/details?id=com.fitness.tracker",
    github: "https://github.com/username/fitness-tracker",
  },
  {
    num: "04",
    category: "backend",
    title: "API for a Blogging Platform",
    description: "A RESTful API for managing blog posts, comments, and users.",
    stack: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
    ],
    image: "/images/blog-api.png",
    live: "https://blogapi.com/docs",
    github: "https://github.com/username/blog-api",
  },
  {
    num: "05",
    category: "frontend",
    title: "Dashboard UI",
    description: "A responsive dashboard for managing analytics and reports.",
    stack: [{ name: "Vue.js" }, { name: "Vuetify" }, { name: "Chart.js" }],
    image: "/images/dashboard.png",
    live: "https://dashboardui.com",
    github: "https://github.com/username/dashboard-ui",
  },
];


function PortFolio() {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) =>{
    //get current index
    const currentIndex = swiper.activeIndex;
    //update the project state based the slide index
    setProject(projects[currentIndex]);
  
  }
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 , transition:{delay:2.4, duration:0.4, ease:"easeIn"}}}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto ">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl-h-[460px] flex flex-col xl:justify-between
            order-2 xl:order-none"
            >
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline num */}
                <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                  {project.num}
                </div>

                {/* Project category */}
                <h2
                  className="text-[42px] font-bold leading-none text-white group-hover:text-accent
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
                        {item.name},
                        {/* remove last comma */}
                        {index !== project.stack.length -1 && ","}
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
                        flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-accent
                          "/>
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
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 
                        flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent
                          "/>
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
              <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
                {projects.map((project, index)=>{
                  return(
                    <SwiperSlide key={index} className="w-full ">
                      <div className="h-[460px] relative group flex justify-center items-center
                      bg-pink-50/20">
                        {/* overlay */}
                        <div className="absolute top-0 bottom-0 w-full h-full 
                        bg-black/10 z-10"></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image src={project.image} fill className="object-cover"
                          alt=""/>
                        </div>

                      </div>
                    </SwiperSlide>
                  )
                })}
                {/* slider button  */}
                <WorkSliderButton containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" btnStyles="bg-accent
                hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center
                items-center transition-all "/>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default PortFolio;
