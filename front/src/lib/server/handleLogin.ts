import axios from "axios";

import { saveToken } from "@/types/middlewareType";
import { FormLoginProps } from "@/types/forms/loginTypes";

const API_PUBLIC = process.env.NEXT_PUBLIC_API_URL;

const loginUser = async (loginData: FormLoginProps, saveToken: saveToken) => {
  try {
    const response = await axios.post(`${API_PUBLIC}/users/login`, loginData, {
      headers: { "Content-Type": "application/json" },
    });
    saveToken(response.data.token);
    console.log(response.data.token);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.message || "An unknown error occurred"
      );
    } else {
      throw new Error("An unknown error occurred");
    }
  }
};

export default loginUser;
