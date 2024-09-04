import React, { useState } from "react";

import Link from "next/link";

import SidebarButton from "../sidebarButton/SidebarButton";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <div className="fixed z-[1022] bg-[#260821] w-full flex items-center justify-between shadow px-14 max-[768px]:px-6 py-5">
      <p className="text-[35px] font-[700] text-white" style={{ textShadow: '2px 2px 5px rgba(16, 229, 234)' }}>SAAD</p>
      <ul className="flex justify-between w-[470px] max-[768px]:w-[430px] text-white text-[20px] font-[500] max-[649px]:hidden">
        <li>
          <Link href="#home" className="hover:text-[#10e5ea] hover" >Home</Link>
        </li>
        <li>
          <Link href="#about" className="hover:text-[#10e5ea] hover">About</Link>
        </li>
        <li>
          <Link href="#services" className="hover:text-[#10e5ea] hover">Services</Link>
        </li>
        <li>
          <Link href="#projects" className="hover:text-[#10e5ea] hover">Projects</Link>
        </li>
        <li>
          <Link href="#contact" className="hover:text-[#10e5ea] hover">Contact</Link>
        </li>
      </ul>

      <button onClick={toggleDrawer} type="button"
        className="p-2 text-sm rounded-lg min-[650px]:hidden hover:bg-[#10e5ea] focus:outline-none">
        <svg className="w-6 h-6 stroke-white" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path clip-rule="evenodd" fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.7 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
          </path>
        </svg>
      </button>
      {isDrawerOpen && (
        <div
          id="drawer-example"
          className="fixed top-0 left-0 z-40 h-screen overflow-y-auto transition-transform bg-white w-[280px] dark:bg-white"
          aria-labelledby="drawer-label"
        >
          <div className="sidebar">
          <SidebarButton toggleDrawer={toggleDrawer} />
          </div>
        </div>
      )}
      {isDrawerOpen && (
        <div
          className="fixed z-[2] inset-0 bg-black opacity-50"
          onClick={toggleDrawer}
        ></div>
      )}
    </div>
  );
};

export default Navbar;