import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookModalComponent } from './book-modal.component';

describe('BookComponent', () => {
  let component: BookModalComponent;
  let fixture: ComponentFixture<BookModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
