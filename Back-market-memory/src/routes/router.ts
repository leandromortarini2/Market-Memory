import { Router } from "express";
import {
  editProducts,
  createProduct,
  getProducts,
} from "../controllers/productsControllers";
import {
  createUser,
  getUserID,
  getUsers,
} from "../controllers/userControllers";

const router: Router = Router();

// USUARIOS

router.get("/users", getUsers);

router.post("/users/register", createUser);

router.get("/users/:id", getUserID);

// PRODUCTOS
router.get("/products", getProducts);

router.post("/products", createProduct);

// router.delete("/products", deleteProduct);

// router.put("/products", editProducts);

export default router;
