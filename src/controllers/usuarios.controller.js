import pool from "#config/database.js";
import { hash, compare } from "#src/functions/pass.js";

export const agregarUsuario = async (req, res) => {
  let {nombre, clave, admin, activo} = req.body;
  clave = hash(clave);
  admin = admin ? 1 : 0;
  activo = activo ? 1 : 0;
  try {
    await pool.query(`insert into usuarios (nombre, clave, administrador, activo) values ("${nombre}", "${clave}", ${admin}, ${activo});`);
    res.status(201).json({ Status: "El usuario se agrego correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
    console.error(error);
  }
}

export const obtenerUsuarios = async (req, res) => {
  try {
    const [data] = await pool.query(`select * from usuarios;`);
    res.status(200).json({ Status: "Usuarios obtenidos con exito", data });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const modificarUsuario = async (req, res) => {
  const { id } = req.params;
  let {nombre, clave, administrador, activo} = req.body;
  if (clave)
    clave = hash(clave);
  administrador = administrador ? 1 : 0;
  activo = activo ? 1 : 0;
  console.log({nombre, clave, administrador, activo})
  try {
    if (clave)
      await pool.query(`update usuarios set nombre = "${nombre}", clave = "${clave}", administrador = ${administrador}, activo = ${activo} where idusuario = ${id};`);
    else
      await pool.query(`update usuarios set nombre = "${nombre}", administrador = ${administrador}, activo = ${activo} where idusuario = ${id};`);
    res.status(200).json({ Status: "El usuario se modifico correctamente", id });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
    console.error(error);
  }
}

export const eliminarUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    await pool.query(`delete from usuarios where idusuario = ${id};`);
    res.status(200).json({ Status: "Los usuarios se eliminaron correctamente" });
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}

export const validarUsuario = async (req, res) => {
  const { nombre, clave } = req.body;
  try {
    const [data] = await pool.query(`select * from usuarios where nombre = "${nombre}";`);
    if (data.length > 0) {
      const valid = await compare(clave, data[0].clave);
      if (valid) {
        res.status(200).json({ Status: "Usuario validado con exito", data });
      } else {
        res.status(401).json({ Status: "Usuario o contraseña incorrectos" });
      }
    } else {
      res.status(401).json({ Status: "Usuario o contraseña incorrectos" });
    }
  } catch (error) {
    res.status(500).json({ Status: "Error", error });
  }
}
