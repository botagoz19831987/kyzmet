import {Component, OnInit} from '@angular/core';
import { AuthService } from '../shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})

export class RegistrationComponent {
  constructor(
    public authService: AuthService,
    private router: Router,
  ) {}

  public registration(email: string, pass: string, name: string, phone: string): void {
    const selectedExam = localStorage.getItem('selectedExam');
    const selectedProduct = localStorage.getItem('productID');
    this.authService.signUp(email, pass, name, phone).then(r => {
      if (r !== undefined) {
        selectedProduct === 'product46'
            ? this.router.navigate([`/book`]).then()
            : this.router.navigate([`/checkout/${selectedExam}`]).then();
      }
    });
  }
}
