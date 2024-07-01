// controllers/movieController.js
const upload = require("../middleware/multerMiddleware");
const Movie = require("../models/Movie");

module.exports = {
  getAllMovies: async (req, res, next) => {
    try {
      const movies = await Movie.find();
      const moviesLength = movies.length;
      const queryMovie = req.query.id;
      // Si se proporciona un ID, devuelve la información específica
      if (queryMovie) {
        const movie = movies.find((item) => {
          if (
            item._id.toString().includes(queryMovie) ||
            item.gender.includes(queryMovie) ||
            item.year.includes(queryMovie)
          ) {
            return item;
          }
        });
        if (movie) {
          res.json(movie);
        } else {
          res.status(404).send("Pelicula no encontrada");
        }
      } else {
        // Si no se proporciona un ID, devuelve toda la lista
        res.json({ moviesLength, movies });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },

  // agrega pelicula
  addMovie: async (req, res) => {
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
      //agrego una ruta publica
      const imageUrl = req.file ? `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}` : null;

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
          .json({ message: "un campo esta vacio o no ha sido definido" });
      }

      // guarda el estreno en la BD
      const newMovie = await Movie.create({
        title,
        image: imageUrl,
        year,
        gender,
        synopsis,
        cast,
        duration,
        playback,
        trailer,
        typeContent,
      });
      // envia el estreno
      res.status(201).json(newMovie);
    } catch (error) {
      // Verifica si es un error del middleware y lo maneja
      if (error.message === "El archivo ya existe. No se permite la carga.") {
        return res.status(400).json({ message: error.message });
      }

      console.error(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  // elimina pelicula
  removeMovie: async (req, res, next) => {
    try {
      // guarda el id en la variable
      const { idMovie } = req.body;

      // valida que el campo no este vacio
      if (!idMovie) {
        return res.status(400).json({ message: "el campo id es requerido" });
      }

      // busca y elimina el documento por su ID
      const result = await Movie.findOneAndDelete(idMovie);

      // valida si no encontro el documento
      if (!result) {
        return res.status(404).json({
          message: "No se encontró la pelicula con el ID proporcionado",
        });
      }

      // respuesta del documento eliminado
      res.status(200).json({ message: "Pelicula eliminado exitosamente" });
    } catch (error) {
      // Verifica si es un error del middleware y lo maneja
      if (error.message === "El archivo ya existe. No se permite la carga.") {
        return res.status(400).json({ message: error.message });
      }

      console.error(error);
      res.status(500).json({ message: "Error en el servidor." });
    }
  },
  // actualiza o modifica pelicula
  updateMovie: async (req, res) => {
    try {
      // id pasado por query
      const { id } = req.query;
      const idUpdateMovie = {
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
      const MovieUpdated = await Movie.updateOne(idUpdateMovie, {
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
