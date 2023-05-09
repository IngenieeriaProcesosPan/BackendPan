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
    res.status(200).json({ Status: "La medida del insumo se modifico correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const eliminarMedidasInsumos = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`delete from medidas_insumos where idmedida = ${id};`);
    res.status(200).json({ Status: "La medida del insumo se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const agregarInsumo = async (req, res) => {
  const { nombreInsumo, idMedida } = req.body;
  try {
    await pool.query(`insert into insumos (nombre, idmedida) values ("${nombreInsumo}", ${idMedida});`);
    res.status(201).json({ Status: "El insumo se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const obtenerInsumos = async (req, res) => {
  try {
    const [data] = await pool.query(`select i.*, mi.nombre as nombreInsumo from insumos i inner join medidas_insumos mi on i.idmedida = mi.idmedida;`);
    res.status(200).json({ Status: "Insumos obtenidos con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const modificarInsumo = async (req, res) => {
  const { id } = req.params;
  const { nombreInsumo, idMedida } = req.body;
  try {
    await pool.query(`update insumos set nombre = "${nombreInsumo}", idmedida = ${idMedida} where idinsumo = ${id};`);
    res.status(200).json({ Status: "El insumo se modifico correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const eliminarInsumo = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`delete from insumos where idinsumo = ${id};`);
    res.status(200).json({ Status: "El insumo se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}


