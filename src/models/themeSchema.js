import { Schema, model } from 'mongoose'

const themeSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    categories: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Categories',
      },
    ],
  },
  {
    collection: 'themes',
    timestamps: true
  }
)

module.exports = model('Theme', themeSchema, 'Themes');