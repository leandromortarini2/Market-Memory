import { Router } from "express";
import {
  editProducts,
  createUser,
  getUser,
} from "../controllers/productsControllers";

const router: Router = Router();

router.get("/users", getUser);

router.post("/users/register", createUser);

// PRODUCT

// router.get("/products", getProducts);

// router.post("/products", createProduct);

// router.delete("/products", deleteProduct);

// router.put("/products", editProducts);

export default router;
