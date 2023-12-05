const Premier = require("../models/premier");

module.exports = {
  // obtiene los estrenos
  getPremiers: async (req, res, next) => {
    try {
      const premiers = await Premier.find();

      const idPremier = req.query.id;
      // Si se proporciona un ID, devuelve la información específica
      if (idPremier) {
        const premier = premiers.find((item) => {
          if (
            item._id === idPremier ||
            item.gender === idPremier ||
            item.year.toString() === idPremier
          ) {
            return item;
          }
        });
        if (premier) {
          res.json(premier);
        } else {
          res.status(404).send("Premier no encontrada");
        }
      } else {
        // Si no se proporciona un ID, devuelve toda la lista
        res.json(premiers);
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  addPremier: async (req, res, next) => {
    try {
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
      } = req.body;

      // agrega la ruta de la imagen a su campo
      const imagePath = req.file ? req.file.path : null;

      // valida que ningun campo este vacio
      if (
        !title ||
        !image ||
        !year ||
        !gender ||
        !synopsis ||
        !cast ||
        !duration ||
        !playback ||
        !trailer
      ) {
        return res
          .status(400)
          .json({ message: "un campo esta vacio o no ha sido definido" });
      }

      // guarda el estreno en la BD
      const newPremier = await Premier.create({
        title,
        image: imagePath,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
      });

      await newPremier.save();

      // envia el estreno
      res.status(201).json(newPremier);
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },

  // elimina el estreno
  removePremier: async (req, res, next) => {
    try {
      // guarda el id en la variable
      const { idPremier } = req.body;

      // valida que el campo no este vacio
      if (!idPremier) {
        return res.status(400).json({ message: "el campo id es requerido" });
      }

      // busca y elimina el documento por su ID
      const result = await Premier.findOneAndDelete(idPremier);

      // valida si no encontro el documento
      if (!result) {
        return res.status(404).json({
          message: "No se encontró el estreno con el ID proporcionado",
        });
      }

      // respuesta del documento eliminado
      res.status(200).json({ message: "Estreno eliminado exitosamente" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  updatePremier: async (req, res) => {
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
      const premierUpdated = await Premier.updateOne(idUpdatePremier, {
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
