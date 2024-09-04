import React, { useState } from "react";

import Image from "next/image";

import img1 from "../../svg/logo-svg.svg";
import img2 from "../../png/web img 2.jpg";
import img3 from "../../png/web img 3.jpg";
import img4 from "../../png/web img 4.jpg";
import img5 from "../../png/web img 5.jpg";
import img6 from "../../png/web img 6.jpg";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div id="projects" className="text-white px-20 max-sm:px-4 bg-[#292e32] py-6">
      <h1 className="font-[700] text-[30px] text-center text-[#10e5ea] pb-5 underline">Projects</h1>
      <div className="rounded-[5px]">
        <div className="flex justify-center mb-4">
          <ul className="flex flex-wrap text-sm font-medium text-center" id="default-tab" role="tablist">
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "all" ? "border-[#10e5ea]" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                onClick={() => handleTabClick("all")}
                id="profile-tab"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === "all"}
              >
                All
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "product" ? "border-[#10e5ea]" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                onClick={() => handleTabClick("product")}
                id="dashboard-tab"
                type="button"
                role="tab"
                aria-controls="dashboard"
                aria-selected={activeTab === "product"}
              >
                Product
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 rounded-t-lg ${activeTab === "web page" ? "border-[#10e5ea]" : "hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"}`}
                onClick={() => handleTabClick("web page")}
                id="settings-tab"
                type="button"
                role="tab"
                aria-controls="settings"
                aria-selected={activeTab === "web page"}
              >
                Web Page
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          {activeTab === "all" && (
            <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px] bg-white">
                    <Image src={img1} className="w-full h-full" alt="img1" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Flowbite</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img2} className="w-full h-full object-cover" alt="img2" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Shadcn</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img3} className="w-full h-full object-cover" alt="img3" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Material UI</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img4} className="w-full h-full object-cover" alt="img4" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Ant Design</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img5} className="w-full h-full object-cover" alt="img5" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Boot strap</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img6} className="w-full h-full object-cover" alt="img6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Tailwind CSS</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "product" && (
            <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-800" id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img1} className="w-full h-full object-cover" alt="img1" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Flowbite</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img2} className="w-full" alt="img2" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Shadcn</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img3} className="w-full" alt="img3" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Material UI</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2" style={{ boxShadow: "0 4px 6px -1px rgba(16, 229, 234, 0.1), 0 2px 4px -1px rgba(16, 229, 234, 0.06)" }}>
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img5} className="w-full h-full object-cover" alt="img5" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Boot strap</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "web page" && (
            <div className="p-4 rounded-lg bg-gray-800 dark:bg-gray-800" id="settings" role="tabpanel" aria-labelledby="settings-tab">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img4} className="w-full h-full object-cover" alt="img4" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Ant Design</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
                <div className="border rounded-[15px] overflow-hidden bg-[#292e33] transform transition-transform duration-500 ease-in-out hover:-translate-y-2">
                  <div className="h-[210px] max-[400px]:h-[170px]">
                    <Image src={img6} className="w-full h-full object-cover" alt="img6" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-[20px] font-[700]">Tailwind CSS</h3>
                    <p className="text-[15px] font-[300]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolor hic dignissimos veritatis voluptate corrupti reprehenderit quo!</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;