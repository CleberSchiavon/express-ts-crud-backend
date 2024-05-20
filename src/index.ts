import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AppLogger, validateEnv } from "@/utils";
import { connectDatabase } from "@/database";
import { LoggerReturn, LoggerTypes } from "./types/Logger";
import helmet from "helmet";
import cors from "cors";

dotenv.config();
validateEnv();

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());

const CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;

connectDatabase({
  connectionString: CONNECTION_STRING,
  callback: () =>
    AppLogger({
      logMessage: "Conectado com sucesso ao MongoDB",
      logReturn: LoggerReturn.SUCCESS,
      type: LoggerTypes.SERVER,
    }),
  onError: (error) =>
    AppLogger({
      logMessage: `Erro ao Conectar no MongoDB: ${error}`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.INFO,
    }),
});

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript");
});

app.listen(port, () => {
  return AppLogger({
    type: LoggerTypes.INFO,
    logReturn: LoggerReturn.SUCCESS,
    logMessage: `Server is running on port ${port}.`,
  });
});
