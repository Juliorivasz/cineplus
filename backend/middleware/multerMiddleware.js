const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const directorioDestino = path.resolve(__dirname, "../../uploads/");
    cb(null, directorioDestino);
  },
  filename: function (req, file, cb) {
    cb(null, `cineplus-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    // Verifica si el archivo ya existe
    const nombreArchivo = `cineplus-${file.originalname}`;
    const rutaArchivo = path.resolve(
      __dirname,
      "../../uploads/",
      nombreArchivo
    );

    fs.access(rutaArchivo, fs.constants.F_OK, (err) => {
      if (err) {
        // El archivo no existe, es seguro cargarlo
        cb(null, true);
      } else {
        // El archivo ya existe, no permitir la carga
        cb(new Error("El archivo ya existe. No se permite la carga."));
      }
    });
  },
});

module.exports = upload;
