const Visit = require("../models/visit");

module.exports = {
  saveVisit: async (req, res) => {
    try {
      const { date } = req.body;
      const visit = await Visit.create({
        date: date,
      });

      res.status(200).json({ message: "visita guardada" });
      // Utilizar el método save() para guardar el documento en la base de datos
      visit
        .save()
        .then((resultado) => {
          console.log("Documento guardado exitosamente:", resultado);
        })
        .catch((error) => {
          console.error("Error al guardar el documento:", error);
        });
    } catch (error) {
      // Maneja errores
      console.error(error, "error");
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
  getVisit: async (req, res) => {
    try {
      //   busca todos las visitas
      const allVisit = await Visit.find();
      //   contador de visitas
      const countVisit = allVisit.length;

      res.status(200).json({ length: countVisit, allVisit });
    } catch (error) {
      // Maneja errores
      console.error(error, "error");
      res.status(500).json({ error: "Error interno del servidor" });
    }
  },
};
