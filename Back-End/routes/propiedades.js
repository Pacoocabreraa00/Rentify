
const express = require("express");
const multer = require("multer");
const Propiedad = require("../models/Propiedad");
const fs = require("fs");
const router = express.Router();

// Configuración de almacenamiento de Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const dir = "./uploads/";
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    cb(null, dir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
//post 
/**
 * @openapi
 * /api/v1/propiedad/{propietario}:
 *   get:
 *     tags:
 *       - Propiedades
 *     summary: Obtiene propiedades por ID de propietario
 *     description: Devuelve todas las propiedades pertenecientes a un propietario específico
 *     parameters:
 *       - name: propietario
 *         in: path
 *         required: true
 *         description: ID del propietario
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Propiedades obtenidas exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   nombre:
 *                     type: string
 *                   direccion:
 *                     type: string
 *                   propietario:
 *                     type: string
 *                   imagenes:
 *                     type: array
 *                     items:
 *                       type: string
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       500:
 *         description: Error interno del servidor
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.get("/:propietario", async (req, res) => {
    console.log(`Buscando propiedades del propietario con ID: ${req.params.propietario}`);
    try {
      const propiedades = await Propiedad.find({ propietario: req.params.propietario });
      return res.status(200).json(propiedades);
    } catch (error) {
      console.error("Error al buscar propiedades:", error.message);
      return res.status(500).json({ error: error.message });
    }
  });
  
  // Ruta GET para obtener todas las propiedades excepto las del propietario especificado
  /**
   * @openapi
   * /api/v1/propiedad/exclude/{propietario}:
   *   get:
   *     tags:
   *       - Propiedades
   *     summary: Obtiene todas las propiedades excepto las del propietario especificado
   *     description: Devuelve todas las propiedades excepto aquellas pertenecientes a un propietario específico
   *     parameters:
   *       - name: propietario
   *         in: path
   *         required: true
   *         description: ID del propietario
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Propiedades obtenidas exitosamente
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *                 properties:
   *                   _id:
   *                     type: string
   *                   nombre:
   *                     type: string
   *                   direccion:
   *                     type: string
   *                   propietario:
   *                     type: string
   *                   imagenes:
   *                     type: array
   *                     items:
   *                       type: string
   *       400:
   *         description: Error en la solicitud
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   *       500:
   *         description: Error interno del servidor
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 error:
   *                   type: string
   */
  router.get("/exclude/:propietario", async (req, res) => {
    console.log(`Buscando todas las propiedades excepto las del propietario con ID: ${req.params.propietario}`);
    try {
      const propiedades = await Propiedad.find({ propietario: { $ne: req.params.propietario } });
      return res.status(200).json(propiedades);
    } catch (error) {
      console.error("Error al buscar propiedades:", error.message);
      return res.status(500).json({ error: error.message });
    }
  });