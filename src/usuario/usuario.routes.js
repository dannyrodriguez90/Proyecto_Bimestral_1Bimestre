import { Router } from "express";
import { obtenerUsuarioPorId, obtenerUsuarios, eliminarUsuario, actualizarContrasena, actualizarUsuario, actualizarFotoPerfil, } from "./usuario.controller.js";
import { getUserByIdValidator, deleteUserValidator, updatePasswordValidator, updateUserValidator, updateProfilePictureValidator, } from "../middlewares/usuario-validator.js";
import { uploadProfilePicture } from "../middlewares/multer-uploads.js";

const router = Router();

router.get("/findUser/:uid", getUserByIdValidator, obtenerUsuarioPorId);
router.get("/", obtenerUsuarios);
router.delete("/deleteUser/:uid", deleteUserValidator, eliminarUsuario);
router.patch("/updatePassword/:uid", updatePasswordValidator, actualizarContrasena);
router.put("/updateUser/:uid", updateUserValidator, actualizarUsuario);
router.patch(
  "/updateProfilePicture/:uid",
  uploadProfilePicture.single("profilePicture"),
  updateProfilePictureValidator,
  actualizarFotoPerfil
);

export default router;