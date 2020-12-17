"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Clinic_1 = __importDefault(require("../models/Clinic"));
class ClinicController {
    async index(request, response) {
        const clinics = await Clinic_1.default.find();
        return response.status(200).json(clinics);
    }
    async create(request, response) {
        const { name, address, cep, email, whatsapp, services } = request.body;
        try {
            await Clinic_1.default.create({
                name,
                address,
                cep,
                email,
                whatsapp,
                services
            });
            return response.status(201).send();
        }
        catch (_a) {
            return response.status(401).json({
                error: 'Unexpected error'
            });
        }
    }
}
exports.default = ClinicController;
