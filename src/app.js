import express from "express"; 
import productRouter from "./routes/products.router.js";
import cartRouter from "./routes/carts.router.js";
import { publicEncrypt } from "crypto";
const app = express();
const PUERTO = 8080;

app.use(express.json());

app.use("/api/products", productRouter);
app.use("/api/carts", cartRouter);

app.listen(PUERTO, () => {
    console.log(`Escuchando en el http://localhost:${PUERTO}`);
})