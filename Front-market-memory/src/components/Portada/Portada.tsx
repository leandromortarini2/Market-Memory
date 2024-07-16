import React from "react";
import Logo from "../../assent/cart.svg";
import Image from "next/image";
import Link from "next/link";

export const Portada = () => {
  return (
    <>
      {/* pantalla MD en adelante */}
      <div
        id="sec1"
        className="hidden w-full min-h-screen  md:flex flex-col items-center justify-center md:justify-start md:flex-row  md:items-center  "
      >
        <div className=" w-full md:w-1/3 h-72  md:flex flex-col justify-evenly items-center md:items-start md:ml-20  ">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-500 font-bold  capitalize">
            welcome
          </h2>
          <div className="w-full flex justify-center md:justify-start ">
            {" "}
            <h1 className=" text-3xl md:text-6xl lg:text-[80px] xl:text-[100px] text-gray-800 font-bold  ">
              Market
              <span className="text-green-500">|Memory</span>
            </h1>{" "}
            <Image src={Logo} alt="" className="w-14 md:w-20 lg:w-28 xl:w-32" />
          </div>

          <div className=" ">
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium capitalize  text-center md:text-start">
              Never forget anything again, everything in its place, always
              within your reach.
            </p>
          </div>
          <div className="w-full  flex justify-center md:justify-start mt-5">
            <Link href="#sec3">
              <button className="w-32 xl:w-40 bg-green-500 p-2 rounded-xl text-gray-100 text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl  capitalize  hover:bg-green-700 ">
                my list
              </button>
            </Link>
          </div>
        </div>
        <div className=" w-3/4 min-h-screen imgPortada imgEffectLeft"></div>
      </div>
      {/* pantalla Movil */}
      <div
        id="sec1"
        className="w-full min-h-screen imgPortada2 flex flex-col justify-center items-center md:hidden  "
      >
        <div className=" w-full h-80  flex flex-col justify-evenly items-center  ">
          <h2 className="text-2xl  text-gray-500 font-bold  capitalize">
            welcome
          </h2>
          <div className="w-full flex justify-center md:justify-start ">
            {" "}
            <h1 className=" text-3xl  text-gray-800 font-bold  ">
              Market
              <span className="text-green-500">|Memory</span>
            </h1>{" "}
            <Image src={Logo} alt="" className="w-10 md:w-20 lg:w-28 xl:w-32" />
          </div>

          <div className=" ">
            <p className="text-gray-600 text-lg  font-semibold capitalize  text-center ">
              Never forget anything again, everything in its place, always
              within your reach.
            </p>
          </div>
          <div className="w-full  flex justify-center md:justify-start mt-5">
            <Link href="#sec3">
              <button className="w-28  bg-green-500 p-1 rounded-xl text-gray-100 text-lg font-bold md:text-xl lg:text-2xl xl:text-3xl  capitalize  hover:bg-green-700 ">
                my list
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
