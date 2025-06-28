"use client";

import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/PinContainer";

const RecentProjects = () => {
  return (
    <div className="py-10 pb-5 flex flex-col justify-center items-center" id="project">
      <h1 className="heading">
        A small selection of <span className="text-purple">recent projects</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5 px-4">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] m-3"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <Image
                    src="/bg.png"
                    alt="background"
                    fill
                    className="object-cover"
                  />
                </div>
                <Image
                  src={img}
                  alt={title}
                  fill
                  className="absolute object-cover rounded-xl"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3"
                style={{ color: "#BEC1DD", margin: "1vh 0" }}
              >
                {des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={`${icon}-${index}`}
                      className="bg-black border border-white/[0.4] lg:w-10 lg:h-10 w-8 h-8 rounded-full flex items-center justify-center"
                      style={{
                        transform: `translateX(-${3 * index * 2}px)`,
                      }}
                    >
                      <Image
                        src={icon}
                        alt={`icon-${index}`}
                        width={24}
                        height={24}
                        className="p-1"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#805ad5" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
