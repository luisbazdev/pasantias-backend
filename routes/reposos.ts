import { authMiddleware } from "../middleware/auth"
import { PrismaClient } from '@prisma/client'

const express = require("express")
const router = express.Router()

const prisma = new PrismaClient()

router.post("/historiales/:id/reposos", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { pre_natal, post_natal } = req.body;
      const reposoData = {
        historial_embarazada_id: parseInt(id),
        pre_natal,
        post_natal,
      }
     
      const embarazo = await prisma.historiales_embarazadas_reposos.create({data: reposoData});
      res.json({mensaje: "El reposo ha sido creado.", id: embarazo.id});
    } catch (error) {
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  })
  
  router.put("/reposos/:id", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      const { pre_natal, post_natal } = req.body;
      await prisma.historiales_embarazadas_reposos.update({
        where: {
          id: parseInt(id),
        },
        data: {
          pre_natal,
          post_natal,
        },
      })
      res.json({mensaje: "El reposo ha sido actualizado."});
    } catch (error) {
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  });
  
  router.delete("/reposos/:id", authMiddleware, async (req: any, res: any) => {
    try {
      const { id } = req.params;
      await prisma.historiales_embarazadas_reposos.delete({
        where: {
          id: parseInt(id),
        },
      })
      res.json({mensaje: "El reposo ha sido eliminado."});
    } catch (error) {
      res.status(500).json({mensaje: "Ha ocurrido un error en el servidor."});
    }
  });

export default router;