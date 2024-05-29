// ACA SE MODELA LA FORMA Y EL FORMATO QUE QUIEREMOS QUE LLEVEN
// LOS USUARIOS DEL PROYECTO

import { Schema, model } from "mongoose";

const esquemaUsuario = new Schema(
    {
        name: {type: String, required:true},
        lastName: {type: String, required:true},
        username: {type: String, required:true},
        email: {type: String, required:true},
        // password: {type: String, required:true},
        // passwordConfirmation: "asd",
        // dob: {type: Date, required:true},
        // phone: {type: Number, required:false},
        // pfp: "./assets/Hu.Tao.full.3561340.jpg",
    }
)

export default model("Usuario", esquemaUsuario)