import productos from "#routes/productos.routes.js";
// import codigos from "#routes/codigos.routes.js"
import { Router } from "express";
const router = Router();

router.use("/productos", productos);
// router.use("/codigos", codigos)


export default router;
