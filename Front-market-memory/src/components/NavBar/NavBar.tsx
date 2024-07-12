import React from "react";
import Image from "next/image";
import Logo from "../../assent/logoblanco.png";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="w-full h-14 flex justify-between  items-center  fixed containerMain">
      <div className="w-1/2 h-24 flex justify-evenly items-center">
        <Link href="#sec1">
          <button className="text-xl text-white font-semibold">Home</button>
        </Link>
        <a href="#sec2">
          <button className="text-xl text-white font-semibold ">
            Add Product
          </button>
        </a>
        <Link href="#sec3">
          <button className="text-xl text-white font-semibold ">
            shopping list
          </button>
        </Link>
      </div>
      <div className="w-1/4 h-14 flex items-center justify-center  ">
        <Link href="#sec3">
          <button className="text-xl text-white font-semibold ">LogIn</button>
        </Link>
      </div>
    </div>
  );
};

// <div className="w-1/4 h-20 flex items-center justify-center">
//   <Image src={Logo} alt="" className="w-60" />
// </div>;
