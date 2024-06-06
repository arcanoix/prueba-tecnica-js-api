import { Schema, model } from 'mongoose'

const categorySchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    collection: 'categories',
    timestamps: true,
  },
)

export const Category = model('Categories', categorySchema)
