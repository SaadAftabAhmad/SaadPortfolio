import React from "react";

import Navbar from "@/components/navbar/Navbar";
import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Services from "@/components/services/Services";
import Projects from "@/components/projects/Projects";
import Footer from "@/components/footer/Footer";

const Portfolio = () => {
  return (
    <div className="bg-[#260821] w-[100%] absolute z-[-2]">
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Portfolio;