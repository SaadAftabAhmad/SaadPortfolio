import React from "react";

import Image from "next/image";
import Link from "next/link";

import about from "../../png/about.jpg";

const About = () => {
  return (
    <div id="about" className="text-white px-20 max-sm:px-4 bg-[#292e32] py-6">
      <h1 className="font-[700] text-[30px] text-center text-[#10e5ea] pb-5 underline">ABOUT US</h1>
      <div className="flex justify-center gap-10 max-lg:flex-wrap mt-7">
        <div className="w-[70%] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
          <Image src={about} className="w-[100%] rounded-[10px]" alt="about" />
        </div>
        <div className="px-5">
          <p className="text-[30px] max-[550px]:text-[20px] font-[600]">Creativity bleeds from the pen of <br /> <span className="font-[600] text-[#7963e0]">inspiration</span></p>
          <p className="my-5 max-[550px]:text-[14px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque omnis accusantium culpa porro labore nam aut?</p>
          <div className="border px-10 max-sm:px-5 py-5 rounded-[15px]">
            <div className="flex justify-between gap-5 flex-wrap">
              <div>
                <p className="text-[18px] font-[500]">Full Name :</p>
                <p className="text-[14px]">Saad Ali</p>
              </div>
              <div className="mr-[70px]">
                <p className="text-[18px] font-[500]">Phone No :</p>
                <p className="text-[14px]">0324 8329019</p>
              </div>
            </div>
            <div className="flex justify-between gap-10 max-[380px]:gap-5 flex-wrap my-3">
              <div className="max-[380px]:w-full">
                <p className="text-[18px] font-[500]">Age:</p>
                <p className="text-[14px]">18 Years</p>
              </div>
              <div>
                <p className="text-[18px] font-[500]">Email:</p>
                <p className="text-[14px]">saad0306058@gmail.com</p>
              </div>
            </div>
            <p className="text-[18px] font-[500]">Address : </p>
            <p className="text-[14px]"> Kasur </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;