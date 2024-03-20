import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")

const app = express()
const port = 8080;

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/historiales/{id}", async (req: any, res: any) => {
  const { id } = req.params;
  const historial = await prisma.historiales.findUnique({
    where: {
      id,
    },
  })
  res.json(historial);
})

app.get("/historiales", async (req: any, res: any) => {
  const historialesMedicos = await prisma.historiales.findMany();
  res.json(historialesMedicos)
})

app.post("/historiales", async (req: any, res: any) => {
  const {
    numero_de_historia   ,
  fecha   ,
  revisada   ,
  clasificada   ,
  archivada   ,
  centro_asistencial   ,
  tipo   ,
  codigo_de_origen   ,
  ubicacion_geografica   ,
  nombre   ,
  cedula_de_identidad   ,
  edad   ,
  fecha_de_nacimiento   ,
  lugar_de_nacimiento   ,
  estado_civil   ,
  profesion   ,
  ocupacion   ,
  direccion_de_habitacion   ,
  telefono   ,
  nombre_conyuge   ,
  direccion_conyuge   ,
  antecedentes_familiares_tbc   ,
  antecedentes_familiares_sifilis   ,
  antecedentes_familiares_diabetes   ,
  antecedentes_familiares_neurologicas_y_mentales   ,
  antecedentes_familiares_cardiopatias   ,
  antecedentes_familiares_nefritis   ,
  antecedentes_familiares_embarazos_multiples   ,
  antecedentes_familiares_otros   ,
  antecedentes_familiares_cancer   ,
  datos_menstruales_edad_menarquia   ,
  datos_menstruales_ciclo   ,
  datos_menstruales_duracion   ,
  datos_menstruales_cantidad   ,
  datos_menstruales_dolor   ,
  historia_medica_pasada_eruptivas   ,
  historia_medica_pasada_buba   ,
  historia_medica_pasada_cardiopatias   ,
  historia_medica_pasada_toxemias   ,
  historia_medica_pasada_mastitis   ,
  historia_medica_pasada_transfusiones   ,
  historia_medica_pasada_rubeola   ,
  historia_medica_pasada_chagas   ,
  historia_medica_pasada_tbc   ,
  historia_medica_pasada_varices   ,
  historia_medica_pasada_heridas   ,
  historia_medica_pasada_alergias   ,
  historia_medica_pasada_parasitosis   ,
  historia_medica_pasada_toxoplasmosis   ,
  historia_medica_pasada_diabetes   ,
  historia_medica_pasada_hemorroides  ,
  historia_medica_pasada_cicatrices  ,
  historia_medica_pasada_sulfonamidas ,
  historia_medica_pasada_bilharziosis   ,
  historia_medica_pasada_micosis   ,
  historia_medica_pasada_tiroides  ,
  historia_medica_pasada_flebitis  ,
  historia_medica_pasada_fracturas  ,
  historia_medica_pasada_antibioticos ,
  historia_medica_pasada_paludismo  ,
  historia_medica_pasada_nefropatias ,
  historia_medica_pasada_electrocoagulaciones ,
  historia_medica_pasada_otro   ,
  antecedentes_quirurgicos  ,
  embarazo_actual_ultimo_periodo  ,
  embarazo_actual_caracteres  ,
  embarazo_actual_primeros_movimientos  ,
  embarazo_actual_fecha_parto_probable   ,
  embarazo_actual_reposo_prenatal_desde  ,
  nombre_medico  ,
  registro_mpps   ,
  firma   ,
  examen_fisico_talla   ,
  examen_fisico_peso_previo   ,
  examen_fisico_aspecto_general  ,
  examen_fisico_edemas   ,
  examen_fisico_piel   ,
  examen_fisico_senos   ,
  examen_fisico_sistema_nervioso   ,
  examen_fisico_abdomen ,
  examen_fisico_aparato_digestivo,
  examen_fisico_vulva_y_perine,
  examen_fisico_aparato_circulatorio,
  examen_fisico_vagina,
  examen_fisico_aparato_respiratorio,
  examen_fisico_cuello,
  examen_fisico_rx_pulmonar,
  examen_fisico_cuerpo_uterino,
  examen_fisico_aparato_urinario,
  examen_fisico_aparato_locomotor,
  examen_fisico_sistema_ganglionar,
  examen_fisico_varices,
  examen_fisico_otros
  } = req.body;
  // revisar si historial aparte de embarazada fue enviado en el body
  // si fue enviado, crearlo de una vez en la siguiente query

  // tambien, crear paginacion
  await prisma.historiales.create({data: {
    numero_de_historia   ,
  fecha   ,
  revisada   ,
  clasificada   ,
  archivada   ,
  centro_asistencial   ,
  tipo   ,
  codigo_de_origen   ,
  ubicacion_geografica   ,
  nombre   ,
  cedula_de_identidad   ,
  edad   ,
  fecha_de_nacimiento   ,
  lugar_de_nacimiento   ,
  estado_civil   ,
  profesion   ,
  ocupacion   ,
  direccion_de_habitacion   ,
  telefono   ,
  nombre_conyuge   ,
  direccion_conyuge   ,
  antecedentes_familiares_tbc   ,
  antecedentes_familiares_sifilis   ,
  antecedentes_familiares_diabetes   ,
  antecedentes_familiares_neurologicas_y_mentales   ,
  antecedentes_familiares_cardiopatias   ,
  antecedentes_familiares_nefritis   ,
  antecedentes_familiares_embarazos_multiples   ,
  antecedentes_familiares_otros   ,
  antecedentes_familiares_cancer   ,
  datos_menstruales_edad_menarquia   ,
  datos_menstruales_ciclo   ,
  datos_menstruales_duracion   ,
  datos_menstruales_cantidad   ,
  datos_menstruales_dolor   ,
  historia_medica_pasada_eruptivas   ,
  historia_medica_pasada_buba   ,
  historia_medica_pasada_cardiopatias   ,
  historia_medica_pasada_toxemias   ,
  historia_medica_pasada_mastitis   ,
  historia_medica_pasada_transfusiones   ,
  historia_medica_pasada_rubeola   ,
  historia_medica_pasada_chagas   ,
  historia_medica_pasada_tbc   ,
  historia_medica_pasada_varices   ,
  historia_medica_pasada_heridas   ,
  historia_medica_pasada_alergias   ,
  historia_medica_pasada_parasitosis   ,
  historia_medica_pasada_toxoplasmosis   ,
  historia_medica_pasada_diabetes   ,
  historia_medica_pasada_hemorroides  ,
  historia_medica_pasada_cicatrices  ,
  historia_medica_pasada_sulfonamidas ,
  historia_medica_pasada_bilharziosis   ,
  historia_medica_pasada_micosis   ,
  historia_medica_pasada_tiroides  ,
  historia_medica_pasada_flebitis  ,
  historia_medica_pasada_fracturas  ,
  historia_medica_pasada_antibioticos ,
  historia_medica_pasada_paludismo  ,
  historia_medica_pasada_nefropatias ,
  historia_medica_pasada_electrocoagulaciones ,
  historia_medica_pasada_otro   ,
  antecedentes_quirurgicos  ,
  embarazo_actual_ultimo_periodo  ,
  embarazo_actual_caracteres  ,
  embarazo_actual_primeros_movimientos  ,
  embarazo_actual_fecha_parto_probable   ,
  embarazo_actual_reposo_prenatal_desde  ,
  nombre_medico  ,
  registro_mpps   ,
  firma   ,
  examen_fisico_talla   ,
  examen_fisico_peso_previo   ,
  examen_fisico_aspecto_general  ,
  examen_fisico_edemas   ,
  examen_fisico_piel   ,
  examen_fisico_senos   ,
  examen_fisico_sistema_nervioso   ,
  examen_fisico_abdomen ,
  examen_fisico_aparato_digestivo,
  examen_fisico_vulva_y_perine,
  examen_fisico_aparato_circulatorio,
  examen_fisico_vagina,
  examen_fisico_aparato_respiratorio,
  examen_fisico_cuello,
  examen_fisico_rx_pulmonar,
  examen_fisico_cuerpo_uterino,
  examen_fisico_aparato_urinario,
  examen_fisico_aparato_locomotor,
  examen_fisico_sistema_ganglionar,
  examen_fisico_varices,
  examen_fisico_otros
  }});
  res.json({mensaje: "El historial ha sido creado"});
})

/*app.put("/historiales/{id}", async (req, res) => {

})

app.delete("/historiales/{id}", async (req, res) => {

})*/

app.listen(port, () => {
  console.log("API corriendo en puerto " + port);
});