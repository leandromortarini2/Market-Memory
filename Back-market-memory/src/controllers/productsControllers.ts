import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
} from "../services/productsServices";
import { IProduct, IUser } from "../interfaces/IProduct";
import { ProductDto } from "../dto/Product.Dto";

// ? controladores de usuario
// ? controladores de usuario
// ? controladores de usuario

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newUser = await createUserService(name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    } else {
      res
        .status(500)
        .json({ message: "Internal server error", error: "Unknown error" });
    }
  }
};

export const getUser = async (req: Request, res: Response) => {
  const users: IUser[] = await getUserService();
  res.status(200).json(users);
};

// export const createProduct = async (req: Request, res: Response) => {
//   const { name, type, active } = req.body;
//   const newProduct: IProduct = await createProductService({
//     name,
//     type,
//     active,
//   });
//   res.status(201).json(newProduct);
// };

// export const getProducts = async (req: Request, res: Response) => {
//   const products: IProduct[] = await getProductsService();

//   res.status(200).json(products);
// };

// export const deleteProduct = async (req: Request, res: Response) => {
//   const { id } = req.body;
//   await deleteProductService(id);
//   res.status(200).json({ message: "Eliminado correctamente" });
// };

export const editProducts = async () => {};
