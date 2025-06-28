import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private language$ = new BehaviorSubject(localStorage.language || 'ru');

  constructor() { }

  getLanguage(): Observable<'ru' | 'kz'> {
    return this.language$.asObservable();
  }

  setLanguage(lang: string): void {
    this.language$.next(lang);
    localStorage.setItem('language', lang);
  }
}
