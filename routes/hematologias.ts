import { authMiddleware } from "../middleware/auth"
import { PrismaClient } from '@prisma/client'

const express = require("express")
const router = express.Router()

const prisma = new PrismaClient()

router.post("/historiales/:id/hematologias", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { 
            globulos_rojos, 
            globulos_blancos,
            hb,
            hematocrito,
            vcm,
       } = req.body;
      const hematologiaData = {
        historial_embarazada_id: parseInt(id),
        globulos_rojos, 
        globulos_blancos,
        hb,
        hematocrito,
        vcm,
      }
     
      const hematologia = await prisma.historiales_embarazadas_hematologias.create({data: hematologiaData});
      res.json({mensaje: "La hematologia ha sido creada.", id: hematologia.id});
    } catch (error) {
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  })
  
  router.put("/hematologias/:id", authMiddleware, async (req: any, res: any) => {
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
  
  router.delete("/hematologias/:id", authMiddleware, async (req: any, res: any) => {
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

export default router;