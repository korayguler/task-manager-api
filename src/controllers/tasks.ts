import { Request, Response, NextFunction } from 'express'

import asyncHandler from '@middleware/async-handler'

import createCustomError from '@errors/custom-error'

import Task from '@models/task'

const getTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.findById(req.params.id)

    if (!task) {
      return next(createCustomError('Not Found', 404))
    }

    res.status(200).json({ status: 'Success', data: task })
  },
)

const getTasks = asyncHandler(async (req: Request, res: Response) => {
  const tasks = await Task.find()
  res.status(200).json({ status: 'Success', data: tasks })
})

const createTask = asyncHandler(async (req: Request, res: Response) => {
  const task = await Task.create(req.body)
  res.status(200).json({ status: 'Success', data: task })
})

const updateTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.findOneAndUpdate({ id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    })

    if (!task) {
      return next(createCustomError('Not Found', 404))
    }

    res.status(200).json({ status: 'Success', data: task })
  },
)

const deleteTask = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const task = await Task.findByIdAndDelete(req.params.id)

    if (!task) {
      return next(createCustomError('Not Found', 404))
    }

    res.status(200).json({ status: 'Success', data: task })
  },
)

export { createTask, getTask, getTasks, updateTask, deleteTask }
