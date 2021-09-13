import React from "react";
import MART from "../Assets/MART.jpeg";
function Page2() {
  return (
    <div className='mt-64'>
      <div className="lg:flex md:flex w-full">
        <div className=" pl-8 sm:pr-2 mr-4">
          <h1 className=" font-extrabold text-2xl text-left  ">Prism Meridian</h1>
          <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 56 }}></div>
          <h1 className="mt-10 font-bold text-left font-serif text-7xl ">Infimart</h1>
          <h2 className="mt-10 font-medium text-left text-3xl Mission-Statement ">
            Shopping & Retail
          </h2>
          <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 ">
            <div className="copper font-bold text-left mt-10">
              MISSION STATEMENT :{" "}
            </div>
            <div className="text-left tracking-tighter font-mono mt-10  ">
              To bridge the gap between convenience and seamless customer experience.
            </div>
          </div>
          <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4 ">
            <div className="copper font-bold text-left mt-10 ">
              VISION STATEMENT :{" "}
            </div>
            <div className="text-left tracking-tighter font-mono mt-10  ">
              To create incentives towards advancing a sustainable community.
            </div>
          </div> 
          
        </div>
        <div className="md:w-2/3  lg:w-2/3 sm:w-1.5 ">
          <img src={MART} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page2;
