const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Authorization, X-Auth-Token, Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
});

app.get("/", (req, res) => {
    res.status(200).send({ message: "API de estudiantes corriendo correctamente" });
});

//Routes
const authRoutes = require('./server/routes/auth.routes');
app.use('/api/auth', authRoutes);

const ejemploRoutes = require('./server/routes/ejemplo.routes');
app.use('/api/ejemplo', ejemploRoutes);

const estudianteRoutes = require('./server/routes/estudiante.routes');
app.use('/api/estudiante', estudianteRoutes);

module.exports = app;
