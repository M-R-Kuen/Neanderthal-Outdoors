import {
  FormRegisterErrors,
  FormRegisterProps,
} from "../types/forms/registerTypes";

export const validate = (data: FormRegisterProps): FormRegisterErrors => {
  const errors: FormRegisterErrors = {};
  if (!data.name) {
    errors.name = "Name is required";
  }
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  }
  if (!data.address) {
    errors.address = "Address is required";
  }
  if (!data.phone) {
    errors.phone = "Phone is required";
  }

  if (!data.password && data.password.length < 4) {
    errors.password = "Password is required and must be 4 characters or more";
  }
  return errors;
};
