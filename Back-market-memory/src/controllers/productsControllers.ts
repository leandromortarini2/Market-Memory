import { Request, Response } from "express";
import {
  createUserService,
  getUserService,
  getUserIDService,
  createProductService,
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

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await getUserService();
    res.status(200).json(users);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

export const getUserID = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ message: "User ID is required" });
    }

    const userId = parseInt(id, 10);

    if (isNaN(userId)) {
      return res.status(400).json({ message: "User ID must be a number" });
    }

    const user = await getUserIDService(userId);
    res.status(200).json(user);
  } catch (error: unknown) {
    if (error instanceof Error) {
      res
        .status(500)
        .json({ message: "Internal server error", error: error.message });
    } else {
      res.status(500).json({ message: "An unexpected error occurred" });
    }
  }
};

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
