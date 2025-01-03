"use client";

import CountUp from "react-countup";

const status = [
  {
    num: 1,
    text: "Years of experience",
  },
  {
    num: 7,
    text: "Projects completed",
  },
  {
    num: 8,
    text: "Technology mastered",
  },
  // {
  //   num: 12,
  //   text: "Code commits",
  // },
];

function Status() {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {status.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justifu-center
              xl:justify-start "
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl font-extrabold text-white xl:text-6xl "
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } text-sm leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Status;
