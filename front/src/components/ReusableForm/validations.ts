import { FormLoginErrors, FormLoginProps } from "../../types/forms/loginTypes";
import {
  FormRegisterErrors,
  FormRegisterProps,
} from "../../types/forms/registerTypes";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\+54(?:\d{10}|\d{11})$/;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/;
export const validateLogin = (data: FormLoginProps): FormLoginErrors => {
  const errors: FormLoginErrors = {};
  if (!data.email) {
    errors.email = "Email is required.";
  }
  if (!data.password) {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password must be 4-10 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  return errors;
};

export const validateRegister = (
  data: FormRegisterProps
): FormRegisterErrors => {
  const errors: FormRegisterErrors = {};
  if (!data.name) {
    errors.name = "Name is required.";
  }
  if (!data.email) {
    errors.email = "Email is required.";
  } else if (!emailRegex.test(data.email)) {
    errors.email = "Invalid email address.";
  }
  if (!data.address) {
    errors.address = "Address is required.";
  }
  if (!data.phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(data.phone)) {
    errors.phone =
      "Invalid phone number format. Use +54 followed by 10 or 11 digits.";
  }
  if (!data.password) {
    errors.password = "Password is required.";
  } else if (!passwordRegex.test(data.password)) {
    errors.password =
      "Password must be 4-10 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.";
  }
  if (data.password !== data.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }
  return errors;
};
