"use client";
import { addProduct } from "@/helpers/postProduct";
import { IProduct } from "@/Interface/IProduct";
import React, { useEffect } from "react";
import { useState } from "react";
import { ListProducts } from "../ListProducts/ListProducts";

const Form: React.FC = () => {
  const [product, setProduct] = useState<IProduct>({
    name: "",
    type: "A" || "B" || "C" || "D",
    quantity: 0,
  });

  // Actualiza el estado del producto cuando quantity cambia

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setProduct({
      ...product,
      [name]: value,
    });

    console.log("Producto agregado:", product);
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const data = await addProduct(product);
      console.log("Producto agregado:", data);
      // Aquí podrías mostrar un mensaje de éxito al usuario
    } catch (error) {
      console.error("Error al agregar producto:", error);
      // Aquí podrías mostrar un mensaje de error al usuario
    }
  };

  return (
    <div
      id="#sec3"
      className="w-full flex flex-col justify-center items-center bg-white ShadowEffect2"
    >
      <form
        onSubmit={handleOnSubmit}
        action=""
        className="w-full h-20 md:w-3/4 lg:h-32  flex flex-wrap  md:flex-nowrap  justify-evenly items-center pb-2 "
      >
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleOnChange}
          placeholder="Producto..."
          className="w-1/2 md:w-1/3  md:h-8 lg:h-10  md:placeholder:text-sm lg:placeholder:text-lg  placeholder:text-green-900 font-semibold pl-2 text-md md:text-lg bg-transparent border-b-4 border-green-900 "
        />
        <select
          name="quantity"
          id=""
          value={product.quantity}
          onChange={handleOnChange}
          className="w-1/6  md:h-8 lg:h-10  md:placeholder:text-sm lg:placeholder:text-lg  md:text-sm lg:text-xl text-green-900 text-center font-semibold bg-transparent border-b-4 border-green-900 "
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        {/* SELECT */}
        <select
          name="type"
          id=""
          value={product.type}
          onChange={handleOnChange}
          className="w-1/2 md:w-1/4 lg:w-1/4 md:h-8 lg:h-10 placeholder:text-sm lg:placeholder:text-lg  placeholder:pl-2 text-green-900 text-md md:text-lg font-semibold bg-transparent border-b-4 border-green-900"
        >
          <option value="A">A-Cocina</option>
          <option value="B">B-Limpieza</option>
          <option value="C">C-Caniceria/Polleria</option>
          <option value="D">D-Fruta/Verdura</option>
        </select>
        {/* INPUT */}
        {/* INPUT */}

        <button
          type="submit"
          className="w-1/6 md:h-8 lg:h-10  bg-green-900 text-white font-extrabold  md:text-xl xl:text-xl rounded-lg hover:bg-green-500 duration-1000 "
        >
          +
        </button>
      </form>
    </div>
  );
};
export default Form;
