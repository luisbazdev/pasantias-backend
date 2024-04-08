import { authMiddleware } from "../middleware/auth"
import { PrismaClient } from '@prisma/client'

const express = require("express")
const router = express.Router()

const prisma = new PrismaClient()

router.post("/historiales/:id/embarazos", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { fecha, tipo_de_parto, tiempo_de_trabajo, hemorragia, lesion_perineal, toxemia, puerperio, peso_del_infante, vivo_o_muerto, sexo, observaciones } = req.body;
      const embarazoData = {
        historial_medico_id: parseInt(id),
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
      }
     
      const embarazo = await prisma.historiales_embarazos.create({data: embarazoData});
      res.json({mensaje: "El embarazo ha sido creado.", id: embarazo.id});
    } catch (error) {
      console.log(error)
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  })
  
  router.put("/embarazos/:id", authMiddleware, async (req: any, res: any) => {
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
  
  router.delete("/embarazos/:id", authMiddleware, async (req: any, res: any) => {
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

export default router;