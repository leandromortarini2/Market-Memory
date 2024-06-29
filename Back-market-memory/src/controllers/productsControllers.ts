import { Request, Response } from "express";
import {
  createProductService,
  getProductsService,
  deleteProductService,
  editProductsService,
} from "../services/productsServices";
import { IProduct } from "../interfaces/IProduct";
import { ProductDto } from "../dto/Product.Dto";

export const createProduct = async (req: Request, res: Response) => {
  const { name, type, active } = req.body;
  const newProduct: IProduct = await createProductService({
    name,
    type,
    active,
  });
  res.status(201).json(newProduct);
};

export const getProducts = async (req: Request, res: Response) => {
  const products: IProduct[] = await getProductsService();

  res.status(200).json(products);
};

export const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.body;
  await deleteProductService(id);
  res.status(200).json({ message: "Eliminado correctamente" });
};

export const editProducts = async () => {};
