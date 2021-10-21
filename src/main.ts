import mongoConnect from '@services/mongo'
import express, { Application } from 'express'
import env from 'dotenv'
import notFound from '@middleware/not-found'
import errorHandler from '@middleware/error-handler'
import TaskRouter from '@routes/tasks'

//.env
env.config()

//express
const app: Application = express()

app.use(express.json() as express.RequestHandler)
app.use(express.urlencoded() as express.RequestHandler)

app.use('/api/v1/tasks', TaskRouter)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 1337
const SERVER_URL = process.env.SERVER_URL || 'http://localhost'

const runServer = async () => {
  try {
    await mongoConnect(process.env.MONGODB_URI || 'connection-string')

    app.listen(PORT, () => {
      console.info(`Service starting at ${SERVER_URL}:${PORT}`)
    })
  } catch (err) {
    console.error(err)
  }
}

runServer()
