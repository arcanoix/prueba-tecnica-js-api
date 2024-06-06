import { Schema, model } from 'mongoose'


const roleSchema = new Schema(
  {
    role: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      unique: true,
      required: true,
    },
  },
  {
    collection: 'roles',
    timestamps: true
  }
)

module.exports = model('Rol', roleSchema, 'Roles');
