import { Router } from "express";
const router = Router(); 

import ProductModel from "../models/product.model.js";

router.get("/products", async (req, res) => {
    const productos = await manager.ProductModel.find().lean(); 
    res.render("home", {productos}); 
})

router.get("/realtimeproducts", async (req, res) => {
    res.render("realtimeproducts"); 
})


export default router;  