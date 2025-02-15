import { FormLoginProps, FormLoginErrors } from "../types/forms/loginTypes";

export const validate = (data: FormLoginProps): FormLoginErrors => {
  const errors: FormLoginErrors = {};
  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  }
  if (!data.password && data.password.length < 6) {
    errors.password = "Password is required and must be 6 characters or more";
  }
  return errors;
};
