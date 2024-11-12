import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    nombre: String, 
    apellido: String,
    edad: Number
})

const ClienteModel = mongoose.model("clientes", clienteSchema); 

export default ClienteModel;