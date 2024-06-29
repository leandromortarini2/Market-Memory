import { IProduct } from "../interfaces/IProduct";
import { ProductDto } from "../dto/Product.Dto";

let productsArray: IProduct[] = [];

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

export const getProductsService = async (): Promise<IProduct[]> => {
  return productsArray;
};

export const deleteProductService = async (id: number): Promise<void> => {
  productsArray = productsArray.filter(
    (product: IProduct) => product.id !== id
  );
};

export const editProductsService = async () => {};
