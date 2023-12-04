const Premier = require("../models/premier");

module.exports = {
  // obtiene los estrenos
  getPremiers: async (req, res, next) => {
    try {
      const premiers = await Premier.find();

      const idPremier = req.query.id;
      // Si se proporciona un ID, devuelve la información específica
      if (idPremier) {
        const premier = premiers.find((item) => item.id === idPremier);
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
      next(error);
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
      const newPremier = Premier.create({
        title,
        image,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
      });

      // envia el estreno
      res.status(200).json(newPremier);
    } catch (error) {
      console.log(error);
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
    }
  },
};
