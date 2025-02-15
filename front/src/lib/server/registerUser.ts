import axios from "axios";
import { FormRegisterProps } from "@/types/forms/registerTypes";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

export const registerUser = async (data: FormRegisterProps) => {
  try {
    const response = await axios.post(`${API_PUBLIC}/users/register`, data);
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(
        error.response.data.message || "An error occurred during registration"
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};
