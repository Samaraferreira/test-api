import csv from 'csv-parser'
import fs from 'fs'
import { ClinicModel } from './models/Clinic';

export const saveData = () => {
  const filePath = `${__dirname}/data/data.csv` 

  let results: ClinicModel[] = [];

  fs.createReadStream(filePath)
    .pipe(csv({
      mapHeaders: ({ header }) => renameHeaders(header)
    }))
    .on('data', (data) => results.push(data))
  
  return results
}

const renameHeaders = (header: string) => {
  switch (header) {
    case 'NOME':
      return 'name'
    case 'CEP':
      return 'cep'
    case 'ENDEREÇO':
      return 'address'
    case 'EMAIL':
      return 'email'
    case 'WHATSAPP':
      return 'whatsapp'
    case 'SERVIÇOS DISPONÍVEIS':
      return 'services'
    default:
      return header
  }
}