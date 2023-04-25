import { Router } from "express";
const router = Router();

import { obtenerProductos, agregarProducto, obtenerProducto, actualizarProducto, eliminarProducto} from "#src/controllers/productos.controller.js";

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.put("/agregarproductos/", agregarProducto)
router.put("/actualizarproducto/:id", actualizarProducto)
router.delete("/eliminarproducto/:id", eliminarProducto)	

export default router;


