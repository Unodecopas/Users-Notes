require("dotenv").config();
const logger = require("npmlog");
const { generateError } = require("../helpers");
const { getConnection } = require("../database/db");

const createCategory = async (req, res, next) => {
  const conexion = await getConnection();
  try {
    const { name } = req.body;
    const [category] = await conexion.query(
      `select * from categories where name = ?`,
      [name]
    );
    if (name.length != 0) generateError(401, "La categoria ya existe");
    await conexion.query(`insert into categories (name) values (?)`, [name]);
    res.send({ message: `Categoria ${name} creada correctamente` });
    logger.info(`category: ${name} created`);
  } catch (error) {
    next(error);
  } finally {
    if (conexion) conexion.release();
  }
};
