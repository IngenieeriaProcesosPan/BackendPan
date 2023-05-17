import pool from "#config/database.js";

export const agregarStock = async (req, res) => {
  const { idInsumo, idAlmacen, cantidad } = req.body;
  try {
    await pool.query(`insert into stock_almacen values (${idAlmacen}, ${idInsumo}, ${cantidad});`);
    res.status(201).json({ Status: "El stock se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
    console.error(error);
  }
}

export const obtenerStock = async (req, res) => {
  try {
    const [data] = await pool.query(`select s.*, i.nombre as nombreProducto, a.nombre as nombreAlmacen from stock_almacen s inner join insumos i on s.idinsumo = i.idinsumo inner join almacen a on s.idalmacen = a.idalmacen;`);
    res.status(200).json({ Status: "Stock obtenido con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const modificarStock = async (req, res) => {
  const { cantidad, idInsumo, idAlmacen } = req.body;
  try {
    await pool.query(`update stock_almacen set cantidad = ${cantidad} where idinsumo = ${idInsumo} and idalmacen = ${idAlmacen};`);
    res.status(200).json({ Status: "El stock se modifico correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const eliminarStock = async (req, res) => {
  const { idInsumo, idAlmacen } = req.body;
  try {
    await pool.query(`delete from stock_almacen where idinsumo = ${idInsumo} and idalmacen = ${idAlmacen};`);
    res.status(200).json({ Status: "El stock se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}