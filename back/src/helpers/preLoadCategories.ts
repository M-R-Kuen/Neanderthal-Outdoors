import { AppDataSource } from "../config/dataSource";
import { Category } from "../entities/Category";
import { CategoryRepository } from "../repositories/category.repository";

interface ICategory {
  name: string;
}

const categoriesToPreLoad: ICategory[] = [
  { name: "Backpacks" },
  { name: "Shoes" },
  { name: "Equipment" },
  { name: "Tents" },
  { name: "Kits" },
  { name: "Electronics" },
  { name: "Fishing" },
  { name: "Accessories" },
];

export const preLoadCategories = async () => {
  const categories = await CategoryRepository.find();
  if (!categories.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Category)
      .values(categoriesToPreLoad)
      .execute();
  console.log("Categories preloaded");
};
