import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vat-added'
})
export class VatAddedPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
