import { Router } from "express";

const router: Router = Router();

router.get("/products", (req, res) => {
  res.send("todo ok");
});

export default router;
