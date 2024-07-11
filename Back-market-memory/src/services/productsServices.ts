import { IProduct, IUser } from "../interfaces/IProduct";
import { AppDataSource } from "../config/data-source";
import { Product, User } from "../entities/entities";

//! SERVICIO PARA CREAR PRODUCTO

const productRepository = AppDataSource.getRepository(Product);

export const createProductService = async (
  name: string,
  type: string,
  quantity: number
): Promise<IProduct> => {
  try {
    const newProduct: IProduct = productRepository.create({
      name,
      type,
      quantity,
    });

    // Guardar el nuevo producto en la base de datos
    await productRepository.save(newProduct);

    return newProduct;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error crear un nuevo producto: ${error.message}`);
    } else {
      throw new Error("Error desconocido al crear el producto");
    }
  }
};

export const getProductsService = async (): Promise<IProduct[]> => {
  try {
    const productsArray: IProduct[] = await productRepository.find();

    return productsArray;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al traer todos los productos: ${error.message}`);
    } else {
      throw new Error("Error desconocido al traer los productos");
    }
  }
};

export const getProductIDService = async (id: number) => {
  try {
    const product = await productRepository.findOneBy({ id: id });

    return product;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al traer el producto: ${error.message}`);
    } else {
      throw new Error("Error desconocido al traer el producto");
    }
  }
};

// export const deleteProductService = async (id: number): Promise<void> => {
//   const
// };

// export const editProductsService = async () => {};
