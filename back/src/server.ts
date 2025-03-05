import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import router from "./routes";
import morgan from "morgan";

const app = express();
const corsOptions = {
  origin: "https://neanderthal-outdoors.vercel.app", // Reemplaza con la URL de tu frontend
  methods: ["GET", "POST", "PUT", "DELETE"], // Especifica los métodos permitidos si es necesario
  credentials: true, // Si necesitas enviar cookies o sesiones, habilita esto
};

app.use(cors(corsOptions));
//app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).send({
    statusCode: err.statusCode || 500,
    message: err.message || "Internal Server Error",
  });
});

export default app;
