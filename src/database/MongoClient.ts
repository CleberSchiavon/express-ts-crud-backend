import { MongoClient, ServerApiVersion } from "mongodb";

export const MongoDBClient = (connectionString: string) =>
  new MongoClient(connectionString, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
