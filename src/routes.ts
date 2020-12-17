import express from 'express'
import ClinicController from './controllers/ClinicController';

const routes = express.Router()

const clinicController = new ClinicController()

routes.get('/clinics', clinicController.index)
routes.post('/clinics', clinicController.create)

export default routes