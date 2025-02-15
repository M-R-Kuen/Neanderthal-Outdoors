import { AppDataSource } from "../config/dataSource";
import { CategoryDTO } from "../dtos/categoryDto";
import { Category } from "../entities/Category";
import { Product } from "../entities/Product";
import { CategoryRepository } from "../repositories/category.repository";
import { ProductRepository } from "../repositories/product.repository";

export const checkProductExists = async (itemId: number): Promise<boolean> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return !!item;
};

export const getProductsService = async (): Promise<Product[]> => {
  return await ProductRepository.find({
    relations: {
      category: true,
    },
  });
};

export const getProductId = async (itemId: number): Promise<Product | null> => {
  const item: Product | null = await ProductRepository.findOneBy({
    id: itemId,
  });
  return item;
};

export const getCategoryProductsService = async (
  categoryId: number
): Promise<Product[]> => {
  try {
    const products = await ProductRepository.find({
      where: { category: { id: categoryId } },
      relations: ["category"],
    });
    return products;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    throw new Error("Unable to fetch products. Please try again later.");
  }
};
