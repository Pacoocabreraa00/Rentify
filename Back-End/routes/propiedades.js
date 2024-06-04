
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
 * /api/v1/propiedad:
 *   post:
 *     tags:
 *       - Propiedades
 *     summary: Crea una nueva propiedad
 *     description: Crea una nueva propiedad con imágenes asociadas
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               propertyImages:
 *                 type: array
 *                 items:
 *                   type: string
 *                   format: binary
 *                 description: Imágenes de la propiedad
 *               nombre:
 *                 type: string
 *                 description: Nombre de la propiedad
 *               direccion:
 *                 type: string
 *                 description: Dirección de la propiedad
 *               propietario:
 *                 type: string
 *                 description: ID del propietario
 *     responses:
 *       200:
 *         description: Propiedad creada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 propiedad:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     direccion:
 *                       type: string
 *                     propietario:
 *                       type: string
 *                     imagenes:
 *                       type: array
 *                       items:
 *                         type: string
 *       400:
 *         description: Error en la solicitud
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */
router.post("/", upload.array("propertyImages", 12), async (req, res) => {
  const propiedadData = req.body;
  const files = req.files;

  try {
    const propiedad = new Propiedad({
      ...propiedadData,
      imagenes: files.map((file) => file.filename),
    });

    await propiedad.save();

    res.status(200).json({ message: "Propiedad creada exitosamente", propiedad });
  } catch (error) {
    console.error("Error al crear propiedad:", error.message);
    res.status(400).json({ error: error.message });
  }
});


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
  
// Ruta PUT para actualizar una propiedad
/**
 * @openapi
 * /api/v1/propiedad/{_id}:
 *   put:
 *     tags:
 *       - Propiedades
 *     summary: Actualiza una propiedad
 *     description: Actualiza los detalles de una propiedad específica
 *     parameters:
 *       - name: _id
 *         in: path
 *         required: true
 *         description: ID de la propiedad
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *               direccion:
 *                 type: string
 *               propietario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Propiedad actualizada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 propiedad:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                     nombre:
 *                       type: string
 *                     direccion:
 *                       type: string
 *                     propietario:
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
 *       404:
 *         description: Propiedad no encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.put("/:_id", upload.none(), async (req, res) => {
  const propiedadData = req.body;
  try {
    const propiedad = await Propiedad.findById(req.params._id); 
    if (!propiedad) {
      return res.status(404).json({ message: "Propiedad no encontrada" });
    }

    console.log('Datos recibidos para actualizar:', propiedadData); // Log para verificar los datos

    Object.keys(propiedadData).forEach(key => {
      if (key !== 'imagenes') {
        propiedad[key] = propiedadData[key];
      }
    });

    await propiedad.save();

    res.status(200).json({ message: "Propiedad actualizada exitosamente", propiedad });
  } catch (error) {
    console.error("Error al actualizar propiedad:", error.message);
    res.status(400).json({ error: error.message });
  }
});