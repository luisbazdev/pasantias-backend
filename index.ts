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


app.get("/historiales/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const historialMedico = await prisma.historiales.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        embarazos: true,
        historial_embarazada: {
          include: {
            hematologias: true,
            examenes_obstetricos: true,
          }
        },
      }
    })
    res.json(historialMedico);
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }

})

app.get("/historiales", async (req: any, res: any) => {
  const { skip, take } = req.query;
  const props = {
    skip: 0,
    take: 25,
  };
  if(!Number.isNaN(parseInt(skip))){
    props.skip = parseInt(skip);
  }
  if(!Number.isNaN(parseInt(take))){
    props.take = parseInt(take);
  }
  const historialesMedicos = await prisma.historiales.findMany({
    ...props,    
    include: {
      embarazos: true,
      historial_embarazada: {
        include: {
          hematologias: true,
          examenes_obstetricos: true,
        }
      },
    }
  });
  res.json(historialesMedicos)
})

app.post("/historiales", async (req: any, res: any) => {
  const {
    embarazos,
    historial_embarazada,
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

  const historialMedicoData = {
    embarazos: {},
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
  };

  const historialMedico = await prisma.historiales.create({data: historialMedicoData});

  // crear los embarazos aparte
  if(embarazos){
    const historialMedicoEmbarazosData: any = []
    embarazos.forEach((embarazo: any) => {
      historialMedicoEmbarazosData.push({
        historial_medico_id: historialMedico.id,
        fecha: embarazo.fecha,
        tipo_de_parto: embarazo.tipo_de_parto,
        tiempo_de_trabajo: embarazo.tiempo_de_trabajo,
        hemorragia: embarazo.hemorragia,
        lesion_perineal: embarazo.lesion_perineal,
        toxemia: embarazo.toxemia,
        puerperio: embarazo.puerperio,
        peso_del_infante: embarazo.peso_del_infante,
        vivo_o_muerto: embarazo.vivo_o_muerto,
        sexo: embarazo.sexo,
        observaciones: embarazo.observaciones
      })
    });
    await prisma.historiales_embarazos.createMany({data: historialMedicoEmbarazosData});
  }

  // crear el historial de embarazada aparte
  if(historial_embarazada){
    const historialEmbarazada = await prisma.historiales_embarazadas.create({data: {
      historial_medico_id: historialMedico.id,
      pelvimetria_biisquiatico: historial_embarazada.pelvimetria_biisquiatico   ,
      pelvimetria_sagital_anterior: historial_embarazada.pelvimetria_sagital_anterior   ,
      pelvimetria_promontorio: historial_embarazada.pelvimetria_promontorio   ,
      pelvimetria_muescas_sacrociaticas: historial_embarazada.pelvimetria_muescas_sacrociaticas   ,
      pelvimetria_espinas_ciaticas: historial_embarazada.pelvimetria_espinas_ciaticas   ,
      pelvimetria_arco_pubico: historial_embarazada.pelvimetria_arco_pubico   ,
      pelvimetria_sacro: historial_embarazada.pelvimetria_sacro   ,
      radiologia: historial_embarazada.radiologia   ,
      parto_fecha: historial_embarazada.parto_fecha   ,
      parto_hora: historial_embarazada.parto_hora   ,
      parto_hospitalizada_en: historial_embarazada.parto_hospitalizada_en   ,
      parto_dias_hospitalizada: historial_embarazada.parto_dias_hospitalizada   ,
      parto_duracion_del_trabajo: historial_embarazada.parto_duracion_del_trabajo   ,
      parto_tipo_de_parto: historial_embarazada.parto_tipo_de_parto   ,
      parto_lesion_perineal: historial_embarazada.parto_lesion_perineal   ,
      parto_hemorragia: historial_embarazada.parto_hemorragia   ,
      parto_puerperio: historial_embarazada.parto_puerperio   ,
      recien_nacido_peso: historial_embarazada.recien_nacido_peso   ,
      recien_nacido_sexo: historial_embarazada.recien_nacido_sexo   ,
      recien_nacido_talla: historial_embarazada.recien_nacido_talla   ,
      recien_nacido_observaciones: historial_embarazada.recien_nacido_observaciones   ,
      examen_post_parto_estado_general: historial_embarazada.examen_post_parto_estado_general   ,
      examen_post_parto_flujo: historial_embarazada.examen_post_parto_flujo   ,
      examen_post_parto_genitales_externos: historial_embarazada.examen_post_parto_genitales_externos   ,
      examen_post_parto_piso_pelvico_firma: historial_embarazada.examen_post_parto_piso_pelvico_firma   ,
      examen_post_parto_piso_pelvico_relajado: historial_embarazada.examen_post_parto_piso_pelvico_relajado   ,
      examen_post_parto_piso_pelvico_cistocele: historial_embarazada.examen_post_parto_piso_pelvico_cistocele   ,
      examen_post_parto_piso_pelvico_rectocele: historial_embarazada.examen_post_parto_piso_pelvico_rectocele   ,
      examen_post_parto_desgarros: historial_embarazada.examen_post_parto_desgarros   ,
      examen_post_parto_tacto: historial_embarazada.examen_post_parto_tacto   ,
      examen_post_parto_especulo: historial_embarazada.examen_post_parto_especulo   ,
      examen_post_parto_observaciones: historial_embarazada.examen_post_parto_observaciones   ,
      referida_a_servicio_social: historial_embarazada.referida_a_servicio_social  ,
      referida_a_servicio_social_fecha: historial_embarazada.referida_a_servicio_social_fecha   ,
      referida_a_servicio_social_resultado: historial_embarazada.referida_a_servicio_social_resultado   ,
      referida_a_servicio_cardiologia: historial_embarazada.referida_a_servicio_cardiologia   ,
      referida_a_servicio_cardiologia_fecha: historial_embarazada.referida_a_servicio_cardiologia_fecha   ,
      referida_a_servicio_cardiologia_resultado: historial_embarazada.referida_a_servicio_cardiologia_resultado   ,
      referida_a_servicio_odontologia: historial_embarazada.referida_a_servicio_odontologia   ,
      referida_a_servicio_odontologia_fecha: historial_embarazada.referida_a_servicio_odontologia_fecha   ,
      referida_a_servicio_odontologia_resultado: historial_embarazada.referida_a_servicio_odontologia_resultado   ,
      referida_a_servicio_oftalmologia: historial_embarazada.referida_a_servicio_oftalmologia   ,
      referida_a_servicio_oftalmologia_fecha: historial_embarazada.referida_a_servicio_oftalmologia_fecha   ,
      referida_a_servicio_oftalmologia_resultado: historial_embarazada.referida_a_servicio_oftalmologia_resultado   ,
      referida_a_servicio_medicina_interna: historial_embarazada.referida_a_servicio_medicina_interna   ,
      referida_a_servicio_medicina_interna_fecha: historial_embarazada.referida_a_servicio_medicina_interna_fecha   ,
      referida_a_servicio_medicina_interna_resultado: historial_embarazada.referida_a_servicio_medicina_interna_resultado   ,
      referida_a_servicio_reumatologia: historial_embarazada.referida_a_servicio_reumatologia   ,
      referida_a_servicio_reumatologia_fecha: historial_embarazada.referida_a_servicio_reumatologia_fecha   ,
      referida_a_servicio_reumatologia_resultado: historial_embarazada.referida_a_servicio_reumatologia_resultado   ,
    }})

    if(historial_embarazada.hematologias){
      const historialEmbarazadaHematologiasData: any = []
      historial_embarazada.hematologias.forEach((hematologia: any) => {
        historialEmbarazadaHematologiasData.push({
          historial_embarazada_id: historialEmbarazada.id,
          globulos_rojos: hematologia.globulos_rojos, 
          globulos_blancos: hematologia.globulos_blancos,
          hb: hematologia.hb,
          hematocrito: hematologia.hematocrito,
          vcm: hematologia.vcm,
        })
      });
      await prisma.historiales_embarazadas_hematologias.createMany({data: historialEmbarazadaHematologiasData});
    }
    if(historial_embarazada.examenes_obstetricos){
      const historialEmbarazadaExamenesObstetricosData: any = []
      historial_embarazada.examenes_obstetricos.forEach((examen: any) => {
        historialEmbarazadaExamenesObstetricosData.push({
          historial_embarazada_id: historialEmbarazada.id,
          fecha: examen.fecha,
          nauseas_o_vomitos: examen.nauseas_o_vomitos,
          constipacion: examen.constipacion,
          algias: examen.algias,
          calambres: examen.calambres,
          varices: examen.varices,
          insomnio: examen.insomnio,
          cefalea: examen.cefalea,
          peso: examen.peso,
          edemas: examen.edemas,
          orina_a: examen.orina_a,
          orina_g: examen.orina_g,
          ta: examen.ta,
          altura_uterina: examen.altura_uterina,
          presentacion: examen.presentacion,
          foco_fetal: examen.foco_fetal,
          hemorragias_extra_genitales: examen.hemorragias_extra_genitales,
          firma_o_registro_mpps: examen.firma_o_registro_mpps
        })
      });
      await prisma.historiales_embarazadas_examenes_obstetricos.createMany({data: historialEmbarazadaExamenesObstetricosData});
    }
  }
  res.json({mensaje: "El historial ha sido creado"});
})

app.put("/historiales/{id}", async (req, res) => {
  try {
    const { id } = req.params;

    const {
      historial_embarazada,
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

    // talvez el historial_embarazada debe hacerse de manera diferente.
    await prisma.historiales.update({
      where: {
        id: parseInt(id),
      },
      data: {
        historial_embarazada,
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
      examen_fisico_otros,
      },
    })
    res.json({mensaje: "El historial medico ha sido actualizado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
})

app.delete("/historiales/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.historiales.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json({mensaje: "El historial ha sido eliminado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
})

app.put("/historiales/embarazos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { fecha, tipo_de_parto, tiempo_de_trabajo, hemorragia, lesion_perineal, toxemia, puerperio, peso_del_infante, vivo_o_muerto, sexo, observaciones } = req.body;
    await prisma.historiales_embarazos.update({
      where: {
        id: parseInt(id),
      },
      data: {
        fecha, 
        tipo_de_parto, 
        tiempo_de_trabajo, 
        hemorragia, 
        lesion_perineal, 
        toxemia, 
        puerperio, 
        peso_del_infante, 
        vivo_o_muerto, 
        sexo, 
        observaciones,
      },
    })
    res.json({mensaje: "El embarazo ha sido actualizado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
});

app.delete("/historiales/embarazos/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.historiales_embarazos.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json({mensaje: "El embarazo ha sido eliminado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
});

app.put("/historiales/hematologias/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { globulos_rojos, globulos_blancos, hb, hematocrito, vcm } = req.body;
    await prisma.historiales_embarazadas_hematologias.update({
      where: {
        id: parseInt(id),
      },
      data: {
        globulos_rojos, 
        globulos_blancos, 
        hb, 
        hematocrito, 
        vcm,
      },
    })
    res.json({mensaje: "La hematologia ha sido actualizada."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
});

app.delete("/historiales/hematologias/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.historiales_embarazadas_hematologias.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json({mensaje: "La hematologia ha sido eliminada."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
});

app.put("/historiales/examenes/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    const { fecha, nauseas_o_vomitos, constipacion, algias, calambres, varices, insomnio, cefalea, peso, edemas, orina_a,
    orina_g, ta, altura_uterina, presentacion, foco_fetal, hemorragias_extra_genitales, firma_o_registro_mpps } = req.body;
    await prisma.historiales_embarazadas_examenes_obstetricos.update({
      where: {
        id: parseInt(id),
      },
      data: {
        fecha, nauseas_o_vomitos, constipacion, algias, calambres, varices, insomnio, cefalea, peso, edemas, orina_a,
        orina_g, ta, altura_uterina, presentacion, foco_fetal, hemorragias_extra_genitales, firma_o_registro_mpps
      },
    })
    res.json({mensaje: "El examen obstetrico ha sido actualizado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    
  }
});

app.delete("/historiales/examenes/:id", async (req: any, res: any) => {
  try {
    const { id } = req.params;
    await prisma.historiales_embarazadas_examenes_obstetricos.delete({
      where: {
        id: parseInt(id),
      },
    })
    res.json({mensaje: "El examen obstetrico ha sido eliminado."});
  } catch (error) {
    res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
  }
});

app.listen(port, () => {
  console.log("API corriendo en puerto " + port);
});