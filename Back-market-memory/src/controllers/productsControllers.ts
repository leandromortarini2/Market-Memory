import { Request, Response } from "express";
import {
  createProductService,
  deleteProductService,
  getProductIDService,
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
// TODOS LOS PRODUCTOs
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

// TRAER UN PRODUCTO POR ID
// TRAER UN PRODUCTO POR ID
// TRAER UN PRODUCTO POR ID

export const getProductID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const product = await getProductIDService(Number(id));

    if (!product) {
      return res.status(404).json({ message: "Producto no encontrado" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error al traer el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// BORRAR UN PRODUCTO POR ID
// BORRAR UN PRODUCTO POR ID
// BORRAR UN PRODUCTO POR ID
export const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const productDelete = await deleteProductService(Number(id));

    res.status(200).json(productDelete);
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

// EDITAR UN PRODUCTO POR ID
// EDITAR UN PRODUCTO POR ID
// EDITAR UN PRODUCTO POR ID

// BORRAR TODOS LOS PRODUCTOS
// BORRAR TODOS LOS PRODUCTOS
// BORRAR TODOS LOS PRODUCTOS
