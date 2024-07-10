import { IProduct, IUser } from "../interfaces/IProduct";
import { ProductDto } from "../dto/Product.Dto";
import { AppDataSource } from "../config/data-source";
import { User } from "../entities/entities";

// ?SERVICIO PARA CREAR NUEVO USUARIO
const userRepository = AppDataSource.getRepository(User);

export const createUserService = async (
  name: string,
  email: string,
  password: string
): Promise<IUser> => {
  try {
    // Creación de la instancia del nuevo usuario
    const newUser = userRepository.create({
      name,
      email,
      password,
    });

    // Guardado del usuario en la base de datos
    await userRepository.save(newUser);

    return newUser;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Error creating user: ${error.message}`);
    } else {
      throw new Error("Unknown error creating user");
    }
  }
};

// ?SERVICIO PARA TRAER TODOS LOS USUARIOS
export const getUserService = async () => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const users = await userRepository.find();
    return users;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error retrieving users: ${error.message}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// ?SERVICIO PARA TRAER UN USUARIO POR ID

export const getUserIDService = async (id: number) => {
  try {
    const userRepository = AppDataSource.getRepository(User);
    const user = await userRepository.findOneBy({ id: id });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    return user;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Error retrieving user: ${error.message}`);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
};

// //? SERVICIO PARA CREAR PRODUCTO

// export const createProductService = async (
//   productData: ProductDto
// ): Promise<IProduct> => {
//   const newProduct: IProduct = {
//     name: productData.name,
//     type: productData.type,
//     active: productData.active,
//   };
//   id++;
//   productsArray.push(newProduct);
//   // recibir los datos del usuario
//   // crear un nuevo usuario
//   // incluir el nuevo usuario dentro del arreglo
//   // retornarlo
//   return newProduct;
// };

// export const getProductsService = async (): Promise<IProduct[]> => {
//   return productsArray;
// };

// export const deleteProductService = async (id: number): Promise<void> => {
//   productsArray = productsArray.filter(
//     (product: IProduct) => product.id !== id
//   );
// };

// export const editProductsService = async () => {};
