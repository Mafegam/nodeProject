// ACA VAMOS A CONTROLAR EL COMPORTAMIENTO DE LOS USAURIOS

// ACA IMPORTAMOS EL MODELO DE USUARIO
import ModeloUsuario from "../modelos/modeloUsuario.js";

const ControladorUsuarios = {
    crearUsuario: async (solicitud, respuesta) => {
        try {
            const nuevoUsuario = new ModeloUsuario(solicitud.body);
            const usuarioCreado = await nuevoUsuario.save();
            if (usuarioCreado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario creado con éxito",
                    datos: usuarioCreado._id
                })
                console.log(usuarioCreado);
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al crear usuario" });
        }
    },

    leerUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEncontrado = await ModeloUsuario.findById(solicitud.params.id)
            if (usuarioEncontrado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario leido con éxito!",
                    datos: usuarioEncontrado
                });
            }
        } catch (error) {
            respuesta.json({
                error: true,
                mensaje: "Ocurrió un error al leer usuario",
                datos: error
            });
        }
    },

    leerUsuarios: async (solicitud, respuesta) => {
        try {
            const todosLosUsuarios = await ModeloUsuario.find();
            respuesta.json({
                resultado: "Exitoso",
                mensaje: "Todos los usuarios leido con éxito!",
                datos: todosLosUsuarios
            });
            console.log("Cargado en postman");
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al leer los usuarioS" });
        }
    },

    actualizarUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioActualizado = await ModeloUsuario.findByIdAndUpdate(
            solicitud.params.id, solicitud.body
            );
            if(usuarioActualizado._id){
                respuesta.json({ 
                mensaje: "Datos actualizados:",
                datos: usuarioActualizado._id,               
                });         
            }
        } catch {
            console.log((solicitud.body));
            respuesta.json({ error: true, mensaje: "Ocurrió un error al actualizar el usuario" });
        }
    },

    eliminarUsuario: async (solicitud, respuesta) => {
        try {
            const usuarioEliminado = await ModeloUsuario.findByIdAndDelete(solicitud.params.id);
            if (usuarioEliminado._id) {
                respuesta.json({
                    resultado: "Exitoso",
                    mensaje: "Usuario eliminado con éxito!",
                    datos: null
                });
            }
        } catch (error) {
            console.log("Error: ", error);
            respuesta.json({ error: true, mensaje: "Ocurrió un error al eliminar el usuario" });
        }
    },
}

export default ControladorUsuarios;

/*
const usuario = {
    name: "pepita",
    lastName: "perez",
    username: "rox_xe",
    email: "pepitaperez@bit.institute.com",
    password: "asd",
    passwordConfirmation: "asd",
    dob: "10/02/1994",
    phone: "3505804802",
    pfp: "./assets/Hu.Tao.full.3561340.jpg",
}
*/

