import { Router } from "express";
const router = Router();

import { obtenerMedidasInsumos, agregarMedidasInsumos, modificarMedidasInsumos, eliminarMedidasInsumos, obtenerInsumos, agregarInsumo, modificarInsumo, eliminarInsumo } from "#src/controllers/inventario.controller.js";

// Rutas de medidas de insumos
router.get("/obtenerMedidasInsumos", obtenerMedidasInsumos);
router.post("/agregarMedidasInsumos", agregarMedidasInsumos);
router.put("/modificarMedidasInsumos/:id", modificarMedidasInsumos);
router.delete("/eliminarMedidasInsumos/:id", eliminarMedidasInsumos);

// Rutas de insumos
router.get("/obtenerInsumos", obtenerInsumos);
router.post("/agregarInsumo", agregarInsumo);
router.put("/modificarInsumo/:id", modificarInsumo);
router.delete("/eliminarInsumo/:id", eliminarInsumo);

export default router;