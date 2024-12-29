"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    service: "Web Development",
    description:
      "Building responsive and modern websites tailored to your needs, utilizing the latest technologies and best practices.",
    href:""
  },
  {
    num: "02",
    service: "UI/UX Design",
    description:
      "Crafting intuitive and aesthetically pleasing user interfaces and experiences that resonate with users.",
    href:""
    },
  {
    num: "03",
    service: "Mobile App Development",
    description:
      "Developing cross-platform mobile applications that provide seamless performance and user engagement.",
    href:""
    },
];

function Services() {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index)=>{
            return (
              <div key={index} className="flex-1 felx-col justify-center gap-6 group">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent
                  group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white 
                  group-hover:bg-accent transition-all duration-500 flex justify-center items-center 
                  hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link>
                </div>
                {/* heading */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent
                transition-all duration-500">{service.service}</h2>
                {/* description */}
                <p className="text-white/60 ">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full "></div>
              </div>
            )
          })}
        </motion.div>
      </div>
    </section>

    // <section className="py-12 bg-gray-900 text-white">
    //   <div className="container mx-auto">
    //     <h2 className="text-3xl font-bold text-center mb-8">Services</h2>
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    //       {services.map((service, index) => (
    //         <div
    //           key={index}
    //           className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    //         >
    //           <h3 className="text-xl font-bold mb-4">{service.num}. {service.service}</h3>
    //           <p className="text-gray-400">{service.description}</p>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </section>
  );
}

export default Services;
