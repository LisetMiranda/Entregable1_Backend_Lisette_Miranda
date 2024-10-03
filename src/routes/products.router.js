import express from "express"; 
import ProductManager from "../managers/product-manager.js";
const manager = new ProductManager("./src/data/productos.json");
const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const limit = req.query.limit; 
        const productos = await manager.getProducts(); 

        if(limit) {
            res.json(productos.slice(0, limit)); 
        } else {
            res.json(productos); 
        }
    } catch (error) {
        res.status(500).send("Error interno del servidor");
    }
})

router.get("/:pid", async (req, res) => {
    let id = req.params.pid; 

    try {
        const productoBuscado = await manager.getProductById(parseInt(id));

        if(!productoBuscado) {
            res.send("Producto no encontrado");
        } else {
            res.json(productoBuscado); 
        }
    } catch (error) {
        res.status(500).send("Error del servidor, llovera todo el fin de semana"); 
    }
})

router.post("/", async (req, res) => {
    const nuevoProducto = req.body; 

    try {
        await manager.addProduct(nuevoProducto); 
        res.  status(201).send("Producto agregado exitosamente");
    } catch (error) {
        res.status(500).send("Terrible error fatal, todo esta mal"); 
    }

})

router.delete("/:pid", async (req, res) => {
    let id = req.params.pid; 

    try {
        await manager.deleteProduct(parseInt(id)); 
        res.send("Producto eliminado")
    } catch (error) {
        res.status(500).send("Error al querer borrar un producto"); 
    }
})

router.put("/:pid", async (req, res) => {
    let id  = req.params.pid;
    let productId = req.params.pid; 

    const actualizarProducto = req.body
    try {
        await manager.getProducts(actualizarProducto);
        const productoActualizado = await id === (productId, body);
        res.status(201).send("Producto actualizado");
    } catch (error) {
        res.status(500).send("Error al actulizar el producto")
    }
})


export default router;