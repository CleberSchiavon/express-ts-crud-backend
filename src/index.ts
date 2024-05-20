import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { AppLogger, validateEnv } from "./utils";
import { connectDatabase } from "./database";
import { LoggerReturn, LoggerTypes } from "./types/Logger";
import helmet from "helmet";
import cors from "cors";
import employerRouter from "./routes/employerRouter";

dotenv.config();
validateEnv();

async function startServer() {
  const app: Express = express();
  const port = process.env.PORT || 3000;

  app.use(helmet());
  app.use(cors());
  app.use(express.json());

  app.use("/employer", employerRouter);

  const CONNECTION_STRING = process.env.MONGO_DB_CONNECTION_STRING;

  connectDatabase({
    connectionString: CONNECTION_STRING,
    callback: () =>
      AppLogger({
        logMessage: "Connected successfully to MongoDB",
        logReturn: LoggerReturn.SUCCESS,
        type: LoggerTypes.SERVER,
      }),
    onError: (error) =>
      AppLogger({
        logMessage: `Error connecting to MongoDB: ${error}`,
        logReturn: LoggerReturn.ERROR,
        type: LoggerTypes.DATABASE_ERROR,
      }),
  });

  app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript");
  });

  app.listen(port, () => {
    AppLogger({
      type: LoggerTypes.INFO,
      logReturn: LoggerReturn.SUCCESS,
      logMessage: `Server is running on port ${port}.`,
    });
  });
}

startServer().catch((error) => {
  AppLogger({
    logMessage: `Error starting server: ${error}`,
    logReturn: LoggerReturn.ERROR,
    type: LoggerTypes.INFO,
  }),
    process.exit(1);
});
