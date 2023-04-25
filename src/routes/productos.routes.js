import { Router } from "express";
const router = Router();

import { obtenerProductos, agregarProducto, obtenerProducto, actualizarProducto} from "#src/controllers/productos.controller.js";

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.put("/agregarproductos/", agregarProducto)
router.put("/actualizarproducto/:id", actualizarProducto)

export default router;


