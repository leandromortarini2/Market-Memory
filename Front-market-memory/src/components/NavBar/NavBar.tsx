"use client";
import React from "react";
import Image from "next/image";
import Logo from "../../assent/cart.svg";
import LogoBurger from "../../assent/burger.svg";
import Link from "next/link";
import { useState } from "react";

export const NavBar = () => {
  const [burger, setBurger] = useState(false);

  const handleBurger = () => {
    setBurger(!burger);
  };

  return (
    <>
      <div className="hidden w-full h-14 lg:flex justify-between  items-center bg-white  fixed shadow-gray-300 shadow-md z-50 ">
        <div className="w-1/2 h-24 flex justify-evenly items-center  ">
          <Link href="#sec1">
            <button className="text-2xl text-gray-700 font-bold hover:text-green-500 ">
              Home
            </button>
          </Link>
          <a href="#sec2">
            <button className="text-2xl text-gray-700 font-bold hover:text-green-500 ">
              Add Product
            </button>
          </a>
          <Link href="#sec3">
            <button className="text-2xl text-gray-700 font-bold hover:text-green-500 ">
              shopping list
            </button>
          </Link>
        </div>
        <div className="w-1/4 flex justify-center">
          <Link href="#sec3">
            <button className="text-2xl text-gray-700 font-bold hover:text-green-500 ">
              LogIn{" "}
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full h-14 bg-white ShadowEffect2 flex lg:hidden fixed z-50">
        <div className="w-1/2  flex justify-center items-center">
          <h1 className=" text-xl   text-gray-800 font-bold  ">
            Market
            <span className="text-green-500">|Memory</span>
          </h1>{" "}
          <Image src={Logo} alt="" className="w-10" />
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <button onClick={handleBurger}>
            <Image src={LogoBurger} alt="" className="w-10" />
          </button>
        </div>
      </div>

      {burger === true ? (
        <div className="w-full h-72 z-30 flex flex-col justify-evenly items-end fixed md:hidden ">
          <div className="w-1/2 h-52 flex flex-col justify-evenly items-end p-10 bg-gray-100 ShadowEffect2">
            <Link href="#sec1">
              <button className="text-xl text-gray-800  font-semibold hover:text-green-600">
                Home
              </button>
            </Link>
            <a href="#sec2">
              <button className="text-xl text-gray-800  font-semibold hover:text-green-600">
                Add Product
              </button>
            </a>
            <Link href="#sec3">
              <button className="text-xl text-gray-800  font-semibold hover:text-green-600">
                shopping list
              </button>
            </Link>

            <Link href="#sec3">
              <button className="text-xl text-gray-800  font-semibold hover:text-green-600">
                LogIn{" "}
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
};
