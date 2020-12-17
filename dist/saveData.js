"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = void 0;
const csv_parser_1 = __importDefault(require("csv-parser"));
const fs_1 = __importDefault(require("fs"));
const saveData = () => {
    const filePath = `${__dirname}/data/data.csv`;
    let results = [];
    fs_1.default.createReadStream(filePath)
        .pipe(csv_parser_1.default({
        mapHeaders: ({ header }) => renameHeaders(header)
    }))
        .on('data', (data) => results.push(data));
    return results;
};
exports.saveData = saveData;
const renameHeaders = (header) => {
    switch (header) {
        case 'NOME':
            return 'name';
        case 'CEP':
            return 'cep';
        case 'ENDEREÇO':
            return 'address';
        case 'EMAIL':
            return 'email';
        case 'WHATSAPP':
            return 'whatsapp';
        case 'SERVIÇOS DISPONÍVEIS':
            return 'services';
        default:
            return header;
    }
};
