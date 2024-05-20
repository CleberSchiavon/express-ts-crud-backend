import { EmployerModel } from "@/database/models/Employer.model";
import { Employer } from "@/types/Employer";
import { LoggerReturn, LoggerTypes } from "@/types/Logger";
import { AppLogger } from "@/utils";

import { v4 as uuidv4 } from "uuid";

export const createEmployer = async (employerData: Employer) => {
  try {
    const employerId = uuidv4();
    const newEmployer = await EmployerModel.create({
      ...employerData,
      employerId: employerId,
    });
    return newEmployer;
  } catch (error) {
    AppLogger({
      logMessage: `Error when try to create a employers (${error.message})`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    });
    throw new Error("Failed to create employer: " + error.message);
  }
};

export const getAllEmployers = async () => {
  try {
    const employers = await EmployerModel.find()
      .select("-createdAt -updatedAt -__v -_id")
      .exec();
    return employers;
  } catch (error) {
    AppLogger({
      logMessage: `Error when try to find all employers (${error.message})`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    });
    throw new Error("Failed to get employers: " + error.message);
  }
};

export const getEmployerById = async (employerId: string) => {
  try {
    const employer = await EmployerModel.findOne({ id: employerId })
      .select("-createdAt -updatedAt -__v -_id")
      .exec();
    if (!employer) {
      AppLogger({
        logMessage: `Error when try to find employer by ID: ${employerId} (Employer Not Found)`,
        logReturn: LoggerReturn.ERROR,
        type: LoggerTypes.DATABASE_ERROR,
      });
      throw new Error("Employer not found");
    }
    return employer;
  } catch (error) {
    AppLogger({
      logMessage: `Error when try to find employer by ID: ${employerId} (${error.message})`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    });
    throw new Error("Failed to get employer: " + error.message);
  }
};

export const updateEmployer = async (employerId: string, updates: Employer) => {
  try {
    const updatedEmployer = await EmployerModel.findByIdAndUpdate(
      employerId,
      updates,
      { new: true }
    );
    if (!updatedEmployer) {
      AppLogger({
        logMessage: `Error when try to update employer by ID: ${employerId} (EMPLOYER NOT FOUND)`,
        logReturn: LoggerReturn.ERROR,
        type: LoggerTypes.DATABASE_ERROR,
      });

      throw new Error("Employer not found");
    }
    return updatedEmployer;
  } catch (error) {
    AppLogger({
      logMessage: `Error when try to update employer by ID: ${employerId} (${error.message})`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    });
    throw new Error("Failed to update employer: " + error.message);
  }
};

export const deleteEmployer = async (employerId: string) => {
  try {
    const deletedEmployer = await EmployerModel.findOneAndDelete({
      id: employerId,
    });
    if (!deletedEmployer) {
      throw new Error("Employer not found");
    }
  } catch (error) {
    throw new Error("Failed to delete employer: " + error.message);
  }
};
