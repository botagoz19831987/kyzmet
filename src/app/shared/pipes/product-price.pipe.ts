import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPrice'
})
export class ProductPricePipe implements PipeTransform {

  transform(value: number): any {
    let res: any;
    res = value.toString().split('');
    res.splice(res.length - 3, 0, ' ');
    return res.join('');
  }
}
