import axios from "axios";

export const getProducts = async () => {
  const result = axios.get("http://localhost:3200/products");
  return result;
};
