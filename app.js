import express from "express"; 
import { engine } from "express-handlebars";
import { Server } from "socket.io";
import productRouter from "./src/routes/products.router.js";
import cartRouter from "./src/routes/carts.router.js";
import viewsRouter from "./routes/views.router.js";
import clientesRouter from "./routes/clientes.router.js";
import mongoose from "mongoose";
const app = express();
const PUERTO = 8080;
import "./database.js";

mongoose.connect("mongodb+srv://villegasmiranda05:coderhouse@cluster0.5jk23.mongodb.net/Tienda?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Conectados a la BD"))
    .catch((error) => console.log("Tenemos un error: ", error))

app.use(express.json());
app.use(express.static("./src/public"));
app.use(express.urlencoded({extended: true}));

app.engine("handlebars", engine()); 
app.set("view engine", "handlebars"); 
app.set("views", "./src/views"); 

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);
app.use("/", viewsRouter);
app.use("/clientes", clientesRouter);

const httpServer = app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})

const io = new Server(httpServer); 

import ProductManager from "./managers/product-manager.js";
const manager = new ProductManager("./src/data/productos.json");

io.on("connection", async (socket) => {
    console.log("Un cliente se conectó");

    socket.emit("productos", await manager.getProducts());

    socket.on("agregarProducto", async (producto) => {
        await manager.addProduct(producto);

        io.sockets.emit("productos", await manager.getProducts());
})

socket.on("eliminarProducto", async (id) => {
    await manager.deleteProduct(id); 

    io.sockets.emit("productos", await manager.getProducts());
})

})