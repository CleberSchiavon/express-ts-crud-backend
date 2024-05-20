import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AppLogger, validateEnv } from "@/utils";
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
