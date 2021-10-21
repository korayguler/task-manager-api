import mongoose, { ConnectOptions } from 'mongoose'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const mongoConnect = async (uri: string) =>
  await mongoose.connect(uri, options as ConnectOptions)

export default mongoConnect
