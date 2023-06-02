import pool from "#config/database.js";

export const getTurnoAbiertoPorUsuario = async (req, res) => {
  const { idusuario } = req.params;
  try {
    const [data] = await pool.query(`select * from turno where idusuario = ${idusuario} and cierre is null;`);
    res.status(200).json({ Status: "Turnos obtenidos con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const abrirTurno = async (req, res) => {
  const { idusuario, fondo } = req.body;
  try {
    const [data] = await pool.query(`insert into turno (idusuario, fondo, apertura, efectivo) values (${idusuario}, ${fondo}, now(), ${fondo});`);
    res.status(200).json({ Status: "Turno abierto con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const cerrarTurno = async (req, res) => {
  const { idturno } = req.params;
  try {
    const [data] = await pool.query(`update turno set cierre = now() where idturno = ${idturno};`);
    res.status(200).json({ Status: "Turno cerrado con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const actualizarEfectivoTurno = async (req, res) => {
  const { idturno, efectivo } = req.body;
  try {
    const [data] = await pool.query(`update turno set efectivo = efectivo + ${efectivo} where idturno = ${idturno};`);
    res.status(200).json({ Status: "Efectivo actualizado con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}