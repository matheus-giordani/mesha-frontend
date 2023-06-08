import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {
  transform(value: string): string {
    // Remova caracteres não numéricos do número de telefone
    const phoneNumber = value.replace(/\D/g, '');

    // Verifique o comprimento do número de telefone para aplicar a formatação adequada
    if (phoneNumber.length === 11) {
      const ddd = phoneNumber.slice(0, 2);
      const firstPart = phoneNumber.slice(2, 7);
      const secondPart = phoneNumber.slice(7, 11);

      return `(${ddd}) ${firstPart}-${secondPart}`;
    } else {
      // Retorne o número de telefone sem formatação se não corresponder ao comprimento esperado
      return value;
    }
  }
}
