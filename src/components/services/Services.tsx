import React, { useState } from "react";

import Link from "next/link";

const Services = () => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isReadMore1, setIsReadMore1] = useState(false);
  const [isReadMore2, setIsReadMore2] = useState(false);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  const toggleReadMore1 = () => {
    setIsReadMore1(!isReadMore1);
  };
  const toggleReadMore2 = () => {
    setIsReadMore2(!isReadMore2);
  };

  return (
    <div id="services" className="text-white px-20 max-sm:px-3 py-6">
      <h1 className="font-[700] text-[30px] text-center text-[#10e5ea] mb-6 max-[500px]:mb-3 underline">Services</h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 p-6 max-[500px]:px-3">
        <div className="px-7 py-7 bg-[#292e32] flex flex-col items-center rounded-[10px] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
          <div className="w-[70px] h-[70px] border-[2px] border-[#10e5ea] rounded-full flex justify-center items-center text-[25px] bg-[#260821] mb-5" style={{ boxShadow: '0px 3px 15px rgba(16, 229, 234)' }}>
            <i className="fa-solid fa-code"></i>
          </div>
          <h3 className="text-[25px] max-[370px]:text-[23px] text-[#10e5ea] font-[700] mb-3">HTML</h3>
          <div className="overflow-hidden transition-all duration-300">
            <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[20px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores dolores ad maiores harum provident quod nemo architecto suscipit placeat.</p>
            {isReadMore && (
              <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[20px] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim ut tellus tristique, nec ultrices sapien fringilla. Quisque gravida urna et arcu tempor, nec tincidunt mi tristique. Morbi commodo, nisi at vehicula cursus, erat velit cursus sapien, at lacinia nisi mi ac sapien.
              </p>
            )}
          </div>
          <div className="flex justify-center h-[45px] font-[600]">
            <button
              onClick={toggleReadMore}
              className="flex justify-center items-center w-[150px] h-[100%] hover:text-[#10e5ea] bg-[#10e5ea] hover:bg-[#260821] rounded-[5px] border-[2px] border-[#10e5ea]"
            >
              {isReadMore ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="px-7 py-7 bg-[#292e32] flex flex-col items-center rounded-[10px] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
          <div className="w-[70px] h-[70px] border-[2px] border-[#10e5ea] rounded-full flex justify-center items-center text-[25px] bg-[#260821] mb-5" style={{ boxShadow: '0px 3px 15px rgba(16, 229, 234)' }}>
            <i className="fa-solid fa-layer-group"></i>
          </div>
          <h3 className="text-[25px] max-[370px]:text-[23px] text-[#10e5ea] font-[700] mb-3">CSS</h3>
          <div className="overflow-hidden transition-all duration-300">
            <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[22px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores dolores ad maiores harum provident quod nemo architecto suscipit placeat.</p>
            {isReadMore1 && (
              <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[20px] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim ut tellus tristique, nec ultrices sapien fringilla. Quisque gravida urna et arcu tempor, nec tincidunt mi tristique. Morbi commodo, nisi at vehicula cursus, erat velit cursus sapien, at lacinia nisi mi ac sapien.
              </p>
            )}
          </div>
          <div className="flex justify-center h-[45px] font-[600]">
            <button
              onClick={toggleReadMore1}
              className="flex justify-center items-center w-[150px] h-[100%] hover:text-[#10e5ea] bg-[#10e5ea] hover:bg-[#260821] rounded-[5px] border-[2px] border-[#10e5ea]"
            >
              {isReadMore1 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
        <div className="px-7 py-7 bg-[#292e32] flex flex-col items-center rounded-[10px] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
          <div className="w-[70px] h-[70px] border-[2px] border-[#10e5ea] rounded-full flex justify-center items-center text-[25px] bg-[#260821] mb-5" style={{ boxShadow: '0px 3px 15px rgba(16, 229, 234)' }}>
            <i className="fa-brands fa-connectdevelop"></i>
          </div>
          <h3 className="text-[25px] max-[370px]:text-[23px] text-[#10e5ea] font-[700] mb-3">Tailwind CSS</h3>
          <div className="overflow-hidden transition-all duration-300">
            <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[22px] mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores dolores ad maiores harum provident quod nemo architecto suscipit placeat.</p>
            {isReadMore2 && (
              <p className="text-[16px] text-[#bdbdbd] text-center font-[300] leading-[20px] mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum suscipit enim ut tellus tristique, nec ultrices sapien fringilla. Quisque gravida urna et arcu tempor, nec tincidunt mi tristique. Morbi commodo, nisi at vehicula cursus, erat velit cursus sapien, at lacinia nisi mi ac sapien.
              </p>
            )}
          </div>
          <div className="flex justify-center h-[45px] font-[600]">
            <button
              onClick={toggleReadMore2}
              className="flex justify-center items-center w-[150px] h-[100%] hover:text-[#10e5ea] bg-[#10e5ea] hover:bg-[#260821] rounded-[5px] border-[2px] border-[#10e5ea]"
            >
              {isReadMore2 ? 'Show Less' : 'Read More'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;