import { EmployerModel } from '@/database/models/Employer.model'
import { Employer } from '@/types/Employer'
import { LoggerReturn, LoggerTypes } from '@/types/Logger'
import { AppLogger } from '@/utils'

import { v4 as uuidv4 } from 'uuid'

export const createEmployer = async (employerData: Employer) => {
  try {
    const employerId = uuidv4()
    const newEmployer = await EmployerModel.create({
      ...employerData,
      employerId: employerId,
    })
    return newEmployer
  } catch (error) {
    const errorMessage = `Failed to create employer: ${error.message}`
    AppLogger({
      logMessage: errorMessage,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    })
    throw new Error(errorMessage)
  }
}

export const getAllEmployers = async (): Promise<Employer[]> => {
  try {
    const employers = await EmployerModel.find(
      {},
      '-createdAt -updatedAt -__v -_id',
    )
      .lean()
      .exec()
    return employers
  } catch (error) {
    const errorMessage = `Failed to get employers: ${error.message}`
    AppLogger({
      logMessage: errorMessage,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    })
    throw new Error(errorMessage)
  }
}

export const getEmployerById = async (
  employerId: string,
): Promise<Employer | null> => {
  try {
    const employer = await EmployerModel.findOne(
      { employerId },
      '-createdAt -updatedAt -__v -_id',
    )
      .lean()
      .exec()
    if (!employer) {
      const errorMessage = `Employer not found with ID: ${employerId}`
      throw new Error(errorMessage)
    }
    return employer
  } catch (error) {
    AppLogger({
      logMessage: `Failed to get employer with ID: ${employerId} - ${error.message}`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    })
    throw new Error(error.message)
  }
}

export const updateEmployer = async (
  employerId: string,
  updates: Partial<Employer>,
): Promise<Employer | null> => {
  try {
    const updatedEmployer = await EmployerModel.findOneAndUpdate(
      { employerId: employerId },
      updates,
      { new: true },
    )
      .lean()
      .exec()
    if (!updatedEmployer) {
      const errorMessage = `Employer not found with ID: ${employerId}`
      throw new Error(errorMessage)
    }
    return updatedEmployer
  } catch (error) {
    AppLogger({
      logMessage: `Failed to update employer with ID: ${employerId} - ${error.message}`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    })
    throw new Error(error.message)
  }
}

export const deleteEmployer = async (employerId: string): Promise<void> => {
  try {
    const deletedEmployer = await EmployerModel.findOneAndDelete({ employerId })
      .lean()
      .exec()
    if (!deletedEmployer) {
      const errorMessage = `Employer not found with ID: ${employerId}`
      throw new Error(errorMessage)
    }
  } catch (error) {
    AppLogger({
      logMessage: `Failed to delete employer with ID: ${employerId} - ${error.message}`,
      logReturn: LoggerReturn.ERROR,
      type: LoggerTypes.DATABASE_ERROR,
    })
    throw new Error(error.message)
  }
}
