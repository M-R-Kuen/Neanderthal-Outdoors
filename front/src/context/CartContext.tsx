"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { ProductCardProps } from "../types/products/productTypes";
import { useAuth } from "@/context/AuthContext";
import {
  AuthContextType,
  CartContextType,
  OrderTypes,
} from "../types/context/contextTypes";
import axios from "axios";
import { fetchOrders } from "@/lib/server/fetchOrders";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

const CartContext = createContext<CartContextType>({
  cart: [],
  addToCart: () => {},

  clearCart: () => {},
  loadGlobalCart: () => {},
  checkOutOrders: () => {},
  saveCartForUser: () => {},
  loadOrdersState: () => {},
  clearOrders: () => {},
  clearUserCart: () => {},
  removeItem: () => {},
  orders: [],
});

export const useCart = () => useContext(CartContext);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user, token, setUser } = useAuth();
  const [cart, setCart] = useState<ProductCardProps[]>([]);
  const [orders, setOrders] = useState<OrderTypes[]>([]);

  useEffect(() => {
    loadGlobalCart();
    loadGlobalOrders();
  }, [user]);

  useEffect(() => {
    if (token) {
      loadOrdersState(token);
    }
  }, [token]);

  useEffect(() => {
    saveOrdersToLocalStorage();
  }, [orders]);

  const loadGlobalCart = () => {
    const storedCart =
      typeof window !== "undefined" && localStorage.getItem("cart");
    setCart(storedCart ? JSON.parse(storedCart) : []);

    if (user?.email) {
      const storedUserCart =
        typeof window !== "undefined" &&
        localStorage.getItem(`cart_${user.email}`);
      setCart((prevCart) =>
        storedUserCart ? JSON.parse(storedUserCart) : prevCart
      );
    }
  };

  const loadGlobalOrders = () => {
    if (user?.email) {
      const storedOrders =
        typeof window !== "undefined" &&
        localStorage.getItem(`orders_${user.email}`);
      setOrders(storedOrders ? JSON.parse(storedOrders) : []);
    }
  };

  const saveOrdersToLocalStorage = () => {
    if (user?.email) {
      typeof window !== "undefined" &&
        localStorage.setItem(`orders_${user.email}`, JSON.stringify(orders));
    }
  };

  const saveCartForUser = (userEmail: string) => {
    typeof window !== "undefined" &&
      localStorage.setItem(`cart_${userEmail}`, JSON.stringify(cart));
  };

  const clearCart = () => {
    typeof window !== "undefined" && localStorage.removeItem("cart");
    setCart([]);
  };

  const clearUserCart = () => {
    typeof window !== "undefined" &&
      localStorage.removeItem(`cart_${user?.email}`);
    setCart([]);
  };

  const addToCart = (product: ProductCardProps) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      if (user?.email) {
        typeof window !== "undefined" &&
          localStorage.setItem(
            `cart_${user.email}`,
            JSON.stringify(updatedCart)
          );
      }
      return updatedCart;
    });
  };

  const checkOutOrders = async () => {
    if (!cart.length) {
      console.error("No se encontraron productos en el carrito");
      return;
    }
    const products = cart.map((item) => item.id);
    try {
      const response = await axios.post(
        `${API_PUBLIC}/orders`,
        { products },
        {
          headers: {
            Authorization: `${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data) {
        const newOrder = response.data;

        setUser({
          orders: [...orders, newOrder],
          name: user?.name || "",
          email: user?.email || "",
          address: user?.address || "",
          phone: user?.phone || "",
        });

        saveOrdersToLocalStorage();

        clearCart();
      }
      alert("Order placed successfully");
      return response.data;
    } catch (error) {
      console.error("Error placing order:", error);
    }
  };

  const loadOrdersState = async (token: string) => {
    const orders = await fetchOrders(token);
    if (orders) {
      setOrders(orders);
    } else {
      console.log("no se pudieron cargar las ordenes");
    }
  };

  const clearOrders = () => setOrders([]);

  const removeItem = (id: number) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== id);

      typeof window !== "undefined" &&
        localStorage.setItem("cart", JSON.stringify(updatedCart));

      if (user?.email) {
        typeof window !== "undefined" &&
          localStorage.setItem(
            `cart_${user.email}`,
            JSON.stringify(updatedCart)
          );
      }

      return updatedCart;
    });
  };

  const value = {
    cart,
    addToCart,

    clearCart,
    loadGlobalCart,
    checkOutOrders,
    saveCartForUser,
    loadOrdersState,
    clearOrders,
    clearUserCart,
    removeItem,
    orders,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
