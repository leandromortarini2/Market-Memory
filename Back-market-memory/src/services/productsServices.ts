import { IProduct } from "../interfaces/IProduct";
import { ProductDto } from "../dto/Product.Dto";

const productsArray: IProduct[] = [];

let id: number = 1;

//! SERVICIO PARA CREAR PRODUCTO

export const createProductService = async (
  productData: ProductDto
): Promise<IProduct> => {
  const newProduct: IProduct = {
    id,
    name: productData.name,
    type: productData.type,
    active: productData.active,
  };
  id++;
  productsArray.push(newProduct);
  // recibir los datos del usuario
  // crear un nuevo usuario
  // incluir el nuevo usuario dentro del arreglo
  // retornarlo
  return newProduct;
};

export const getProductsService = async () => {};

export const deleteProductService = async () => {};

export const editProductsService = async () => {};
