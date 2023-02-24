"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const libxmljs2_1 = require("libxmljs2");
const fs_1 = require("fs");
let AppService = class AppService {
    getHello() {
        const samlInput = (0, fs_1.readFileSync)('./mock-saml.xml', 'utf-8');
        const samlSchemaInput = (0, fs_1.readFileSync)('./schema.xsd', 'utf-8');
        const xmlDoc = (0, libxmljs2_1.parseXml)(samlInput);
        const samlSchema = (0, libxmljs2_1.parseXml)(samlSchemaInput);
        const validationResult = xmlDoc.validate(samlSchema);
        if (validationResult === true) {
            console.log('Validation successful');
        }
        else {
            console.log('Validation failed with the following errors:');
            for (const error of xmlDoc.validationErrors) {
                console.log(error);
            }
        }
        return 'Hello World!';
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map