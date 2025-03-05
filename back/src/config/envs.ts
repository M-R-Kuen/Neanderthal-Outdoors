import dotenv from "dotenv";
dotenv.config();

// export const PORT: number = Number(process.env.PORT) || 3000;
// export const DB_NAME: string = process.env.DATABASE || "proyecto_m4_front";
// export const DB_USER: string = process.env.DB_USERNAME || "rosaura";
// export const DB_PASSWORD: string = process.env.DB_PASSWORD || "admin";
// export const DB_HOST: string = process.env.DB_HOST || "localhost";
// export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
// export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
export const PORT: number = Number(process.env.PORT) || 3000;
export const DB_NAME: string =
  process.env.DB_DATABASE || "proyecto_m4_front_hynl";
export const DB_USER: string =
  process.env.DB_USERNAME || "proyecto_m4_front_hynl_user";
export const DB_PASSWORD: string =
  process.env.DB_PASSWORD || "yLoKBJ6YvQcehbiRTxKgKsnKJ8KuljWH";
export const DB_HOST: string =
  process.env.DB_HOST || "dpg-cv4b02tds78s73ds7m20-a";
export const DB_PORT: number = Number(process.env.DB_PORT) || 5432;
export const JWT_SECRET: string = process.env.JWT_SECRET || "secret";
