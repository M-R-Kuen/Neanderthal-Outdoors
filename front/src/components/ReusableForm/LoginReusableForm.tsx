"use client";

import React, { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import ReusableForm from "./ReusableForm";
import { FormLoginProps } from "@/types/forms/loginTypes";

import { validateLogin } from "./validations";
import loginUser from "@/lib/server/handleLogin";

const LoginForm: React.FC = () => {
  const { setToken, isLogged } = useAuth();
  const { loadGlobalCart } = useCart();
  const router = useRouter();
  const [backendError, setBackendError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLoginSubmit = async (loginData: FormLoginProps) => {
    try {
      const userData = await loginUser(loginData, (data) => {
        Cookies.set("cookieToken", data, {
          expires: 30,
        });
      });
      const { token, user } = userData;

      setToken(token);

      localStorage.setItem("userToken", token);
      localStorage.setItem("userData", JSON.stringify(user));

      loadGlobalCart();
      setSuccessMessage("Login successful! Redirecting to dashboard...");
      setIsModalOpen(true);
      setTimeout(() => {
        window.location.href = "/profile-dashboard";
      }, 2000);
    } catch (error: any) {
      setBackendError(error.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <ReusableForm
        title="Login"
        fields={[
          {
            name: "email",
            type: "email",
            placeholder: "name@mail.com",
            label: "Your Email",
          },
          {
            name: "password",
            type: "password",
            placeholder: "********",
            label: "Password",
          },
        ]}
        validate={validateLogin}
        onSubmit={handleLoginSubmit}
        redirectLink="login/register"
        redirectText="Don't have an account?"
        buttonText="Register"
        backendError={backendError}
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalType={backendError ? "error" : "success"}
      />
    </div>
  );
};

export default LoginForm;
