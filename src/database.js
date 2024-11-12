import mongoose from "mongoose";

mongoose.connect("mongodb+srv://villegasmiranda05:coderhouse@cluster0.5jk23.mongodb.net/E-commerce?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))
    .catch( (error) => console.log("Tenemos un error ", error ))