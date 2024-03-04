const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()

const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "admin",
    database: "prueba"
})

const port = 8080;
    
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/historiales", async (req, res) => {
    connection.query('SELECT * FROM historiales_medicos', function (error, results, fields) {
        if (error) throw error;
        // connected!
        res.json(results) 
      });
})

app.post("/historiales", async (req, res) => {
  const { nombre, apellido, pasantias } = req.body;
  connection.query(`INSERT INTO historiales_medicos (nombre, apellido, pasantias) VALUES ('${nombre}', '${apellido}', ${pasantias })`, function (error, results, fields) {
    if(error){
      res.json({mensaje: "Hubo un error al crear el historial medico"})
    }
    else{
      res.json({mensaje: "El historial medico se ha creado exitosamente"})
    }
  });
})

// endpoint

app.listen(port, () => {
  console.log("API corriendo en puerto " + port);
});