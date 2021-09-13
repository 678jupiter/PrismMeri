import React from "react";
import Lien from "../Assets/Lien.jpeg";

function Page5() {
  return (
    <div className="mt-64">
      <div className="flex flex-col">
        <div className="">
          <img src={Lien} alt="" className="w-1/2 lg:mx-80 md:mx-80 ml-24" />
        </div>
        <div className=" mt-20 mb-20 text-2xl  font-serif">
          A world connected through innovation and creativity.
        </div>
      </div>
    </div>
  );
}

export default Page5;
