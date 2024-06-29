import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  editProducts,
} from "../controllers/productsControllers";

const router: Router = Router();

router.post("/products", createProduct);

router.get("/products");

router.delete("/products");

router.put("/products");

export default router;
