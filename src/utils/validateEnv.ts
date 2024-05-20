import { cleanEnv, port, str } from "envalid";

const validateEnv = () => {
  cleanEnv(process.env, {
    NODE_ENV: str(),
    MONGO_DB_CONNECTION_STRING: str(),
    PORT: port(),
  });
};

export default validateEnv;
