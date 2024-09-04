import React from "react";

import Link from "next/link";

const Button = () => {
  return (
    <div>
      <button className="btn relative overflow-hidden rounded-[5px] font-[500] tracking-[1px] border border-solid p-4">
        <span className="block relative">
          <span className="text block relative">
           <Link href="#" className="block leading-[50px] h-[50px] px-6">Hire me Now</Link> 
          </span>
        </span>
      </button>
    </div>
  );
};

export default Button;
