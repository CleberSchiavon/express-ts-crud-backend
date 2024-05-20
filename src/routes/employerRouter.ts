import express from 'express'
import {
  createEmployer,
  getAllEmployers,
  getEmployerById,
  updateEmployer,
  deleteEmployer,
} from '@/database/controllers/employer.controller'
import { APIMessages } from '@/utils/APIMessages'
import {
  EmployerDatabase,
  removeDatabaseEmployerFields,
} from '@/utils/handlers/EmployerHandler'

const employerRouter = express.Router()

// GET all employers
employerRouter.get('/', async (req, res) => {
  try {
    const employers = await getAllEmployers()
    res.json(employers)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// GET employer by ID
employerRouter.get('/:id', async (req, res) => {
  const { id } = req.params
  try {
    const employer = await getEmployerById(id)
    res.json(employer)
  } catch (error) {
    res.status(404).json({ error: error.message })
  }
})

// Create a new employer
employerRouter.post('/', async (req, res) => {
  const employerData = req.body
  try {
    const newEmployer = await createEmployer(employerData)
    const cleanedEmployer = removeDatabaseEmployerFields(newEmployer.toJSON())
    res.status(201).json(cleanedEmployer)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Update an employer
employerRouter.put('/:id', async (req, res) => {
  const { id } = req.params
  const updates = req.body
  try {
    const updatedEmployer = await updateEmployer(id, updates)
    const cleanedEmployer = removeDatabaseEmployerFields(
      updatedEmployer as EmployerDatabase,
    )
    res.status(200).json(cleanedEmployer)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

// Delete an employer
employerRouter.delete('/:id', async (req, res) => {
  const { id } = req.params
  try {
    await deleteEmployer(id)
    res.status(204).send(APIMessages.SUCCESSFULLY_EMPLOYER_DELETE)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
})

export default employerRouter
