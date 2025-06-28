import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../shared/services/auth.service';
import {TelegramApiService} from '../../shared/services/telegram-api.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-modal',
  templateUrl: './book-modal.component.html',
  styleUrls: ['./book-modal.component.scss']
})
export class BookModalComponent implements OnInit {
  constructor(
    public telegram: TelegramApiService,
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSend(name, phone, email): void {
    const order = { name, phone, email };
    this.telegram.book(order).subscribe(() => {
      alert('Спасибо, Ваша заявка принята!');
      this.router.navigate(['home']).then();
    });
  }

}
