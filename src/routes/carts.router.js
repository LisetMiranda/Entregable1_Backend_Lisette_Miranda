import express from "express"; 
const router = express.Router();
import CartManager from "../managers/cart-manager.js";
const manager = new CartManager("./src/data/carts.json");

router.post("/", async (req, res) => {
    try {
        const nuevoCarrito = await manager.crearCarrito(); 
        res.json(nuevoCarrito);
    } catch (error) {
        res.status(500).send("Error al crear carrito"); 
    }
})

router.post("/:cid/product/:pid", async (req, res) => {
    let cartId = req.params.cid;
    let productId = req.params.pid; 
    let quantity = req.body.quantity || 1; 

    try {
        const actualizarCarrito = await manager.agregarProductoAlCarrito(parseInt(cartId), parseInt(productId), quantity); 

        res.json(actualizarCarrito.products); 

    } catch (error) {
        res.status(500).send("Error al agregar productos al carrito");
    }
})


export default router; 