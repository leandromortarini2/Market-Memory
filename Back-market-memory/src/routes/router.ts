import { Router } from "express";
import {
  createProduct,
  getProducts,
  deleteProduct,
  editProducts,
} from "../controllers/productsControllers";

const router: Router = Router();

router.post("/products", createProduct);

router.get("/products", getProducts);

router.delete("/products", deleteProduct);

router.put("/products", editProducts);

export default router;
