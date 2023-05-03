import pool from "#config/database.js";

export const agregarProducto = async (req, res) => {
  const { descripcion, precio } = req.body;
  try {
    await pool.query(
      `insert into productos (descripcion, precio) values ("${descripcion}", ${precio});`
    );
    res.status(201).json({ Status: "El producto se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error" });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const [data] = await pool.query(`select * from productos;`)
    res.status(200).json({ Status: "Productos obtenidos con exito", data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ Status: "Error" });
  }
};

export const obtenerProducto = async (req, res) => {
  const { id } = req.params;
  try {
    const [data] = await pool.query(`select * from productos where idproducto = ${id};`)
    if (data.length === 0) 
      return res.status(404).json({ Status: "Producto no encontrado" });
    res.status(200).json({ Status: "Producto obtenido con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error" });
  }
}

export const actualizarProducto = async (req, res) => {
  const { id } = req.params;
  const { descripcion, precio } = req.body;
  try {
    await pool.query(`update productos set descripcion = "${descripcion}", precio = ${precio} where idproducto = ${id};`)
    res.status(200).json({ Status: "Producto actualizado con exito", id: id });
  } catch (error) {
    res.status(500).json({ Status: "Error" });
    console.error(error);
  }
}

export const eliminarProducto = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`delete from productos where idproducto = ${id};`)
    res.status(200).json({ Status: "Producto eliminado con exito" });
  } catch (error) {
    if (error.code === "ER_ROW_IS_REFERENCED_2") {
      return res.status(400).json({ Status: "No se puede eliminar el producto porque esta siendo utilizado" });
    }
    res.status(500).json({ Status: "Error" });
  }
}

export const eliminarProductos = async (req, res) => {
  const {ids}  = req.body;

  try {
    await pool.query(`delete from productos where idproducto in (${ids});`)
    res.status(200).json({ Status: "Productos eliminados con exito" });
  } catch (error) {
    res.status(500).json({ Status: "Error" });
  }
}