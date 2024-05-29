import express from "express";
import enrutadoUsuarios from "./rutas/rutaUsuarios.js"
import morgan from "morgan";

const servidor = express();


servidor.use(morgan("dev"))
servidor.use(express.json());
servidor.use("/usuarios", enrutadoUsuarios);

servidor.get(`/`,  (solicitud, respuesta)=>{
    respuesta.status(404).send("404, not found");
})

export default servidor;