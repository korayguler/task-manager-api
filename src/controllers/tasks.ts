import { Request, Response } from 'express'

const getTask = (req: Request, res: Response) => {
  res.send('getTask')
}

const getTasks = (req: Request, res: Response) => {
  res.send('getTasks')
}

const createTask = (req: Request, res: Response) => {
  res.send('createTask')
}

const updateTask = (req: Request, res: Response) => {
  res.send('updateTask')
}

const deleteTask = (req: Request, res: Response) => {
  res.send('deleteTask')
}

export { createTask, getTask, getTasks, updateTask, deleteTask }
