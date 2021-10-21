import { request, Response, RequestHandler } from 'express'

const notFound: RequestHandler = (req, res, next) => {
  res.status(404).json({ message: 'Route does not exist' })
}

export default notFound
