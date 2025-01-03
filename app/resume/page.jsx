"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { animate, motion } from "framer-motion";

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

const about = {
  title: "About Me",
  description: "Learn more about who I am and how to reach me.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Asanka Wickramasurendra",
    },
    {
      fieldName: "Phone",
      fieldValue: "+94 70 119 4600",
    },
    {
      fieldName: "Email",
      fieldValue: "asankadilshanme@gmail.com",
    },
    {
      fieldName: "Address",
      fieldValue: "No 485, Weliwita Rd, Malabe",
    },
  ],
};

const experience = {
  icon: "/assets/badge.svg",
  title: "My Experience",
  description: "A summary of my professional journey and accomplishments.",
  items: [
    // {
    //   company: "Tech Solutions Ltd",
    //   position: "Software Engineer",
    //   duration: "Jan 2021 - Present",
    // },
    // {
    //   company: "Creative Designs Co",
    //   position: "UI/UX Designer",
    //   duration: "Jun 2019 - Dec 2020",
    // },
    // {
    //   company: "Mobile Innovators",
    //   position: "Mobile App Developer",
    //   duration: "Aug 2017 - May 2019",
    // },
  ],
};

const education = {
  icon: "/assets/badge.svg",
  title: "My Education",
  description: "A summary of my academic background and achievements.",
  items: [
    {
      institution: "Sri Lanka Institute of Information Technology",
      degree:
        "BSc(Hons) in IT Specializing in Software Engineering",
      duration: "2022 - present",
    },
    {
      institution: "Ibbagamuwa Central College",
      degree: "Advanced Level - 2020",
      duration: "2012 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "A summary of my technical and soft skills.",
  skillList: [
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNode />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    
  ],
};

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center junstify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto gap-6 ">
            {/* <TabsTrigger value="experience">Experience</TabsTrigger> */}
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experinece */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
                        flex-col justify-center items-center lg:items-start gap- 1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Education */}
            <TabsContent value="education" className="w-full">
            <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold ">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex 
                        flex-col justify-center items-center lg:items-start gap- 1"
                        >
                          <span className="text-accent">{item.institution}</span>
                          <h3 className="text-[14px] max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3 ">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.duration}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
            </div>
            </TabsContent>

            {/* Skills */}
            <TabsContent value="skills" className="w-full h-full" >
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((item, index)=>{
                    return(
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[184px] bg-[#232329] 
                            rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent
                              transition duration-300 ease-in-out ">{item.icon}</div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize ">{item.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    )
                  })}
                </ul>
            </div>
            </TabsContent>

            {/* About */}
            <TabsContent value="about" className="w-full h-full">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-32 max-w-[640px]
              mx-auto xl:mx-0">
                {about.info.map((item, index)=>{
                  return(
                    <li key={index} className="flex items-center justify-center xl:justify-start 
                    gap-4">
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-md">{item.fieldValue}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
