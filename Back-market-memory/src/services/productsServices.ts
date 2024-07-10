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

// ?SERVICIO PARA TRAER UN USUARIO POR ID
export const getUserService = () => {
  const users = userRepository.find();
  return users;
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
