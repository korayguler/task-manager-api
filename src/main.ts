import express, { Application } from 'express'
import env from 'dotenv'
import { HomeRouter } from './routes'

//.env
env.config()

//express
const app: Application = express()

const PORT = process.env.PORT || 1337
const SERVER_URL = process.env.SERVER_URL || 'http://localhost'

app.use('/api/v1/tasks', HomeRouter)

app.listen(PORT, () => {
  console.info(`Service starting at ${SERVER_URL}:${PORT}`)
})
