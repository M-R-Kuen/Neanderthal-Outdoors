export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string[];
  categoryId: number;
}

export interface Props {
  products: ProductCardProps[];
}
