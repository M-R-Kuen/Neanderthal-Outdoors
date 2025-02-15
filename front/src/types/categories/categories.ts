import { ProductCardProps } from "../products/productTypes";

export interface Category {
  id: number;
  name: string;
  products?: ProductCardProps[];
}
