import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getProductID,
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

router.get("/products/:id", getProductID);

router.delete("/products/:id", deleteProduct);

// router.put("/products", editProducts);

export default router;
