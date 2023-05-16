import pool from "#config/database.js";

export const agregarMedidasInsumos = async (req, res) => {
  const { nombreInsumo } = req.body;
  try {
    await pool.query(`insert into medidas_insumos (nombre) values ("${nombreInsumo}");`);    
    res.status(201).json({ Status: "La medida del insumo se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const obtenerMedidasInsumos = async (req, res) => {
  try {
    const [data] = await pool.query(`select * from medidas_insumos;`)
    res.status(200).json({ Status: "Medidas de insumos obtenidas con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const modificarMedidasInsumos = async (req, res) => {
  const { id } = req.params;
  const { nombreInsumo } = req.body;
  try {
    await pool.query(`update medidas_insumos set nombre = "${nombreInsumo}" where idmedida = ${id};`);
    res.status(200).json({ Status: "La medida del insumo se modifico correctamente", idmedida: id, nombre: nombreInsumo });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const eliminarMedidasInsumos = async (req, res) => {
  const { ids } = req.body;
  try {
    await pool.query(`delete from medidas_insumos where idmedida in (${ids});`);
    res.status(200).json({ Status: "La medida del insumo se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}