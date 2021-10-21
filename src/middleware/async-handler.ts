import { Request, Response, NextFunction } from 'express'

const asyncHandler = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next)
    } catch (err) {
      next(err)
    }
  }
}

export default asyncHandler
