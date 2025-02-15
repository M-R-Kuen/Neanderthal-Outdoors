export interface FormRegisterProps {
  name: string;
  email: string;
  address: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

export interface FormRegisterErrors {
  [key: string]: string;
}
