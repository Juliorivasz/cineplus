const Premiere = require("../models/premiere");
const upload = require("../middleware/multerMiddleware");

module.exports = {
  // obtiene los estrenos
  getPremieres: async (req, res, next) => {
    try {
      const premieres = await Premiere.find();
      const premieresLength = premieres.length;
      const queryPremiere = req.query.id;
      // Si se proporciona un ID, devuelve la información específica
      if (queryPremiere) {
        const premiere = premieres.find((item) => {
          if (
            item._id === queryPremiere ||
            item.gender === queryPremiere ||
            item.year.toString() === queryPremiere
          ) {
            return item;
          }
        });
        if (premiere) {
          res.json(premiere);
        } else {
          res.status(404).send("Estreno no encontrado");
        }
      } else {
        // Si no se proporciona un ID, devuelve toda la lista
        res.json({ premieresLength, premieres });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  addPremiere: async (req, res, next) => {
    try {
      // Utiliz una promesa para manejar el middleware
      const multerPromise = new Promise((resolve, reject) => {
        upload.single("image")(req, res, function (err) {
          if (err) {
            reject(err); // Rechazamos la promesa con el error
          } else {
            resolve(); // Resolvemos la promesa si no hay error
          }
        });
      });

      // Espera la resolución de la promesa antes de continuar
      await multerPromise;
      // desestructura los datos recibidos
      const {
        title,
        image,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
        typeContent,
      } = req.body;

      // agrega la ruta de la imagen a su campo
      const imagePath = req.file ? req.file.path : null;

      // valida que ningun campo este vacio
      if (
        !title ||
        !imagePath ||
        !year ||
        !gender ||
        !synopsis ||
        !cast ||
        !duration ||
        !playback ||
        !trailer ||
        !typeContent
      ) {
        return res
          .status(400)
          .json({ message: `un campo esta vacio o no ha sido definido title: ${title},
          imagePath: ${imagePath},
          year: ${year},
          gender: ${gender},
          synopsis: ${synopsis},
          cast: ${cast},
          duration: ${duration},
          playback: ${playback},
          trailer: ${trailer},
          typeContent: ${typeContent}` });
      }

      // guarda el estreno en la BD
      const newPremiere = await Premiere.create({
        title,
        image: imagePath,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
        typeContent,
      });

      await newPremiere.save();

      // envia el estreno
      res.status(201).json(newPremiere);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: error.message });
    }
  },

  // elimina el estreno
  removePremiere: async (req, res, next) => {
    try {
      // guarda el id en la variable
      const { queryPremiere } = req.body;

      // valida que el campo no este vacio
      if (!queryPremiere) {
        return res.status(400).json({ message: "el campo id es requerido" });
      }

      // busca y elimina el documento por su ID
      const result = await Premiere.findOneAndDelete(queryPremiere);

      // valida si no encontro el documento
      if (!result) {
        return res.status(404).json({
          message: "No se encontró el estreno con el ID proporcionado",
        });
      }

      // respuesta del documento eliminado
      res.status(200).json({ message: "Estreno eliminado exitosamente" });
    } catch (error) {
      // Verifica si es un error del middleware y lo maneja
      if (error.message === "El archivo ya existe. No se permite la carga.") {
        return res.status(400).json({ message: error.message });
      }

      console.error(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  updatePremiere: async (req, res) => {
    try {
      // id pasado por query
      const { id } = req.query;
      const idUpdatePremier = {
        _id: id,
      };

      // desestructura los datos recibidos
      const {
        title,
        image,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
        typeContent,
      } = req.body;

      // agrega la ruta de la imagen a su campo
      const imagePath = req.file ? req.file.path : undefined;

      // objeto que contiene todos los datos recibidos
      const updatedFields = {
        title,
        image: imagePath,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
        typeContent,
      };

      // Filtra los campos para eliminar los indefinidos o vacíos
      const filteredFields = Object.fromEntries(
        Object.entries(updatedFields).filter(
          ([key, value]) => value !== undefined && value !== ""
        )
      );

      // valida que haya al menos un campo para actualizar
      if (Object.keys(filteredFields).length === 0) {
        return res
          .status(400)
          .json({ message: "Ningún campo para actualizar" });
      }
      // actualiza el documento
      const premiereUpdated = await Premiere.updateOne(idUpdatePremier, {
        $set: filteredFields,
      });

      // devuelve una respuesta ok
      res
        .status(200)
        .json({ message: "actualizado correctamente", state: true });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
};