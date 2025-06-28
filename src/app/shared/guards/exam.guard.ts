import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamGuard implements CanActivate {

  constructor(
      public authService: AuthService,
      public router: Router
  ){ }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (route.params.id.includes('Demo') || route.params.id.includes('demo')) {
      return true;
    }

    return this.authService.user$.pipe(
        take(1),
        map(user => {
          if (!user?.expirationDate) {
            return this.router.createUrlTree(['/home']);
          }
          return true;
        })
    );
  }
}
