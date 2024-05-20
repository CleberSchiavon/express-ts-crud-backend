import { MongoDBClient } from "./MongoClient";

interface IInitDatabase {
  connectionString: string;
  callback: () => void;
  onError: (error: string) => void;
}

export const connectDatabase = async ({
  connectionString,
  callback,
  onError,
}: IInitDatabase) => {
  const client = MongoDBClient(connectionString);
  try {
    await client.connect();
    return callback();
  } catch (error) {
    onError(error);
  } finally {
    await client.close();
  }
};
