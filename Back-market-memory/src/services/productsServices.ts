import { IProduct, IUser } from "../interfaces/IProduct";
import { AppDataSource } from "../config/data-source";
import { Product, User } from "../entities/entities";

// SERVICIO PARA CREAR PRODUCTO
// SERVICIO PARA CREAR PRODUCTO
// SERVICIO PARA CREAR PRODUCTO

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

// TRAER TODOS LOS PRODUCTOS
// TRAER TODOS LOS PRODUCTOS
// TRAER TODOS LOS PRODUCTOS

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

// TRAER UN PRODUCTO
// TRAER UN PRODUCTO
// TRAER UN PRODUCTO

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

// BORRAR UN PRODUCTO
// BORRAR UN PRODUCTO
// BORRAR UN PRODUCTO

export const deleteProductService = async (id: number) => {
  try {
    await productRepository.delete({ id: id });

    return { message: "El producto han sido eliminados" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al ELIMINAR el producto: ${error.message}`);
    } else {
      throw new Error("Error desconocido al ELIMINAR el producto");
    }
  }
};

// EDITAR UN PRODUCTO
// EDITAR UN PRODUCTO
// EDITAR UN PRODUCTO

export const editProductsService = async (prop: IProduct) => {
  try {
    const { id, name, type, quantity } = prop;

    // Verificar si el producto existe
    const existingProduct = await productRepository.findOneBy({ id });
    if (!existingProduct) {
      throw new Error(`Producto con ID ${id} no encontrado`);
    }
    // Editar el producto
    await productRepository.update({ id }, { name, type, quantity });

    // Retornar el producto actualizado
    const updatedProduct = await productRepository.findOneBy({ id });
    return updatedProduct;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al editar el producto: ${error.message}`);
    } else {
      throw new Error("Error desconocido al editar el producto");
    }
  }
};

// BORRAR TODOS LOS PRODUCTOS
// BORRAR TODOS LOS PRODUCTOS
// BORRAR TODOS LOS PRODUCTOS

export const deleteAllProductsService = async () => {
  try {
    await productRepository.query("DELETE FROM products");

    return { message: "Todos los productos han sido eliminados" };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error al eliminar los productos: ${error.message}`);
    } else {
      throw new Error("Error desconocido al eliminar los productos");
    }
  }
};
