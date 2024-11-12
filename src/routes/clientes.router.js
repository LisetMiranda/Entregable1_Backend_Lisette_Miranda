import { Router } from "express";
const router = Router(); 

router.get("/", async (req, res) => {
    try {
        const clientes = await ClienteModel.find();
        res.send(clientes);
    } catch (error) {
        res.status(500).send("Error al obtener todos los clientes"); 
    }
})

router.put("/:id", async (req, res) => {
    try {
        const cliente = await ClienteModel.findByIdAndUpdate(req.params.id, req.body); 
        if(!cliente) {
            return res.status(404).send("Recurso no encontrado"); 
        }
        res.send("Cliente actualizado");
    } catch (error) {
        res.status(500).send("Error al actualizar el cliente");
    }
})

router.delete("/:id", async (req, res) => {
    try {
        const cliente = await ClienteModel.findByIdAndDelete(req.params.id); 
        if(!cliente) {
            return res.status(404).send("Cliente no encontrado"); 
        }

        res.send("Cliente eliminado"); 
    } catch (error) {
        res.status(500).send("Error al eliminar");
    }
})

export default router; 