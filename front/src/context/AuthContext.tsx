"use client";

import {
  AuthContextType,
  AuthProviderProps,
  OrderTypes,
} from "../types/context/contextTypes";
import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext<AuthContextType>({
  token: "",
  user: {
    name: "",
    email: "",
    address: "",
    phone: "",
    orders: [],
  },
  setToken: () => {},
  setUser: () => {},
  getEmail: () => "",
  isLogged: false,
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [token, setToken] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("userToken") || "";
    }
    return "";
  });

  const [user, setUser] = useState<{
    name: string;
    email: string;
    address: string;
    phone: string;
    orders: OrderTypes[];
  } | null>(() => {
    if (typeof window !== "undefined") {
      const userData = localStorage.getItem("userData");
      return userData ? JSON.parse(userData) : null;
    }
    return null;
  });

  useEffect(() => {
    if (token && typeof window !== "undefined") {
      localStorage.setItem("userToken", token);
      setIsLogged(true);
    } else {
      localStorage.removeItem("userToken");
      setIsLogged(false);
    }
  }, [token]);

  useEffect(() => {
    if (user && typeof window !== "undefined") {
      localStorage.setItem("userData", JSON.stringify(user));
    } else {
      localStorage.removeItem("userData");
    }
  }, [user]);

  const getEmail = () => {
    return user?.email || "";
  };

  return (
    <AuthContext.Provider
      value={{ token, user, setToken, setUser, getEmail, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
};
