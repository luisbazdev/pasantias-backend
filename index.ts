import authRouter from "./routes/auth"
import historialesRouter from "./routes/historiales"
import embarazosRouter from "./routes/embarazos"
import hematologiasRouter from "./routes/hematologias"
import examenesRouter from "./routes/examenes"
import repososRouter from "./routes/reposos"

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", authRouter);
app.use("/", historialesRouter);
app.use("/", embarazosRouter);
app.use("/", hematologiasRouter);
app.use("/", examenesRouter);
app.use("/", repososRouter);

app.listen(port, () => {
  console.log("API corriendo en puerto " + port);
});