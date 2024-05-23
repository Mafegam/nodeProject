console.log("Works!");

const express = require("express");

const servidor = express();

servidor.get("/", (solicitud, respuesta) => {
    respuesta.json({
        saludo: "Hola"
    })
});

servidor.get("/xxx", (solicitudm, respuesta)=>{
    respuesta.redirect(301, "/");
})




servidor.listen(3000);
console.log("Server corriendo desde puerto 3000");