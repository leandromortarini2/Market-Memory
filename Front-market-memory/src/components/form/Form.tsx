"use client";
import { addProduct } from "@/helpers/postProduct";
import { IProduct } from "@/Interface/IProduct";
import React, { useEffect } from "react";
import { useState } from "react";

const Form: React.FC = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<IProduct>({
    name: "",
    type: "A" || "B" || "C" || "D",
    quantity: 1,
  });

  useEffect(() => {
    // Actualiza el estado del producto cuando quantity cambia
    setProduct((prevProduct) => ({
      ...prevProduct,
      quantity: quantity, // Actualiza quantity en lugar de count
    }));
  }, [quantity]);
  const handleCountSuma = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setQuantity(quantity + 1);
  };
  const handleCountResta = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setQuantity(quantity - 1);
  };

  const handleOnChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
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
    <div className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center  ">
      <div className="w-full md:w-1/4 md:h-screen flex flex-col justify-center items-center ShadowEffect2 bg-white ">
        <h2
          id="sec2"
          className="text-xl xl:text-3xl text-green-700 font-semibold capitalize mt-5 "
        >
          Add new Product
        </h2>
        <form
          onSubmit={handleOnSubmit}
          action=""
          className="w-full min-h-[300px]  flex flex-col justify-evenly items-center"
        >
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleOnChange}
            placeholder="Nombre del producto"
            className="w-3/4 border-b-2 border-green-700 md:placeholder:text-sm lg:placeholder:text-lg "
          />

          {/* SELECT */}
          <select
            name="type"
            id=""
            value={product.type}
            onChange={handleOnChange}
            className="w-3/4 border-b-2 border-green-700 md:placeholder:text-sm lg:placeholder:text-lg  md:text-sm lg:text-lg"
          >
            <option value="">Seccion del Articulo</option>
            <option value="A">A-Cocina</option>
            <option value="B">B-Limpieza</option>
            <option value="C">C-Caniceria/Polleria</option>
            <option value="D">D-Fruta/Verdura</option>
          </select>
          {/* INPUT */}
          {/* INPUT */}
          <div className="w-full  flex flex-col justify-center items-center">
            <input
              type="text"
              name="count"
              placeholder=""
              value={quantity}
              readOnly
              className="w-1/2 text-center text-lg md:text-xl lg:text-3xl font-bold "
            />
            <div className="w-1/2">
              {" "}
              <button
                onClick={handleCountSuma}
                className="w-1/2 text-green-900  text-6xl border-none ShadowEffect2"
              >
                +
              </button>
              <button
                onClick={handleCountResta}
                className="w-1/2 h-10 text-red-900  text-6xl ShadowEffect2"
              >
                -
              </button>
            </div>
          </div>
          <button
            type="submit"
            className=" lg:w-3/4 lg:h-10 bg-green-800 text-white md:text-md xl:text-xl rounded-lg p-2"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="w-full md:w-3/4 h-screen bg-green-100"></div>
    </div>
  );
};
export default Form;
