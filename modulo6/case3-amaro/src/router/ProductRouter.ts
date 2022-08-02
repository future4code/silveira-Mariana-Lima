import express from "express";
import { ProductController } from "../controller/ProductController";

export const ProductRouter = express.Router();

const productController = new ProductController();

ProductRouter.post("/createProduct", productController.insertProduct);
ProductRouter.get("/:search", productController.getProduct);