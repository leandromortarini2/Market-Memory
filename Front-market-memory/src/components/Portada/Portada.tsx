import React from "react";
import Logo from "../../assent/cart.svg";
import Image from "next/image";

export const Portada = () => {
  return (
    <div id="sec1" className="w-full min-h-screen  flex  items-end imgPortada">
      <div className="w-1/2 h-72  flex flex-col justify-evenly ml-20 mb-24">
        <h2 className="text-4xl text-white font-bold ShadowEffect2 capitalize">
          welcome
        </h2>
        <div className="w-full flex">
          {" "}
          <h1 className="text-[100px] text-white font-bold ShadowEffect2">
            Market<span className="text-green-500">|Memory</span>
          </h1>{" "}
          <Image src={Logo} alt="" className="w-32" />
        </div>

        <div className="w-3/4  ">
          {" "}
          <p className="text-gray-100 text-3xl font-medium capitalize ShadowEffect2">
            Never forget anything again, everything in its place, always within
            your reach.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};
