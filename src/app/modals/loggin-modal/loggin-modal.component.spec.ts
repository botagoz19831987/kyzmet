import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginModalComponent } from './loggin-modal.component';

describe('LogginComponent', () => {
  let component: LogginModalComponent;
  let fixture: ComponentFixture<LogginModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
