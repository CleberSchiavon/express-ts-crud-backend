import mongoose from "mongoose";

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
  try {
    await mongoose.connect(connectionString);
    return callback();
  } catch (error) {
    onError(error);
  }
};
