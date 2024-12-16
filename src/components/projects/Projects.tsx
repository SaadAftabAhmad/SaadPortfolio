import React, { useState } from "react";

import Image from "next/image";

import project1 from "../../svg/project-img-1.svg";
import project2 from "../../svg/project-img-2.svg";
import project3 from "../../svg/project-img-3.svg";
import project4 from "../../svg/project-img-4.svg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Projects = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div id="projects" className="bg-gradient-to-br from-[#261c33] via-[#344ab4] to-[#b65881] px-10 max-[450px]:px-5 pb-10">
      <motion.div
        initial={{ opacity: 0, y: -200 }}
        className=""
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
        transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
      >
        <h1 className="font-[700] text-[60px] max-[550px]:text-[40px] text-center text-white italic">My Projects</h1>
      </motion.div>
      <div ref={ref} className="mt-10 flex flex-col gap-8">
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          className=""
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
        >
          <div className="w-full flex justify-center max-[550px]:justify-start items-end gap-10 max-[800px]:gap-3 pr-[200px] max-[850px]:pr-0">
            <div className="relative">
              <Image src={project1} className="w-[200px] max-[450px]:w-[150px] h-[200px] max-[450px]:h-[160px] object-cover rounded-[20px]" alt="project" />
              <p className="absolute top-5 right-[-50px] text-white text-[20px] text-shadow">Project 1</p>
            </div>
            <div className="flex flex-col gap-5 max-[800px]:gap-3 pb-3">
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          className=""
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.4 }}
        >
          <div className="w-full flex justify-center max-[550px]:justify-end items-start gap-10 max-[800px]:gap-3 pl-[200px] max-[850px]:pl-0">
            <div className="flex flex-col gap-5 max-[800px]:gap-3 pt-3">
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
            </div>
            <div className="relative">
              <Image src={project2} className="w-[350px] max-[550px]:w-[250px] max-[450px]:w-[170px] h-[200px] max-[550px]:h-[170px] max-[450px]:h-[150px] object-cover rounded-[20px]" alt="project" />
              <p className="absolute bottom-10 left-[-50px] text-white text-[20px] text-shadow">Project 1</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -200 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.5 }}
        >
          <div className="w-full flex justify-center max-[550px]:justify-start items-end gap-10 max-[800px]:gap-3 pr-[200px] max-[850px]:pr-0">
            <div className="relative">
              <Image src={project3} className="w-[250px] max-[450px]:w-[200px] h-[180px] max-[450px]:h-[150px] object-cover rounded-[20px]" alt="project" />
              <p className="absolute top-4 right-[-50px] text-white text-[20px] text-shadow">Project 1</p>
            </div>
            <div className="flex gap-5 max-[800px]:gap-3 pb-3">
              <div className="flex flex-col gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex flex-col gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex flex-col gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex flex-col gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
          transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.6 }}
        >
          <div className="w-full flex justify-center max-[550px]:justify-end items-end gap-10 max-[800px]:gap-3 pl-[200px] max-[850px]:pl-0">
            <div className="flex flex-col gap-5 max-[800px]:gap-3 pb-3">
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
              <div className="flex gap-5 max-[800px]:gap-3">
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
                <div className="w-2 h-2 bg-[#22186c] rounded-full" />
              </div>
            </div>
            <div className="relative">
              <Image src={project4} className="w-[230px] max-[450px]:w-[170px] h-[150px] max-[450px]:h-[120px] object-cover rounded-[20px]" alt="project" />
              <p className="absolute top-4 left-[-50px] text-white text-[20px] text-shadow">Project 1</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;