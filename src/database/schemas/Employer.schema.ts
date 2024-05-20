import mongoose from "mongoose";
import { APIValidationMessages } from "@/utils/";

export const EmployerSchema = new mongoose.Schema(
  {
    employerId: {
      type: String,
      required: [true, APIValidationMessages("id").required],
    },
    name: {
      type: String,
      required: [true, APIValidationMessages("name").required],
    },
    position: {
      type: String,
      required: [true, APIValidationMessages("position").required],
    },
    departament: {
      type: String,
      required: [true, APIValidationMessages("departament").required],
    },
    admissionDate: {
      type: String,
      required: [true, APIValidationMessages("admissionDate").required],
    },
  },
  {
    timestamps: true,
  }
);
