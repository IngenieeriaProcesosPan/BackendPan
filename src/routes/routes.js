import productos from "#routes/productos.routes.js";
import inventario from "#routes/inventario.routes.js";

import { Router } from "express";
const router = Router();

router.use("/productos", productos);
router.use("/inventario", inventario);




export default router;
