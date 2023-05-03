import { Router } from "express";
const router = Router();

import { obtenerProductos, agregarProducto, obtenerProducto, actualizarProducto, eliminarProducto, eliminarProductos} from "#src/controllers/productos.controller.js";

router.get("/", obtenerProductos);
router.get("/:id", obtenerProducto);
router.post("/agregarproductos/", agregarProducto)
router.put("/actualizarproducto/:id", actualizarProducto)
router.delete("/eliminarproducto/:id", eliminarProducto)
router.delete("/eliminarproductos/", eliminarProductos)

export default router;


