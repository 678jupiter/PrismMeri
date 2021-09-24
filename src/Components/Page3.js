import React from "react";
import Red from "../Assets/Red.jpeg";
function Page3() {
  return (
    <div className="mt-64">
      <div className="lg:flex md:flex w-full">
        <div className=" pl-8 sm:pr-2 mr-4">
          <h1 className=" font-extrabold text-2xl text-left ">
            Prism Meridian
          </h1>
          <div style={{ borderTop: "2px solid #000000 ", marginLeft: 0, marginRight: 56 }}></div>
          <h1 className="mt-10 font-bold text-left font-serif text-7xl">
            Infinity Studios
          </h1>
          <h2 className="mt-10 font-medium text-left text-3xl Mission-Statement">
            Record Label & Artist management
          </h2>
          <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
            <div className="copper font-bold text-left mt-10">
              MISSION STATEMENT :{" "}
            </div>
            <div className="text-left tracking-tighter font-mono mt-10 ">
              To stay creatively consistent.
            </div>
          </div>
          <div class="grid grid-flow-col grid-cols-2 grid-rows-1 gap-4">
            <div className="copper font-bold text-left mt-10 ">
              VISION STATEMENT :{" "}
            </div>
            <div className="text-left tracking-tighter font-mono mt-10 ">
              To empower artists and creatives by amplifying their genius
              through our lenses.
            </div>
          </div>
        </div>
        <div className="">
          <img src={Red} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Page3;
