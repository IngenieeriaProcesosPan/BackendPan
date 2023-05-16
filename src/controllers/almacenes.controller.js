import pool from "#config/database.js";

export const agregarAlmacen = async (req, res) => {
  const { nombreAlmacen } = req.body;
  try {
    await pool.query(`insert into almacen (nombre) values ("${nombreAlmacen}");`);
    res.status(201).json({ Status: "El almacen se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const obtenerAlmacenes = async (req, res) => {
  try {

    const [data] = await pool.query(`select * from almacen;`);
    res.status(200).json({ Status: "Almacenes obtenidos con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
    console.log(error);
  }
}

export const modificarAlmacen = async (req, res) => {
  const { id } = req.params;
  const { nombreAlmacen } = req.body;
  try {
    await pool.query(`update almacen set nombre = "${nombreAlmacen}" where idalmacen = ${id};`);
    res.status(200).json({ Status: "El almacen se modifico correctamente", id });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const eliminarAlmacenes = async (req, res) => {
  const { ids} = req.body;
  try {
    await pool.query(`delete from almacen where idalmacen in (${ids});`);
    res.status(200).json({ Status: "El almacen se elimino correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
} 

