const express = require("express");
const mongoose = require("mongoose");
const user = require("./routes/user");
const auth = require("./routes/auth");
const propiedades = require("./routes/propiedades");
const googleApi = require("./routes/googleApi"); // Importa el nuevo archivo de ruta
const path = require("path");
const cors = require("cors");
require("dotenv").config(); // Asegúrate de requerir dotenv aquí
const { swaggerDocs: V1SwaggerDocs } = require("./swagger");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use("/api/v1/user/", user);
app.use("/api/v1/auth/", auth);
app.use("/api/v1/propiedad/", propiedades);
app.use("/api/v1/google/", googleApi); // Añade la ruta para el endpoint de Google API

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Listening on port: " + port);
    V1SwaggerDocs(app, port);
});

mongoose
  .connect("mongodb://localhost/rentify", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log(error));
