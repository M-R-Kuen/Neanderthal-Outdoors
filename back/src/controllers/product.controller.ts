import { Request, Response } from "express";
import { catchedController } from "../utils/catchedController";
import {
  getProductsService,
  getProductId,
  getCategoryProductsService,
} from "../services/products.service";

export const getProducts = catchedController(
  async (req: Request, res: Response) => {
    const products = await getProductsService();
    res.json(products);
  }
);

export const checkProduct = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const product = await getProductId(Number(id));
    res.json(product);
  }
);

export const getProductsByCategory = catchedController(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const categoryId = Number(id);

    try {
      const categoryProducts = await getCategoryProductsService(categoryId);
      res.json(categoryProducts);
    } catch (error) {
      res.status(500).json({ message: "Error fetching products by category" });
    }
  }
);
