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

export const getProducts = async () => {};

export const deleteProduct = async () => {};

export const editProducts = async () => {};
