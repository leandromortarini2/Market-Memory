import axios from "axios";
import { IProduct } from "../Interface/IProduct";

export const addProduct = async (product: IProduct) => {
  try {
    const res = await axios.post("http://localhost:3200/products", product);

    const data = res.data;

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error al agregar el producto:", error.message);
      throw new Error("Error al agregar el producto: " + error.message);
    } else {
      throw new Error("Error desconocido al agregar el producto.");
    }
  }
};
