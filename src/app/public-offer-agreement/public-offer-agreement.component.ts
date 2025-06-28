import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-public-offer-agreement',
  templateUrl: './public-offer-agreement.component.html',
  styleUrls: ['./public-offer-agreement.component.scss']
})
export class PublicOfferAgreementComponent implements OnInit {
  isLoading = true;
  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

}
