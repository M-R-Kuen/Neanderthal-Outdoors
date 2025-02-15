"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import ReusableForm from "./ReusableForm";
import { validateRegister } from "./validations";
import { FormRegisterProps } from "@/types/forms/registerTypes";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { registerUser } from "@/lib/server/registerUser";

export const RegisterForm: React.FC = () => {
  const router = useRouter();
  const { isLogged } = useAuth();
  const [backendError, setBackendError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRegisterSubmit = async (data: FormRegisterProps) => {
    try {
      await registerUser(data);
      setSuccessMessage("Registration successful! Redirecting to login...");
      setIsModalOpen(true);
      setTimeout(() => router.push("/login"), 3000);
    } catch (error: any) {
      setBackendError(error.message);
      setIsModalOpen(true);
    }
  };

  return (
    <div className="w-full">
      <ReusableForm
        title="Sign Up"
        fields={[
          {
            name: "name",
            type: "text",
            placeholder: "John Doe",
            label: "Your Name",
          },
          {
            name: "email",
            type: "email",
            placeholder: "name@mail.com",
            label: "Your Email",
          },
          {
            name: "address",
            type: "text",
            placeholder: "123 Main St",
            label: "Your Address",
          },
          {
            name: "phone",
            type: "text",
            placeholder: "123-456-7890",
            label: "Your Phone",
          },
          {
            name: "password",
            type: "password",
            placeholder: "********",
            label: "Password",
          },
          {
            name: "confirmPassword",
            type: "password",
            placeholder: "********",
            label: "Confirm Password",
          },
        ]}
        validate={validateRegister}
        onSubmit={handleRegisterSubmit}
        redirectLink="/login"
        redirectText="Already have an account?"
        buttonText="Login"
        backendError={backendError}
        successMessage={successMessage}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        modalType={backendError ? "error" : "success"}
      />
    </div>
  );
};

export default RegisterForm;
