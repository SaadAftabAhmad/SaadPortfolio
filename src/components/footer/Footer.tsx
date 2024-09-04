import React from "react";

import Link from "next/link";

const Footer = () => {
  return(
    <div className="px-14 max-sm:px-4 flex justify-between items-center gap-5 flex-wrap max-[415px]:justify-center py-5">
      <p className="text-[#bdbdbd] max-[470px]:text-[14px] text-center">Copyright &copy; 2024 by ParsCoder || All Right Reservd.</p>
      <Link href="#" className="py-2 px-4 text-white hover:text-[#10e5ea] border-[2px] border-[#10e5ea] rounded-[5px] bg-[#10e5ea] hover:bg-[#260821]" ><i className="fa-solid fa-arrow-up"></i></Link>
    </div>
  );
};

export default Footer;