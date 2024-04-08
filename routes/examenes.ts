import { authMiddleware } from "../middleware/auth"
import { PrismaClient } from '@prisma/client'

const express = require("express")
const router = express.Router()

const prisma = new PrismaClient()

router.post("/historiales/:id/examenes", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { 
        fecha,
        nauseas_o_vomitos,
        constipacion,
        algias,
        calambres,
        varices,
        insomnio,
        cefalea,
        peso,
        edemas,
        orina_a,
        orina_g,
        ta,
        altura_uterina,
        presentacion,
        foco_fetal,
        hemorragias_extra_genitales,
        firma_o_registro_mpps,
       } = req.body;
  
      const examenData = {
        historial_embarazada_id: parseInt(id),
        fecha,
        nauseas_o_vomitos,
        constipacion,
        algias,
        calambres,
        varices,
        insomnio,
        cefalea,
        peso,
        edemas,
        orina_a,
        orina_g,
        ta,
        altura_uterina,
        presentacion,
        foco_fetal,
        hemorragias_extra_genitales,
        firma_o_registro_mpps,
      }
     
      const examen_obstetrico = await prisma.historiales_embarazadas_examenes_obstetricos.create({data: examenData});
      res.json({mensaje: "El examen obstetrico ha sido creato.", id: examen_obstetrico.id});
    } catch (error) {
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  })
  
  
  router.put("/examenes/:id", authMiddleware, async (req: any, res: any) => {
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
  
  router.delete("/examenes/:id", authMiddleware, async (req: any, res: any) => {
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

export default router;