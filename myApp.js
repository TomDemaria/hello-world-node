// Requerimos Express
const express = require("express");

// Creamos la app
const app = express();

// Definimos una ruta raíz "/"
app.get("/", (req, res) => {
  res.send("Hello Express");
});

// Exportamos la app (para que server.js la use)
module.exports = app;
