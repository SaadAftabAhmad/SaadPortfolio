import React from "react";

import Image from "next/image";
import { motion } from "framer-motion";
import developer from "../../png/portfolio-img.png";
import { useInView } from "react-intersection-observer";
import { BackgroundBeams } from "../ui/background-beams";

const Home = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  return (
    <div className="w-full h-[100vh] flex">
      <div id="home" className="w-[100%] px-10 max-[800px]:px-5 flex justify-between items-center max-[640px]:items-start max-[640px]:flex-col">
        <div ref={ref} className="max-[640px]:absolute top-14 max-[425px]:top-5">
          <motion.div
            initial={{ opacity: 0, y: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -200 }}
          >
            <h1 className="font-[700] text-[75px] max-[850px]:text-[60px] max-[550px]:text-[50px] leading-none bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] text-transparent bg-clip-text">Saad Ali</h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ type: "spring", stiffness: 50, duration: 1000 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -200 }}
          >
            <div className="relative">
              <div className="w-[10px] h-[10px] rounded-full bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] absolute bottom-[-9px] left-[-3.5px]" />
              <p className="font-[500] text-[35px] max-[850px]:text-[25px] max-[550px]:text-[20px] mt-14 max-[550px]:mt-8 bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] pl-3 text-transparent bg-clip-text border-l-[4px] border-gradient-to-bl border-l-[#93cedd]/75 border-l-[#f85dfb]/75">I&apos;m a UI/UX <br /> Developer</p>
            </div>
          </motion.div>
        </div>

        <div className="absolute right-[150px] max-[920px]:right-[90px] max-[700px]:right-[60px] max-[350px]:right-auto max-[640px]:top-[200px]">
          <div className="w-[500px] max-[1100px]:w-[400px] max-md:w-[280px] max-[375px]:w-[250px] h-[500px] max-[1100px]:h-[400px] max-md:h-[280px] max-[375px]:h-[250px] flex justify-center items-center relative">
            <div className="absolute w-full h-full border-l-[3px] border-red-400 border-r-[3px] border-r-[#29254d] rounded-full animate-rotate">
              <div className="w-[70px] max-md:w-[60px] max-[375px]:w-[50px] h-[70px] max-md:h-[60px] max-[375px]:h-[50px] bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] fixed right-[40px] max-[1100px]:right-[10px] max-md:right-0 top-8" style={{ clipPath: "ellipse(44% 38% at 50% 50%)", }} />
              <div className="w-[70px] max-md:w-[60px] max-[375px]:w-[50px] h-[70px] max-md:h-[60px] max-[375px]:h-[50px] bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] fixed left-7 max-md:left-0 bottom-10 max-[1100px]:bottom-6" style={{ clipPath: "ellipse(48% 45% at 50% 50%)", }} />
              <div className="w-[70px] max-md:w-[60px] max-[375px]:w-[50px] h-[70px] max-md:h-[60px] max-[375px]:h-[50px] bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] fixed left-5 max-md:left-8 top-14 max-[1100px]:top-0" style={{ clipPath: "ellipse(48% 45% at 50% 50%)", }} />
              <div className="w-[70px] max-md:w-[60px] max-[375px]:w-[50px] h-[70px] max-md:h-[60px] max-[375px]:h-[50px] bg-gradient-to-tl from-[#93cedd] to-[#f85dfb] fixed right-0 max-[1100px]:right-9 bottom-20 max-[1100px]:bottom-3 max-md:bottom-0" style={{ clipPath: "ellipse(48% 45% at 50% 50%)", }} />
            </div>
            <div className="w-[450px] max-[1100px]:w-[350px] max-md:w-[250px] max-[375px]:w-[235px] h-[450px] max-[1100px]:h-[350px] max-md:h-[250px] max-[375px]:h-[235px] bg-gradient-to-bl from-[#93cedd] to-[#f85dfb] rounded-full overflow-hidden flex justify-center items-center">
              <Image src={developer} className="w-full h-auto" alt="developer" />
            </div>
          </div>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default Home;