import { ReactNode } from "react";
import { ProductCardProps } from "../../types/products/productTypes";

export interface AuthContextType {
  token: string;
  user: {
    name: string;
    email: string;
    address: string;
    phone: string;
    orders: OrderTypes[];
  } | null;
  setToken: React.Dispatch<React.SetStateAction<string>>;
  setUser: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      address: string;
      phone: string;
      orders: OrderTypes[];
    } | null>
  >;
  getEmail: () => string;
  isLogged: boolean;
}

export interface AuthProviderProps {
  children: ReactNode;
}

//cart context types
export interface CartContextType {
  cart: ProductCardProps[];
  addToCart: (product: ProductCardProps) => void;

  //total: number;
  clearCart: () => void;
  loadGlobalCart: () => void;
  checkOutOrders: () => void;
  saveCartForUser: (userEmail: string) => void;
  loadOrdersState: (token: string) => void;
  clearOrders: () => void;
  clearUserCart: () => void;
  removeItem: (id: number) => void;
  orders: OrderTypes[];
}

export interface OrderTypes {
  id: number;
  status: string;
  date: string;
  products: ProductCardProps[];
}
