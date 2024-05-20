import mongoose from "mongoose";
import { EmployerSchema } from "../schemas/Employer.schema";

export const EmployerModel = mongoose.model("Employer", EmployerSchema);
