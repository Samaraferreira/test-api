import mongoose, { Schema, Document } from 'mongoose'

export interface ClinicModel extends Document {
  name: string
  address: string
  cep: string
  email: string
  whatsapp: string
  services: string
}

const ClinicSchema: Schema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  cep: { type: String, required: true },
  email: { type: String },
  whatsapp: { type: String, required: true },
  services: { type: String, required: true },
})

export default mongoose.model<ClinicModel>('Clinic', ClinicSchema)