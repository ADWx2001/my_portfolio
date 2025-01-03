"use client";

import ParalxEffect from "@/components/ParalxEffect";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Status from "@/components/Status";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="w-full">
      <div className="container mx-auto h-full">
        <div
          className="flex flex-col xl:flex-row items-center justify-between 
        xl:pt-8 xl:pb-24 "
        >
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-lg ">Software Engineering Undergraduate</span>
            <h1 className="h1">
              Hello('World'); <br />
              I'm <br />
              <span className="text-accent">Asanka Dilshan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80"></p>

            {/* buttons socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                className="uppercase flex items-center gap-2"
                size="lg"
              >
                <a
                  href="/cv/cv_25.pdf"
                  download="Asanka_Wickramasurendra.pdf"
                  className="flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border boder-accent rounded-full flex justify-center 
                  items-center text-accent text-base hover:bg-accent hover:text-primary 
                  hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* <Status /> */}
      <div className="hidden md:block">
        <ParalxEffect />
      </div>
    </section>
  );
}
