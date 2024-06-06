import { Schema, model } from 'mongoose'

const postSchema = new Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
    },
    image: String,
    video: String,
    text: String,
    theme: {
      type: Schema.Types.ObjectId,
      ref: 'Themes',
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  },
  {
    collection: 'posts',
    timestamps: true
  }
)

module.exports = model('Post', postSchema, 'Posts');
