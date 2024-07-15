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
    <div className="w-full min-h-screen bg-white flex justify-center items-center">
      <div className="w-1/4 h-screen flex flex-col justify-center items-center bg-green-600">
        <h2 id="sec2" className="text-6xl text-white font-semibold ">
          Add Product
        </h2>
        <form
          onSubmit={handleOnSubmit}
          action=""
          className="w-3/4 min-h-[300px]  flex flex-col justify-evenly items-center"
        >
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleOnChange}
            placeholder="Nombre del producto"
            className="p-2 m-2"
          />
          {/* SELECT */}
          <select
            name="type"
            id=""
            value={product.type}
            onChange={handleOnChange}
            className="p-2 m-2"
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
              className="w-1/2 h-10 text-center text-3xl font-bold "
            />
            <div className="w-1/2">
              {" "}
              <button
                onClick={handleCountSuma}
                className="w-1/2 h-10 bg-green-900 text-white text-3xl border-none"
              >
                +
              </button>
              <button
                onClick={handleCountResta}
                className="w-1/2 h-10 bg-red-900 text-white text-3xl"
              >
                -
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-1/2 h-10 bg-green-600 text-white text-xl"
          >
            Add Product
          </button>
        </form>
      </div>
      <div className="w-3/4 h-screen bg-white"></div>
    </div>
  );
};
export default Form;
