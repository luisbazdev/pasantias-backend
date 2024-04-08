import { bcryptHashPassword } from "../utils/hash"
import { JWTSignToken } from "../utils/jwt"
import { PrismaClient } from '@prisma/client'

const express = require("express")
const router = express.Router()

const bcrypt = require("bcrypt");
const prisma = new PrismaClient()

router.post("/login", async (req: any, res: any) => {
    try {
      const { correo, clave } = req.body;
      const usuario = await prisma.usuarios.findUnique({
        where: {
          correo,
        },
      });
  
      if (!usuario) {
        return res.status(404).json({ mensaje: "Usuario no encontrado." });
      }
  
      const match = await bcrypt.compare(clave, usuario.clave);
      if (match) {
        const token = await JWTSignToken({
          correo: usuario.correo
        });
        return res.json({ token });
      } else{
        return res.status(401).json({ mensaje: "Correo o clave incorrecta." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ mensaje: "Ha ocurrido un error en el servidor." });
    }
  });
  
  router.post("/signup", async (req: any, res: any) => {
    try {
      const { correo, clave } = req.body;
  
      const usuario = await prisma.usuarios.findUnique({
        where: {
          correo,
        },
      });
      if (usuario) {
        res.status(409).json({
          mensaje: "Un usuario con este correo ya ha sido registrado. Por favor seleccione un correo diferente.",
        });
      } else{
        const hashedPassword = await bcryptHashPassword(clave);
        await prisma.usuarios.create({
          data: {
            correo,
            clave: hashedPassword,
          },
        });
        res.status(201).json({mensaje: "El usuario se ha creado exitosamente."});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: "Ha ocurrido un error en el servidor." });
    }
  });

export default router;