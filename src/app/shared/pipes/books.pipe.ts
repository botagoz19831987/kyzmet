import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'books'
})
export class BooksPipe implements PipeTransform {

  transform(value: string): string {
    const tempArr = value.split('/');
    let book: any = tempArr[tempArr.length - 1];
    if (tempArr[tempArr.length - 1].includes('_')) {
      book = book.split('_').splice(0, book.length - 2).join(' ');
      return book;
    } else {
      return book.replace('.pdf', '');
    }
  }
}
