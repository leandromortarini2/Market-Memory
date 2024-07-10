import { Router } from "express";
import {
  editProducts,
  createUser,
  getUsers,
  getUserID,
  createProduct,
} from "../controllers/productsControllers";

const router: Router = Router();

// USUARIOS

router.get("/users", getUsers);

router.post("/users/register", createUser);

router.get("/users/:id", getUserID);

// PRODUCTOS
// router.get("/products", getProducts);

router.post("/products", createProduct);

// router.delete("/products", deleteProduct);

// router.put("/products", editProducts);

export default router;
