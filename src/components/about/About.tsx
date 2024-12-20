import React, { useState } from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import about from "../../png/about-img.png";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui perferendis tenetur voluptas ut facere quae esse molestiae sint eos animi maiores omnis, quibusdam porro, voluptate nesciunt architecto nisi id amet enim! Pariatur perspiciatis omnis aperiam distinctio assumenda fugiat provident ducimus sequi nulla suscipit! Non quam consequuntur quos fugit modi!";
  const truncatedText =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates qui perferendis tenetur voluptas ut facere quae esse molestiae...";

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div id="about" className="bg-gradient-to-tr from-[#261c33] via-[#344ab4] to-[#b65881] px-20 max-[1200px]:px-10 max-md:px-5 max-[450px]:px-3 pb-20 pt-[100px] max-md:pt-[70px] flex items-center max-[640px]:pt-20 max-[500px]:pt-14 max-[375px]:pt-1">
      <div className="flex items-center gap-2 max-[700px]:flex-col max-[540px]:items-start">
        <div ref={ref} className="relative w-[600px] max-[1100px]:w-[500px] max-[700px]:w-[300px] max-[425px]:w-[270px] max-[375px]:w-[240px]">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.9 }}
          >
            <h1 className="font-[500] text-[80px] max-md:text-[70px] max-[500px]:text-[60px] max-[375px]:text-[50px] leading-none italic text-[white] absolute top-[-80px] max-[500px]:top-[-50px] right-[-50px] max-[700px]:right-[-100px] max-[500px]:right-[-28px] z-10">About <br /> Me</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
          >
            <Image src={about} className="w-full h-[400px] max-[1100px]:h-[300px] max-[425px]:h-[270px] max-[375px]:h-[240px] rounded-full" alt="about" />
          </motion.div>
        </div>
        <div className="px-10 max-[820px]:px-3 w-full">
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="text-[35px] max-[1000px]:text-[25px] max-md:text-[22px] max-[480px]:text-[20px] text-white font-[600] leading-10 max-[480px]:leading-7">Creativity bleeds from the pen of <br /> <span className="font-[600] text-[#7963e0]">inspiration</span></p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.3 }}
          >
            <p className="my-3 text-gray-300 text-[20px] max-[1000px]:text-[15px] text-ellipsis overflow-hidden line-clamp-5">
              {isExpanded ? fullText : truncatedText}
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000, delay: 0.9 }}
          >
            <button
              onClick={handleToggle}
              className="px-4 py-3 bg-[#7963e0] text-white rounded-[10px] text-[20px] hover:bg-[#5a4bb2] transition"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;