import { Injectable } from '@nestjs/common';
import { parseXml } from 'libxmljs2';
import { readFileSync } from 'fs';

@Injectable()
export class AppService {
  getHello(): string {
    // parse incoming XML data
    const samlInput = readFileSync('./mock-saml.xml', 'utf-8');
    const samlSchemaInput = readFileSync('./schema.xsd', 'utf-8');

    // parse incoming XML data
    const xmlDoc = parseXml(samlInput);

    const samlSchema = parseXml(samlSchemaInput);

    // validate XML data against schema
    const validationResult = xmlDoc.validate(samlSchema);

    //console.log(validationResult);

    if (validationResult === true) {
      console.log('Validation successful');
    } else {
      console.log('Validation failed with the following errors:');
      for (const error of xmlDoc.validationErrors) {
        console.log(error);
      }
    }

    return 'Hello World!';
  }
}
