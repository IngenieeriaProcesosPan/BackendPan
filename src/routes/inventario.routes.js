import { Router } from "express";
const router = Router();

import { obtenerMedidasInsumos, agregarMedidasInsumos, modificarMedidasInsumos, eliminarMedidasInsumos } from "#src/controllers/medidasInsumos.controller.js";
import { obtenerInsumos, agregarInsumo, modificarInsumo, eliminarInsumos, getInsumosDisponiblesPorAlmacen } from "#src/controllers/insumos.controller.js";
import { obtenerAlmacenes, agregarAlmacen, modificarAlmacen, eliminarAlmacenes } from "#src/controllers/almacenes.controller.js";
import { obtenerStock, agregarStock, modificarStock, eliminarStock } from "#src/controllers/stock.controller.js";

// Rutas de medidas de insumos
router.get("/obtenerMedidasInsumos", obtenerMedidasInsumos);
router.post("/agregarMedidasInsumos", agregarMedidasInsumos);
router.put("/modificarMedidasInsumos/:id", modificarMedidasInsumos);
router.delete("/eliminarMedidasInsumos", eliminarMedidasInsumos);

// Rutas de insumos
router.get("/obtenerInsumos", obtenerInsumos);
router.get("/obtenerInsumosDisponiblesPorAlmacen/:id", getInsumosDisponiblesPorAlmacen);
router.post("/agregarInsumo", agregarInsumo);
router.put("/modificarInsumo/:id", modificarInsumo);
router.delete("/eliminarInsumos", eliminarInsumos);

// Rutas de almacenes
router.get("/obtenerAlmacenes", obtenerAlmacenes);
router.post("/agregarAlmacen", agregarAlmacen);
router.put("/modificarAlmacen/:id", modificarAlmacen);
router.delete("/eliminarAlmacenes", eliminarAlmacenes);

// Ruta de stock Almacenes
router.get("/obtenerStocks", obtenerStock);
router.post("/agregarStock", agregarStock);
router.put("/modificarStock", modificarStock);
router.delete("/eliminarStock", eliminarStock);

export default router;