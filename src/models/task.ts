import { model, Schema, Document } from 'mongoose'

interface ITask extends Document {
  name: string
  completed: boolean
  priority: number
  createdAt: Date | number
}

const TaskSchema = new Schema<ITask>(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 5,
      maxLength: 255,
    },
    completed: { Boolean, default: false },
    priority: {
      type: Number,
      min: 1,
      max: 5,
      default: 3,
      trim: true,
    },
    createdAt: { type: Date, default: Date.now },
  },
  {
    versionKey: false,
  },
)

export default model<ITask>('Task', TaskSchema)
