import { Router } from "express";
import ControladorUsuarios from "../controladores/controladorUsuarios.js"

const enrutadoUsuarios = Router ();


enrutadoUsuarios.post('/', ControladorUsuarios.crearUsuario)
enrutadoUsuarios.get('/:id', ControladorUsuarios.leerUsuario)
enrutadoUsuarios.get('/', ControladorUsuarios.leerUsuarios)
enrutadoUsuarios.put('/:id', ControladorUsuarios.actualizarUsuario)
enrutadoUsuarios.delete('/:id', ControladorUsuarios.eliminarUsuario)

export default enrutadoUsuarios;