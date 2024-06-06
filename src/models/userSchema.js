import { Schema, model } from 'mongoose'

const userSchema = new Schema(
  {
    rol: {
      type: String,
      required: true,
      ref: 'Roles',
    },
    credits: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    collection: 'users',
    timestamps: true
  }
)


module.exports = model('Users', userSchema, 'users');
