import { Router } from "express";
const router = Router();

import { obtenerUsuarios, agregarUsuario, modificarUsuario, eliminarUsuario } from "#src/controllers/usuarios.controller.js";

router.get("/", obtenerUsuarios);
router.post("/agregarUsuario", agregarUsuario);
router.put("/modificarUsuario/:id", modificarUsuario);
router.delete("/eliminarUsuario/:id", eliminarUsuario);
  
export default router;