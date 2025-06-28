import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicOfferAgreementComponent } from './public-offer-agreement.component';

describe('PublicOfferAgreementComponent', () => {
  let component: PublicOfferAgreementComponent;
  let fixture: ComponentFixture<PublicOfferAgreementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicOfferAgreementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicOfferAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
