import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {

  transform(users: any[], email: string): any[] {
    return users.filter(u => u.email.includes(email));
  }
}
