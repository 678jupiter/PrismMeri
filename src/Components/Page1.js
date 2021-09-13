import React from "react";
import Logo from "../Assets/Logo.jpeg";

function Page1() {
  return (
    <div className="App">
      <div>
        <img src={Logo} className="object-scale-down   h-96 w-full  " alt="" />
        <h1 className=" font-serif  text-7xl font-black mb-20 ">
          Prism Meridian
        </h1>
        <h2 className=" Mission-Statement  text-xl font-bold tracking-wider">
          {" "}
          A 21st Century Project.
        </h2>
      </div>
    </div>
  );
}

export default Page1;
