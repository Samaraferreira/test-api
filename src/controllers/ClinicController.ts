import { Request, Response } from 'express'
import Clinic, { ClinicModel } from '../models/Clinic'

export default class ClinicController {
  async index (request: Request, response: Response) {
    const clinics = await Clinic.find()

    return response.status(200).json(clinics)
  }

  async create (request: Request, response: Response) {
    const { 
      name,
      address,
      cep,
      email,
      whatsapp,
      services } = request.body
    
    try {  
      await Clinic.create({
        name,
        address,
        cep,
        email,
        whatsapp,
        services
      })

      return response.status(201).send()
    } catch {
      return response.status(401).json({
        error: 'Unexpected error'
      })
    }
  }
}