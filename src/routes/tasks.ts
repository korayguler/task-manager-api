import { Router } from 'express'

import {
  getTask,
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from '@/controllers/tasks'

const router = Router()

router.get('/', getTasks)

router.get('/:id', getTask)

router.post('/', createTask)

router.patch('/:id', updateTask)

router.delete('/:id', deleteTask)

export default router
