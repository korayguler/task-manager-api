import { ErrorRequestHandler } from 'express'

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // Log error
  console.error(err.stack)

  // Respond with error
  res.status(500).json({
    message: 'Something went wrong',
  })
}

export default errorHandler