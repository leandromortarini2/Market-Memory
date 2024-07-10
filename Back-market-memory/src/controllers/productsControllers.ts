import { Request, Response } from "express";
import {
  createProductService,
  getProductsService,
} from "../services/productsServices";
import { IProduct } from "../interfaces/IProduct";

// CREAR PRODUCTOS
// CREAR PRODUCTOS
// CREAR PRODUCTOS

export const createProduct = async (req: Request, res: Response) => {
  try {
    const { name, type, quantity } = req.body; // Extraer datos del cuerpo de la solicitud

    // Llamar al servicio para crear el producto
    const product = await createProductService(name, type, quantity);

    res.status(201).json(product); // Respondemos con el producto creado y código de estado HTTP 201 (creado)
  } catch (error) {
    console.error("Error creating product:", error); // Registrar el error en la consola para debug

    res.status(500).json({ message: "Error creating product" }); // Respondemos con un mensaje de error genérico y código de estado HTTP 500 (error interno del servidor)
  }
};

// TODOS LOS PRODUCTOS
// TODOS LOS PRODUCTOS
// TODOS LOS PRODUCTOS

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products: IProduct[] = await getProductsService();

    res.status(200).json(products);
  } catch (error) {
    console.error("Error al traer los productos:", error);

    res
      .status(500)
      .json({ message: "Error desconocido al traer los productos" });
  }
};

// export const deleteProduct = async (req: Request, res: Response) => {
//   const { id } = req.body;
//   await deleteProductService(id);
//   res.status(200).json({ message: "Eliminado correctamente" });
// };

export const editProducts = async () => {};
