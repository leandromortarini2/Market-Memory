import { Router } from "express";
import {
  editProducts,
  createUser,
  getUsers,
  getUserID,
} from "../controllers/productsControllers";

const router: Router = Router();

router.get("/users", getUsers);

router.post("/users/register", createUser);

router.get("/users/:id", getUserID);
// PRODUCT

// router.get("/products", getProducts);

// router.post("/products", createProduct);

// router.delete("/products", deleteProduct);

// router.put("/products", editProducts);

export default router;
