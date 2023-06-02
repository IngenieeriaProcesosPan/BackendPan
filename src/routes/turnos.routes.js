import { Router } from "express";
const router = Router();

import { getTurnoAbiertoPorUsuario, abrirTurno, cerrarTurno, actualizarEfectivoTurno} from "#controllers/turnos.controller.js";

router.get("/abiertos/:idusuario", getTurnoAbiertoPorUsuario);
router.post("/abrir", abrirTurno);
router.put("/cerrar/:idturno", cerrarTurno);
router.put("/actualizarEfectivo", actualizarEfectivoTurno);


export default router;
